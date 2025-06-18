function applyInitialDarkModePreference() {
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');
  if (darkModeEnabled === 'true') {
    document.body.classList.add('dark-mode');
  } else if (darkModeEnabled === 'false') { // Explicitly check for 'false'
    document.body.classList.remove('dark-mode');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkMode);
}

// Setup for index.html
const toggleButton = document.getElementById('darkModeToggle');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleDarkMode);
}

// Setup for un_dado.html
const toggleButtonUnDado = document.getElementById('darkModeToggleUnDado');
if (toggleButtonUnDado) {
  toggleButtonUnDado.addEventListener('click', toggleDarkMode);
}

// Setup for dos_dados.html
const toggleButtonDosDados = document.getElementById('darkModeToggleDosDados');
if (toggleButtonDosDados) {
  toggleButtonDosDados.addEventListener('click', toggleDarkMode);
}

// Apply preference on load
applyInitialDarkModePreference();
