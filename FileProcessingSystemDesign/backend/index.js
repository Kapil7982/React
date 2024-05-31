const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'port',
    database: 'file_processing'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Folder paths
const folders = {
    processing: path.join(__dirname, 'folders/Processing'),
    inProgress: path.join(__dirname, 'folders/In-progress'),
    completed: path.join(__dirname, 'folders/Completed'),
    crashed: path.join(__dirname, 'folders/Crashed')
};

// Ensure folders exist
Object.values(folders).forEach(folder => {
    fs.ensureDirSync(folder);
});

// Generate files in the Processing folder every 3 seconds
setInterval(() => {
    const fileName = `file_${Date.now()}.txt`;
    const filePath = path.join(folders.processing, fileName);
    fs.writeFileSync(filePath, 'File content');
    console.log(`File created: ${fileName}`);
    io.emit('file_created', { fileName, status: 'Processing' });
}, 3000);

// Process files
const processFiles = () => {
    fs.readdir(folders.processing, (err, files) => {
        if (err) return console.error('Error reading processing folder:', err);

        files.forEach(file => {
            const srcPath = path.join(folders.processing, file);
            const destPath = path.join(folders.inProgress, file);

            fs.move(srcPath, destPath, err => {
                if (err) return console.error('Error moving file to in-progress:', err);

                const processingTime = Math.floor(Math.random() * 6) + 1;
                const startTime = Date.now();

                setTimeout(() => {
                    const endTime = Date.now();
                    const elapsedTime = (endTime - startTime) / 1000;

                    if (elapsedTime > 5) {
                        const crashedPath = path.join(folders.crashed, file);
                        fs.move(destPath, crashedPath, err => {
                            if (err) return console.error('Error moving file to crashed:', err);

                            console.log(`File crashed: ${file}`);
                            io.emit('file_crashed', { fileName: file, elapsedTime });
                            logEvent('error', `File ${file} crashed after ${elapsedTime} seconds.`);
                        });
                    } else {
                        const completedPath = path.join(folders.completed, file);
                        fs.move(destPath, completedPath, err => {
                            if (err) return console.error('Error moving file to completed:', err);

                            console.log(`File completed: ${file}`);
                            io.emit('file_completed', { fileName: file, elapsedTime });
                            logEvent('info', `File ${file} completed in ${elapsedTime} seconds.`);
                        });
                    }
                }, processingTime * 1000);
            });
        });
    });
};

setInterval(processFiles, 3000);

// Log events to database
const logEvent = (type, message) => {
    db.query('INSERT INTO logs (type, message, timestamp) VALUES (?, ?, ?)', [type, message, new Date()], (err, results) => {
        if (err) return console.error('Error logging event:', err);
    });
};

// Real-time logging
io.on('connection', socket => {
    console.log('Client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
