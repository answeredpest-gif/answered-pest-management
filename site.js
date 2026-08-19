const fixCss=document.createElement('link');fixCss.rel='stylesheet';fixCss.href='/responsive-fix.css?v=12';document.head.appendChild(fixCss);

const logoMarkup=`<span class="logo-lockup" aria-hidden="true"><span class="logo-top"><span class="logo-bug">✦</span><span class="logo-apm">APM</span><span class="logo-target"><i></i></span></span><span class="logo-answered">Answered</span><span class="logo-pest">Pest Management</span></span>`;
document.querySelectorAll('.brand,.footer-brand').forEach(el=>{if(el.querySelector('img'))el.innerHTML=logoMarkup;});

const menuBtn=document.querySelector('.hamburger');
const nav=document.querySelector('.desktop-nav');
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){
  quoteForm.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(quoteForm);
    const body=`Hi Answered Pest Management, I'd like a quote.%0A%0AName: ${encodeURIComponent(d.get('name')||'')}%0AEmail: ${encodeURIComponent(d.get('email')||'')}%0APhone: ${encodeURIComponent(d.get('phone')||'')}%0AService: ${encodeURIComponent(d.get('service')||'General Pest Control')}%0ADetails: ${encodeURIComponent(d.get('message')||'')}`;
    const status=document.querySelector('#formStatus');
    if(status)status.textContent='Opening a pre-filled text message to APM…';
    window.location.href=`sms:+14798410763?&body=${body}`;
  });
}
