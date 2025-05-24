export function setupModalTrigger(triggerEl, modalEl) {
  if (!triggerEl || !modalEl) return;
  triggerEl.addEventListener("click", () => modalEl.showModal());
}

// export function setupModalClose(buttonEl, modalEl) {
//   if (!buttonEl || !modalEl) return;
//   buttonEl.addEventListener("click", () => modalEl.close());
// }
// export function setupModalClose(buttonEl, modalEl, resetFn) {
//   if (!buttonEl || !modalEl) return;
//   buttonEl.addEventListener("click", () => {
//     modalEl.close();
//     if (resetFn) resetFn(); // clear form + hide errors
//   });
// }

// Close modal when clicking outside content
// export function setupOutsideClickClose(modalEls) {
//   window.addEventListener("click", (e) => {
//     modalEls.forEach((modal) => {
//       if (e.target === modal) {
//         modal.close();
//       }
//     });
//   });
// }

export function setupModalClose(buttonEl, modalEl, resetFn) {
  if (!buttonEl || !modalEl) return;
  buttonEl.addEventListener("click", () => {
    modalEl.close();
    if (resetFn) resetFn(); // clear form + hide errors
  });
}

export function setupOutsideClickClose(modalEls, resetFn) {
  window.addEventListener("click", (e) => {
    modalEls.forEach((modal) => {
      if (e.target === modal) {
        modal.close();
        if (resetFn) resetFn();
      }
    });
  });
}

// validation
export function validateInputField(inputEl, errorEl, minLength = 2) {
  const value = inputEl.value.trim();
  if (value.length < minLength) {
    showError(errorEl, `Minimum of ${minLength} characters`);
    return false;
  }

  hideError(errorEl);
  return true;
}

function showError(el, message) {
  el.textContent = message;
  el.classList.remove("hidden");
}

function hideError(el) {
  el.textContent = "";
  el.classList.add("hidden");
}

function resetEditForm(editForm, nameError, descriptionError, fileInput) {
  editForm.reset();
  hideError(nameError);
  hideError(descriptionError);
  fileInput.value = "";
}
