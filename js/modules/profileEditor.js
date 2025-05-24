import { validateInputField } from "../utils/modalHelpers.js";
import { getEl } from "../utils/dom.js";
import { readFileAsDataURL } from "../utils/file.js";

export function updateEditForm() {
  const modalEl = getEl("#editModal");
  const editForm = getEl("#editForm");
  const originalName = getEl("#profileName");
  const originalDescription = getEl("#profileTitle");
  const profileImage = getEl("#profileImage");
  const newName = getEl("#editName");
  const nameError = getEl("#name-error");
  const newDescription = getEl("#editDesc");
  const descriptionError = getEl("#description-error");
  const fileInput = getEl("#editImage");

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateInputField(newName, nameError, 2);
    const isDescValid = validateInputField(newDescription, descriptionError, 2);

    if (!isNameValid || !isDescValid) return;

    // Populate modal inputs with original values
    originalName.textContent = newName.value.trim();
    originalDescription.textContent = newDescription.value.trim();

    // update image only if a file is selected
    if (fileInput.files?.[0]) {
      readFileAsDataURL(fileInput.files[0], (dataURL) => {
        profileImage.src = dataURL;
      });
    }

    modalEl.close();
    // editForm.reset();
  });
}
