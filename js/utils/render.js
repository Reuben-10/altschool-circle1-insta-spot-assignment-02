// utils/render.js
export function renderCard({ imgSrc, imgAlt, title }) {
  return `
      <article class="card">
        <div class="card-img-container">
          <img src="${imgSrc}" alt="${imgAlt}" class="card-img" loading="lazy" />
        </div>
        <div class="card-description">
          <p class="card-title">${title}</p>
          <div class="like">
            <svg class="like-icon" ...>...</svg>
          </div>
        </div>
      </article>
    `;
}

export function renderPreviewCard({ imgSrc, imgAlt, title }) {
  return `
      <div class="previewable-images">
        <div class="card-img-container">
          <img src="${imgSrc}" alt="${imgAlt}" class="card-img preview-img" />
        </div>
        <p class="previewable-title">${title}</p>
      </div>
    `;
}
