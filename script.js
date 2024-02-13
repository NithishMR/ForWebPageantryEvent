function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  drawer.style.width = drawer.style.width === "250px" ? "0" : "250px";
}

function toggleBlockSection() {
  var blockSection = document.querySelector(".block-section");
  blockSection.classList.toggle("show");
}

function toggleAccordion(accordionHeader) {
  var accordionItem = accordionHeader.parentNode;
  accordionItem.classList.toggle("open");
}

function selectRadio(radioValue) {
  const radio = document.getElementById(`radio${radioValue.charAt(radioValue.length - 1)}`);
  const radioAnimation = radio.parentElement.querySelector('.radio-animation');

  radio.checked = true;
  radioAnimation.style.opacity = 1;

  setTimeout(() => {
    radioAnimation.style.opacity = 0;
  }, 500);
}

function playSelectedSong() {
  const songList = document.getElementById('songList');
  const musicPlayer = document.getElementById('musicPlayer');
  const selectedSong = songList.value;

  switch (selectedSong) {
    case 'song1':
      musicPlayer.src = 'path_to_song1.mp3';
      break;
    case 'song2':
      musicPlayer.src = 'path_to_song2.mp3';
      break;
    case 'song3':
      musicPlayer.src = 'path_to_song3.mp3';
      break;
    // Add more cases for additional songs
  }
}
function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  drawer.style.width = drawer.style.width === "250px" ? "0" : "250px";
}

function toggleBlockSection() {
  var blockSection = document.querySelector(".block-section");
  blockSection.classList.toggle("show");
}

function toggleAccordion(accordionHeader) {
  var accordionItem = accordionHeader.parentNode;
  accordionItem.classList.toggle("open");
}

function selectRadio(radioValue) {
  const radio = document.getElementById(`radio${radioValue.charAt(radioValue.length - 1)}`);
  const radioAnimation = radio.parentElement.querySelector('.radio-animation');

  radio.checked = true;
  radioAnimation.style.opacity = 1;

  setTimeout(() => {
    radioAnimation.style.opacity = 0;
  }, 500);
}

function playSelectedSong() {
  const songList = document.getElementById('songList');
  const musicPlayer = document.getElementById('musicPlayer');
  const selectedSong = songList.value;

  switch (selectedSong) {
    case 'song1':
      musicPlayer.src = '';
      break;
    case 'song2':
      musicPlayer.src = 'jump-scare_1-66858.mp3';
      break;
    case 'song3':
      musicPlayer.src = 'path_to_song3.mp3';
      break;
    // Add more cases for additional songs
  }
}

// Alert box for exits
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
  alert("Are you sure you want to leave?");
});
  // Add this function to your existing JavaScript

// Add this function to your existing JavaScript
function acceptCookies() {
  document.getElementById('cookiesPopup').style.display = 'none';
  // You can set a cookie here to remember user preference
}

// Add this event listener at the end of your existing JavaScript
window.addEventListener('load', function () {
  // Check if the user has previously accepted cookies (you can use cookies or local storage)
  const cookiesAccepted = true; // Replace with your actual check
  if (!cookiesAccepted) {
    document.getElementById('cookiesPopup').style.display = 'block';
  }
});

// Add this function to your existing JavaScript
function downloadCSV() {
  // Replace this data with your actual CSV data
  const csvData = 'Name, Age\nJohn Doe, 25\nJane Smith, 30';

  const blob = new Blob([csvData], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'example.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Alert box for exits
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
  alert("Are you sure you want to leave?");
});
