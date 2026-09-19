const legalStatus = document.querySelector('[data-office-status]');
if (legalStatus) {
  const now = new Date();
  const open = now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 8 && now.getHours() < 18;
  legalStatus.textContent = open ? 'Office open today' : 'Office reopens next business day';
  legalStatus.classList.toggle('is-open', open);
}
