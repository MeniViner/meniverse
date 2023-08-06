const images = [
  { src: 'dubai pics/dubai1.jpeg', caption: 'Dubai’s stunning skyline at sunset, with a beautiful marina and towering skyscrapers.' },
  { src: 'dubai pics/dubai2.jpg', caption: 'City skyline with modern glass buildings, reflected in bright blue water.' },
  { src: 'dubai pics/dubai3.jpg', caption: 'Dubai’s Burj Al Arab hotel, sail-shaped' },
  { src: 'dubai pics/dubai4.jpg', caption: 'A modern shopping mall in Dubai' },
  { src: 'dubai pics/dubai5.jpeg', caption: 'This is an aerial view of Dubai, showing the city’s tall buildings and coastline' },
  { src: 'dubai pics/dubai6.jpeg', caption: 'Dubai’s skyline at dusk, with a marina and colorful lights.' },
  { src: 'dubai pics/dubai7.jpg', caption: 'A heart-shaped flower arch in a park in Dubai.' },
  { src: 'dubai pics/dubai8.jpg', caption: 'Dubai’s skyline at night, with a lit-up fountain in the foreground.' },
  { src: 'dubai pics/dubai9.jpg', caption: 'A large Ferris wheel on a waterfront in Dubai.' },
  { src: 'dubai pics/dubai10.jpeg', caption: 'Dubai’s skyline, featuring the Burj Khalifa, the tallest building in the world.' }
];

let currentSlideIndex = 0;

const container = document.querySelector('.container');

for (let i = 0; i < images.length; i++) {
  const slide = document.createElement('div');
  slide.classList.add('mySlides');
  container.appendChild(slide);

  const numberText = document.createElement('div');
  numberText.classList.add('numbertext');
  numberText.textContent = `${i + 1} / ${images.length}`;
  slide.appendChild(numberText);

  const img = document.createElement('img');
  img.src = images[i].src;
  img.style.width = '100%';
  slide.appendChild(img);

  const captionContainer = document.createElement('div');
  captionContainer.classList.add('caption-container');
  slide.appendChild(captionContainer);

  const caption = document.createElement('p');
  caption.textContent = images[i].caption;
  captionContainer.appendChild(caption);
}

const prevButton = document.createElement('a');
prevButton.classList.add('prev');
prevButton.innerHTML = '&#10094;';
prevButton.addEventListener('click', () => {
  showSlide(currentSlideIndex - 1);
});
container.appendChild(prevButton);

const nextButton = document.createElement('a');
nextButton.classList.add('next');
nextButton.innerHTML = '&#10095;';
nextButton.addEventListener('click', () => {
  showSlide(currentSlideIndex + 1);
});
container.appendChild(nextButton);

showSlide(currentSlideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll('.mySlides');
  const captions = document.querySelectorAll('.numbertext');

  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    captions[i].textContent = `${i + 1} / ${slides.length}`;
  }

  slides[index].style.display = 'block';
  currentSlideIndex = index;
}
