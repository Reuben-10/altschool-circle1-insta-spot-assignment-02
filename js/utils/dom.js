// utils/dom.js
export function getEl(selector) {
  return document.querySelector(selector);
}

export function showError(el, message) {
  el.classList.remove("hidden");
  el.textContent = message;
}

export function hideError(el) {
  el.classList.add("hidden");
  el.textContent = "";
}

export function readImageFile(input, callback) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => callback(e.target.result);
    reader.readAsDataURL(input.files[0]);
  }
}

export function validateInput(input, errorEl, minLength = 2) {
  const value = input.value.trim();
  if (value.length < minLength) {
    showError(errorEl, `Minimum of ${minLength} characters`);
    return false;
  } else {
    hideError(errorEl);
    return true;
  }
}

export function previewImage(input, imgEl, textEl) {
  readImageFile(input, (src) => {
    imgEl.src = src;
    imgEl.classList.remove("hidden");
    if (textEl) textEl.classList.add("hidden");
  });
}
