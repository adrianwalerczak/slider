const images = [
    'https://www.bestgun.pl/images/pistolety/p10c/cz-p10-c-1.jpg',
    'https://proceipestki.pl/wp-content/uploads/2022/11/CZ-p-10-C-FDE-1.jpg',
    'https://prodejna.czub.cz/fotky5534/fotos/_vyr_985_CZ_P10_C_UG_trit_spoust.png',
    'https://www.puchacz.net/images/P10%20FFFFFFF.png'
  ];
  
  let currentSlide = 0;
  const slideImg = document.querySelector('.slider img');
  const prevBtn = document.querySelector('.controls button:first-child');
  const nextBtn = document.querySelector('.controls button:last-child');
  
  function showSlide(index) {
    slideImg.src = images[index];
  }
  
  prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
    showSlide(currentSlide);
  });
  
  nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide === images.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  });
  
  // Wyświetlenie pierwszego slajdu po załadowaniu strony
  showSlide(currentSlide);
  