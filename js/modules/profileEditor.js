// Store original values
let originalName = "";
let originalTitle = "";

// Function to open the modal
function openEditModal() {
  // Populate modal inputs with original values
  document.getElementById("editName").value = originalName;
  document.getElementById("editTitle").value = originalTitle;

  document.getElementById("editModal").style.display = "block";
}

// Function to hide the modal
function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

// Function to save changes to profile
function saveProfile() {
  const newName = document.getElementById("editName").value.trim();
  const newTitle = document.getElementById("editTitle").value.trim();

  if (!newName || !newTitle) {
    document.getElementById("profileName").textContent = originalName;
    document.getElementById("profileTitle").textContent = originalTitle;
    closeEditModal();

    return;
  }

  document.getElementById("profileName").textContent = newName;
  document.getElementById("profileTitle").textContent = newTitle;

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
