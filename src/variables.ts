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
  cardText: 'Sua jornada de autoconhecimento e bem-estar para uma vida com propósito.',
  button: {
    href: '#contato',
    text: 'Mude sua vida'
  }
}

export const benefitsVariables = {
  id: 'beneficios',
  sectionTitle: 'Lorem ipsum dolor sit amet',
  itemList: [
    {
      icon: 'placeholder-icon', 
      title: 'Equilíbrio emocional',
      text: 'Aprenda a lidar com seus sentimentos para uma rotina mais tranquila.'
    },
    {
      icon: 'placeholder-icon', 
      title: 'Qualidade de vida',
      text: 'Transforme sua saúde mental para viver com muito mais leveza.'
    },
    {
      icon: 'placeholder-icon', 
      title: 'Escolha assertiva',
      text: 'Encontre o caminho certo entre milhares de profissões com segurança.'
    },
    {
      icon: 'placeholder-icon', 
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
  sectionTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet excepturi, necessitatibus, reiciendis qui itaque.',
  callout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In libero dolorem eveniet dolorum soluta.',
  button: {
    href: '#contato',
    text: 'Exemplo de CTA'
  },
  illustration: {
    url: new URL('./assets/placeholder-icon.png', import.meta.url).href,
    altText: 'Placeholder'
  }
}

export const serviceVariables = {
  serviceList: [
    {
      id: 'servicos',
      title: 'Psicoterapia',
      button: {
        href: '#contato',
        text: 'Exemplo de CTA'
      },
      image: 'Toa-Heftiba',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?'
    },
    {
      id: 'orientacao',
      title: 'Orientação Profissional',
      button: {
        href: '#contato',
        text: 'Exemplo de CTA'  
      },
      image: 'Sandy-Ching',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?'
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
  credit: {
    name: 'Victor Gnoato',
    year: '2026',
    href: 'https://portfolio-gnoatx.vercel.app/'
  },
  legalDisclaimer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat velit veritatis! Iste quod explicabo ea sed maxime expedita ipsum inventore quis asperiores, numquam nisi aspernatur repudiandae, architecto ducimus obcaecati? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, unde corporis. Eos, nisi! Provident cum placeat fugit, doloribus minus similique quos esse quia vitae dolorem, neque quod a unde harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique ab voluptatibus explicabo quisquam aliquid delectus consectetur incidunt quibusdam laboriosam, illum optio odit debitis necessitatibus commodi hic fugiat nulla saepe?',
}