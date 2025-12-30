import { FileText, Recycle, ShieldCheck, Activity, GraduationCap, ClipboardCheck, Lightbulb, UserCheck, Scale, Factory, Droplets, Wind } from 'lucide-react';
import { ContactInfo, Service, Project, Value } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone1: "+244 936051450",
  phone2: "+244 937676390",
  email: "astracasolucoes@gmail.com",
  address: "Urbanização Nova-Vida, Rua 50, prédio 79 Apto 22, Luanda-Angola",
  nif: "5417201553"
};

export const SERVICES: Service[] = [
  {
    id: "eia",
    title: "Estudo de Impacte Ambiental (EIA)",
    description: "Análise detalhada de impactos para licenciamento e sustentabilidade de projetos.",
    icon: FileText,
    longDescription: "A elaboração de Estudos de Impacte Ambiental (EIA) é um instrumento fundamental de gestão ambiental preventiva. Na Astracã, realizamos a identificação, previsão e interpretação dos impactos ambientais de projetos, propondo medidas mitigadoras e potencializadoras. Este serviço é essencial para o processo de licenciamento ambiental e para garantir a viabilidade socioambiental de empreendimentos de grande porte.",
    features: [
      "Levantamento de dados primários e secundários",
      "Identificação e avaliação de impactos",
      "Definição de medidas mitigadoras",
      "Elaboração de Programas Ambientais",
      "Acompanhamento do processo de licenciamento"
    ],
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581093588401-fbb073656555?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/eia.svg"
  },
  {
    id: "relatorios-conformidade",
    title: "Relatórios de Conformidade Ambiental",
    description: "Documentação técnica para comprovar o atendimento às normas legais vigentes.",
    icon: ClipboardCheck,
    longDescription: "Os Relatórios de Conformidade Ambiental são essenciais para demonstrar que a sua empresa opera de acordo com a legislação e as condicionantes das licenças ambientais. Elaboramos diagnósticos precisos que atestam a regularidade das operações, evitam multas e fortalecem a imagem da empresa perante as autoridades e a sociedade.",
    features: [
      "Diagnóstico da situação atual",
      "Verificação de licenças e autorizações",
      "Análise de condicionantes ambientais",
      "Relatórios técnicos para órgãos ambientais",
      "Plano de ação para não conformidades"
    ],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507537297725-24a1c434c67b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/rca.svg"
  },
  {
    id: "viabilidade-residuos",
    title: "Sistemas de Gestão de Resíduos",
    description: "Estudos de viabilidade para instalação de sistemas eficientes de tratamento de resíduos.",
    icon: Lightbulb,
    longDescription: "Desenvolvemos estudos de viabilidade técnica e econômica para a implementação de sistemas de gestão de resíduos sólidos e líquidos. Avaliamos as melhores tecnologias disponíveis, custos de implantação e operação, garantindo soluções sustentáveis e financeiramente viáveis para o correto gerenciamento dos resíduos da sua organização.",
    features: [
      "Análise gravimétrica de resíduos",
      "Estudo de tecnologias de tratamento",
      "Análise de viabilidade econômica",
      "Dimensionamento de sistemas",
      "Projetos de aterros e centrais de triagem"
    ],
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/evsr.svg"
  },
  {
    id: "acompanhamento-tecnico",
    title: "Acompanhamento Técnico",
    description: "Suporte contínuo para garantir conformidade com a legislação nacional.",
    icon: UserCheck,
    longDescription: "Oferecemos acompanhamento técnico especializado para garantir que todas as atividades da sua empresa estejam em permanente conformidade com a legislação ambiental nacional. Nossa equipe atua como um parceiro estratégico, monitorando mudanças na lei, orientando sobre procedimentos e assegurando a regularidade jurídico-ambiental do seu negócio.",
    features: [
      "Monitoramento legislativo constante",
      "Assessoria técnica mensal",
      "Apoio em renovação de licenças",
      "Interlocução com órgãos ambientais",
      "Prevenção de passivos ambientais"
    ],
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/al.svg"
  },
  {
    id: "auditoria-legal",
    title: "Auditorias de Conformidade Legal",
    description: "Verificação rigorosa do cumprimento dos requisitos legais ambientais.",
    icon: Scale,
    longDescription: "As Auditorias de Conformidade Legal são processos sistemáticos e independentes para avaliar se a empresa está cumprindo todas as leis, regulamentos e normas ambientais aplicáveis. Identificamos gaps, riscos de penalidades e propomos ações corretivas imediatas para blindar a empresa contra sanções e melhorar seu desempenho ambiental.",
    features: [
      "Checklist de requisitos legais",
      "Inspeção documental e física",
      "Relatório de não conformidades",
      "Plano de ação corretiva",
      "Due diligence ambiental"
    ],
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "/img/servicos/law.svg",
      "/img/servicos/law.jpg"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/aac.svg",
    hideIcon: true
  },
  {
    id: "auditoria-operations",
    title: "Auditorias Off/Onshore",
    description: "Auditorias especializadas em operações petrolíferas e industriais.",
    icon: Factory,
    longDescription: "Realizamos auditorias técnicas especializadas em ambientes complexos como plataformas offshore e instalações industriais onshore. Focamos na verificação de procedimentos operacionais, gestão de riscos, planos de emergência e controle de poluição, garantindo que as operações críticas sigam os mais altos padrões de segurança e meio ambiente.",
    features: [
      "Auditoria de operações offshore",
      "Inspeção de instalações industriais",
      "Verificação de planos de emergência",
      "Auditoria de fornecedores",
      "Gestão de riscos operacionais"
    ],
    images: [
      "/img/servicos/onshorecapa.jpg",
      "/img/servicos/onshore.png",
      "/img/servicos/onshore2.png"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/off.svg",
    hideIcon: true,
    overlayOpacity: "0.3"
  },
  {
    id: "monitorizacao-qualidade",
    title: "Qualidade do Ar, Água e Solo",
    description: "Monitorização e análise laboratorial de parâmetros ambientais.",
    icon: Droplets,
    longDescription: "Oferecemos serviços completos de monitorização da qualidade ambiental (Ar, Água e Solo). Utilizamos equipamentos calibrados e laboratórios certificados para garantir a confiabilidade dos dados. O monitoramento contínuo permite detectar contaminações precocemente e assegurar a qualidade dos recursos naturais na área de influência do seu projeto.",
    features: [
      "Amostragem e análise de água",
      "Monitoramento da qualidade do ar",
      "Investigação de passivos no solo",
      "Monitoramento de ruídos",
      "Relatórios de tendências"
    ],
    images: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/me.svg"
  },
  {
    id: "monitoramento-efluentes",
    title: "Efluentes e Emissões",
    description: "Controle e monitoramento de efluentes líquidos e emissões gasosas.",
    icon: Wind,
    longDescription: "O controle de efluentes líquidos e emissões atmosféricas é vital para evitar poluição e danos à saúde. Realizamos a caracterização físico-química de efluentes e o monitoramento de chaminés e fontes fixas de emissão, garantindo que os descartes estejam dentro dos limites estabelecidos pelas normas técnicas e legais.",
    features: [
      "Monitoramento de chaminés (Isocinético)",
      "Análise de efluentes industriais e domésticos",
      "Controle de Estações de Tratamento (ETAR/ETDI)",
      "Inventário de emissões atmosféricas",
      "Eficiência de sistemas de controle"
    ],
    images: [
      "/img/servicos/ef.jpg",
      "/img/servicos/ef2.jpg",
      "/img/servicos/ef3.png"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/aop.svg",
    hideIcon: true,
    overlayOpacity: "0.3"
  },
  {
    id: "capacitacao",
    title: "Capacitação em Gestão",
    description: "Formação em gestão ambiental e legislação aplicada.",
    icon: GraduationCap,
    longDescription: "Investir na formação da equipe é essencial para o sucesso da gestão ambiental. Promovemos cursos e palestras sobre legislação ambiental, Sistema de Gestão Ambiental (ISO 14001) e melhores práticas de sustentabilidade, capacitando gestores e colaboradores para tomarem decisões conscientes e responsáveis.",
    features: [
      "Cursos In-company",
      "Interpretação da ISO 14001",
      "Atualização em Legislação Ambiental",
      "Formação de auditores internos",
      "Palestras de conscientização"
    ],
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "/img/cap1.jpg",
      "/img/cap2.jpg"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/aac.svg"
  },
  {
    id: "treinamento-residuos",
    title: "Treinamento em Resíduos",
    description: "Treinamento especializado em gestão e manuseio de resíduos.",
    icon: Recycle,
    longDescription: "O manuseio incorreto de resíduos representa riscos graves. Oferecemos treinamentos práticos e teóricos focados na segregação, acondicionamento, transporte e destinação final de resíduos. Nossos treinamentos visam garantir a segurança dos trabalhadores e a eficiência operacional na gestão de resíduos.",
    features: [
      "Práticas de segregação de resíduos",
      "Manuseio de resíduos perigosos",
      "Uso de EPIs na gestão de resíduos",
      "Procedimentos de emergência com resíduos",
      "Minimização e reciclagem"
    ],
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    highlight: true,
    backgroundImage: "/img/servicos/14.svg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Estudo de Impacte Ambiental Onshore",
    client: "SHININGSTAR ICARUS (SU) LIMITADA",
    category: "Consultoria Ambiental",
    description: "Realização completa do EIA para novas instalações de exploração.",
    fullDescription: "A Astracã foi contratada para liderar o Estudo de Impacte Ambiental (EIA) de uma nova área de exploração onshore. Este projeto envolveu uma caracterização exaustiva da linha de base ambiental, identificação de espécies sensíveis e modelagem de dispersão de poluentes. Nossa equipe trabalhou em estreita colaboração com as comunidades locais para garantir que todas as preocupações fossem abordadas e mitigadas.",
    challenge: "O principal desafio foi realizar o levantamento de campo em uma área remota e ecologicamente sensível durante a estação das chuvas, garantindo zero incidentes de segurança e mínimo impacto durante o estudo.",
    solution: "Implementamos uma logística robusta com apoio aéreo e tecnologias de sensoriamento remoto. Desenvolvemos um plano de gestão específico para a biodiversidade local que permitiu a aprovação do licenciamento em tempo recorde.",
    location: "Soyo, Angola",
    date: "2023",
    imageUrl: "/img/servicos/cliente.png",
    gallery: [
      "https://images.unsplash.com/photo-1473862170180-84427c485aca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582285149340-9a25b398df96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535201395995-6ab2518e2468?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "proj2",
    title: "Plano de Gestão de Resíduos Industriais",
    client: "Chevron",
    category: "Gestão de Resíduos",
    description: "Plano diretor para tratamento e descarte de resíduos em base logística.",
    fullDescription: "Desenvolvemos um Plano de Gestão de Resíduos (PGR) abrangente para uma das maiores bases logísticas de apoio ao setor petrolífero. O projeto incluiu a segregação na fonte, otimização de rotas de coleta e a implementação de uma unidade de compostagem para resíduos orgânicos, reduzindo significativamente o volume enviado para aterros.",
    challenge: "O cliente precisava reduzir os custos operacionais de transporte de resíduos perigosos e melhorar a conformidade com as novas diretrizes do Ministério do Ambiente.",
    solution: "Introduzimos tecnologias de tratamento in-situ e renegociamos contratos com parceiros de reciclagem. O resultado foi uma redução de 30% nos custos operacionais no primeiro ano.",
    location: "Cabinda, Angola",
    date: "2022",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503596476-1c12a8ab9a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "proj3",
    title: "Monitoramento da Qualidade do Ar",
    client: "PRODEL",
    category: "Monitoramento",
    description: "Monitorização de emissões gasosas nas imediações de central térmica.",
    fullDescription: "Executamos uma campanha intensiva de monitoramento da qualidade do ar no entorno de uma central térmica. Instalamos estações automáticas para medir NOx, SOx, material particulado (PM10 e PM2.5) e COVs, garantindo que as emissões estivessem dentro dos padrões estabelecidos pela legislação angolana.",
    challenge: "Garantir a integridade dos dados em um ambiente com alta variabilidade climática e acesso restrito para manutenção dos equipamentos.",
    solution: "Utilizamos equipamentos de telemetria em tempo real, permitindo o acompanhamento remoto dos dados e alertas imediatos em caso de excedência dos limites normativos.",
    location: "Luanda, Angola",
    date: "2023",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581093588401-fbb073656555?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "proj4",
    title: "Auditoria de Conformidade Legal",
    client: "Eni",
    category: "Auditoria",
    description: "Auditoria ambiental para verificação de conformidade no setor petrolífero.",
    fullDescription: "Realizamos uma auditoria ambiental completa (Due Diligence) para verificar o nível de conformidade legal das instalações onshore. O escopo incluiu a revisão de licenças, gestão de resíduos, tratamento de efluentes e planos de emergência.",
    challenge: "Analisar um grande volume de documentação histórica e verificar a implementação prática dos procedimentos em um curto espaço de tempo.",
    solution: "Mobilizamos uma equipe sênior de auditores que aplicou um sistema de checklist digital proprietário, agilizando a recolha de evidências e a elaboração do relatório final com plano de ação corretiva.",
    location: "Luanda, Angola",
    date: "2024",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

export const CLIENTS = [
  "PRODEL", "Chevron", "Sonangol", "Eni", "Sonils", "Sapien", "SSI", "Partnersons", "Shining Star Icar"
];

export const VALUES: Value[] = [
  {
    id: "01",
    title: "Respeito e valorização dos clientes",
    description: "Cada cliente é único e merece soluções adaptadas às suas necessidades. Trabalhamos para criar relacionamentos duradouros, baseados em confiança e resultados."
  },
  {
    id: "02",
    title: "Responsabilidade socioambiental",
    description: "Acreditamos que o verdadeiro progresso só é possível quando respeitamos o equilíbrio entre desenvolvimento humano e preservação ambiental."
  },
  {
    id: "03",
    title: "Excelência técnica e profissionalismo",
    description: "Mantemos um padrão elevado de qualidade em todas as nossas entregas, investindo em formação contínua, tecnologia e boas práticas internacionais."
  }
];