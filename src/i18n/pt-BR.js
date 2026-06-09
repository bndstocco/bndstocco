const ptBR = {
  nav: {
    links: [
      { href: '#about', label: 'Sobre' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Experiência' },
      { href: '#certifications', label: 'Certificações' },
      { href: '#contact', label: 'Contato' },
    ],
  },
  hero: {
    eyebrow: 'Web Developer — Passo Fundo, BR',
    name: ['Bernardo', 'Stocco', 'Silva'],
    role: 'Desenvolvedor especialista em WordPress, PHP e integrações ERP/API com foco em performance, UI/UX e soluções que entregam resultado.',
    roleAccent: ['WordPress, PHP', 'ERP/API'],
    stats: [
      { num: '3', suffix: '+', label: 'Anos de exp.' },
      { num: '40', suffix: '+', label: 'Certificações' },
      { num: '15', suffix: '+', label: 'Projetos concluídos' },
    ],
    cta1: 'Ver experiência',
    cta2: 'Entrar em contato',
    scroll: 'Scroll',
  },
  about: {
    tag: '01 — Sobre',
    title: 'Construo a web\nque você precisa.',
    desc: 'Soluciono problemas reais com código limpo e arquitetura pensada para o longo prazo. Da integração de ERP ao pixel perfeito no front.',
    highlight: 'Profissional com forte expertise em WordPress, PHP e soluções personalizadas para empresas que precisam de mais do que um site.',
    paragraphs: [
      'Ao longo dos últimos anos, trabalhei com <strong>integração de sistemas ERP</strong> (SAP B1), desenvolvimento de plugins e temas customizados, automação de processos com n8n, e otimização de performance e SEO para sites ligados ao maior banco do país.',
      'Minha abordagem combina visão técnica com sensibilidade de design — uso <strong>Figma e princípios de UI/UX</strong> para entregar interfaces que funcionam e que as pessoas querem usar.',
    ],
    tags: ['PHP', 'WordPress', 'React', 'WooCommerce', 'SAP B1', 'Figma', 'n8n', 'SEO', 'Docker', 'MySQL'],
    certsHeader: 'Formação & certificados',
    certs: [
      { name: 'Análise e Desenvolvimento de Sistemas', provider: 'UNOPAR', year: '2024', icon: 'frontend' },
      { name: 'PHP e MySQL', provider: 'Alura', year: '2025', icon: 'php' },
      { name: 'PHP na Web: MVC', provider: 'Alura', year: '2025', icon: 'php' },
      { name: 'WordPress & Plugin Development', provider: 'Certificações diversas', year: '2024', icon: 'wordpress' },
      { name: '30+ certificações em PHP', provider: 'Portfolio completo', year: '2024', icon: 'php' },
    ],
  },
  skills: {
    tag: '02 — Competências',
    title: 'O que\neu faço.',
    desc: 'Domínio completo do ciclo de desenvolvimento web — do planejamento técnico ao deploy em produção.',
    cards: [
      {
        title: 'Backend & PHP',
        items: ['PHP 8.x avançado', 'Arquitetura MVC', 'MySQL & otimização de queries', 'REST API development', 'Integração SAP Business One', 'Autenticação & segurança'],
      },
      {
        title: 'WordPress & Plugins',
        items: ['Desenvolvimento de plugins custom', 'Temas do zero (custom themes)', 'WooCommerce avançado', 'Elementor & Page Builders', 'Hooks, filters, actions', 'WordPress multisites'],
      },
      {
        title: 'Frontend & UI/UX',
        items: ['React.js', 'HTML5, CSS3, JavaScript ES6+', 'Design de interfaces no Figma', 'Responsividade & acessibilidade', 'Performance & Core Web Vitals', 'Animações & micro-interações'],
      },
      {
        title: 'Integrações & APIs',
        items: ['SAP B1 via Service Layer', 'Webhooks & event-driven', 'Automações com n8n', 'Automação WhatsApp', 'Monitoramento de sistemas', 'Marketing automation'],
      },
      {
        title: 'Performance & SEO',
        items: ['Google Search Console', 'Google Analytics 4', 'SEO técnico avançado', 'Otimização de carregamento', 'Cache e CDN', 'Relatórios e análise de dados'],
      },
      {
        title: 'DevOps & Infra',
        items: ['Docker & containerização', 'Ngrok & túneis seguros', 'Implantação n8n self-hosted', 'Git & controle de versão', 'Suporte técnico & manutenção', 'Monitoramento e alertas'],
      },
    ],
  },
  experience: {
    tag: '03 — Experiência',
    title: 'Onde\natuei.',
    desc: 'Experiência real em ambientes exigentes, trabalhando com marcas associadas ao maior banco do Brasil.',
    totalLabel: 'Total',
    totalSub: 'de experiência em desenvolvimento web',
    companies: 'Empresas',
    mainStack: 'Stack principal',
    items: [
      {
        period: 'out 2023 — mar 2026',
        periodShort: 'out 2023 — mar 2026',
        type: 'Tempo integral · Remoto',
        company: 'Share Media',
        position: 'Web Developer — 2 anos e 6 meses',
        bullets: [
          'Integração do WordPress com ERP SAP B1 via desenvolvimento de plugins customizados',
          'Automação de gestão e integração de sistemas internos',
          'Desenvolvimento de e-commerce e interfaces web de alta performance',
          'Melhoria de desempenho e SEO para sites associados ao maior banco do país',
          'Automação para WhatsApp e monitoramento de status de sistemas',
          'Criação de temas WordPress e reestruturação de identidade visual',
          'Implantação do n8n com Docker e ngrok para automação de marketing',
        ],
        skills: ['PHP', 'WordPress', 'SAP B1', 'n8n', 'Docker', 'WooCommerce', 'Elementor', 'SEO'],
      },
      {
        period: 'abr 2023 — set 2023',
        periodShort: 'abr 2023 — set 2023',
        type: 'Tempo integral · Remoto',
        company: 'Arara Resultados',
        position: 'Web Developer — 6 meses',
        bullets: [
          'Integração de sistemas e APIs externas',
          'Desenvolvimento de interfaces web responsivas',
          'Manutenção e evolução de sites existentes',
        ],
        skills: ['JavaScript', 'Elementor', 'WordPress', 'PHP'],
      },
    ],
  },
  certifications: {
    tag: '04 — Certificações',
    title: '40+\ncredenciais.',
    desc: 'Mais de 30 certificações em PHP consolidam a profundidade técnica em back-end e desenvolvimento web.',
    items: [
      { label: 'PHP', name: 'PHP e MySQL', meta: 'Alura — fev 2025', icon: 'php' },
      { label: 'PHP', name: 'PHP na Web: Padrão MVC', meta: 'Alura — jan 2025', icon: 'php' },
      { label: 'WordPress', name: 'Plugin Development', meta: 'Certificação profissional', icon: 'wordpress' },
      { label: 'Frontend', name: 'HTML, CSS & JavaScript', meta: 'Múltiplas certificações', icon: 'frontend' },
      { label: 'Analytics', name: 'Google Search Console', meta: '2 recomendações de competência', icon: 'analytics' },
      { label: 'Analytics', name: 'Google Analytics', meta: '2 recomendações de competência', icon: 'analytics' },
      { label: 'E-commerce', name: 'WooCommerce Avançado', meta: 'Certificação técnica', icon: 'ecommerce' },
      { label: 'PHP', name: '30+ Certificações PHP', meta: 'Portfolio completo', icon: 'php' },
    ],
  },
  contact: {
    tag: '05 — Contato',
    title: 'Vamos\nconstruir\nalgo.',
  },
  footer: 'Web Developer // Passo Fundo, BR',
};

export default ptBR;
