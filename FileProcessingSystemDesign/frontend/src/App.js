import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:4000');

function App() {
    const [files, setFiles] = useState([]);
    const [logs, setLogs] = useState([]);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        socket.on('file_created', (data) => {
            setFiles((prevFiles) => [...prevFiles, { ...data, timestamp: new Date() }]);
        });

        socket.on('file_completed', (data) => {
            setFiles((prevFiles) =>
                prevFiles.map((file) =>
                    file.fileName === data.fileName ? { ...file, status: 'Completed', elapsedTime: data.elapsedTime } : file
                )
            );
        });

        socket.on('file_crashed', (data) => {
            setFiles((prevFiles) => 
                prevFiles.map((file) =>
                    file.fileName === data.fileName ? { ...file, status: 'Crashed', elapsedTime: data.elapsedTime } : file
                )
            );
            setNotification(`File ${data.fileName} crashed!`);
        });
    }, []);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <div className="App">
            <h1>Real-Time File Processing System</h1>
            {notification && <div className="notification">{notification}</div>}
            <div className="file-list">
                <h2>Files</h2>
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            {file.fileName} - {file.status} {file.elapsedTime ? `(${file.elapsedTime}s)` : ''}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="log-list">
                <h2>Logs</h2>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>
                            {log.timestamp}: {log.type} - {log.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
