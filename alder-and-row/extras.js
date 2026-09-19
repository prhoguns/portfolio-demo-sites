const savedKey = 'alder-row-saved-homes';
let savedHomes = JSON.parse(localStorage.getItem(savedKey) || '[]');
document.querySelectorAll('.property, .listing-grid article').forEach((card, index) => {
  const title = card.querySelector('h2, h3')?.textContent.trim();
  const photo = card.querySelector('.property-photo, .listing-photo');
  if (!title || !photo) return;
  const button = document.createElement('button');
  button.className = `save-home${savedHomes.includes(title) ? ' saved' : ''}`;
  button.type = 'button'; button.textContent = savedHomes.includes(title) ? '♥' : '♡'; button.setAttribute('aria-label', `Save ${title}`);
  button.addEventListener('click', () => { savedHomes = savedHomes.includes(title) ? savedHomes.filter(item => item !== title) : [...savedHomes, title]; localStorage.setItem(savedKey, JSON.stringify(savedHomes)); button.classList.toggle('saved'); button.textContent = savedHomes.includes(title) ? '♥' : '♡'; showSaved(`${title} ${savedHomes.includes(title) ? 'saved' : 'removed'}`); });
  photo.appendChild(button);
});
function showSaved(message) { let panel = document.querySelector('.saved-panel'); if (!panel) { panel = document.createElement('div'); panel.className = 'saved-panel'; document.body.appendChild(panel); } panel.textContent = `${message}. ${savedHomes.length} saved home${savedHomes.length === 1 ? '' : 's'}.`; panel.classList.add('show'); setTimeout(() => panel.classList.remove('show'), 2200); }
