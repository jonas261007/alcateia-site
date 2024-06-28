// Verifique se a URL atual é a página inicial ou a página sobre
const currentPath = window.location.pathname;
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
console.log("====================================");
console.log(currentPath);
console.log("====================================");

if (currentPath === "/src/index.html") {
  homeLink.classList.remove("text-white");
  homeLink.classList.add("text-red-500");
} else if (currentPath === "/src/pages/about.html") {
  aboutLink.classList.remove("text-white");
  aboutLink.classList.add("text-red-500");
} else if (currentPath === "/src/pages/contact.html") {
  contactLink.classList.remove("text-white");
  contactLink.classList.add("text-red-500");
}
function submitForm(event) {
  // Exibir mensagem de sucesso
  const alertElement = document.querySelector(".alert-container");
  alertElement.classList.remove("hidden"); // Tornar o alerta visível

  // Opcionalmente, remover o alerta após um intervalo de tempo
  setTimeout(() => {
    alertElement.classList.add("hidden"); // Ocultar o alerta novamente
  }, 3000); // Remover o alerta após 3 segundos (ajuste conforme necessário)

  // Resetar o formulário após  segundos
  setTimeout(() => {
    document.getElementById("contactForm").reset(); // Resetar o formulário
  }, 500);
}
