// Read URL parameter
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function reveal(token) {
  const box = document.getElementById("tokenValue");
  const card = document.getElementById("special");

  if (!token) return;

  box.textContent = token;
  card.classList.remove("hidden");
}

// On Page Load
document.addEventListener("DOMContentLoaded", () => {
  const token =
    getParam("mcp_token") ||
    getParam("token") ||
    getParam("t");

  reveal(token);

  // Buttons
  document.getElementById("openDemo").onclick = () => {
    window.location.search = "?mcp_token=HELLO🌸";
  };

  document.getElementById("howWorks").onclick = () => {
    alert("This page reveals special content only when a token is present in the URL.");
  };
});
