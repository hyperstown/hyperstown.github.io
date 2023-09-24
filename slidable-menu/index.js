const flkty = new Flickity('.side-menu', {
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'left',
  setGallerySize: false,
  initialIndex: 1
});

const overlay = document.querySelector(".side-menu-overlay");
const sideMenuBtn = document.querySelector("#side-menu-toggle-button");

flkty.on('scroll', (progress) => {
  if (progress.toFixed(4) < 0) {
    flkty.select(0, false, true);
  }
  if (progress < 0.9) {
    overlay.style.display = 'block';
    overlay.style.opacity = (1 - progress ) / 2;
  }
  else {
    overlay.style.display = 'none';
  }
});

overlay.addEventListener('click', (e) => {
  flkty.select(1, false, false);
});

sideMenuBtn.addEventListener('click', (e) => {
  const newIndex = (flkty.selectedIndex + 1) % 2;
  flkty.select(newIndex, false, false);
});
