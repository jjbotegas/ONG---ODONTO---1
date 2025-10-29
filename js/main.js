// Comportamentos simples: ano no rodapé e toggle do menu
document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click',function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(nav.hasAttribute('hidden')) nav.removeAttribute('hidden'); else nav.setAttribute('hidden','');
    });
  }
});
