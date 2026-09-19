const reviews = [...document.querySelectorAll('.review')];
let reviewIndex = 0;
function showReview(index) { if (!reviews.length) return; reviews.forEach(item => item.classList.remove('active')); reviewIndex = (index + reviews.length) % reviews.length; reviews[reviewIndex].classList.add('active'); }
document.querySelector('[data-review-prev]')?.addEventListener('click', () => showReview(reviewIndex - 1));
document.querySelector('[data-review-next]')?.addEventListener('click', () => showReview(reviewIndex + 1));
const matcher = document.querySelector('[data-stylist-match]');
if (matcher) matcher.addEventListener('click', () => {
  const goal = document.querySelector('#hair-goal').value;
  const vibe = document.querySelector('#appointment-vibe').value;
  const names = { cut: 'Mara', colour: 'Nina', texture: 'Owen', event: 'Nina' };
  document.querySelector('.match-result').textContent = `${names[goal]} looks like your best match for ${vibe.toLowerCase()} appointments. You can choose them in the booking request.`;
});
