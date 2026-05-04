// ============================================================
// ANA PAULA · DOG WALKER — Site Configuration
// ============================================================
// Edit this file to customise the entire website.
// All prices, photos, contact info and text live here.
// ============================================================

const SITE = {
  // ── PERSONAL INFO ──────────────────────────────────────────
  owner: {
    // Your display name
    name: "Ana Paula Ferrer",

    // City shown in hero eyebrow & footer
    city: "Papamoa, New Zealand",

    // WhatsApp number — international format, NO + NO spaces
    // New Zealand example: 6421234567  (64 = NZ code, rest = your number)
    whatsappNumber: "64273808872",

    // Phone number displayed on page (any format you like)
    phoneDisplay: "+64 27 380 8872",

    // Instagram (without @)
    instagramHandle: "ferreranapaulaa",

    // Full Instagram URL
    instagramUrl: "https://instagram.com/ferreranapaulaa",

    // Calendly link for scheduling — leave '' to show "Coming soon" badge
    // Get one free at: https://calendly.com
    calendlyUrl: "",

    // Formspree form ID — for the contact form to send real emails
    // Get one free at: https://formspree.io → create form → copy ID (e.g. 'xpzvwqab')
    formspreeId: "mbdwlazy",
  },

  // ── PHOTOS ─────────────────────────────────────────────────
  // Leave '' to show the styled placeholder.
  // Replace with a URL or a relative path (e.g. 'images/hero.jpg').
  photos: {
    hero: "./images/goldens.JPG", // Hero section: you with a dog (portrait or landscape)
    profile: "./images/mavick.jpeg", // About Me: circular profile photo
    gallery1: "./images/mavick.jpeg", // Gallery: main tall photo — you walking dogs
    gallery2: "./images/mavrickafuera.jpeg", // Gallery: close-up with a specific dog
    gallery3: "./images/goldens.JPG", // Gallery: playing at the park
  },

  // ── STATS ──────────────────────────────────────────────────
  stats: {
    walks: "+500",
    rating: "4.9",
    years: "3",
  },

  // ── SERVICE PRICES ─────────────────────────────────────────
  services: {
    solo: { price: "NZ$25" },
    long: { price: "NZ$40" },
    visit: { price: "NZ$20" },
    daycare: { price: "NZ$80" },
  },

  // ── PRICING PLAN PRICES ────────────────────────────────────
  pricing: {
    casual: "NZ$90",
    regular: "NZ$260",
    premium: "NZ$400",
  },

  // ── APPROVED REVIEWS ───────────────────────────────────────
  // When a client submits a review (via reviews.html → Formspree email),
  // copy the details here to publish it on the site.
  //
  // The testimonials section shows automatically when this array has items.
  // Remove an entry to unpublish it.
  //
  // Fields:
  //   rating       — number 1–5
  //   quote_en     — review text in English  (can be the same as Spanish if you don't translate)
  //   quote_es     — review text in Spanish
  //   owner        — client name (e.g. "Sarah T.")
  //   dog          — dog name + breed (e.g. "Buddy, Labrador 🐾")
  //
  // Example (uncomment to test):
  // {
  //   rating: 5,
  //   quote_en: "Ana is amazing. Buddy comes back from every walk so happy!",
  //   quote_es: "Ana es increíble. Buddy vuelve de cada paseo contentísimo.",
  //   owner: "Sarah T.",
  //   dog: "Buddy, Labrador 🐾",
  // },
  reviews: [
    // ← paste approved reviews here
  ],

  // ── DEFAULT LANGUAGE ───────────────────────────────────────
  // 'en' = English  |  'es' = Spanish
  defaultLang: "en",

  // ── TRANSLATIONS ───────────────────────────────────────────
  i18n: {
    // ══════════════════════════════════════════════════════════
    // ENGLISH
    // ══════════════════════════════════════════════════════════
    en: {
      // Meta
      page_title: "Walks with Ana · Dog Walker — Papamoa, NZ",

      // Nav
      nav_services: "Services",
      nav_how: "How it works",
      nav_gallery: "Gallery",
      nav_pricing: "Pricing",
      nav_about: "About me",
      nav_contact: "Contact",
      nav_cta: "Book a walk 🐾",

      // Hero
      hero_eyebrow: "Dog walker in Papamoa · Available",
      hero_h1_a: "Your dog deserves",
      hero_h1_em: "the best walk",
      hero_h1_b: "of their day.",
      hero_sub:
        "Personalised walks with photos after every outing. Because your companion deserves someone who truly cares for them.",
      hero_cta_primary: "Book first walk →",
      hero_cta_secondary: "See services",
      hero_stat_walks: "Walks completed",
      hero_stat_rating: "Average rating",
      hero_stat_years: "Years of experience",
      hero_live_name: "Max just finished his walk 🟢",
      hero_live_sub: "45 min · 4 photos sent",
      hero_review_quote: '"Luna came back so happy!"',
      hero_review_author: "— Mariana, Luna's owner 🐶",

      // Marquee (8 items)
      marquee: [
        { icon: "🩺", text: "Veterinary background" },
        { icon: "📸", text: "Photos every walk" },
        { icon: "✅", text: "Verified walker" },
        { icon: "📍", text: "Papamoa & nearby areas" },
        { icon: "🩺", text: "Pet first aid" },
        { icon: "📱", text: "WhatsApp updates" },
        { icon: "🔄", text: "Flexible cancellation" },
        { icon: "❤️", text: "Care from a real vet" },
      ],

      // Services
      services_eyebrow: "What I offer",
      services_h2_a: "Services designed",
      services_h2_b: "for every dog",
      services_sub: "Each service adapts to your companion's unique needs.",
      svc1_name: "Solo Walk",
      svc1_desc:
        "Exclusive attention for your dog. Personalised care on every outing.",
      svc1_dur: "30 minutes",
      svc2_name: "Long Walk",
      svc2_desc: "One full hour of activity. Perfect for high-energy breeds.",
      svc2_dur: "60 minutes",
      svc3_name: "Home Visit",
      svc3_desc:
        "I come to your home for company, feeding and affection. No need to leave their familiar environment.",
      svc3_dur: "30 minutes",
      svc4_name: "Day Care",
      svc4_desc:
        "Your dog spends the day with me while you work. Play, rest and lots of love guaranteed.",
      svc4_dur: "Full day",
      svc_from: "From",

      // How it works
      how_eyebrow: "Simple & fast",
      how_h2: "How it works",
      how_sub:
        "In less than 24 hours your dog could be enjoying their first walk.",
      step1_h3: "Tell me about your dog",
      step1_p:
        "Message me on WhatsApp or fill in the form. Breed, age, any special needs.",
      step2_h3: "Free first meeting",
      step2_p:
        "We meet in person with your dog. No charge. So everyone feels comfortable before we start.",
      step3_h3: "We schedule & confirm",
      step3_p:
        "Choose your preferred days and times. Easy payment by bank transfer.",
      step4_h3: "Photos & walk report",
      step4_p:
        "Receive photos during the walk. A full report when we're done.",

      // Gallery / Bio
      gallery_eyebrow: "A little about me",
      gallery_h2_a: "My favourite",
      gallery_h2_b: "furry clients",
      gallery_bio1:
        "I'm Ana Paula, a veterinarian from Argentina who fell in love with New Zealand and never left. My years working with small animals taught me how to read dogs, handle them safely, and give them the care they truly deserve.",
      gallery_bio2:
        "Now based in Papamoa, I bring that same dedication to every walk. Whether it's your pup's first outing or their daily routine, I treat every dog with the patience and expertise of a vet — and a whole lot of love.",
      gallery_badge1: "Veterinary background",
      gallery_badge2: "Papamoa & nearby areas",
      gallery_badge3: "",
      gallery_badge4: "",
      photo_main_label: "[Photo: Ana walking with dogs]",
      photo_close_label: "[Close-up with a dog]",
      photo_park_label: "[Playing in the park]",
      photo_sunset_label: "[Sunset walk]",
      photo_selfie_label: "[Selfie with a furry client]",

      // Testimonials (hidden until you have real reviews)
      test_eyebrow: "What they say",
      test_h2_a: "Happy owners,",
      test_h2_b: "happier dogs",
      test_leave: "Leave a review →",
      test1_quote:
        '"Ana is amazing. Rocky comes back from every walk tired and happy. The photos she sends are a gift."',
      test1_owner: "Martin G.",
      test1_dog: "Rocky, Border Collie 🐾",
      test2_quote:
        '"The free initial meeting convinced me from the very first moment. Mochi adores her."',
      test2_owner: "Carolina M.",
      test2_dog: "Mochi, French Bulldog 🐾",
      test3_quote:
        '"Real-time GPS gives me total peace of mind. And the photos... I can\'t stop smiling at work."',
      test3_owner: "Valentina R.",
      test3_dog: "Bella, Golden Retriever 🐾",

      // Pricing
      pricing_eyebrow: "Plans & pricing",
      pricing_h2_a: "No small print,",
      pricing_h2_b: "no surprises",
      pricing_sub:
        'Your first walk gets a <span class="text-terra font-semibold">20% discount</span>!',
      plan_casual_name: "Casual",
      plan_casual_period: "per month · up to 4 walks",
      plan_casual_f1: "4 × 30-min walks",
      plan_casual_f2: "WhatsApp updates",
      plan_casual_f3: "Walk photos",
      plan_casual_f4: "Detailed report",
      plan_casual_f5: "Priority support",
      plan_casual_cta: "Get started",
      plan_regular_name: "Regular",
      plan_regular_badge: "⭐ Most popular",
      plan_regular_period: "per month · up to 12 walks",
      plan_regular_f1: "12 × 30-min walks",
      plan_regular_f2: "WhatsApp updates",
      plan_regular_f3: "Walk photos",
      plan_regular_f4: "Detailed report",
      plan_regular_f5: "Priority support",
      plan_regular_cta: "Get started →",
      plan_premium_name: "Premium",
      plan_premium_period: "per month · unlimited",
      plan_premium_f1: "Unlimited walks",
      plan_premium_f2: "WhatsApp updates",
      plan_premium_f3: "Walk photos",
      plan_premium_f4: "Detailed report",
      plan_premium_f5: "24/7 priority support",
      plan_premium_cta: "Get in touch",
      pricing_note:
        "🎉 First walk 20% OFF for new clients · Flexible cancellation · No contracts",

      // About me
      about_eyebrow: "Hi, I'm",
      about_bio1:
        "I'm Ana Paula Ferrer, a veterinarian from Argentina now living in Papamoa, New Zealand. After years working with small animals in clinical practice, I decided to take my love for animals outdoors — and dog walking felt like the perfect fit.",
      about_bio2:
        "Every dog I walk gets the same care and attention I gave my patients. I'm happy to travel to nearby areas too, because your dog deserves someone who genuinely understands animals.",
      about_badge1: "Veterinarian — small animal specialist",
      about_badge2: "Based in Papamoa · nearby areas covered",
      about_badge3: "",
      about_badge4_pre: " rating · ", // sandwiched between rating + walks (hidden)
      about_badge4_suf: " walks completed",

      // Contact
      contact_eyebrow: "Ready to get started?",
      contact_h2_a: "Let's talk about",
      contact_h2_b: "your dog 🐾",
      contact_sub:
        "Tell me about your companion and we'll organise a free meet-and-greet. First walk is 20% off.",
      wa_title: "WhatsApp",
      wa_sub_suffix: "· Replies within minutes",
      ig_title: "Instagram",
      ig_sub_suffix: "· Photos from every adventure",
      cal_title: "Schedule a meeting",
      cal_sub: "Pick a day and time directly from my calendar",
      cal_badge: "Coming soon",
      form_h3: "Send me a message",
      form_name_label: "Your name *",
      form_name_ph: "Lucy",
      form_dog_label: "Your dog's name *",
      form_dog_ph: "Buddy",
      form_email_label: "Email *",
      form_email_ph: "lucy@email.com",
      form_info_label: "Breed & age",
      form_info_ph: "Labrador, 3 years old",
      form_msg_label: "How can I help?",
      form_msg_ph: "I'd like to book a walk, have questions about pricing...",
      form_submit: "Send message 🐾",
      form_note: "You can also message me on WhatsApp for a faster response.",
      form_success_title: "Message sent!",
      form_success_msg:
        "I'll reply within a few hours. Thank you for trusting me!",
      wa_message:
        "Hi Ana! I'd like to know more about your dog walking services 🐾",

      // Footer
      footer_tagline: "Walks with love, presence and trust.",
      footer_review: "Leave a review ✍️",
      footer_copyright_suffix: " · Dog walker · Papamoa, NZ",

      // FAB
      fab_wa: "WhatsApp",
      fab_ig: "Instagram",

      // Reviews page
      rev_page_title: "Leave a review · Ana Paula",
      rev_back: "← Back to site",
      rev_h1: "How was the walk?",
      rev_sub:
        "Your opinion helps other dog owners get to know me, and it means the world to this project. Thank you for taking the time!",
      rev_stars_label: "Your rating *",
      rev_stars_hint: "Tap to rate",
      rev_owner_label: "Your name *",
      rev_owner_ph: "Lucy",
      rev_email_label: "Your email",
      rev_email_ph: "lucy@email.com",
      rev_email_note: "Not published",
      rev_dog_label: "Dog's name *",
      rev_dog_ph: "Buddy",
      rev_breed_label: "Breed",
      rev_breed_ph: "Labrador",
      rev_text_label: "Your review *",
      rev_text_ph:
        "Tell us about the walk, the service, how your dog came home...",
      rev_submit: "Publish review ✨",
      rev_disclaimer:
        "Your review may appear on the website once Ana approves it.",
      rev_err_stars: "Please choose a star rating first.",
      rev_err_fields: "Please complete all required fields (*).",
      rev_success_title: "Thank you for your review!",
      rev_success_msg: "Your opinion means so much. See you on the next walk!",
      rev_success_cta: "Back to site →",
      rev_recent_title: "Recent reviews",
      rev_recent_sub: "Saved on this device",
      rev_copyright_suffix: " · Dog walker",
      star_labels: {
        5: "Amazing! 5 stars",
        4: "Very good · 4 stars",
        3: "Good · 3 stars",
        2: "Fair · 2 stars",
        1: "Could be better · 1 star",
      },
    },

    // ══════════════════════════════════════════════════════════
    // SPANISH
    // ══════════════════════════════════════════════════════════
    es: {
      page_title: "Walks with Ana · Paseadora de Perros — Papamoa, NZ",

      nav_services: "Servicios",
      nav_how: "Cómo funciona",
      nav_gallery: "Galería",
      nav_pricing: "Precios",
      nav_about: "Sobre mí",
      nav_contact: "Contacto",
      nav_cta: "Reservar paseo 🐾",

      hero_eyebrow: "Paseadora en Papamoa · Disponible",
      hero_h1_a: "Tu perro merece",
      hero_h1_em: "el mejor paseo",
      hero_h1_b: "de su día.",
      hero_sub:
        "Paseos personalizados con fotos de cada salida. Porque tu compañero merece alguien que realmente lo cuide.",
      hero_cta_primary: "Reservar primer paseo →",
      hero_cta_secondary: "Ver servicios",
      hero_stat_walks: "Paseos realizados",
      hero_stat_rating: "Calificación promedio",
      hero_stat_years: "Años de experiencia",
      hero_live_name: "Max acaba de terminar su paseo 🟢",
      hero_live_sub: "45 min · 4 fotos enviadas",
      hero_review_quote: '"¡Luna llegó felicísima!"',
      hero_review_author: "— Mariana, dueña de Luna 🐶",

      marquee: [
        { icon: "🩺", text: "Formación veterinaria" },
        { icon: "📸", text: "Fotos en cada paseo" },
        { icon: "✅", text: "Walker verificada" },
        { icon: "📍", text: "Papamoa y zonas cercanas" },
        { icon: "🩺", text: "Primeros auxilios pet" },
        { icon: "📱", text: "Actualizaciones por WhatsApp" },
        { icon: "🔄", text: "Cancelación flexible" },
        { icon: "❤️", text: "Cuidado de veterinaria real" },
      ],

      services_eyebrow: "Lo que ofrezco",
      services_h2_a: "Servicios diseñados",
      services_h2_b: "para cada perro",
      services_sub:
        "Cada servicio se adapta a las necesidades únicas de tu compañero.",
      svc1_name: "Paseo Individual",
      svc1_desc:
        "Atención dedicada para tu perro. Cuidado personalizado en cada salida.",
      svc1_dur: "30 minutos",
      svc2_name: "Paseo Largo",
      svc2_desc: "Una hora de actividad. Ideal para razas con alta energía.",
      svc2_dur: "60 minutos",
      svc3_name: "Visita en Casa",
      svc3_desc:
        "Voy a tu casa a darle compañía, comida y cariño. Sin salir de su ambiente.",
      svc3_dur: "30 minutos",
      svc4_name: "Guardería Diurna",
      svc4_desc:
        "Tu perro pasa el día conmigo. Juego, descanso y mucho amor garantizados.",
      svc4_dur: "Día completo",
      svc_from: "Desde",

      how_eyebrow: "Simple y rápido",
      how_h2: "Cómo funciona",
      how_sub:
        "En menos de 24 horas tu perro puede estar disfrutando su primer paseo.",
      step1_h3: "Contame sobre tu perro",
      step1_p:
        "Escribime por WhatsApp o completá el formulario. Raza, edad, necesidades especiales.",
      step2_h3: "Primer encuentro gratis",
      step2_p:
        "Nos conocemos en persona con tu perro. Sin costo. Para que todos se sientan cómodos.",
      step3_h3: "Agendamos y confirmamos",
      step3_p:
        "Elegís días y horarios. Pago fácil por transferencia o efectivo.",
      step4_h3: "Fotos y reporte del paseo",
      step4_p:
        "Recibís fotos durante el paseo. Al finalizar, reporte completo de la salida.",

      gallery_eyebrow: "Un poco sobre mí",
      gallery_h2_a: "Mis clientes",
      gallery_h2_b: "peludos favoritos",
      gallery_bio1:
        "Soy Ana Paula, veterinaria argentina enamorada de Nueva Zelanda. Años trabajando con pequeños animales en clínica me enseñaron a leer a los perros, manejarlos con seguridad y darles el cuidado que merecen.",
      gallery_bio2:
        "Hoy, desde Papamoa, llevo esa misma dedicación a cada paseo. Trato a cada perro con la paciencia y el conocimiento de una veterinaria — y con mucho, mucho cariño.",
      gallery_badge1: "Formación veterinaria",
      gallery_badge2: "Papamoa y zonas cercanas",
      gallery_badge3: "",
      gallery_badge4: "",
      photo_main_label: "[Foto: Ana caminando con perros]",
      photo_close_label: "[Primer plano con un perro]",
      photo_park_label: "[Jugando en el parque]",
      photo_sunset_label: "[Paseo al atardecer]",
      photo_selfie_label: "[Selfie con cliente peludo]",

      test_eyebrow: "Lo que dicen",
      test_h2_a: "Dueños felices,",
      test_h2_b: "perros más felices",
      test_leave: "Dejar una reseña →",
      test1_quote:
        '"Ana es increíble. Rocky vuelve de cada paseo cansado y con una sonrisa. Las fotos que manda son un regalo."',
      test1_owner: "Martín G.",
      test1_dog: "Rocky, Border Collie 🐾",
      test2_quote:
        '"El encuentro inicial gratuito me convenció desde el primer momento. Mochi la adora."',
      test2_owner: "Carolina M.",
      test2_dog: "Mochi, French Bulldog 🐾",
      test3_quote:
        '"El GPS en tiempo real me da tranquilidad total. Las fotos... no puedo dejar de sonreír en el trabajo."',
      test3_owner: "Valentina R.",
      test3_dog: "Bella, Golden Retriever 🐾",

      pricing_eyebrow: "Planes y precios",
      pricing_h2_a: "Sin letras chicas,",
      pricing_h2_b: "sin sorpresas",
      pricing_sub:
        '¡El primer paseo tiene un <span class="text-terra font-semibold">20% de descuento</span> para nuevos clientes!',
      plan_casual_name: "Casual",
      plan_casual_period: "por mes · hasta 4 paseos",
      plan_casual_f1: "4 paseos de 30 min",
      plan_casual_f2: "Actualizaciones por WhatsApp",
      plan_casual_f3: "Fotos del paseo",
      plan_casual_f4: "Reporte detallado",
      plan_casual_f5: "Atención prioritaria",
      plan_casual_cta: "Empezar",
      plan_regular_name: "Regular",
      plan_regular_badge: "⭐ Más elegido",
      plan_regular_period: "por mes · hasta 12 paseos",
      plan_regular_f1: "12 paseos de 30 min",
      plan_regular_f2: "Actualizaciones por WhatsApp",
      plan_regular_f3: "Fotos del paseo",
      plan_regular_f4: "Reporte detallado",
      plan_regular_f5: "Atención prioritaria",
      plan_regular_cta: "Empezar →",
      plan_premium_name: "Premium",
      plan_premium_period: "por mes · ilimitado",
      plan_premium_f1: "Paseos ilimitados",
      plan_premium_f2: "Actualizaciones por WhatsApp",
      plan_premium_f3: "Fotos del paseo",
      plan_premium_f4: "Reporte detallado",
      plan_premium_f5: "Atención prioritaria 24/7",
      plan_premium_cta: "Contactar",
      pricing_note:
        "🎉 Primer paseo con 20% OFF para nuevos clientes · Cancelación flexible · Sin contratos",

      about_eyebrow: "Hola, soy",
      about_bio1:
        "Soy Ana Paula Ferrer, veterinaria argentina que vive en Papamoa, Nueva Zelanda. Después de años trabajando con pequeños animales en clínica, decidí combinar mi pasión con la libertad del trabajo al aire libre.",
      about_bio2:
        "Cada perro que paseo recibe el mismo cuidado y atención que daba a mis pacientes. Me muevo por Papamoa y con gusto llego a las zonas cercanas — tu perro merece alguien que realmente entienda de animales.",
      about_badge1: "Veterinaria — especialista en pequeños animales",
      about_badge2: "Papamoa y zonas cercanas",
      about_badge3: "",
      about_badge4_pre: " de calificación · ",
      about_badge4_suf: " paseos realizados",

      contact_eyebrow: "¿Listo para empezar?",
      contact_h2_a: "Hablemos sobre",
      contact_h2_b: "tu perro 🐾",
      contact_sub:
        "Contame sobre tu compañero y coordinamos un encuentro de conocidos sin costo. El primer paseo tiene 20% de descuento.",
      wa_title: "WhatsApp",
      wa_sub_suffix: "· Respondo en minutos",
      ig_title: "Instagram",
      ig_sub_suffix: "· Fotos de cada aventura",
      cal_title: "Agendar encuentro",
      cal_sub: "Elegí día y hora directo en mi calendario",
      cal_badge: "Próximamente",
      form_h3: "Enviame un mensaje",
      form_name_label: "Tu nombre *",
      form_name_ph: "Lucía",
      form_dog_label: "Nombre de tu perro *",
      form_dog_ph: "Firulais",
      form_email_label: "Email *",
      form_email_ph: "lucia@email.com",
      form_info_label: "Raza y edad del perro",
      form_info_ph: "Labrador, 3 años",
      form_msg_label: "¿En qué puedo ayudarte?",
      form_msg_ph: "Quiero reservar un paseo, tengo dudas sobre precios...",
      form_submit: "Enviar mensaje 🐾",
      form_note:
        "También podés escribirme por WhatsApp para una respuesta más rápida.",
      form_success_title: "¡Mensaje enviado!",
      form_success_msg:
        "Te respondo en las próximas horas. ¡Gracias por confiar en mí!",
      wa_message: "Hola Ana! Me gustaría saber más sobre tus paseos 🐾",

      footer_tagline: "Paseos con amor, presencia y confianza.",
      footer_review: "Dejar reseña ✍️",
      footer_copyright_suffix: " · Paseadora de perros · Papamoa, NZ",

      fab_wa: "WhatsApp",
      fab_ig: "Instagram",

      // Reviews page
      rev_page_title: "Dejar reseña · Ana Paula",
      rev_back: "← Volver al sitio",
      rev_h1: "¿Cómo fue el paseo?",
      rev_sub:
        "Tu opinión ayuda a otros dueños de perros a conocerme y le da mucho amor a este proyecto. ¡Gracias por tomarte el tiempo!",
      rev_stars_label: "Tu calificación *",
      rev_stars_hint: "Tocá para calificar",
      rev_owner_label: "Tu nombre *",
      rev_owner_ph: "Lucía",
      rev_email_label: "Tu email",
      rev_email_ph: "lucia@email.com",
      rev_email_note: "No se publica",
      rev_dog_label: "Nombre del perro *",
      rev_dog_ph: "Firulais",
      rev_breed_label: "Raza",
      rev_breed_ph: "Labrador",
      rev_text_label: "Tu reseña *",
      rev_text_ph:
        "Contanos cómo fue el paseo, qué te pareció el servicio, cómo volvió tu perro...",
      rev_submit: "Publicar reseña ✨",
      rev_disclaimer:
        "Tu reseña puede aparecer en el sitio web una vez que Ana la apruebe.",
      rev_err_stars: "Por favor elegí una calificación con estrellas.",
      rev_err_fields: "Por favor completá los campos obligatorios (*).",
      rev_success_title: "¡Gracias por tu reseña!",
      rev_success_msg: "Tu opinión significa mucho. ¡Hasta el próximo paseo!",
      rev_success_cta: "Volver al sitio →",
      rev_recent_title: "Reseñas recientes",
      rev_recent_sub: "Guardadas en este dispositivo",
      rev_copyright_suffix: " · Paseadora de perros",
      star_labels: {
        5: "¡Increíble! 5 estrellas",
        4: "Muy bueno · 4 estrellas",
        3: "Bueno · 3 estrellas",
        2: "Regular · 2 estrellas",
        1: "Mejorable · 1 estrella",
      },
    },
  },
};
