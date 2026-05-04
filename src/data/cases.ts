export type Case = {
  id: string;
  title: string;
  type: string; // pessoal, acadêmico, etc

  problem: string;
  actions: string[];
  results: string[];

  stack?: string[];
};

export const cases: Case[] = [
  {
    id: "apkoukan",
    title: "ApKoukan API",
    type: "Projeto pessoal — Backend",

    problem:
      "Necessidade de estruturar uma API com autenticação segura e organização escalável, simulando um ambiente real de backend.",

    actions: [
      "Implementação de autenticação com JWT",
      "Estruturação em camadas (controller, service, repository)",
      "Documentação de endpoints com Swagger",
    ],

    results: [
      "API funcional com fluxo completo de autenticação",
      "Código organizado e escalável",
      "Simulação prática de ambiente backend profissional",
    ],

    stack: ["NestJS", "TypeORM", "PostgreSQL", "JWT"],
  },

  {
    id: "case-monks",
    title: "Case Monks (RevOps)",
    type: "Projeto acadêmico — Dados",

    problem:
      "Base de dados comerciais com inconsistências, duplicações e baixa confiabilidade para análise.",

    actions: [
      "Limpeza e tratamento de dados com Pandas",
      "Padronização e consolidação de registros",
      "Análise exploratória e geração de insights",
    ],

    results: [
      "Dados estruturados e confiáveis",
      "Identificação de padrões relevantes",
      "Dashboard para apoio à tomada de decisão",
    ],

    stack: ["Python", "Pandas"],
  },
];
