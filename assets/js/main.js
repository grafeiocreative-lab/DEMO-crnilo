const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('[data-page-link]');
const navLinks = document.getElementById('navLinks');
const menuButton = document.getElementById('menuButton');

function showPage(pageId) {
  const fallback = document.getElementById('domov');
  pages.forEach(page => page.classList.remove('active'));
  const target = document.getElementById(pageId) || fallback;
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navLinks.classList.remove('open');
  document.title = target.id === 'domov'
    ? 'Črnilo Sever | Tattoo studio'
    : `Črnilo Sever | ${target.id.charAt(0).toUpperCase() + target.id.slice(1)}`;
}

links.forEach(link => {
  link.addEventListener('click', event => {
    const pageId = link.getAttribute('data-page-link');
    if (!pageId) return;
    event.preventDefault();
    history.pushState(null, '', `#${pageId}`);
    showPage(pageId);
  });
});

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

window.addEventListener('popstate', () => {
  const pageId = location.hash.replace('#', '') || 'domov';
  showPage(pageId);
});

window.addEventListener('DOMContentLoaded', () => {
  const pageId = location.hash.replace('#', '') || 'domov';
  showPage(pageId);
});

const bookingForm = document.getElementById('bookingForm');
const formNotice = document.getElementById('formNotice');

bookingForm.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const data = Object.fromEntries(formData.entries());
  console.log('Demo povpraševanje:', data);

  formNotice.style.display = 'block';
  bookingForm.reset();

  /*
    Za pravo pošiljanje odkomentirajte spodnji blok in vpišite svoj endpoint.
    Primeri: Google Apps Script, Formspree, Netlify Forms, Make webhook.

    await fetch('VPIŠI_SVOJ_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  */
});
