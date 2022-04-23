const options = {
  // Список обций для IntersectionObserver.
  root: null,
  rootMargin: '300px',
  threshold: 1,
};

const observer = new IntersectionObserver(updateList, options);

let page = 1;

const searchForm = document.querySelector('form');
const galleryRef = document.querySelector('.gallery');
const sentinel = document.querySelector('.sentenil');

let input;

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  input = e.currentTarget.searchQuery.value.trim();
  galleryRef.innerHTML = '';
  page = 1;
  observer.unobserve(sentinel);

  if (input) {
    fetchImage(input, page);
  }
});

const key = '25741965-3317c7c17dbaed9fd9692b5d9';

function fetchImage(name, page) {
  fetch(
    `https://pixabay.com/api/?key=${key}&q=${name}&page=${page}&per_page=40&image_type=photo`,
  )
    .then(response => response.json())
    .then(data => {
      renderGallery(data.hits);
      observer.observe(sentinel);
    });
}

function renderGallery(images) {
  const markupGallery = images
    .map(image => {
      const markup = `
        <a class="gallery-link" href="${image.largeImageURL}">
          <div class="photo-card">
            <img class="photo-card-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" width="350" height="300"/>
            <div class="info">
              <p class="info-item"><b>Likes</b>${image.likes}</p>
              <p class="info-item"><b>Views</b>${image.views}</p>
              <p class="info-item"><b>Comments</b>${image.comments}</p>
              <p class="info-item"><b>Downloads</b>${image.downloads}</p>
            </div>
          </div>
        </a>
      `;
      return markup;
    })
    .join('');

  galleryRef.insertAdjacentHTML('beforeend', markupGallery);
}

function updateList(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      fetchImage(input, page);
    }
  });
  console.log(entries);
}
