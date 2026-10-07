(function () {
  // ページトップボタン：800px以上スクロールで表示
  var btn = document.querySelector('.pagetop');
  function onScroll() {
    btn.classList.toggle('is-show', window.scrollY > 800);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ナビゲーション：表示中のセクションをハイライト
  var links = document.querySelectorAll('.gnav a');
  if (!('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('is-current'); });
      var a = map[entry.target.id];
      if (a) a.classList.add('is-current');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
