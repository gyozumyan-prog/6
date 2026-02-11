// Bloom Beauty — Shared JavaScript
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
}
function handleFormSubmit(e, form) {
  e.preventDefault();
  showToast('Booking confirmed! We look forward to seeing you.');
  form.reset();
}
function showToast(msg) {
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { t.remove(); }, 3000);
}