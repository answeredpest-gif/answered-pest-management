const refCss=document.createElement('link');refCss.rel='stylesheet';refCss.href='/reference.css?v=9';document.head.appendChild(refCss);
const pagesCss=document.createElement('link');pagesCss.rel='stylesheet';pagesCss.href='/pages.css?v=9';document.head.appendChild(pagesCss);

const menuBtn=document.querySelector('.hamburger');
const nav=document.querySelector('.desktop-nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}

const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){quoteForm.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(quoteForm);const body=`Hi Answered Pest Management, I'd like a quote.%0A%0AName: ${encodeURIComponent(d.get('name')||'')}%0AEmail: ${encodeURIComponent(d.get('email')||'')}%0APhone: ${encodeURIComponent(d.get('phone')||'')}%0AService: ${encodeURIComponent(d.get('service')||'General Pest Control')}%0ADetails: ${encodeURIComponent(d.get('message')||'')}`;const status=document.querySelector('#formStatus');if(status)status.textContent='Opening a pre-filled text message to APM…';window.location.href=`sms:+14798410763?&body=${body}`;});}
