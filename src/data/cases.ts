import type { Case } from "../models/caseModel";

export const cases: Case[] = [
  {
    id: "etrancas",
    title: "Etranças",
    type: "pessoal",

    problem:
      "Dificuldade na conexão entre clientes e trancistas, além da ausência de uma plataforma estruturada para agendamento de serviços afro, impactando a valorização cultural e a organização do atendimento.",

    actions: [
      "Desenvolvimento completo do backend da aplicação utilizando NestJS e TypeScript",
      "Modelagem de entidades como Usuário, Trancista, Agendamento, Categoria e Avaliação",
      "Implementação de operações CRUD com TypeORM e integração com banco relacional",
      "Estruturação da API REST seguindo boas práticas e separação de responsabilidades",
      "Organização da arquitetura visando escalabilidade e manutenção",
    ],

    results: [
      "Base sólida para uma plataforma escalável de serviços afro",
      "Padronização de fluxo de agendamentos e gestão de usuários",
      "Valorização de um nicho cultural com solução tecnológica dedicada",
      "Evolução contínua do projeto com foco em produto real",
    ],

    stack: ["Node.js", "TypeScript", "NestJS", "TypeORM"],
  },

  {
    id: "maria-gasolina",
    title: "Maria Gasolina",
    type: "acadêmico",

    problem:
      "Alto custo de deslocamento individual e falta de soluções acessíveis para compartilhamento de viagens, dificultando a mobilidade e aumentando gastos com combustível.",

    actions: [
      "Desenvolvimento fullstack da aplicação durante o bootcamp",
      "Criação do frontend com React, TypeScript e Vite",
      "Implementação de interface responsiva com navegação entre páginas (perfil, corridas, histórico)",
      "Desenvolvimento do backend com NestJS e TypeORM",
      "Integração entre frontend e API REST",
      "Estruturação da lógica de corridas e relacionamento entre usuários",
    ],

    results: [
      "Plataforma funcional para compartilhamento de viagens",
      "Redução potencial de custos de deslocamento entre usuários",
      "Experiência completa de desenvolvimento fullstack em equipe",
      "Aplicação de boas práticas de arquitetura e comunicação entre serviços",
    ],

    stack: ["React", "TypeScript", "Vite", "NestJS", "TypeORM", "MySQL"],
  },

  {
    id: "upbody",
    title: "UpBody",
    type: "acadêmico",

    problem:
      "Profissionais da área fitness enfrentam dificuldades na organização de treinos, acompanhamento de alunos e gestão de informações em um único sistema.",

    actions: [
      "Desenvolvimento fullstack da plataforma em equipe no prazo de 6 dias",
      "Criação de funcionalidades para gestão de usuários, treinos e aulas",
      "Implementação do frontend com React, TypeScript e Tailwind",
      "Desenvolvimento do backend com NestJS, TypeORM e MySQL",
      "Estruturação de API REST com arquitetura limpa",
      "Foco em responsividade e usabilidade da interface",
    ],

    results: [
      "Entrega de uma aplicação completa em curto prazo",
      "Centralização da gestão de alunos e treinos em um único sistema",
      "Melhoria na organização do trabalho de profissionais fitness",
      "Experiência prática em desenvolvimento ágil e colaborativo",
    ],

    stack: ["React", "TypeScript", "Tailwind", "NestJS", "TypeORM", "MySQL"],
  },

  {
    id: "automacao-comercial",
    title: "Automação de Processos Comerciais",
    type: "profissional",

    problem:
      "Baixa eficiência operacional em processos comerciais, com dificuldade de organização de contatos, acompanhamento de clientes e conversão em vendas.",

    actions: [
      "Criação de workflows personalizados para organização de contatos",
      "Padronização de processos comerciais",
      "Estruturação de acompanhamento de leads e clientes",
      "Análise de relatórios de performance",
      "Aplicação de estratégias para melhoria de conversão",
    ],

    results: [
      "Aumento de 80% no volume de contatos realizados",
      "Crescimento de 30% na taxa de conversão em vendas",
      "Melhoria significativa na eficiência operacional",
      "Processos mais organizados e escaláveis",
    ],
  },

  {
    id: "gestao-vendas",
    title: "Gestão e Performance em Vendas",
    type: "profissional",

    problem:
      "Baixo índice de fechamento de vendas e falta de acompanhamento estruturado de metas e performance da equipe.",

    actions: [
      "Liderança de equipe comercial",
      "Definição e acompanhamento de metas",
      "Criação de estratégias comerciais",
      "Monitoramento de indicadores de performance",
    ],

    results: [
      "Aumento de 40% no índice de fechamento de vendas",
      "Melhoria na previsibilidade de resultados",
      "Equipe mais alinhada e orientada a metas",
    ],
  },
];
