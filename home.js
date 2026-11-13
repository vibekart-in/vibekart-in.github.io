(() => {
  const header = document.querySelector('.vk-header');
  const menuButton = document.querySelector('.vk-menu-toggle');
  const navigation = document.querySelector('.vk-navigation');
  const searchInput = document.querySelector('#vk-search-input');
  const productCards = Array.from(document.querySelectorAll('.vk-product-card'));
  const noResults = document.querySelector('#vk-no-results');
  const resultCount = document.querySelector('#vk-result-count');
  const year = document.querySelector('#vk-year');

  if (year) year.textContent = String(new Date().getFullYear());

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      }
    });
  }

  if (searchInput && productCards.length) {
    const filterCards = () => {
      const query = searchInput.value.trim().toLocaleLowerCase();
      let visibleCount = 0;

      productCards.forEach(card => {
        const searchableText = `${card.dataset.search || ''} ${card.textContent || ''}`.toLocaleLowerCase();
        const matches = !query || searchableText.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (noResults) noResults.hidden = visibleCount !== 0;
      if (resultCount) resultCount.textContent = String(visibleCount);
    };

    searchInput.addEventListener('input', filterCards);
    document.addEventListener('keydown', event => {
      const target = event.target;
      const isTyping = target instanceof HTMLElement && (
        target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
      );
      if (event.key === '/' && !isTyping) {
        event.preventDefault();
        searchInput.focus();
      }
    });
  }
})();
