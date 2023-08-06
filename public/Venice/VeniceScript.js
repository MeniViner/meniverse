const images = [
    { src: 'venice pics/Venice1.jpg', caption: 'A sunset over the Grand Canal.' },
    { src: 'venice pics/Venice2.jpg', caption: 'a beautiful sunset over a canal' },
    { src: 'venice pics/Venice3.jpg', caption: 'a gondola on the Grand Canal. with the Rialto Bridge visible in the background.' },
    { src: 'venice pics/Venice4.jpg', caption: 'night-time photo of a canal.' },
    { src: 'venice pics/Venice5.jpg', caption: 'a beautiful sunset over a harbor' },
    { src: 'venice pics/Venice6.jpg', caption: 'This is an aerial view, showing the city’s canals and buildings, including St. Mark’s Basilica and the Campanile di San Marco.' },
    { src: 'venice pics/Venice7.jpg', caption: 'Here is the dome of the Basilica di Santa Maria della Salute visible in the background.' },
    { src: 'venice pics/Venice8.jpg', caption: 'The Venetian lagoon from a pier, with the island of San Giorgio Maggiore' },
    { src: 'venice pics/Venice9.jpg', caption: 'This is a photo of a Venetian style canal with gondolas in a shopping mall.' },
    { src: 'venice pics/Venice10.jpg', caption: 'The Rialto Bridge, spanning the Grand Canal and lined with shops and restaurants.' }
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
  