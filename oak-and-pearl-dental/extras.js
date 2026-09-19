const clinicStatus = document.querySelector('[data-clinic-status]');
if (clinicStatus) {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const open = day >= 1 && day <= 4 && hour >= 8 && hour < 18 || day === 5 && hour >= 8 && hour < 15;
  clinicStatus.textContent = open ? 'Clinic open now' : 'Clinic currently closed';
  clinicStatus.classList.toggle('is-open', open);
}
