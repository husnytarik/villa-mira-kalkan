// Villa Mira — main.js

const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("stuck", window.scrollY > 80);
  },
  { passive: true },
);

const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const dx = document.getElementById("dx");

burger.addEventListener("click", () => drawer.classList.add("open"));
dx.addEventListener("click", () => drawer.classList.remove("open"));
drawer
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("open")),
  );

// Reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".r, .r-left, .r-right")
  .forEach((el) => io.observe(el));

// Dates
const today = new Date().toISOString().split("T")[0];
const ci = document.getElementById("ci");
const co = document.getElementById("co");
if (ci) ci.min = today;
if (co) co.min = today;
ci?.addEventListener("change", () => {
  if (co) {
    co.min = ci.value;
    if (co.value && co.value <= ci.value) co.value = "";
  }
});

document.getElementById("cf")?.addEventListener("submit", (e) => {
  if (ci?.value && co?.value && co.value <= ci.value) {
    e.preventDefault();
    alert(t("form.dateError"));
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ── i18n ──────────────────────────────────────────────────────────────────────

const translations = {
  en: {
    "nav.villa": "The Villa",
    "nav.gallery": "Gallery",
    "nav.amenities": "Amenities",
    "nav.availability": "Availability",
    "nav.book": "Book Now",

    "hero.eyebrow": "Kalkan · Turkish Riviera",
    "hero.h1": "Where Nature<br /><em>Holds its Breath</em>",
    "hero.p": "A private luxury villa wrapped in forest and sea — perched above Kalkan, open to the sky.",
    "hero.btn.availability": "Check Availability",
    "hero.btn.villa": "Discover the Villa",
    "hp.bedrooms": "Bedrooms",
    "hp.guests": "Guests",
    "hp.pool": "Private Pool",
    "hp.view": "Sea View",

    "about.lbl": "The Villa",
    "about.h2": "Rooted in Nature,<br /><em>Open to the Sea</em>",
    "about.p1": "Nestled into the green hills above Kalkan, Villa Mira was designed to disappear into its surroundings. Ancient olive trees frame a private pool that seems to pour into the Aegean below.",
    "about.p2": "Fully furnished, fully staffed. From sunrise coffee on the terrace to late-night swims under the stars — every detail is already handled.",
    "about.btn": "Explore the Spaces →",

    "gallery.lbl": "Gallery",
    "gallery.h2": "Every Corner,<br /><em>a World</em>",
    "gallery.pool": "Pool & Sea",
    "gallery.terrace": "Sea Terrace",
    "gallery.golden": "Golden Hour",
    "gallery.living": "Living Room",
    "gallery.suite": "Master Suite",
    "gallery.garden": "Garden",
    "gallery.interior": "Interior",

    "am.lbl": "Amenities",
    "am.h2": "Quietly<br /><em>Exceptional</em>",
    "am.pool.name": "Private Pool",
    "am.pool.desc": "Heated infinity-edge pool open from sunrise. Panoramic views of the bay.",
    "am.garden.name": "Garden & Olives",
    "am.garden.desc": "Ancient olive trees, jasmine, bougainvillea — a living Mediterranean landscape.",
    "am.terrace.name": "Sea-View Terraces",
    "am.terrace.desc": "Multiple shaded terraces overlook Kalkan Bay — sunset drinks, morning coffee.",
    "am.kitchen.name": "Full Kitchen",
    "am.kitchen.desc": "Professional appliances, espresso, complete cookware. Or let us arrange a private chef.",
    "am.concierge.name": "Dedicated Concierge",
    "am.concierge.desc": "Boat charters, restaurant reservations and more — handled before you ask.",
    "am.parking.name": "Secure Parking",
    "am.parking.desc": "Private gated parking for two vehicles, monitored 24/7.",
    "am.wifi.name": "High-Speed WiFi",
    "am.wifi.desc": "Fibre throughout — work from the terrace, stream on every screen.",
    "am.ac.name": "Air Conditioning",
    "am.ac.desc": "Individual climate control in every bedroom and living area.",
    "am.tv.name": "Smart TVs",
    "am.tv.desc": "Netflix, Apple TV+, satellite — in every bedroom and the main living room.",

    "cal.lbl": "Availability",
    "cal.h2": "Find Your<br /><em>Window of Time</em>",
    "cal.sub": "Live calendar synced across all platforms. Open dates are yours to claim.",
    "cal.available": "Available",
    "cal.booked": "Booked",
    "cal.checkinout": "Check-in / out",
    "cal.after": "Ready to reserve? We reply within 24 hours.",
    "cal.btn": "Request a Booking",

    "contact.lbl": "Get in Touch",
    "contact.h2": "Ready for<br /><em>Your Stay?</em>",
    "contact.p": "Tell us your dates and group size. We take care of everything — from arrival to departure, and all the moments in between.",
    "contact.location.lbl": "Location",
    "contact.location.val": "Kalkan, Kaş — Antalya, Turkey",
    "contact.email.lbl": "Email",
    "contact.phone.lbl": "Phone",
    "contact.wa.lbl": "WhatsApp",

    "form.name.lbl": "Full Name",
    "form.name.ph": "Jane Smith",
    "form.email.lbl": "Email",
    "form.email.ph": "jane@example.com",
    "form.arrival.lbl": "Arrival",
    "form.departure.lbl": "Departure",
    "form.guests.lbl": "Guests",
    "form.phone.lbl": "Phone (optional)",
    "form.phone.ph": "+90 XXX XXX XX XX",
    "form.msg.lbl": "Message",
    "form.msg.ph": "Special requests, questions…",
    "form.submit": "Send Enquiry",
    "form.dateError": "Departure must be after arrival.",

    "footer.villa": "The Villa",
    "footer.gallery": "Gallery",
    "footer.amenities": "Amenities",
    "footer.availability": "Availability",
    "footer.contact": "Contact",
  },

  tr: {
    "nav.villa": "Villa",
    "nav.gallery": "Galeri",
    "nav.amenities": "Olanaklar",
    "nav.availability": "Müsaitlik",
    "nav.book": "Rezervasyon",

    "hero.eyebrow": "Kalkan · Türk Rivierası",
    "hero.h1": "Doğanın<br /><em>Nefes Kestiği Yer</em>",
    "hero.p": "Kalkan'ın tepesinde, orman ve denizle çevrili özel bir lüks villa — gökyüzüne açık.",
    "hero.btn.availability": "Müsaitliği Kontrol Et",
    "hero.btn.villa": "Villayı Keşfet",
    "hp.bedrooms": "Yatak Odası",
    "hp.guests": "Misafir",
    "hp.pool": "Özel Havuz",
    "hp.view": "Deniz Manzarası",

    "about.lbl": "Villa",
    "about.h2": "Doğayla İç İçe,<br /><em>Denize Açık</em>",
    "about.p1": "Kalkan'ın yeşil tepelerine kurulu Villa Mira, doğasıyla bütünleşmek üzere tasarlandı. Kadim zeytin ağaçları, sanki Ege'ye dökülüyormuş gibi duran özel havuzun çevresini sarar.",
    "about.p2": "Tam tefrişatlı, tam kadrolu. Terasta gün doğumu kahvesinden yıldızlar altında geç saatlere kadar süren yüzmeye kadar — her detay önceden düşünülmüş.",
    "about.btn": "Mekanları Keşfet →",

    "gallery.lbl": "Galeri",
    "gallery.h2": "Her Köşe,<br /><em>Ayrı Bir Dünya</em>",
    "gallery.pool": "Havuz & Deniz",
    "gallery.terrace": "Deniz Terası",
    "gallery.golden": "Altın Saat",
    "gallery.living": "Salon",
    "gallery.suite": "Ana Süit",
    "gallery.garden": "Bahçe",
    "gallery.interior": "İç Mekan",

    "am.lbl": "Olanaklar",
    "am.h2": "Sessizce<br /><em>Olağanüstü</em>",
    "am.pool.name": "Özel Havuz",
    "am.pool.desc": "Gün doğumundan itibaren açık, ısıtmalı sonsuzluk havuzu. Koya panoramik manzara.",
    "am.garden.name": "Bahçe & Zeytinlikler",
    "am.garden.desc": "Kadim zeytin ağaçları, yasemin, begonvil — yaşayan bir Akdeniz peyzajı.",
    "am.terrace.name": "Deniz Manzaralı Teraslar",
    "am.terrace.desc": "Kalkan Körfezi'ne bakan çok sayıda gölgeli teras — gün batımı içkileri, sabah kahvesi.",
    "am.kitchen.name": "Tam Donanımlı Mutfak",
    "am.kitchen.desc": "Profesyonel cihazlar, espresso, eksiksiz pişirme gereçleri. Ya da sizin için özel şef ayarlayalım.",
    "am.concierge.name": "Özel Concierge",
    "am.concierge.desc": "Tekne kiralamak, restoran rezervasyonu ve daha fazlası — siz sormadan halledilir.",
    "am.parking.name": "Güvenli Otopark",
    "am.parking.desc": "7/24 izlenen, iki araç kapasiteli özel kapalı otopark.",
    "am.wifi.name": "Yüksek Hızlı WiFi",
    "am.wifi.desc": "Her yerde fiber internet — terasta çalışın, her ekranda yayın yapın.",
    "am.ac.name": "Klima",
    "am.ac.desc": "Her yatak odası ve oturma alanında bireysel iklim kontrolü.",
    "am.tv.name": "Akıllı TV'ler",
    "am.tv.desc": "Netflix, Apple TV+, uydu — her yatak odasında ve ana oturma odasında.",

    "cal.lbl": "Müsaitlik",
    "cal.h2": "Tarihinizi<br /><em>Seçin</em>",
    "cal.sub": "Tüm platformlarla senkronize canlı takvim. Müsait tarihleri hemen rezerve edin.",
    "cal.available": "Müsait",
    "cal.booked": "Dolu",
    "cal.checkinout": "Giriş / Çıkış",
    "cal.after": "Rezervasyon yapmaya hazır mısınız? 24 saat içinde yanıt veririz.",
    "cal.btn": "Rezervasyon Talebi",

    "contact.lbl": "İletişim",
    "contact.h2": "Konaklamaya<br /><em>Hazır mısınız?</em>",
    "contact.p": "Tarihlerinizi ve grup büyüklüğünüzü bildirin. Geliş'ten ayrılışa, aradaki tüm anlara kadar — her şey bizim elimizde.",
    "contact.location.lbl": "Konum",
    "contact.location.val": "Kalkan, Kaş — Antalya, Türkiye",
    "contact.email.lbl": "E-posta",
    "contact.phone.lbl": "Telefon",
    "contact.wa.lbl": "WhatsApp",

    "form.name.lbl": "Ad Soyad",
    "form.name.ph": "Ayşe Yılmaz",
    "form.email.lbl": "E-posta",
    "form.email.ph": "ayse@ornek.com",
    "form.arrival.lbl": "Giriş Tarihi",
    "form.departure.lbl": "Çıkış Tarihi",
    "form.guests.lbl": "Misafir Sayısı",
    "form.phone.lbl": "Telefon (isteğe bağlı)",
    "form.phone.ph": "+90 XXX XXX XX XX",
    "form.msg.lbl": "Mesaj",
    "form.msg.ph": "Özel istekler, sorular…",
    "form.submit": "Talep Gönder",
    "form.dateError": "Çıkış tarihi giriş tarihinden sonra olmalıdır.",

    "footer.villa": "Villa",
    "footer.gallery": "Galeri",
    "footer.amenities": "Olanaklar",
    "footer.availability": "Müsaitlik",
    "footer.contact": "İletişim",
  },

  ru: {
    "nav.villa": "Вилла",
    "nav.gallery": "Галерея",
    "nav.amenities": "Удобства",
    "nav.availability": "Даты",
    "nav.book": "Забронировать",

    "hero.eyebrow": "Калкан · Турецкая Ривьера",
    "hero.h1": "Там, где природа<br /><em>затаила дыхание</em>",
    "hero.p": "Частная люкс-вилла в окружении леса и моря — возвышается над Калканом, открытая небу.",
    "hero.btn.availability": "Проверить даты",
    "hero.btn.villa": "Открыть виллу",
    "hp.bedrooms": "Спальни",
    "hp.guests": "Гостей",
    "hp.pool": "Бассейн",
    "hp.view": "Вид на море",

    "about.lbl": "Вилла",
    "about.h2": "В объятиях природы,<br /><em>навстречу морю</em>",
    "about.p1": "Расположенная на зелёных холмах над Калканом, Villa Mira создана так, чтобы слиться с окружающей природой. Вековые оливковые деревья обрамляют бассейн, словно стекающий в Эгейское море внизу.",
    "about.p2": "Полностью меблированная, с персоналом. От утреннего кофе на террасе до ночных купаний под звёздами — каждая деталь уже продумана.",
    "about.btn": "Исследовать пространства →",

    "gallery.lbl": "Галерея",
    "gallery.h2": "Каждый уголок —<br /><em>особый мир</em>",
    "gallery.pool": "Бассейн и море",
    "gallery.terrace": "Морская терраса",
    "gallery.golden": "Золотой час",
    "gallery.living": "Гостиная",
    "gallery.suite": "Главная сюита",
    "gallery.garden": "Сад",
    "gallery.interior": "Интерьер",

    "am.lbl": "Удобства",
    "am.h2": "Тихо.<br /><em>Исключительно.</em>",
    "am.pool.name": "Частный бассейн",
    "am.pool.desc": "Подогреваемый бассейн с панорамным видом на бухту, открытый с рассвета.",
    "am.garden.name": "Сад и оливы",
    "am.garden.desc": "Вековые оливы, жасмин, бугенвиллея — живой средиземноморский пейзаж.",
    "am.terrace.name": "Террасы с видом на море",
    "am.terrace.desc": "Несколько тенистых террас с видом на залив Калкан — вечерние напитки, утренний кофе.",
    "am.kitchen.name": "Полная кухня",
    "am.kitchen.desc": "Профессиональная техника, эспрессо, полный кухонный инвентарь. Или закажите личного шефа.",
    "am.concierge.name": "Личный консьерж",
    "am.concierge.desc": "Аренда яхты, бронирование ресторанов и многое другое — позаботимся до вашей просьбы.",
    "am.parking.name": "Охраняемая парковка",
    "am.parking.desc": "Закрытая частная парковка на два автомобиля, охрана 24/7.",
    "am.wifi.name": "Высокоскоростной WiFi",
    "am.wifi.desc": "Оптоволокно по всей вилле — работайте на террасе, смотрите на любом экране.",
    "am.ac.name": "Кондиционирование",
    "am.ac.desc": "Индивидуальный климат-контроль в каждой спальне и гостиной.",
    "am.tv.name": "Смарт-телевизоры",
    "am.tv.desc": "Netflix, Apple TV+, спутниковое ТВ — в каждой спальне и главной гостиной.",

    "cal.lbl": "Доступность",
    "cal.h2": "Найдите<br /><em>свои даты</em>",
    "cal.sub": "Календарь синхронизирован на всех платформах. Свободные даты — ваши.",
    "cal.available": "Свободно",
    "cal.booked": "Занято",
    "cal.checkinout": "Заезд / выезд",
    "cal.after": "Готовы забронировать? Отвечаем в течение 24 часов.",
    "cal.btn": "Запросить бронь",

    "contact.lbl": "Связаться",
    "contact.h2": "Готовы к<br /><em>вашему отдыху?</em>",
    "contact.p": "Укажите даты и количество гостей. Мы позаботимся обо всём — от прибытия до отъезда и каждом моменте между ними.",
    "contact.location.lbl": "Адрес",
    "contact.location.val": "Калкан, Каш — Анталья, Турция",
    "contact.email.lbl": "Email",
    "contact.phone.lbl": "Телефон",
    "contact.wa.lbl": "WhatsApp",

    "form.name.lbl": "Имя и фамилия",
    "form.name.ph": "Иван Иванов",
    "form.email.lbl": "Email",
    "form.email.ph": "ivan@example.com",
    "form.arrival.lbl": "Заезд",
    "form.departure.lbl": "Выезд",
    "form.guests.lbl": "Гости",
    "form.phone.lbl": "Телефон (необязательно)",
    "form.phone.ph": "+90 XXX XXX XX XX",
    "form.msg.lbl": "Сообщение",
    "form.msg.ph": "Пожелания, вопросы…",
    "form.submit": "Отправить запрос",
    "form.dateError": "Дата выезда должна быть позже даты заезда.",

    "footer.villa": "Вилла",
    "footer.gallery": "Галерея",
    "footer.amenities": "Удобства",
    "footer.availability": "Даты",
    "footer.contact": "Контакты",
  },
};

let currentLang = localStorage.getItem("vm_lang") || "en";

function t(key) {
  return (translations[currentLang] || translations.en)[key] || key;
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("vm_lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.dataset.lang);
    drawer.classList.remove("open");
  });
});

applyLang(currentLang);
