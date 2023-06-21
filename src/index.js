import logo from './logo.png';

// Add event listener to the Add Note button
document.getElementById('add-note-btn').addEventListener('click', addNote);

function addNote() {
  const noteInput = document.getElementById('note-input');
  const noteText = noteInput.value.trim();

  if (noteText !== '') {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = noteText;

    document.getElementById('notes-container').appendChild(noteElement);

    noteInput.value = '';
  }
}

// Load the logo image
const logoImg = new Image();
logoImg.src = logo;

// Append the logo to the header
const header = document.querySelector('header');
header.insertBefore(logoImg, header.firstChild);
