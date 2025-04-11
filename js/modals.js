function toggleRegister() {
  const modal = document.getElementById('registerModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function toggleProfile() {
  document.getElementById('profilePanel').classList.toggle('open');
}

window.addEventListener('click', function(event) {
  const register = document.getElementById('registerModal');
  const login = document.getElementById('loginModal');
  const profile = document.getElementById('profilePanel');

  if (event.target === register) register.style.display = "none";
  if (event.target === login) login.style.display = "none";

  if (profile.classList.contains('open') && !profile.contains(event.target) && !event.target.closest('button[onclick="toggleProfile()"]')) {
    profile.classList.remove('open');
  }
});
