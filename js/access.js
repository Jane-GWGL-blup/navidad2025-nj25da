export function showAccess() {

const accessScreen = document.getElementById("access-screen");
const accessBtn = document.getElementById("access-btn");
const accessInput = document.getElementById("access-input");
const accessError = document.getElementById("access-error");

accessBtn.addEventListener("click", async () => {
  const value = accessInput.value.trim();
  accessError.textContent = "";

  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: value })
  });

  if (res.ok) {
    accessScreen.style.opacity = "0";
    accessScreen.style.pointerEvents = "none";
    setTimeout(() => accessScreen.style.display = "none", 600);
  } else {
    accessError.textContent = "Clave incorrecta ❌";
  }
});
}
