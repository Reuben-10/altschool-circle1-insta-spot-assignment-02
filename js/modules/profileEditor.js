const modalEl = document.querySelector(".modal");
const editForm = document.querySelector("#editForm");
const originalName = document.querySelector("#profileName");
const originalDescription = document.querySelector("#profileTitle");
const profileImage = document.getElementById("profileImage");
const newName = document.getElementById("editName");
const newDescription = document.getElementById("editDesc");
const fileInput = document.getElementById("editImage");
const nameError = document.querySelector("#name-error");
const descriptionError = document.querySelector("#description-error");

export function updateEditForm() {
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    // validate name
    if (newName.value.trim().length < 2) {
      nameError.classList.remove("hidden");
      nameError.textContent = "Minimum of 2 characters";
      hasError = true;
    } else {
      nameError.classList.add("hidden");
    }

    // validate description
    if (newDescription.value.trim().length < 2) {
      descriptionError.classList.remove("hidden");
      descriptionError.textContent = "Minimum of 2 characters";
      hasError = true;
    } else {
      descriptionError.classList.add("hidden");
    }

    if (hasError) return;

    // Populate modal inputs with original values
    originalName.textContent = newName.value.trim();
    originalDescription.textContent = newDescription.value.trim();

    // update image only if a file is selected
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }

    modalEl.close();
    editForm.reset();
  });
}
