export type Lang = "en" | "pt";

export type Localized = Record<Lang, string>;

export const wedding = {
  couple: {
    partner1: "Sara",
    partner2: "Jonatas",
    monogram: "S&J",
  },
  /** Ceremony start (local Portugal time) */
  dateISO: "2026-08-22T17:00:00",
  displayDate: {
    en: "22 August 2026",
    pt: "22 de Agosto de 2026",
  } satisfies Localized,
  locationShort: {
    en: "Alcanhões, Santarém",
    pt: "Alcanhões, Santarém",
  } satisfies Localized,
  rsvpDeadline: {
    en: "1 August 2026",
    pt: "1 de Agosto de 2026",
  } satisfies Localized,
  welcome: {
    title: { en: "Welcome", pt: "Bem-vindos" },
    paragraphs: [
      {
        en: "It is with immense joy that we welcome you to our wedding.",
        pt: "É com enorme alegria que vos damos as boas-vindas ao nosso casamento.",
      },
      {
        en: "We created this space so you can learn a little more of our story, discover the place where we will celebrate this special day, and find everything you need to enjoy every moment with us.",
        pt: "Criámos este espaço para que possam conhecer um pouco mais da nossa história, descobrir o local onde iremos celebrar este dia tão especial e encontrar todas as informações necessárias para aproveitarem cada momento connosco.",
      },
      {
        en: "More than a wedding, we want to live a day full of meaning, shared with the people we love most.",
        pt: "Mais do que um casamento, desejamos viver um dia cheio de significado, partilhado com as pessoas que mais amamos.",
      },
      {
        en: "Thank you for being part of this story.",
        pt: "Obrigado por fazerem parte desta história.",
      },
    ] as Localized[],
  },
  story: {
    title: { en: "Our Story", pt: "A Nossa História" },
    paragraphs: [
      {
        en: "We met in 2015. At the time, our lives followed very different paths, and what united us was a beautiful friendship.",
        pt: "Conhecemo-nos em 2015. Nessa altura, as nossas vidas seguiam caminhos muito diferentes e o que nos unia era uma bonita amizade.",
      },
      {
        en: 'Over the years, each of us followed our own path. We studied, worked, grew, and chased our dreams. Despite the distance that life sometimes created between us, we never stopped cultivating that friendship. Between laughter, endless conversations, and the habit of calling each other "siblings", we built a very special bond made of trust, complicity, and deep affection.',
        pt: 'Ao longo dos anos, cada um seguiu o seu percurso. Estudámos, trabalhámos, crescemos e perseguimos os nossos sonhos. Apesar da distância que, por vezes, a vida criou entre nós, nunca deixámos de cultivar essa amizade. Entre gargalhadas, conversas intermináveis e o hábito de nos tratarmos por "manos", construímos uma ligação muito especial, feita de confiança, cumplicidade e um profundo carinho.',
      },
      {
        en: "Until, on a perfectly ordinary day — 24 April 2022 — during a dinner in Lisbon, everything changed.",
        pt: "Até que, num dia perfeitamente comum, 24 de abril de 2022, durante um jantar em Lisboa, tudo mudou.",
      },
      {
        en: "Without big plans or expectations, we gave ourselves the chance to truly get to know each other. For the first time, we set aside the ideas we already had of one another and made space to ask the right questions, listen carefully, and discover who we really were. In that moment, we realised that the friendship that had always united us could be the beginning of something much greater.",
        pt: "Sem grandes planos ou expectativas, demos a nós próprios a oportunidade de nos conhecermos verdadeiramente. Pela primeira vez, deixámos de lado as ideias que já tínhamos um do outro e abrimos espaço para fazer as perguntas certas, ouvir com atenção e descobrir quem realmente éramos. Foi nesse momento que percebemos que a amizade que sempre nos unira podia ser o início de algo muito maior.",
      },
      {
        en: "Many conversations followed, some challenges, and moments when the future seemed uncertain. Still, we chose to keep walking side by side, trusting that every step was part of a greater path than the one we could see.",
        pt: "Seguiram-se muitas conversas, alguns desafios e momentos em que o futuro parecia incerto. Ainda assim, escolhemos continuar a caminhar lado a lado, confiando que cada passo fazia parte de um caminho maior do que aquele que conseguíamos ver.",
      },
      {
        en: "Along that journey we also discovered how much we shared the same way of looking at life. We choose to live with open hearts, put people at the centre of what we do, and believe the best memories come from the time we choose to share. We love discovering new places, meeting new people, tasting new flavours, and hearing new music. We like living with readiness to learn, to serve, and to be surprised by what God places on our path.",
        pt: "Foi também nesse percurso que descobrimos o quanto partilhávamos a mesma forma de olhar para a vida. Escolhemos viver com o coração aberto, colocar as pessoas no centro daquilo que fazemos e acreditamos que as melhores memórias nascem do tempo que escolhemos partilhar. Encanta-nos descobrir novos lugares, conhecer novas pessoas, provar novos sabores e ouvir novas músicas. Gostamos de viver com disponibilidade para aprender, para servir e para nos deixarmos surpreender por aquilo que Deus coloca no nosso caminho.",
      },
      {
        en: "We have learned to leave space for the unexpected, trusting that our plans are not always the best ones, and that often it is precisely on the paths we never imagined walking that God surprises us, transforms us, and leads us to the right place.",
        pt: "Aprendemos a deixar espaço para o inesperado, confiando que nem sempre os nossos planos são os melhores e que, muitas vezes, é precisamente nos caminhos que não imaginávamos percorrer que Deus nos surpreende, nos transforma e nos conduz ao lugar certo.",
      },
      {
        en: "Today we choose to join our lives before God, because we love each other, because we remain each other's best friends, and because we want to build our future with Him at the centre of our lives.",
        pt: "Hoje, escolhemos unir as nossas vidas diante de Deus, porque nos amamos, porque continuamos a ser os melhores amigos um do outro e porque queremos construir o nosso futuro com Ele no centro da nossa vida.",
      },
      {
        en: "It is with immense joy that we welcome you to this place so special to us, to celebrate the beginning of this new chapter. Your presence makes this day even more meaningful, and we hope every moment shared with you will remain in all of our memories and hearts.",
        pt: "É com enorme alegria que vos recebemos neste lugar tão especial para nós, para celebrarmos o início deste novo capítulo. A vossa presença torna este dia ainda mais significativo e esperamos que cada momento vivido convosco fique guardado na memória e no coração de todos nós.",
      },
    ] as Localized[],
  },
  foundation: {
    title: { en: "Our Foundation", pt: "O Nosso Versículo" },
    verse: {
      en: '"As for me and my house, we will serve the Lord."',
      pt: '"Eu e a minha casa serviremos o Senhor."',
    },
    reference: {
      en: "Joshua 24:15",
      pt: "Josué 24:15",
    },
  },
  familyHouse: {
    title: { en: "The Family House", pt: "A Casa e a Sua História" },
    paragraphs: [
      {
        en: "This house has belonged to our family for seven generations.",
        pt: "Esta casa pertence à nossa família há sete gerações.",
      },
      {
        en: "Far more than a property, it is a place where stories, traditions, and memories live across time. It is here that generations of our family grew up, celebrated, and built part of their life.",
        pt: "Muito mais do que uma propriedade, é um lugar onde vivem histórias, tradições e memórias que atravessam o tempo. Foi aqui que gerações da nossa família cresceram, celebraram e construíram parte da sua vida.",
      },
      {
        en: "Choosing this place for our wedding was a natural decision. We wanted this day to unfold in a space that represents our roots, the importance of family, and the values we wish to carry forward together.",
        pt: "Escolher este lugar para o nosso casamento foi uma decisão natural. Queríamos que este dia acontecesse num espaço que representa as nossas raízes, a importância da família e os valores que desejamos levar connosco para a vida.",
      },
      {
        en: "We hope you can also feel the affection we have for this house, and that you take with you a beautiful memory of this very special place.",
        pt: "Esperamos que também vocês possam sentir o carinho que temos por esta casa e que levem convosco uma bonita recordação deste lugar tão especial.",
      },
    ] as Localized[],
  },
  venue: {
    name: {
      en: "Family House — Alcanhões",
      pt: "Casa de Família — Alcanhões",
    },
    city: "Alcanhões, Santarém, Portugal",
    address: "Rua Paulina da Cunha Silva, 22, 2000-369 Alcanhões, Santarém, Portugal",
    timeRange: {
      en: "Guest reception from 4:00 PM · Ceremony at 5:00 PM",
      pt: "Receção a partir das 16h00 · Cerimónia às 17h00",
    } satisfies Localized,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Paulina+da+Cunha+Silva+22+2000-369+Alcanh%C3%B5es+Santar%C3%A9m+Portugal",
    calendarUrl: "",
    parking: {
      title: { en: "Parking", pt: "Estacionamento" },
      body: {
        en: "Parking will be available near the property and clearly signposted. Please follow the organisers' directions to help with circulation and keep things comfortable for everyone.",
        pt: "Existirá estacionamento disponível nas imediações da propriedade, devidamente sinalizado. Pedimos apenas que sigam as indicações da organização para facilitar a circulação e garantir o conforto de todos os convidados.",
      },
    },
    arrival: {
      title: { en: "Arrival", pt: "Chegada" },
      body: {
        en: "Guest reception begins at 4:00 PM. The ceremony starts promptly at 5:00 PM, so we recommend arriving a little early.",
        pt: "A receção dos convidados terá início às 16h00. A cerimónia começará pontualmente às 17h00, pelo que recomendamos a chegada com alguma antecedência.",
      },
    },
    weather: {
      title: { en: "Weather", pt: "Meteorologia" },
      body: {
        en: "The wedding will mostly take place outdoors. Temperatures may be high in the afternoon with sun exposure, and may cool slightly in the evening. We recommend comfortable clothes, shoes suitable for walking on grass, and a light jacket for the night.",
        pt: "O casamento decorrerá maioritariamente ao ar livre. Durante a tarde, as temperaturas poderão ser elevadas e existirá exposição solar. Ao final do dia, a temperatura poderá baixar ligeiramente. Recomendamos roupa confortável, calçado adequado para caminhar na relva e um casaco leve para a noite.",
      },
    },
  },
  schedule: [
    {
      time: "16:00",
      title: { en: "Welcome", pt: "Welcome" },
      detail: {
        en: "Guest reception, welcome drinks and appetisers.",
        pt: "Receção dos convidados, welcome drinks e aperitivos.",
      },
    },
    {
      time: "17:00",
      title: { en: "Ceremony", pt: "Ceremony" },
      detail: {
        en: "The ceremony begins.",
        pt: "Início da cerimónia.",
      },
    },
    {
      time: "18:15",
      title: { en: "Congratulations", pt: "Congratulations" },
      detail: {
        en: "End of the ceremony, greetings for the couple, and photographs.",
        pt: "Fim da cerimónia, cumprimentos aos noivos e fotografias.",
      },
    },
    {
      time: "18:30",
      title: { en: "Dinner", pt: "Dinner" },
      detail: {
        en: "Buffet dinner: Butter Chicken, Naan Bread, Bacalhau com Natas, Vegetarian Lasagne, Coxinhas de Frango, Fresh Salads, Feijão Tropeiro.",
        pt: "Início do jantar buffet: Butter Chicken, Pão Naan, Bacalhau com Natas, Lasanha Vegetariana, Coxinhas de Frango, Saladas Frescas, Feijão Tropeiro.",
      },
    },
    {
      time: "19:15",
      title: { en: "Live Grill", pt: "Live Grill" },
      detail: {
        en: "Picanha grilled to order, served with rice and feijão tropeiro.",
        pt: "Picanha grelhada no momento, acompanhada de arroz e feijão tropeiro.",
      },
    },
    {
      time: "20:30",
      title: { en: "Games & Celebration", pt: "Games & Celebration" },
      detail: {
        en: "Games, music, and special moments prepared for every guest.",
        pt: "Jogos, música, convívio e momentos preparados para todos os convidados.",
      },
    },
    {
      time: "21:45",
      title: { en: "Pizza Party", pt: "Pizza Party" },
      detail: {
        en: "Freshly made pizzas, open bar, and the party continues.",
        pt: "Pizzas acabadas de fazer, bar aberto e continuação da festa.",
      },
    },
    {
      time: "22:30",
      title: { en: "Cake Cutting", pt: "Cake Cutting" },
      detail: {
        en: "Cake cutting and toast.",
        pt: "Corte do bolo e brinde.",
      },
    },
    {
      time: "23:00",
      title: { en: "Let's Dance!", pt: "Let's Dance!" },
      detail: {
        en: "The dance floor opens officially.",
        pt: "Abertura oficial da pista de dança.",
      },
    },
    {
      time: "Late",
      title: { en: "Celebrate", pt: "Celebrate" },
      detail: {
        en: "Music, dancing, great conversation, and many memories until the last guest leaves.",
        pt: "Música, dança, boa conversa e muitas memórias até ao último convidado.",
      },
    },
  ] as {
    time: string;
    title: Localized;
    detail: Localized;
  }[],
  dressCode: {
    title: { en: "How to Dress", pt: "Como se Vestir" },
    note: {
      en: "Our wedding will take place outdoors in the height of summer. We want everyone to feel comfortable and enjoy the day to the fullest. The wedding colours are inspired by nature and the warm tones of late summer — greens, terracottas, beiges, browns, and other natural shades. We also recommend lightweight, comfortable clothing; shoes suitable for walking on grass; a hat for the ceremony; and a light jacket for the end of the night.",
      pt: "O nosso casamento decorrerá ao ar livre, em pleno verão. Gostaríamos que todos se sentissem confortáveis para aproveitar o dia ao máximo. As cores do casamento inspiram-se na natureza e nos tons quentes do final do verão — verdes, terracotas, beges, castanhos e outros tons naturais. Recomendamos ainda: roupa leve e confortável; calçado adequado para caminhar na relva; um chapéu para a cerimónia; e um casaco leve para o final da noite.",
    } satisfies Localized,
  },
  hotelsIntro: {
    en: "For those travelling from farther away, we gathered a few nearby stay options so you can enjoy the weekend at ease.",
    pt: "Para quem nos acompanha de mais longe, reunimos algumas sugestões de alojamento nas proximidades, para que possam desfrutar do fim de semana com tranquilidade.",
  } satisfies Localized,
  hotels: [
    {
      name: "Santarém Hotel",
      address: "Santarém, Portugal",
      distance: {
        en: "≈ 15–20 min from the venue",
        pt: "≈ 15–20 min do local",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "Hotel option in Santarém with easy road access to Alcanhões.",
        pt: "Opção de hotel em Santarém com fácil acesso rodoviário a Alcanhões.",
      },
      url: "https://www.google.com/maps/search/?api=1&query=Santar%C3%A9m+Hotel+Portugal",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Santar%C3%A9m+Hotel+Portugal",
    },
    {
      name: "N1 Hostel Apartments",
      address: "Santarém, Portugal",
      distance: {
        en: "≈ 15–20 min from the venue",
        pt: "≈ 15–20 min do local",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "Apartment-style hostel stays, practical for groups and couples.",
        pt: "Apartamentos em formato hostel — prática para casais e grupos.",
      },
      url: "https://www.google.com/maps/search/?api=1&query=N1+Hostel+Apartments+Santar%C3%A9m",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=N1+Hostel+Apartments+Santar%C3%A9m",
    },
    {
      name: "Hotel Umu",
      address: "Santarém, Portugal",
      distance: {
        en: "≈ 15–20 min from the venue",
        pt: "≈ 15–20 min do local",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "Comfortable hotel stay close to the city centre.",
        pt: "Estadia confortável perto do centro da cidade.",
      },
      url: "https://www.google.com/maps/search/?api=1&query=Hotel+Umu+Santar%C3%A9m",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hotel+Umu+Santar%C3%A9m",
    },
    {
      name: "Flag Hotel Santarém",
      address: "Santarém, Portugal",
      distance: {
        en: "≈ 15–20 min from the venue",
        pt: "≈ 15–20 min do local",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "Well-located option for guests arriving by car.",
        pt: "Boa opção para quem chega de carro.",
      },
      url: "https://www.google.com/maps/search/?api=1&query=Flag+Hotel+Santar%C3%A9m",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Flag+Hotel+Santar%C3%A9m",
    },
    {
      name: "Casa do Lavre",
      address: "Near Santarém, Portugal",
      distance: {
        en: "Nearby countryside stay",
        pt: "Estadia próxima em ambiente mais rural",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "A more countryside-feel accommodation option near the area.",
        pt: "Sugestão com ambiente mais campestre na região.",
      },
      url: "https://www.google.com/maps/search/?api=1&query=Casa+do+Lavre",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+do+Lavre",
    },
    {
      name: "Airbnb",
      address: "Alcanhões & Santarém area",
      distance: {
        en: "Various distances",
        pt: "Várias distâncias",
      },
      price: { en: "", pt: "" },
      blurb: {
        en: "Search for stays in Alcanhões, Santarém, or nearby villages if you prefer a private home.",
        pt: "Procurem estadias em Alcanhões, Santarém ou aldeias próximas se preferirem uma casa privada.",
      },
      url: "https://www.airbnb.com/s/Santar%C3%A9m--Portugal/homes",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Airbnb+Santar%C3%A9m+Portugal",
    },
  ] as {
    name: string;
    address: string;
    distance: Localized;
    price: Localized;
    blurb: Localized;
    url: string;
    mapsUrl: string;
  }[],
  faq: [
    {
      q: {
        en: "Can I bring children?",
        pt: "Posso levar crianças?",
      },
      a: {
        en: "So that everyone can enjoy the celebration peacefully, we have chosen an adults-only wedding. Thank you for understanding — we hope you can still fully enjoy the day with us.",
        pt: "Para que todos possam desfrutar da celebração de forma tranquila, optámos por realizar um casamento reservado a adultos. Agradecemos a vossa compreensão e esperamos que possam aproveitar este dia connosco.",
      },
    },
    {
      q: {
        en: "What time should I arrive?",
        pt: "A que horas devo chegar?",
      },
      a: {
        en: "Guest reception begins at 4:00 PM and the ceremony starts promptly at 5:00 PM. We recommend arriving a little early so everyone can be present at the start of the ceremony.",
        pt: "A receção dos convidados terá início às 16h00 e a cerimónia começará pontualmente às 17h00. Recomendamos que cheguem com alguma antecedência para que todos possam estar presentes no início da cerimónia.",
      },
    },
    {
      q: {
        en: "Where can I park?",
        pt: "Onde posso estacionar?",
      },
      a: {
        en: "Parking will be available near the property and clearly signposted. Please follow the organisers' directions to help with circulation.",
        pt: "Existirá estacionamento disponível nas imediações da propriedade, devidamente sinalizado. Pedimos apenas que sigam as indicações da organização para facilitar a circulação.",
      },
    },
    {
      q: {
        en: "What should I wear?",
        pt: "O que devo vestir?",
      },
      a: {
        en: "The wedding will mostly take place outdoors. We recommend comfortable clothing, shoes suitable for walking on grass, and a light jacket for the end of the night.",
        pt: "O casamento decorrerá maioritariamente ao ar livre. Recomendamos roupa confortável, calçado adequado para caminhar na relva e um casaco leve para o final da noite.",
      },
    },
    {
      q: {
        en: "Will there be vegetarian or special meal options?",
        pt: "Existirão opções vegetarianas ou para restrições alimentares?",
      },
      a: {
        en: "Yes. In the RSVP form you can note any dietary restriction or special need. We will be glad to adapt the menu whenever possible.",
        pt: "Sim. No formulário de confirmação de presença poderão indicar qualquer restrição alimentar ou necessidade especial. Teremos todo o gosto em adaptar o menu sempre que possível.",
      },
    },
    {
      q: {
        en: "Where can I stay?",
        pt: "Onde posso ficar alojado?",
      },
      a: {
        en: "In the Where to Stay section we gathered a few accommodation suggestions near the wedding venue.",
        pt: "Na secção Onde Ficar reunimos algumas sugestões de alojamento próximas do local do casamento.",
      },
    },
    {
      q: {
        en: "Can I take photos during the ceremony?",
        pt: "Posso tirar fotografias durante a cerimónia?",
      },
      a: {
        en: "During the ceremony, we would love for you to simply live the moment with us. Photographers and videographers will capture every instant. After the ceremony, feel free to take as many photos as you like.",
        pt: "Gostaríamos que, durante a cerimónia, pudessem simplesmente viver o momento connosco. Teremos fotógrafos e videógrafos a registar cada instante. Depois da cerimónia, sintam-se totalmente à vontade para tirar todas as fotografias que desejarem.",
      },
    },
    {
      q: {
        en: "What if I have another question?",
        pt: "E se tiver outra dúvida?",
      },
      a: {
        en: "We would be happy to help. Please contact us directly through the details on this website.",
        pt: "Teremos todo o gosto em ajudar. Podem contactar-nos diretamente através dos contactos disponibilizados neste website.",
      },
    },
  ] as { q: Localized; a: Localized }[],
  gifts: {
    message: {
      en: "The greatest joy of this day will be sharing it with you. If you still wish to offer a gift as we begin this new chapter, you may use the options below. Above all, we thank you for your presence, your affection, and for being part of our story. You are special.",
      pt: "A maior alegria deste dia será podermos partilhá-lo convosco. Se, ainda assim, desejarem oferecer-nos uma lembrança para o início desta nova etapa das nossas vidas, poderão fazê-lo através das opções disponibilizadas abaixo. Acima de tudo, agradecemos a vossa presença, o vosso carinho e o facto de fazerem parte da nossa história. São especiais.",
    } satisfies Localized,
    methods: [
      {
        id: "revolut",
        label: { en: "Revolut", pt: "Revolut" },
        lines: {
          en: ["Send via Revolut:"],
          pt: ["Enviar via Revolut:"],
        },
        link: {
          href: "https://revolut.me/jonatas_rev25",
          text: "revolut.me/jonatas_rev25",
        },
      },
      {
        id: "mbway",
        label: { en: "MB WAY", pt: "MB WAY" },
        lines: {
          en: [
            "Jonatas — 931 738 181",
            "Sara — 932 107 115",
          ],
          pt: [
            "Jonatas — 931 738 181",
            "Sara — 932 107 115",
          ],
        },
      },
      {
        id: "bank",
        label: { en: "Bank transfer (EUR)", pt: "Transferência bancária (EUR)" },
        lines: {
          en: [
            "Beneficiary: Jonatas Carvalho",
            "IBAN: LT29 3250 0960 1972 2009",
            "BIC / SWIFT: REVOLT21",
            "Bank: Revolut Bank UAB",
            "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania",
            "Correspondent BIC: CHASDEFX",
          ],
          pt: [
            "Beneficiário: Jonatas Carvalho",
            "IBAN: LT29 3250 0960 1972 2009",
            "BIC / SWIFT: REVOLT21",
            "Banco: Revolut Bank UAB",
            "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania",
            "BIC correspondente: CHASDEFX",
          ],
        },
      },
    ] as {
      id: string;
      label: Localized;
      lines: Record<Lang, string[]>;
      link?: { href: string; text: string };
    }[],
  },
  contact: {
    title: { en: "Contact", pt: "Contactos" },
    people: [
      {
        name: "Sara",
        email: "",
        phone: "",
      },
      {
        name: "Jonatas",
        email: "",
        phone: "",
      },
    ],
    note: {
      en: "Email and phone details can be added here — or a day-of contact person.",
      pt: "Email e telemóvel podem ser adicionados aqui — ou o contacto de alguém responsável no próprio dia.",
    },
  },
  gallery: Array.from({ length: 19 }, (_, i) => `/photos/gallery-${i + 1}.jpeg`),
  heroImage: "/photos/hero.jpeg",
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
    rsvpCta: "RSVP",
    details: "The venue",
    detailsSub: "Everything you need to know",
    venue: "Address",
    googleMaps: "Google Maps",
    calendar: "Calendar",
    schedule: "The big day",
    scheduleSub: "What we've prepared for you",
    dressCode: "Dress code",
    dressCodeSub: "How to dress",
    accommodation: "Where to stay",
    accommodationSub: "Nearby options",
    hotelsNote:
      "Please confirm availability and prices directly with each place before booking.",
    map: "Map",
    website: "Website",
    faq: "FAQ",
    faqSub: "Simple answers to common questions.",
    gifts: "Gifts",
    giftsSub: "A special gesture",
    rsvpInfo: "Confirm your attendance",
    rsvpInfoBody:
      "Please confirm your presence through the form below so we can plan the day carefully for everyone.",
    questionnaire: "RSVP",
    questionnaireSub: "We look forward to seeing you!",
    fullName: "Name",
    email: "Email",
    attendingQ: "Will you be attending?",
    yesAttending: "Yes, I will be there",
    noAttending: "I will not be able to attend",
    companion: "Will you bring a guest?",
    companionName: "Guest name (if yes)",
    dietary: "Dietary restrictions",
    messageOptional: "Message for the couple",
    yes: "Yes",
    no: "No",
    submitRsvp: "Send RSVP",
    rsvpThanks: "Thank you! Your RSVP has been received.",
    madeWithLove: "With love",
    gallery: "A few moments",
    gallerySub: "A few moments from our story.",
    welcome: "Welcome",
    story: "Our story",
    foundation: "Our foundation",
    familyHouse: "The family house",
    contact: "Contact",
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
    rsvpCta: "RSVP",
    details: "O local",
    detailsSub: "Tudo o que precisam de saber",
    venue: "Morada",
    googleMaps: "Google Maps",
    calendar: "Calendário",
    schedule: "O grande dia",
    scheduleSub: "O que preparámos para vós",
    dressCode: "Código de vestimenta",
    dressCodeSub: "Como se vestir",
    accommodation: "Onde ficar",
    accommodationSub: "Sugestões próximas",
    hotelsNote:
      "Confirmem disponibilidade e preços directamente com cada alojamento antes de reservar.",
    map: "Mapa",
    website: "Website",
    faq: "Perguntas frequentes",
    faqSub: "Respostas simples e claras.",
    gifts: "Presentes",
    giftsSub: "Um gesto especial",
    rsvpInfo: "Confirme a sua presença",
    rsvpInfoBody:
      "Pedimos que confirmem a vossa presença através do formulário abaixo para que possamos planear o dia com cuidado.",
    questionnaire: "RSVP",
    questionnaireSub: "Esperamos por vós!",
    fullName: "Nome",
    email: "Email",
    attendingQ: "Vai estar presente?",
    yesAttending: "Sim, estarei presente",
    noAttending: "Não poderei comparecer",
    companion: "Vai trazer acompanhante?",
    companionName: "Nome do acompanhante (se sim)",
    dietary: "Restrições alimentares",
    messageOptional: "Mensagem para os noivos",
    yes: "Sim",
    no: "Não",
    submitRsvp: "Enviar RSVP",
    rsvpThanks: "Obrigado! A vossa confirmação foi recebida.",
    madeWithLove: "Com amor",
    gallery: "Alguns momentos",
    gallerySub: "Alguns momentos da nossa história.",
    welcome: "Bem-vindos",
    story: "A nossa história",
    foundation: "O nosso versículo",
    familyHouse: "A casa e a sua história",
    contact: "Contactos",
  },
} as const;
