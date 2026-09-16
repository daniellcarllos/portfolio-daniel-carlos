// Indicate HTML parsing without hiding the article or waiting for fonts/images.
(() => {
  const root = document.documentElement;
  const finishLoading = () => root.classList.remove('article-is-loading');
  if (document.readyState === 'loading') {
    root.classList.add('article-is-loading');
    document.addEventListener('DOMContentLoaded', finishLoading, { once: true });
    // A failed resource must not leave a permanent loading indicator.
    window.setTimeout(finishLoading, 8000);
  }
})();
