(() => {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const languageToggle = document.getElementById('languageToggle');
  const year = document.getElementById('year');
  let language = 'en';

  year.textContent = new Date().getFullYear();

  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });

  languageToggle.addEventListener('click', () => {
    language = language === 'en' ? 'id' : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-id]').forEach(element => {
      element.textContent = element.dataset[language];
    });
    languageToggle.textContent = language === 'en' ? 'ID' : 'EN';
    languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch website to Indonesian' : 'Switch website to English');
  });
})();