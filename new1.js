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
  
  // Alert box for exits
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    alert("Are you sure you want to leave?");
  });
    