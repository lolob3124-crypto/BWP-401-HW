// events data
const EVENTS = [
  {
    "id": "bootstrap-workshop",
    "cat": "workshops",
    "title": "ورشة عمل بوتستراب",
    "start": "2026-11-14",
    "end": "2026-11-14",
    "dtxt": "14 تشرين الثاني 2026",
    "time": "5:00 م – 8:00 م",
    "place": "online",
    "venue": "عبر الإنترنت (Zoom)",
    "desc": [
      "ورشة تطبيقية تعرّف المشاركين بنظام الشبكة والمكوّنات الجاهزة في Bootstrap، وتنتهي ببناء صفحة متجاوبة كاملة.",
      "يُفضّل أن تكون لدى المشارك معرفة أساسية بـ HTML وCSS، وتُرسل ملفات العمل قبل الورشة بيوم."
    ],
    "org": "نادي البرمجة"
  },
  {
    "id": "digital-literature",
    "cat": "culture",
    "title": "ندوة الأدب الرقمي",
    "start": "2026-11-18",
    "end": "2026-11-18",
    "dtxt": "18 تشرين الثاني 2026",
    "time": "6:00 م – 8:00 م",
    "place": "online",
    "venue": "عبر الإنترنت (Zoom)",
    "desc": [
      "ندوة حوارية حول تحوّل الأدب في العصر الرقمي: الرواية التفاعلية، والنشر الإلكتروني، ومنصات القراءة.",
      "يشارك فيها كتّاب وباحثون، وتُفتح بعدها مداخلات الحضور."
    ],
    "org": "لجنة الفعاليات الثقافية"
  },
  {
    "id": "python-workshop",
    "cat": "workshops",
    "title": "ورشة عمل بايثون",
    "start": "2026-11-21",
    "end": "2026-11-21",
    "dtxt": "21 تشرين الثاني 2026",
    "time": "5:00 م – 8:00 م",
    "place": "online",
    "venue": "عبر الإنترنت (Zoom)",
    "desc": [
      "ورشة تمهيدية للغة بايثون تغطي المتغيرات والشروط والحلقات والدوال مع تمارين مباشرة.",
      "لا تتطلب الورشة خبرة سابقة في البرمجة، ويكفي تثبيت بايثون على جهازك."
    ],
    "org": "نادي البرمجة"
  },
  {
    "id": "youth-marathon",
    "cat": "sports",
    "title": "ماراثون الشباب",
    "start": "2026-11-27",
    "end": "2026-11-27",
    "dtxt": "27 تشرين الثاني 2026",
    "time": "8:00 ص",
    "place": "damascus",
    "venue": "حديقة تشرين، دمشق",
    "desc": [
      "سباق جري مفتوح لطلاب الجامعة على مسافتين: 5 كم للمبتدئين و10 كم للمحترفين.",
      "تُوزَّع قمصان المشاركة وميداليات الإنجاز عند خط النهاية."
    ],
    "org": "النادي الرياضي"
  },
  {
    "id": "book-fair",
    "cat": "culture",
    "title": "معرض الكتاب السنوي",
    "start": "2026-12-03",
    "end": "2026-12-06",
    "dtxt": "3 – 6 كانون الأول 2026",
    "time": "10:00 ص – 6:00 م",
    "place": "damascus",
    "venue": "مكتبة الجامعة، دمشق",
    "desc": [
      "معرض سنوي يضم دور نشر وإصدارات جديدة، مع خصومات خاصة على الكتب الجامعية والأدبية.",
      "يتخلله برنامج لتوقيع الكتب وجلسات قراءة مفتوحة للجميع."
    ],
    "org": "لجنة الفعاليات الثقافية"
  },
  {
    "id": "chess-championship",
    "cat": "sports",
    "title": "بطولة الشطرنج السنوية",
    "start": "2026-12-11",
    "end": "2026-12-12",
    "dtxt": "11 – 12 كانون الأول 2026",
    "time": "10:00 ص – 4:00 م",
    "place": "damascus",
    "venue": "دمشق، كفرسوسة، مقر الجامعة الافتراضية السورية",
    "desc": [
      "تُقام البطولة السنوية للشطرنج على مدى يومين بنظام سويسري من سبع جولات، بمشاركة طلاب الجامعة وكوادرها.",
      "زمن اللعب 15 دقيقة لكل لاعب مع إضافة 10 ثوانٍ لكل نقلة، وتُمنح الكؤوس والشهادات للمراكز الثلاثة الأولى. التسجيل مفتوح حتى اكتمال 64 لاعباً."
    ],
    "org": "النادي الرياضي"
  },
  {
    "id": "digital-arts",
    "cat": "arts",
    "title": "معرض الفنون الرقمية",
    "start": "2026-12-20",
    "end": "2026-12-23",
    "dtxt": "20 – 23 كانون الأول 2026",
    "time": "11:00 ص – 7:00 م",
    "place": "aleppo",
    "venue": "صالة الفنون، حلب",
    "desc": [
      "معرض يضم أعمالاً فنية رقمية للطلاب والفنانين: رسوماً وتصاميم وصوراً معالجة، مع جولة افتراضية للأعمال.",
      "يتيح المعرض للزوار التصويت لأفضل عمل في نهاية الأسبوع."
    ],
    "org": "نادي الفنون"
  }
], CATS = { "culture": "ثقافة", "sports": "رياضة", "workshops": "ورش عمل", "arts": "فنون" }, PLACES = { "damascus": "دمشق", "aleppo": "حلب", "online": "عبر الإنترنت" };
const $ = (s, r = document) => r.querySelector(s);
const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } } };
const check = rules => { let ok = true; rules.forEach(([s, test]) => { const el = $(s), good = test(el.value); el.classList.toggle('is-invalid', !good); el.classList.toggle('is-valid', good); ok = ok && good; }); return ok; };
const nameOk = v => v.trim().length >= 3, emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const alertHTML = (type, msg) => `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="إغلاق"></button></div>`;

// images background
document.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.style.display = 'none'; }, true);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(i => { if (i.complete && !i.naturalWidth) i.style.display = 'none'; });
  initTheme(); initTop(); initSlider(); initFilter(); initContact(); initDetails(); markToday();
});

// slider: changes every 5 minutes , pause on mouse hover
function initSlider() {
  const box = $('[data-slider]'); if (!box) return;
  const slides = [...box.querySelectorAll('.slide')], dotsBox = $('.slider-dots', box);
  let cur = 0, timer;
  const dots = slides.map((_, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'الشريحة ' + (i + 1));
    b.onclick = () => { show(i); play(); }; dotsBox.append(b); return b;
  });
  function show(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('active', n === cur));
    dots.forEach((d, n) => d.classList.toggle('active', n === cur));
  }
  const play = () => { clearInterval(timer); timer = setInterval(() => show(cur + 1), 5000); };
  $('.prev', box).onclick = () => { show(cur - 1); play(); };
  $('.next', box).onclick = () => { show(cur + 1); play(); };
  box.onmouseenter = () => clearInterval(timer); box.onmouseleave = play;
  show(0); play();
}

// Events filter bar
function initFilter() {
  const form = $('#filters'); if (!form) return;
  const cols = [...document.querySelectorAll('#eventsList > div')];
  const v = n => form.elements[n].value;
  const pref = new URLSearchParams(location.search).get('cat') || store.get('cat');
  if (pref && CATS[pref]) form.elements.cat.value = pref;
  const apply = () => {
    let n = 0; store.set('cat', v('cat'));
    cols.forEach(c => {
      const d = c.firstElementChild.dataset;
      const ok = d.search.includes(v('q').trim().toLowerCase()) && (!v('cat') || d.cat === v('cat')) &&
        (!v('place') || d.place === v('place')) && (!v('from') || d.end >= v('from')) && (!v('to') || d.start <= v('to'));
      c.hidden = !ok; if (ok) n++;
    });
    $('#count').textContent = n; $('#empty').hidden = n > 0;
  };
  form.addEventListener('input', apply);
  form.addEventListener('reset', () => setTimeout(apply));
  form.addEventListener('submit', e => e.preventDefault());
  apply();
}

// contact us form validation
function initContact() {
  const f = $('#contactForm'); if (!f) return;
  const rules = [['#cName', nameOk], ['#cEmail', emailOk], ['#cMsg', v => v.trim().length >= 10]];
  f.addEventListener('submit', e => {
    e.preventDefault(); const ok = check(rules);
    $('#formAlert').innerHTML = ok ? alertHTML('success', 'تم إرسال رسالتك بنجاح، وسنرد عليك قريباً.') : alertHTML('danger', 'تعذّر الإرسال، يرجى تصحيح الحقول المحدّدة.');
    if (ok) { f.reset(); f.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid')); }
  });
}

// event's data page
function initDetails() {
  const title = $('#evTitle'); if (!title) return;
  const id = new URLSearchParams(location.search).get('id');
  const e = EVENTS.find(x => x.id === id) || EVENTS.find(x => x.id === 'chess-championship');
  document.title = e.title + ' | دليل فعاليات الجامعة الافتراضية';
  title.textContent = e.title; $('#bc').textContent = e.title;
  $('#evBadge').textContent = CATS[e.cat]; $('#evBadge').className = 'badge cat-badge cat-' + e.cat;
  if (e.id !== 'chess-championship') {
    const swap = (el, src, alt) => {
      el.className = el.className.replace(/cat-\w+/, 'cat-' + e.cat);
      const i = $('img', el); i.style.display = ''; i.src = 'assets/img/' + src; i.alt = alt;
    };
    swap($('#evImg'), `events/${e.id}.jpg`, e.title);
    document.querySelectorAll('#evGallery .thumb').forEach((el, n) => swap(el, `events/${e.id}-${n + 1}.jpg`, `${e.title} ${n + 1}`));
    if (e.place === 'online') $('#evMap').innerHTML = '<p class="mb-0 text-muted">تُقام هذه الفعالية عبر الإنترنت، ويصل رابط الحضور بعد التسجيل.</p>';
    else swap($('#evMap .thumb'), `maps/${e.id}.jpg`, 'خريطة ' + e.venue);
  }
  $('#evDesc').innerHTML = e.desc.map(p => `<p>${p}</p>`).join('');
  $('#evInfo').innerHTML = [['calendar-event', 'التاريخ', e.dtxt], ['clock', 'الوقت', e.time], ['geo-alt', 'المكان', e.venue], ['tag', 'التصنيف', CATS[e.cat]], ['person-badge', 'الجهة المنظمة', e.org]]
    .map(([i, l, t]) => `<li><i class="bi bi-${i}"></i><span><small>${l}</small>${t}</span></li>`).join('');
  const note = (t, m) => $('#evAlert').innerHTML = alertHTML(t, m);
  $('#btnShare').onclick = async () => {
    try {
      if (navigator.share) await navigator.share({ title: e.title, url: location.href });
      else { await navigator.clipboard.writeText(location.href); note('success', 'تم نسخ رابط الفعالية.'); }
    } catch (err) { if (err.name !== 'AbortError') prompt('انسخ رابط الفعالية:', location.href); }
  };
  // calendar file downloading
  $('#btnCal').onclick = () => {
    const [y, m, d] = e.end.split('-').map(Number);
    const endDay = new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10).replace(/-/g, '');
    const esc = s => s.replace(/[,;]/g, '\\$&');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SVU Events//AR', 'BEGIN:VEVENT', 'UID:' + e.id + '@svu-events',
      'DTSTAMP:' + new Date().toISOString().replace(/[-:]|\.\d+/g, ''), 'DTSTART;VALUE=DATE:' + e.start.replace(/-/g, ''), 'DTEND;VALUE=DATE:' + endDay,
      'SUMMARY:' + esc(e.title), 'LOCATION:' + esc(e.venue), 'DESCRIPTION:' + esc(e.time + ' - ' + e.desc[0]), 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' })); a.download = e.id + '.ics'; a.click();
    URL.revokeObjectURL(a.href); note('success', 'تم تنزيل ملف التقويم.');
  };
  // relative events list
  const list = $('#evRelated');
  const rest = [...list.children].filter(c => c.dataset.id !== e.id)
    .sort((a, b) => (b.firstElementChild.dataset.cat === e.cat) - (a.firstElementChild.dataset.cat === e.cat));
  list.replaceChildren(...rest.slice(0, 3));

  // delusory booking 
  $('#bookTitle').textContent = e.title;
  const bf = $('#bookForm');
  const clear = () => { bf.reset(); bf.querySelectorAll('.is-valid,.is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid')); };
  bf.addEventListener('submit', ev => {
    ev.preventDefault();
    const ok = check([['#bName', nameOk], ['#bEmail', emailOk]]);
    $('#bookAlert').innerHTML = ok ? alertHTML('success', `تم تسجيل حجز ${$('#bSeats').value} مقعد في «${e.title}»، وسيصلك التأكيد على بريدك.`) : alertHTML('danger', 'يرجى تصحيح الحقول المحدّدة.');
    if (ok) clear();
  });
  $('#bookModal').addEventListener('hidden.bs.modal', () => { clear(); $('#bookAlert').innerHTML = ''; });
}

// dark mood
function initTheme() {
  const btn = $('#themeBtn'), root = document.documentElement;
  const set = t => { root.dataset.bsTheme = t; store.set('theme', t); btn.innerHTML = `<i class="bi bi-${t === 'dark' ? 'sun' : 'moon'}"></i>`; btn.setAttribute('aria-label', t === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'); };
  set(root.dataset.bsTheme === 'dark' ? 'dark' : 'light');
  btn.onclick = () => set(root.dataset.bsTheme === 'dark' ? 'light' : 'dark');
}

// scroll to top butten
function initTop() {
  const b = $('#toTop'), toggle = () => { b.hidden = scrollY < 400; };
  addEventListener('scroll', toggle, { passive: true }); toggle();
  b.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
}

// today mark if the event date is today
function markToday() {
  const today = new Date().toLocaleDateString('en-CA');
  document.querySelectorAll('.event-card').forEach(c => {
    if (c.dataset.start <= today && today <= c.dataset.end) $('.thumb', c).insertAdjacentHTML('beforeend', '<span class="today-badge">الحدث اليوم</span>');
  });
}
