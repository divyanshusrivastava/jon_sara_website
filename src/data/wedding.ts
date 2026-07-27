export type Lang = "en" | "pt";

export type Localized = Record<Lang, string>;

export const wedding = {
  couple: {
    partner1: "Jon",
    partner2: "Sara",
    monogram: "J&S",
  },
  /** ISO date of the wedding (local time assumed) */
  dateISO: "2026-09-12T13:30:00",
  displayDate: {
    en: "12 September 2026",
    pt: "12 de Setembro de 2026",
  } satisfies Localized,
  rsvpDeadline: {
    en: "15 August 2026",
    pt: "15 de Agosto de 2026",
  } satisfies Localized,
  venue: {
    name: "Your Venue Name",
    city: "City, Country",
    address: "Street address, City",
    timeRange: {
      en: "From 1:30 PM to 12:30 AM",
      pt: "Das 13:30 até às 00:30",
    } satisfies Localized,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Your+Venue+Name",
    calendarUrl: "",
  },
  schedule: [
    {
      time: "13:30",
      title: { en: "Guest arrival", pt: "Chegada dos convidados" },
      detail: { en: "", pt: "" },
    },
    {
      time: "14:00",
      title: { en: "Ceremony", pt: "Cerimónia" },
      detail: { en: "", pt: "" },
    },
    {
      time: "15:00",
      title: { en: "Aperitif", pt: "Aperitivo" },
      detail: {
        en: "Drinks, conversation, and photos with guests",
        pt: "Convívio e fotos com os convidados",
      },
    },
    {
      time: "17:00",
      title: { en: "Cocktail", pt: "Cocktail" },
      detail: { en: "", pt: "" },
    },
    {
      time: "18:30",
      title: { en: "Dinner", pt: "Jantar" },
      detail: { en: "", pt: "" },
    },
    {
      time: "20:30",
      title: { en: "Cake & speeches", pt: "Bolo e discursos" },
      detail: { en: "", pt: "" },
    },
    {
      time: "21:30",
      title: { en: "Party", pt: "Festa" },
      detail: { en: "", pt: "" },
    },
    {
      time: "00:30",
      title: { en: "End of celebration", pt: "Fim da celebração" },
      detail: { en: "", pt: "" },
    },
  ] as {
    time: string;
    title: Localized;
    detail: Localized;
  }[],
  menu: {
    intro: {
      en: "For the wedding dinner, guests will choose from four main courses — two beef options and two fish options. Please select your dish in the RSVP so catering can prepare the right number of meals.",
      pt: "Para o menu do casamento, os convidados terão quatro opções de prato principal à escolha, duas opções de carne de vaca e duas opções de peixe. Cada convidado deverá escolher um prato no questionário.",
    } satisfies Localized,
    meat: [
      {
        en: "Herb-crusted beef fillet with light truffle jus — potato purée and sautéed vegetables",
        pt: "Filet de bœuf en croûte aux herbes et jus léger à la truffe — purée e legumes",
      },
      {
        en: "Picanha of beef with jus — baby potatoes and vegetables",
        pt: "Picanha de bœuf et son jus — pommes de terre grenaille e legumes",
      },
    ] as Localized[],
    fish: [
      {
        en: "Grilled salmon fillet with shallot sauce — fragrant rice",
        pt: "Filet de saumon grillé et sauce à l'échalote — riz parfumé",
      },
      {
        en: "Poached sole on spinach — buttered potatoes, sun-dried tomatoes, white wine sauce",
        pt: "Filet de sole poché sur épinards — pommes de terre au beurre",
      },
    ] as Localized[],
    kids: [
      {
        en: "Breaded chicken — fries and vegetables",
        pt: "Poulet pané — frites et légumes",
      },
      {
        en: "Salmon fillet — rice and vegetables",
        pt: "Pavé de saumon — riz et légumes",
      },
    ] as Localized[],
  },
  dressCode: {
    title: { en: "Smart Casual", pt: "Smart Casual" } satisfies Localized,
    note: {
      en: "To let the bride shine, we kindly ask that you avoid all-white outfits.",
      pt: "Para deixar a noiva brilhar, agradecemos que evitem roupas totalmente brancas.",
    } satisfies Localized,
  },
  hotels: [
    {
      name: "Hotel Option One",
      address: "Address line, City",
      price: {
        en: "≈ €90 – €200 per night",
        pt: "≈ 90€ – 200€ por noite",
      },
      blurb: {
        en: "Comfortable option with parking and easy access to the venue.",
        pt: "Opção confortável, com estacionamento e fácil acesso ao local.",
      },
      url: "#",
    },
    {
      name: "Hotel Option Two",
      address: "Address line, City",
      price: {
        en: "≈ €150 – €220 per night",
        pt: "≈ 150€ – 220€ por noite",
      },
      blurb: {
        en: "Closest elegant option — ideal if you want to stay near the celebration.",
        pt: "A opção mais próxima e elegante, ideal para quem queira ficar perto.",
      },
      url: "#",
    },
    {
      name: "Hotel Option Three",
      address: "Address line, City",
      price: {
        en: "≈ €75 – €120 per night",
        pt: "≈ 75€ – 120€ por noite",
      },
      blurb: {
        en: "Budget-friendly choice with free parking and good road access.",
        pt: "Opção mais económica, com estacionamento gratuito e fácil acesso de carro.",
      },
      url: "#",
    },
  ] as {
    name: string;
    address: string;
    price: Localized;
    blurb: Localized;
    url: string;
  }[],
  faq: [
    {
      q: { en: "What time should I arrive?", pt: "A que horas devo chegar?" },
      a: {
        en: "Please arrive from 1:30 PM so you can settle in before the ceremony begins.",
        pt: "Pedimos que cheguem a partir das 13:30 para se instalarem antes da cerimónia.",
      },
    },
    {
      q: {
        en: "What time does the celebration end?",
        pt: "A que horas termina a celebração?",
      },
      a: {
        en: "The celebration is planned to end around 12:30 AM.",
        pt: "A celebração está prevista terminar por volta das 00:30.",
      },
    },
    {
      q: {
        en: "Will drinks be available?",
        pt: "Haverá bebidas disponíveis?",
      },
      a: {
        en: "Yes — soft drinks, water, and coffee will be available throughout the day.",
        pt: "Sim — bebidas sem álcool, água e café estarão disponíveis ao longo do dia.",
      },
    },
    {
      q: {
        en: "Will alcoholic drinks be served?",
        pt: "Haverá bebidas alcoólicas disponíveis?",
      },
      a: {
        en: "Yes, alcoholic beverages will be served during the aperitif, dinner, and party.",
        pt: "Sim, haverá bebidas alcoólicas durante o aperitivo, o jantar e a festa.",
      },
    },
    {
      q: {
        en: "Are children welcome?",
        pt: "As crianças são bem-vindas?",
      },
      a: {
        en: "Yes — children are welcome for the full day. We kindly ask parents to supervise their children throughout the event.",
        pt: "Sim — as crianças são bem-vindas durante todo o dia. Pedimos apenas que os pais sejam responsáveis pelos filhos.",
      },
    },
    {
      q: { en: "What is the dress code?", pt: "Qual é o dress code?" },
      a: {
        en: "Smart casual. Please avoid all-white outfits.",
        pt: "Smart casual. Evitem roupas totalmente brancas.",
      },
    },
    {
      q: {
        en: "Can I share this invitation link?",
        pt: "Posso partilhar este link de convite?",
      },
      a: {
        en: "This invitation is personal. Please do not share it with others unless we have asked you to.",
        pt: "Este convite é pessoal. Por favor, não o partilhem com outras pessoas sem a nossa autorização.",
      },
    },
    {
      q: {
        en: "Can I bring a plus-one or children?",
        pt: "Posso levar um acompanhante ou crianças?",
      },
      a: {
        en: "Only if previously approved by us. Extra guests who were not invited directly cannot be added.",
        pt: "Apenas se tiver sido aprovado previamente pelos noivos. Este convite não permite incluir convidados extra.",
      },
    },
  ] as { q: Localized; a: Localized }[],
  gifts: {
    message: {
      en: "Your presence beside us is already the greatest gift. If you wish to contribute to our new life together, you may do so freely, with whatever amount you like.",
      pt: "A vossa presença ao nosso lado já é o maior presente. Se quiserem contribuir para a nossa nova vida a dois, podem fazê-lo livremente, com o valor que desejarem.",
    } satisfies Localized,
    cardPreferred: true,
    bankDetails: {
      iban: "XX00 0000 0000 0000 0000 0000",
      name: "Jon & Sara",
    },
  },
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
  ],
};

export const copy = {
  en: {
    tapToOpen: "Tap to open",
    weAreGettingMarried: "We're getting married",
    countdown: "Countdown",
    countdownIntro: "We can't wait to celebrate this day with you:",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    details: "The details",
    detailsSub: "Everything you need to know",
    venue: "Venue",
    googleMaps: "Google Maps",
    calendar: "Calendar",
    schedule: "Day's program",
    scheduleSub: "What we've prepared for you",
    menu: "Menu",
    seatedDinner: "Seated dinner",
    meatOptions: "Meat options",
    fishOptions: "Fish options",
    kidsMenu: "Children's menu",
    dressCode: "Dress code",
    dressCodeSub: "A few notes",
    accommodation: "Accommodation",
    accommodationSub: "Where to stay",
    hotelsNote:
      "Note: these prices are estimates only. Please confirm directly with the hotel before booking.",
    faq: "Frequently asked questions",
    faqSub: "Your questions answered simply and clearly.",
    gifts: "Gifts",
    giftsSub: "A special gesture",
    cardPreferred: "Card preferred",
    bankTransfer: "Bank transfer",
    rsvpInfo: "Attendance confirmation",
    rsvpInfoBody:
      "Please confirm your attendance by {deadline} through the questionnaire. Include companions, children, your main-course choice, and any dietary restrictions so we can organise seating and meals correctly.",
    questionnaire: "Questionnaire",
    questionnaireSub: "We look forward to seeing you!",
    attendingQ: "Will you be attending our wedding on {date}?",
    yesAttending: "Yes, I will be there",
    noAttending: "I will not be able to attend",
    yourDetails: "Your details",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    mainCourse: "Your main course choice",
    chooseDish: "Choose your dish",
    bringingPartner: "Will you be accompanied by your partner?",
    yes: "Yes",
    no: "No",
    partnerNote:
      "Guests may only include a spouse, partner, or children if previously approved by the couple. This invitation does not allow extra friends or family who were not approved.",
    bringingKids: "Will you bring children?",
    messageOptional: "Message for the couple (optional)",
    submitRsvp: "Send RSVP",
    rsvpThanks: "Thank you! Your RSVP has been received.",
    madeWithLove: "Made with love",
  },
  pt: {
    tapToOpen: "Toque para abrir",
    weAreGettingMarried: "Vamos casar-nos",
    countdown: "Contagem decrescente",
    countdownIntro: "Estamos ansiosos por celebrar este dia convosco:",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    details: "Os detalhes",
    detailsSub: "Tudo o que precisam de saber",
    venue: "Local",
    googleMaps: "Google Maps",
    calendar: "Calendário",
    schedule: "Programa do dia",
    scheduleSub: "O que preparámos para vós",
    menu: "Menu",
    seatedDinner: "Jantar sentado",
    meatOptions: "Opções de carne",
    fishOptions: "Opções de peixe",
    kidsMenu: "Menu para crianças",
    dressCode: "Código de vestimenta",
    dressCodeSub: "Algumas notas",
    accommodation: "Alojamento",
    accommodationSub: "Onde ficar",
    hotelsNote:
      "Nota: estes preços são apenas estimativas. Os convidados devem confirmar directamente com o hotel antes de reservar.",
    faq: "Perguntas Frequentes",
    faqSub: "As vossas perguntas respondidas de forma simples e clara.",
    gifts: "Presentes",
    giftsSub: "Um gesto especial",
    cardPreferred: "Cartão preferido",
    bankTransfer: "Transferência bancária",
    rsvpInfo: "Confirmação de presença",
    rsvpInfoBody:
      "Pedimos que confirmem a vossa presença até ao dia {deadline}, através do questionário. Indiquem acompanhantes, crianças, escolha do prato principal e eventuais restrições alimentares.",
    questionnaire: "Questionário",
    questionnaireSub: "Esperamos por vós!",
    attendingQ: "Vão estar presentes no nosso casamento a {date}?",
    yesAttending: "Sim, estarei presente",
    noAttending: "Não poderei comparecer",
    yourDetails: "Os vossos dados",
    fullName: "Nome completo",
    email: "Email",
    phone: "Telefone",
    mainCourse: "A vossa escolha de prato principal",
    chooseDish: "Escolha o seu prato",
    bringingPartner: "Vão acompanhados pelo vosso parceiro/a?",
    yes: "Sim",
    no: "Não",
    partnerNote:
      "Os convidados só podem incluir o seu marido, mulher, namorado/a ou crianças se isso tiver sido aprovado previamente pelos noivos.",
    bringingKids: "Vão trazer crianças?",
    messageOptional: "Mensagem para os noivos (opcional)",
    submitRsvp: "Enviar RSVP",
    rsvpThanks: "Obrigado! A vossa confirmação foi recebida.",
    madeWithLove: "Feito com amor",
  },
} as const;
