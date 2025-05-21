// Store original values
let originalName = "Bessie Coleman";
let originalTitle = "Civil Aviator";
let originalBio = "LoremipsumdolorsitametconsecteturadipisicinAsperiores itaqueimpedittemporequiporro!Lorem ipsumdolsitametconsecteturadipisicingelitQuasimolestias";

// Function to open the modal
function openEditModal() {
  // Populate modal inputs with original values
  document.getElementById("editName").value = originalName;
  document.getElementById("editTitle").value = originalTitle;
  document.getElementById("editBio").value = originalBio;

  document.getElementById("editModal").style.display = "block";
  //  document.getElementById("editModal").showModal();
}

// Function to hide the modal
function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

// Function to save changes to profile
function saveProfile() {
  const newName = document.getElementById("editName").value.trim();
  const newTitle = document.getElementById("editTitle").value.trim();
  const newBio = document.getElementById("editBio").value.trim();

  if (!newName || !newTitle || !newBio) {
    document.getElementById("profileName").textContent = originalName;
    document.getElementById("profileTitle").textContent = originalTitle;
    document.getElementById("profileBio").textContent = originalBio;

    closeEditModal();
    return;
  }

  document.getElementById("profileName").textContent = newName;
  document.getElementById("profileTitle").textContent = newTitle;
  document.getElementById("profileBio").textContent = newBio;

  const fileInput = document.getElementById("editImage");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }

  closeEditModal();
}

// Close modal with ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEditModal();
  }
});

// Export the module functions
export { openEditModal, closeEditModal, saveProfile };
