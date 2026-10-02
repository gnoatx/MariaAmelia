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
  cardText: 'Um olhar cuidadoso para pessoas, escolhas e caminhos.',
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
      text: 'Um espaço de escuta, compreensão e cuidado emocional.'
    },
    {
      icon: 'qualidade-icon', 
      title: 'Qualidade de vida',
      text: 'Acolhimento para compreender sentimentos, desafios e possibilidades.'
    },
    {
      icon: 'escolha-icon', 
      title: 'Escolha assertiva',
      text: 'Clareza para refletir sobre escolhas, interesses e caminhos profissionais.'
    },
    {
      icon: 'proposito-icon', 
      title: 'Propósito de carreira',
      text: 'Apoio com processos de avaliação de pessoas para recrutamento, seleção e carreira.'
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
  callout: 'Espaço de escuta, reflexão e cuidado, respeitando seu momento e história.',
  button: {
    href: '#contato',
    text: 'Agende uma conversa'
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
        text: 'Conheça meu trabalho'
      },
      image: 'psicoterapia-illustration',
      description:
        <>
          <p>Um espaço de escuta, reflexão e cuidado.</p>
          <p>A psicoterapia pode ajudar a compreender melhor sentimentos, pensamentos, comportamentos e situações que fazem parte da nossa história.</p>
          <p>É um processo de autoconhecimento e elaboração, no qual é possível olhar para dificuldades, relações e escolhas com mais clareza, construindo novas formas de lidar com aquilo que traz sofrimento ou inquietação.</p>
          <p>Cada processo é único e acontece respeitando o momento, a história e as necessidades de cada pessoa.</p>
        </>
    },
    {
      id: 'orientacao',
      title: 'Orientação Profissional',
      button: {
        href: '#contato',
        text: 'Conheça o processo'  
      },
      image: 'orientacao-illustration',
      description:
        <>
          <p>Escolher uma profissão é uma decisão importante e envolve muito mais do que descobrir “o que combina comigo”.</p>
          <p>A Orientação Profissional é um processo de reflexão e autoconhecimento que ajuda o jovem a compreender seus interesses, habilidades, características pessoais, valores e expectativas para o futuro.</p>
          <p>Ao longo do processo, essas informações são integradas ao conhecimento sobre cursos, profissões e possibilidades de carreira, favorecendo uma escolha mais consciente e coerente com que quem busca é e com o que deseja construir.</p>
          <p>Mais do que apontar uma profissão, o objetivo é ampliar possibilidades e oferecer recursos para uma decisão com mais clareza e segurança.</p>
        </>
    },
    {
      id: 'avaliacao',
      title: 'Avaliação de Pessoas para Decisões Profissionais',
      button: {
        href: '#contato',
        text: 'Conheça este serviço'
      },
      image: 'orientacao-illustration',
      description:
        <>
          <p>Decisões sobre pessoas exigem mais do que analisar um currículo.</p>
          <p>A avaliação profissional oferece às empresas informações qualificadas para apoiar decisões relacionadas à seleção, promoção, mobilidade interna e desenvolvimento de profissionais.</p>
          <p>Por meio de entrevistas, análise de trajetória e instrumentos psicológicos adequados à finalidade da avaliação, são considerados aspectos como competências, características comportamentais, potencialidades e aderência às demandas da posição e do contexto organizacional.</p>
          <p>O objetivo é oferecer um olhar técnico e cuidadoso sobre cada profissional, contribuindo para decisões mais fundamentadas — tanto na chegada de novos talentos quanto nos movimentos de carreira dentro da organização.</p>
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