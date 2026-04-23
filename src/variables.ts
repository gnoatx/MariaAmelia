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
  cardText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
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
      title: 'Lorem',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      icon: 'placeholder-icon', 
      title: 'Lorem',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      icon: 'placeholder-icon', 
      title: 'Lorem',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      icon: 'placeholder-icon', 
      title: 'Lorem',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
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
  social: [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/mameliaaltobelli/'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/maria-am%C3%A9lia-altobelli-teixeira-pinto-a6148824/'
    },
    {
      name: '(11) 99928-2406',
      icon: Whatsapp,
      href: 'https://wa.me/+5511999282406'
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