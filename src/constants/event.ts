export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/HCUO7AfGW1x05XHk2fTi1Z'

export const EVENT_GROUP_URL = '/redirect'

export const EVENT_DATES = {
  range: 'De 09 a 11 de Junho',
  detail: 'Aulas e lives especiais',
} as const

export const HERO = {
  title: {
    lead: 'Descubra como',
    keep: 'comprar semijoias',
  },
  titleHighlight: ['direto da fonte e vender', 'com mais margem'],
  subtitle:
    'Entre para o evento e entenda como funciona o caminho por trás das peças que chegam ao mercado: da fábrica na China até a revenda no Brasil.',
  audience:
    'Um evento para quem já vende semijoias, quer começar a vender ou busca um fornecedor com mais variedade, qualidade e oportunidade de lucro.',
  cta: 'Entrar no grupo do evento',
} as const

export const AUDIENCE = {
  eyebrow: 'Para quem vende',
  title: 'Esse evento é para você',
  titleHighlight: 'que quer vender semijoias com mais estratégia',
  intro:
    'A Fonte das Semijoias foi criado para quem olha para o mercado de semijoias e sabe que existe oportunidade, mas ainda sente dificuldade em encontrar bons produtos, bons preços e margens que realmente façam sentido.',
  subtitle: 'É para quem:',
  points: [
    {
      label: 'Margem',
      text: 'Já vende semijoias e quer melhorar sua margem de lucro.',
    },
    {
      label: 'Nova linha',
      text: 'Vende outros produtos e quer adicionar uma nova linha com alto potencial de revenda.',
    },
    {
      label: 'Primeiro passo',
      text: 'Tem vontade de começar, mas ainda não sabe por onde comprar.',
    },
    {
      label: 'Importação',
      text: 'Quer entender como funciona a importação direto da fábrica.',
    },
    {
      label: 'Qualidade',
      text: 'Busca peças com qualidade, variedade e preço competitivo.',
    },
  ],
  closing: 'Aqui, a ideia é simples: mostrar como comprar melhor para vender melhor.',
} as const

export const IMPORT = {
  eyebrow: 'Conteúdo do evento',
  title: 'Uma visão clara sobre',
  titleHighlight: 'importação, fornecedor e venda de semijoias',
  intro:
    'Durante o evento, vamos mostrar por que comprar direto da fonte pode ser uma grande vantagem para quem quer trabalhar com semijoias.',
  subtitle: 'Você vai entender:',
  topics: [
    {
      label: 'Margem',
      text: 'Por que comprar direto da fábrica pode aumentar suas margens.',
    },
    {
      label: 'Importação',
      text: 'Como funciona o processo de importação de semijoias.',
    },
    {
      label: 'Fornecedor',
      text: 'Quais cuidados você precisa ter antes de escolher um fornecedor.',
    },
    {
      label: 'Posicionamento',
      text: 'Como se posicionar melhor como importadora ou revendedora.',
    },
    {
      label: 'Recorrência',
      text: 'Como enxergar a semijoia como um produto de venda recorrente e lucrativo.',
    },
  ],
  closing:
    'Além disso, você também vai conhecer melhor a Xingyu, entender a qualidade das peças e ver oportunidades especiais durante as lives.',
} as const

export const CAROUSEL_ITEMS = [
  { id: '1', src: '/img1.webp', alt: 'Semijoias em destaque' },
  { id: '2', src: '/img2.webp', alt: 'Semijoias em destaque' },
  { id: '3', src: '/img3.jpg', alt: 'Semijoias em destaque' },
] as const

export const SCHEDULE = {
  eyebrow: '09 a 18 de junho',
  title: 'Programação do evento',
  titleHighlight: 'Fonte das Semijoias',
  days: [
    {
      day: '09',
      title: 'Live de abertura',
      description:
        'Vamos falar sobre as vantagens de comprar direto da fonte, apresentar a Xingyu e explicar por que a qualidade das peças faz diferença na hora de vender.',
    },
    {
      day: '10',
      title: 'Processo de importação',
      description:
        'Uma aula para mostrar o caminho completo da importação e como esse modelo pode abrir novas possibilidades para quem vende semijoias.',
    },
    {
      day: '11',
      title: 'Como vender melhor',
      description:
        'Vamos falar sobre posicionamento, venda e como se apresentar no mercado como alguém que trabalha com produtos importados.',
    },
    {
      day: '14',
      title: 'Live especial de domingo',
      description:
        'Uma live focada em semijoias da fonte, com apresentação de produtos e oportunidades para quem quer comprar melhor.',
    },
    {
      day: '18',
      title: 'Live de encerramento',
      description:
        'A última oportunidade para acompanhar as condições especiais e ver mais peças da coleção.',
    },
  ],
} as const

export const FINAL_CTA = {
  eyebrow: 'Evento gratuito',
  title: 'Entre agora para o grupo oficial do evento',
  description:
    'É pelo grupo que você vai receber os avisos, horários, links das lives e informações importantes da Fonte das Semijoias.',
  cta: 'Entrar no grupo agora',
  note: 'Evento gratuito. As vagas no grupo podem ser limitadas.',
} as const
