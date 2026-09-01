// script.js
// Interactions: smooth scrolling, print buttons, reveal on scroll

document.addEventListener('DOMContentLoaded', function(){
  // Smooth scrolling for in-page links (if added later)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Print / PDF buttons
  const printBtn = document.getElementById('printBtn');
  const pdfBtn = document.getElementById('pdfBtn');

  if(printBtn) printBtn.addEventListener('click', ()=> window.print());
  if(pdfBtn) pdfBtn.addEventListener('click', ()=> window.print());

  // IntersectionObserver to reveal sections with subtle animation
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.card').forEach(el=>observer.observe(el));

  // Accessibility: ensure images without sources fallback handled by onerror in HTML
});
