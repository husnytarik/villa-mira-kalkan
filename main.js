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
    "cal.available": "Available",
    "cal.booked": "Booked",
    "cal.checkinout": "Check-in / out",
    "cal.after": "Ready to reserve? We reply within 24 hours.",
    "cal.btn": "Request a Booking",

    "contact.lbl": "Get in Touch",
    "contact.h2": "Ready for<br /><em>Your Stay?</em>",
    "contact.p": "Tell us your dates and group size. We'll make sure every moment of your stay is exactly as it should be.",
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

    "nav.faq": "FAQ",
    "faq.lbl": "FAQ",
    "faq.h1": "Frequently<br /><em>Asked Questions</em>",
    "faq.sub": "Everything you need to know before your stay at Villa Mira Kalkan.",
    "faq.g1.title": "The Villa",
    "faq.q1": "Where is Villa Mira located?",
    "faq.a1": "Villa Mira is nestled in the green hills above Kalkan, a charming coastal town on Turkey's Turquoise Coast — approximately 20 km from Kaş and 80 km from Antalya Airport.",
    "faq.q2": "How many guests can the villa accommodate?",
    "faq.a2": "The villa accommodates up to 8 guests across 4 spacious en-suite bedrooms.",
    "faq.q3": "Is the pool heated?",
    "faq.a3": "Yes. The private infinity pool is heated and open from sunrise. It offers panoramic views across Kalkan Bay and the Aegean Sea.",
    "faq.q4": "Is there parking at the villa?",
    "faq.a4": "Yes. There is private gated parking for two vehicles, monitored 24/7.",
    "faq.q5": "Is WiFi available?",
    "faq.a5": "Yes. High-speed fibre internet is available throughout the villa, including all terraces.",
    "faq.q6": "Are pets allowed?",
    "faq.a6": "Pets are not permitted at Villa Mira, to maintain a peaceful and clean environment for all guests.",
    "faq.g2.title": "Booking & Stay",
    "faq.q7": "What are the check-in and check-out times?",
    "faq.a7": "Check-in is from 15:00 and check-out is by 11:00. Early or late arrangements may be possible upon request.",
    "faq.q8": "What is the minimum stay?",
    "faq.a8": "The minimum stay is 7 nights during peak season. Shorter stays may be considered in off-peak periods — please enquire directly.",
    "faq.q9": "What is the cancellation policy?",
    "faq.a9": "Cancellation terms depend on the booking platform or direct rental agreement. Please contact us for full details before confirming your reservation.",
    "faq.q10": "Can a private chef be arranged?",
    "faq.a10": "Yes. A private chef can be arranged on request through our concierge service. Please mention this when making your enquiry.",
    "faq.q11": "How do I make a reservation?",
    "faq.a11": "Check availability on our homepage calendar and send an enquiry via the contact form, email, or WhatsApp. We reply within 24 hours.",
    "faq.g3.title": "Around Kalkan",
    "faq.q12": "What is there to do near the villa?",
    "faq.a12": "Kalkan offers boat trips, scuba diving, water sports, and excellent seafood restaurants. Nearby highlights include Kaputaş Beach (10 km), the ancient Lycian city of Xanthos, and the stunning Saklikent Gorge. The old town's cobbled streets and rooftop terraces are perfect for evening dining.",
    "faq.q13": "How far is the nearest beach?",
    "faq.a13": "Kalkan's beach club platforms are a short drive down to the harbour. The iconic Kaputaş Beach — one of Turkey's most beautiful — is approximately 10 km away. Boat trips to secluded coves can also be arranged.",
    "faq.cta.p": "Still have questions? We're happy to help.",
    "faq.cta.btn": "Contact Us",
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
    "cal.available": "Müsait",
    "cal.booked": "Dolu",
    "cal.checkinout": "Giriş / Çıkış",
    "cal.after": "Rezervasyon yapmaya hazır mısınız? 24 saat içinde yanıt veririz.",
    "cal.btn": "Rezervasyon Talebi",

    "contact.lbl": "İletişim",
    "contact.h2": "Konaklamaya<br /><em>Hazır mısınız?</em>",
    "contact.p": "Tarihlerinizi ve misafir sayınızı bildirin. Konaklamanızın her anının tam istediğiniz gibi olması için buradayız.",
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

    "nav.faq": "SSS",
    "faq.lbl": "SSS",
    "faq.h1": "Sıkça Sorulan<br /><em>Sorular</em>",
    "faq.sub": "Villa Mira Kalkan'da konaklamadan önce bilmeniz gereken her şey.",
    "faq.g1.title": "Villa",
    "faq.q1": "Villa Mira nerede?",
    "faq.a1": "Villa Mira, Türkiye'nin Türkiz Kıyısı'ndaki sevimli bir kıyı kasabası olan Kalkan'ın yeşil tepelerinde yer almaktadır. Kaş'a yaklaşık 20 km, Antalya Havalimanı'na 80 km uzaklıktadır.",
    "faq.q2": "Villada kaç kişi kalabilir?",
    "faq.a2": "Villa, 4 geniş en-suite yatak odası ile 8 misafire kadar hizmet vermektedir.",
    "faq.q3": "Havuz ısıtmalı mı?",
    "faq.a3": "Evet. Özel sonsuzluk havuzu ısıtmalı olup gün doğumundan itibaren açıktır. Kalkan Körfezi ve Ege Denizi'ne panoramik manzara sunar.",
    "faq.q4": "Villada otopark var mı?",
    "faq.a4": "Evet. 7/24 izlenen, iki araç kapasiteli özel kapalı otopark mevcuttur.",
    "faq.q5": "WiFi var mı?",
    "faq.a5": "Evet. Tüm terасlar dahil villada her yerde yüksek hızlı fiber internet mevcuttur.",
    "faq.q6": "Evcil hayvan kabul ediliyor mu?",
    "faq.a6": "Tüm misafirlerimize sakin ve temiz bir ortam sunmak amacıyla Villa Mira'da evcil hayvanlara izin verilmemektedir.",
    "faq.g2.title": "Rezervasyon & Konaklama",
    "faq.q7": "Check-in ve check-out saatleri nelerdir?",
    "faq.a7": "Check-in saati 15:00, check-out saati 11:00'dir. Erken giriş veya geç çıkış talepleri için bizimle iletişime geçebilirsiniz.",
    "faq.q8": "Minimum konaklama süresi nedir?",
    "faq.a8": "Yoğun sezonda minimum konaklama süresi 7 gecedir. Düşük sezonda daha kısa süreli konaklamalar değerlendirilebilir — lütfen doğrudan bizimle iletişime geçin.",
    "faq.q9": "İptal politikası nedir?",
    "faq.a9": "İptal koşulları rezervasyon platformuna veya doğrudan kira sözleşmesine göre değişmektedir. Rezervasyonunuzu onaylamadan önce ayrıntılar için bizimle iletişime geçin.",
    "faq.q10": "Özel şef ayarlanabilir mi?",
    "faq.a10": "Evet. Concierge hizmetimiz aracılığıyla talep üzerine özel şef ayarlanabilir. Talebinizi yaparken bunu belirtmenizi rica ederiz.",
    "faq.q11": "Nasıl rezervasyon yapabilirim?",
    "faq.a11": "Ana sayfamızdaki takvimden müsaitliği kontrol edin ve iletişim formu, e-posta veya WhatsApp aracılığıyla talep gönderin. 24 saat içinde yanıt veririz.",
    "faq.g3.title": "Kalkan Çevresi",
    "faq.q12": "Villa çevresinde ne yapılabilir?",
    "faq.a12": "Kalkan; tekne turları, tüplü dalış, su sporları ve deniz ürünleri restoranları sunmaktadır. Yakın çevredeki öne çıkan yerler: Kaputaş Plajı (10 km), antik Likya kenti Ksanthos ve nefes kesen Saklıkent Kanyonu. Eski kasabanın kaldırımlı sokakları ve çatı terasları akşam yemekleri için mükemmeldir.",
    "faq.q13": "En yakın plaj ne kadar uzakta?",
    "faq.a13": "Kalkan'ın plaj kulüpleri limana kısa bir sürüş mesafesindedir. Türkiye'nin en güzel plajlarından biri olan ikonik Kaputaş Plajı yaklaşık 10 km uzaklıktadır. Gizli koylarına tekne turları da ayarlanabilir.",
    "faq.cta.p": "Hâlâ sorunuz mu var? Yardımcı olmaktan memnuniyet duyarız.",
    "faq.cta.btn": "Bize Ulaşın",
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
    "cal.available": "Свободно",
    "cal.booked": "Занято",
    "cal.checkinout": "Заезд / выезд",
    "cal.after": "Готовы забронировать? Отвечаем в течение 24 часов.",
    "cal.btn": "Запросить бронь",

    "contact.lbl": "Связаться",
    "contact.h2": "Готовы к<br /><em>вашему отдыху?</em>",
    "contact.p": "Укажите даты и количество гостей. Мы позаботимся о том, чтобы каждый момент вашего пребывания был именно таким, каким должен быть.",
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

    "nav.faq": "FAQ",
    "faq.lbl": "FAQ",
    "faq.h1": "Часто задаваемые<br /><em>вопросы</em>",
    "faq.sub": "Всё, что нужно знать перед приездом на Villa Mira Kalkan.",
    "faq.g1.title": "Вилла",
    "faq.q1": "Где находится Villa Mira?",
    "faq.a1": "Villa Mira расположена на зелёных холмах над Калканом — живописным прибрежным городком на Бирюзовом побережье Турции. До Каша около 20 км, до аэропорта Анталии — 80 км.",
    "faq.q2": "Сколько гостей может принять вилла?",
    "faq.a2": "Вилла рассчитана на 8 гостей: 4 просторные спальни с собственными ванными комнатами.",
    "faq.q3": "Бассейн с подогревом?",
    "faq.a3": "Да. Частный бассейн с инфинити-эффектом подогревается и открыт с рассвета. С него открывается панорамный вид на залив Калкан и Эгейское море.",
    "faq.q4": "Есть ли парковка на вилле?",
    "faq.a4": "Да. Закрытая частная парковка на два автомобиля с круглосуточной охраной.",
    "faq.q5": "Есть ли WiFi?",
    "faq.a5": "Да. Высокоскоростной оптоволоконный интернет доступен по всей вилле, включая все террасы.",
    "faq.q6": "Можно ли с домашними животными?",
    "faq.a6": "Домашние животные на вилле не разрешены — для обеспечения спокойной и чистой обстановки для всех гостей.",
    "faq.g2.title": "Бронирование и проживание",
    "faq.q7": "Каково время заезда и выезда?",
    "faq.a7": "Заезд — с 15:00, выезд — до 11:00. Ранний заезд или поздний выезд возможны по запросу.",
    "faq.q8": "Какой минимальный срок проживания?",
    "faq.a8": "В высокий сезон минимальный срок — 7 ночей. В межсезонье возможны более короткие сроки — уточняйте напрямую.",
    "faq.q9": "Какова политика отмены?",
    "faq.a9": "Условия отмены зависят от платформы бронирования или договора аренды. Свяжитесь с нами перед подтверждением бронирования.",
    "faq.q10": "Можно ли заказать личного шефа?",
    "faq.a10": "Да. Личный шеф организуется по запросу через консьерж-службу. Пожалуйста, укажите это при подаче заявки.",
    "faq.q11": "Как сделать бронирование?",
    "faq.a11": "Проверьте доступные даты в календаре на главной странице и отправьте запрос через контактную форму, email или WhatsApp. Мы отвечаем в течение 24 часов.",
    "faq.g3.title": "Окрестности Калкана",
    "faq.q12": "Чем можно заняться рядом с виллой?",
    "faq.a12": "Калкан предлагает морские прогулки, дайвинг, водные виды спорта и отличные рыбные рестораны. Рядом — пляж Капуташ (10 км), древний ликийский город Ксанф и захватывающее ущелье Сакликент. Мощёные улочки старого города с террасами на крышах идеальны для вечерних прогулок.",
    "faq.q13": "Как далеко ближайший пляж?",
    "faq.a13": "Пляжные клубы Калкана находятся в нескольких минутах езды вниз к гавани. Легендарный пляж Капуташ — один из красивейших в Турции — примерно в 10 км. Также можно организовать морские прогулки к уединённым бухтам.",
    "faq.cta.p": "Остались вопросы? Мы всегда рады помочь.",
    "faq.cta.btn": "Связаться с нами",
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
