import { displayCards } from "./modules/displayCards.js";
import { setAutoFocus} from "./modules/focusCard.js";
import { openEditModal, closeEditModal, saveProfile } from "./modules/profileEditor.js";

// Initialize
displayCards(".container");
setAutoFocus(".container");
// enableHoverFocus(".container");

// Attach event listeners (ensure elements exist in HTML)
document.getElementById("editBtn").addEventListener("click", openEditModal);
document.getElementById("saveBtn").addEventListener("click", saveProfile);
document.getElementById("cancelBtn").addEventListener("click", closeEditModal);
