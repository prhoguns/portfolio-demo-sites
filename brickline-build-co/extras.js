const capacity = document.querySelector('[data-capacity]');
if (capacity) {
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(Date.now() + 1000 * 60 * 60 * 24 * 75));
  capacity.textContent = `Next project start: ${month}`;
}
