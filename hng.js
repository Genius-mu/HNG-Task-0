// ⏱️ Time update
const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// 🖼️ Avatar upload
const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
const avatarInput = document.getElementById("avatarUpload");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", () => avatarInput.click());

avatarInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarImg.src = reader.result; // Preview the new image
    };
    reader.readAsDataURL(file);
  }
});
