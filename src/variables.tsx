export const topBarVariables = {
  logoTitle: 'Maria Amélia Psicoterapia',
  navItems: [
    {
      href: '#beneficios',
      text: 'Benefícios'
    },
    {
      href: '#depoimentos',
      text: 'Depoimentos'
    },
    {
      href: '#servicos',
      text: 'Serviços'
    }
  ],
  contactButton: {
    href: '#contato',
    text: 'Contato'
  }
}

export const heroVariables = {
  // cardText: 'Sua jornada de autoconhecimento e bem-estar para uma vida com propósito.',
  cardText: 'Sua trajetória mais leve e mais feliz através de uma escuta atenta e respeitosa!',
  button: {
    href: '#contato',
    text: 'Mude sua vida'
  }
}

export const benefitsVariables = {
  id: 'beneficios',
  sectionTitle: 'Cultive seu Equilíbrio, Encontre seu Propósito',
  itemList: [
    {
      icon: 'equilibrio-icon', 
      title: 'Equilíbrio emocional',
      text: 'Aprenda a lidar com seus sentimentos para uma rotina mais tranquila.'
    },
    {
      icon: 'qualidade-icon', 
      title: 'Qualidade de vida',
      text: 'Transforme sua saúde mental para viver com muito mais leveza.'
    },
    {
      icon: 'escolha-icon', 
      title: 'Escolha assertiva',
      text: 'Encontre o caminho certo entre milhares de profissões com segurança.'
    },
    {
      icon: 'proposito-icon', 
      title: 'Propósito de carreira',
      text: 'Descubra sua vocação e planeje um futuro profissional com sentido.'
    }
  ],
  button: {
    href: '#contato',
    text: 'Quero saber mais'
  }
}

export const testimonialsVariables = {
  id: 'depoimentos',
  sectionTitle: 'Resultados que transformam: a experiência de quem escolheu viver com mais leveza e direção.',
  callout: 'Junte-se a tantas outras pessoas que decidiram não carregar mais o peso da dúvida e da ansiedade sozinhos.',
  button: {
    href: '#contato',
    text: 'Agende sua sessão agora'
  },
  illustration: {
    url: new URL('./assets/testimonials-illustration.avif', import.meta.url).href,
    altText: ''
  }
}

export const serviceVariables = {
  serviceList: [
    {
      id: 'servicos',
      title: 'Psicoterapia',
      button: {
        href: '#contato',
        text: 'Eu quero esse cuidado'
      },
      image: 'psicoterapia-illustration',
      description:
        <>
          <p>Sempre que ouvimos falar em algum tipo de terapia, pensamos:</p>
          <q>Será que é para mim? Será que é coisa para louco?</q>
          <p>Mas eu estou aqui para te dizer: Sim, a psicoterapia é para você! Na
verdade, é para todos.</p>
          <p>Para todos que querem investigar, buscar respostas para questões pessoais
e ressignificá-las, entendê-las de uma maneira diferente e, assim, viver uma
vida mais feliz, consciente e tranquila, dentro e fora do ambiente de trabalho.</p>
        </>
    },
    {
      id: 'orientacao',
      title: 'Orientação Profissional',
      button: {
        href: '#contato',
        text: 'Tome a decisão certa hoje'  
      },
      image: 'orientacao-illustration',
      description:
        <>
          <p>Escolher uma profissão não é uma tarefa fácil.</p>
          <p>É um momento da vida que gera muita ansiedade e medo.</p>
          <p>Portanto, tomar uma decisão com base em um estudo de perfil e no
mapeamento de suas habilidades, competências e interesses, realizado por
uma psicóloga especializada, é valiosíssimo em vários sentidos.</p>
          <p>A orientação vocacional e profissional traz segurança, promove o
autoconhecimento e evita uma escolha errada, que pode provocar imenso
estresse futuro.</p>
        </>
    }
  ]
}

import { Instagram, Linkedin, Whatsapp } from '@thesvg/react'
export const contactVariables = {
  id: 'contato',
  sectionTitle: 'Fale conosco',
  social: [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/mameliaaltobelli/'
    },
    {
      name: '(11) 99928-2406',
      icon: Whatsapp,
      href: 'https://wa.me/+5511999282406'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/maria-am%C3%A9lia-altobelli-teixeira-pinto-a6148824/'
    },
  ],
  documents: {
    name: 'Psicóloga Maria Amélia Altobelli',
    crp: '00000',
    cnpj: '00.000.000/0000-00'
  },
  creditCode: {
    name: 'Victor Gnoato',
    year: '2026',
    href: 'https://portfolio-gnoatx.vercel.app/'
  },
  creditDesign: {
    name: 'Vinícius de Oliveira',
    year: '2026',
    href: 'https://www.instagram.com/olive_vini/'
  },
  legalDisclaimer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat velit veritatis! Iste quod explicabo ea sed maxime expedita ipsum inventore quis asperiores, numquam nisi aspernatur repudiandae, architecto ducimus obcaecati? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, unde corporis. Eos, nisi! Provident cum placeat fugit, doloribus minus similique quos esse quia vitae dolorem, neque quod a unde harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique ab voluptatibus explicabo quisquam aliquid delectus consectetur incidunt quibusdam laboriosam, illum optio odit debitis necessitatibus commodi hic fugiat nulla saepe?',
}