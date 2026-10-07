// Появление блоков: без JS всё видно (класс pre ставит скрипт)
(function(){
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.fade');
  if (reduced || !('IntersectionObserver' in window) || !els.length) return;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.remove('pre'); e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold: .12});
  els.forEach(function(el){ el.classList.add('pre'); io.observe(el); });
})();

// демо-форма: никуда не отправляет
function demoSend(e){
  e.preventDefault();
  var s = document.getElementById('demoStatus');
  if (s) { s.textContent = 'Это демо-форма: в реальном проекте заявка уйдёт мастеру на телефон.'; s.style.color = '#F2761B'; }
  return false;
}