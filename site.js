const menuBtn=document.querySelector('.hamburger');
const nav=document.querySelector('.desktop-nav');
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',isOpen?'true':'false');
    menuBtn.textContent=isOpen?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.textContent='☰';
  }));
}

const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){
  quoteForm.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(quoteForm);
    const name=(d.get('name')||'').toString().trim();
    const phone=(d.get('phone')||'').toString().trim();
    const email=(d.get('email')||'').toString().trim();
    const service=(d.get('service')||'General Pest Control').toString();
    const details=(d.get('message')||'').toString().trim();
    const plain=`Hi Answered Pest Management, I'd like a free quote.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nDetails: ${details}`;
    const status=document.querySelector('#formStatus');
    const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if(isMobile){
      if(status)status.textContent='Opening a pre-filled message to APM…';
      window.location.href=`sms:+14798410763?&body=${encodeURIComponent(plain)}`;
    }else{
      if(status)status.textContent='Opening a pre-filled email to APM…';
      window.location.href=`mailto:info@answeredpest.com?subject=${encodeURIComponent('Free Pest Control Quote Request')}&body=${encodeURIComponent(plain)}`;
    }
  });
}
