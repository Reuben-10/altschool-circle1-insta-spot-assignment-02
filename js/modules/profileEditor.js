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

    const validName = validateInput(newName, nameError);
    const validDesc = validateInput(newDescription, descriptionError);
    if (!validName || !validDesc) return;

    // let hasError = false;

    // validate name
    // if (newName.value.trim().length < 2) {
    //   nameError.classList.remove("hidden");
    //   nameError.textContent = "Minimum of 2 characters";
    //   hasError = true;
    // } else {
    //   nameError.classList.add("hidden");
    // }

    // validate description
    // if (newDescription.value.trim().length < 2) {
    //   descriptionError.classList.remove("hidden");
    //   descriptionError.textContent = "Minimum of 2 characters";
    //   hasError = true;
    // } else {
    //   descriptionError.classList.add("hidden");
    // }

    // if (hasError) return;

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

// Store original values
// let originalName = "";
// let originalTitle = "";

// Function to open the modal
// function openEditModal() {
// Populate modal inputs with original values
//   document.getElementById("editName").value = originalName;
//   document.getElementById("editDesc").value = originalTitle;

//   document.getElementById("editModal").style.display = "block";
// }

// Function to hide the modal
// function closeEditModal() {
//   document.getElementById("editModal").style.display = "none";
// }

// Function to save changes to profile
// function saveProfile() {
//   const newName = document.getElementById("editName").value.trim();
//   const newTitle = document.getElementById("editDesc").value.trim();

//   if (!newName || !newTitle) {
//     document.getElementById("profileName").textContent = originalName;
//     document.getElementById("profileTitle").textContent = originalTitle;
//     closeEditModal();

//     return;
//   }

//   document.getElementById("profileName").textContent = newName;
//   document.getElementById("profileTitle").textContent = newTitle;

//   const fileInput = document.getElementById("editImage");

//   if (fileInput.files && fileInput.files[0]) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById("profileImage").src = e.target.result;
//     };
//     reader.readAsDataURL(fileInput.files[0]);
//   }

//   closeEditModal();
// }

// // Close modal with ESC key
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     closeEditModal();
//   }
// });

// // Export the module functions
// export { openEditModal, closeEditModal, saveProfile };
