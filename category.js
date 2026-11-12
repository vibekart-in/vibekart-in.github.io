(() => {
  const dialog = document.querySelector('#vk-product-dialog');
  const dialogTitle = document.querySelector('#vk-dialog-title');
  const dialogDescription = document.querySelector('#vk-dialog-description');

  document.querySelectorAll('[data-product-open]').forEach(button => {
    button.addEventListener('click', () => {
      if (!dialog || typeof dialog.showModal !== 'function') return;
      if (dialogTitle) dialogTitle.textContent = button.dataset.productName || 'Product details';
      if (dialogDescription) dialogDescription.textContent = button.dataset.productDescription || '';
      dialog.showModal();
    });
  });

  document.querySelectorAll('[data-dialog-close]').forEach(button => {
    button.addEventListener('click', () => dialog?.close());
  });

  if (dialog) {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  }

  const currentPage = document.body.dataset.category;
  document.querySelectorAll('[data-nav-page]').forEach(link => {
    if (link.dataset.navPage === currentPage) link.setAttribute('aria-current', 'page');
  });
})();
