export type Project = {
  id: string;
  title: string;

  description: {
    card: string;
    summary: string;
    full: string;
  };

  context?: string; // acadêmico, pessoal, etc
  impact?: string; // objetivo ou valor do projeto

  stack: string[];
  highlights?: string[];

  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "apkoukan",
    title: "ApKoukan API",

    description: {
      card: "API REST com autenticação JWT e arquitetura em camadas.",

      summary:
        "Projeto backend desenvolvido com NestJS focado em autenticação, organização em camadas e documentação de endpoints com Swagger.",

      full: "ApKoukan é uma API REST construída com NestJS e TypeORM, com foco em boas práticas de arquitetura backend. O projeto implementa autenticação via JWT, proteção de rotas e organização em camadas (controllers, services e repositories). Também conta com documentação interativa via Swagger, permitindo visualização e teste dos endpoints. O objetivo foi simular um ambiente real de desenvolvimento backend, priorizando segurança, escalabilidade e clareza de código.",
    },

    context: "Projeto pessoal com foco em backend",
    impact:
      "Simula cenários reais de autenticação e organização de APIs escaláveis.",

    stack: ["NestJS", "TypeORM", "PostgreSQL", "JWT"],

    highlights: [
      "Autenticação JWT",
      "Proteção de rotas",
      "Documentação com Swagger",
      "Arquitetura em camadas",
    ],

    github: "https://github.com/Akanni-Silva/ApKoukan",
  },

  {
    id: "case-monks",
    title: "Case Monks (RevOps)",

    description: {
      card: "Auditoria e limpeza de dados com geração de insights.",

      summary:
        "Projeto de análise de dados focado em auditoria, tratamento e geração de insights a partir de uma base comercial com inconsistências.",

      full: "Este projeto simula um cenário real de Revenue Operations (RevOps), onde foi realizada a auditoria, limpeza e análise de uma base de dados comerciais. Utilizando Python e Pandas, foram identificados problemas de qualidade nos dados, realizadas correções e consolidação de informações, além da geração de insights estratégicos. O projeto também inclui visualizações e um dashboard para facilitar a interpretação dos dados e apoiar tomada de decisão.",
    },

    context: "Case técnico (simulação de cenário real)",
    impact:
      "Demonstra capacidade de análise de dados, identificação de inconsistências e geração de insights acionáveis.",

    stack: ["Python", "Pandas", "Data Cleaning"],

    highlights: [
      "Limpeza de dados",
      "Análise exploratória",
      "Geração de insights",
      "Dashboard",
    ],

    github:
      "https://github.com/Akanni-Silva/Case-Tecnico-Estagio-Operations-Monks",
  },
];
