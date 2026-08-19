    const menuBtn = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
      });

      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
      });
    }

    const quoteForm = document.querySelector('#quoteForm');

    if (quoteForm) {
      quoteForm.addEventListener('submit', e => {
        e.preventDefault();

        const d = new FormData(quoteForm);
        const body =
          `Hi Answered Pest Management, I'd like a quote.%0A%0A` +
          `Name: ${encodeURIComponent(d.get('name') || '')}%0A` +
          `Email: ${encodeURIComponent(d.get('email') || '')}%0A` +
          `Phone: ${encodeURIComponent(d.get('phone') || '')}%0A` +
          `Service: ${encodeURIComponent(d.get('service') || 'General Pest Control')}%0A` +
          `Details: ${encodeURIComponent(d.get('message') || '')}`;

        document.querySelector('#formStatus').textContent =
          'Opening a pre-filled text message to APM…';

        window.location.href = `sms:+14798410763?&body=${body}`;
      });
    }
