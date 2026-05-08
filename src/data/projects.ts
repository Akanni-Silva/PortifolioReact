import type { Project } from "../models/projectsModel";

export const projects: Project[] = [
  {
    id: "apkoukan",

    title: "ApKoukan",

    context: "Projeto pessoal • Fullstack",

    impact:
      "Sistema criado para resolver uma necessidade real de organização de dados, com foco em escalabilidade, segurança e uso prático.",

    description: {
      card: "Aplicação fullstack com autenticação JWT, arquitetura escalável e integração completa frontend-backend.",

      summary:
        "Sistema fullstack desenvolvido com foco em arquitetura robusta, segurança e organização de dados em cenários reais.",

      full: `O ApKoukan é uma aplicação fullstack desenvolvida com o objetivo de resolver um problema real de organização e gerenciamento de informações, com foco em escalabilidade e segurança.

No backend, foi construída uma API REST utilizando NestJS e TypeORM, seguindo uma arquitetura em camadas (controllers, services e repositories). A aplicação conta com autenticação via JWT, proteção de rotas com guards e controle de acesso estruturado, garantindo segurança no fluxo de dados.

A modelagem do banco foi cuidadosamente planejada, utilizando relacionamentos complexos como Many-to-Many, permitindo flexibilidade e consistência na estrutura das entidades. Além disso, a API foi documentada com Swagger, facilitando testes e integração.

No frontend, foi desenvolvida uma interface com React e TypeScript, consumindo a API de forma tipada e organizada. A interface foi pensada para ser responsiva, clara e funcional, garantindo boa experiência de uso.

O projeto representa a construção de um sistema completo, integrando backend, frontend e boas práticas de engenharia de software, simulando um ambiente real de desenvolvimento de produto digital.`,
    },

    stack: [
      "TypeScript",
      "React",
      "NestJS",
      "Node.js",
      "MySQL",
      "TypeORM",
      "JWT",
      "Swagger",
    ],

    highlights: [
      "Autenticação JWT",
      "Proteção de rotas",
      "Relacionamentos complexos",
      "Arquitetura em camadas",
      "Integração frontend-backend",
    ],

    github: "https://github.com/Akanni-Silva/ApKoukan",
  },

  {
    id: "maria-gasolina",

    title: "Maria Gasolina",

    context: "Projeto acadêmico • Fullstack",

    impact:
      "Plataforma voltada para mobilidade urbana, conectando usuários em um fluxo completo de uso com backend e interface integrada.",

    description: {
      card: "Aplicação fullstack para sistema de caronas com API REST e interface integrada.",

      summary:
        "Sistema completo para gerenciamento de corridas, usuários e categorias com integração frontend-backend.",

      full: `O Maria Gasolina é uma aplicação fullstack desenvolvida com o objetivo de simular uma plataforma de caronas compartilhadas, conectando motoristas e passageiros em um ambiente digital estruturado.

No backend, foi construída uma API REST utilizando NestJS e TypeORM, com endpoints completos de CRUD para gerenciamento de usuários, corridas e categorias. A aplicação conta com validações de dados e organização em camadas, garantindo escalabilidade e manutenção.

No frontend, foi desenvolvida uma interface com React e TypeScript, permitindo interação com a API de forma dinâmica. O usuário pode navegar entre funcionalidades, visualizar dados e interagir com o sistema de forma intuitiva.

A aplicação também foi disponibilizada em ambiente de deploy, proporcionando experiência prática com publicação e consumo de APIs em produção.

Este projeto demonstra capacidade de desenvolvimento fullstack, integração de sistemas e construção de soluções completas voltadas para problemas reais.`,
    },

    stack: [
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "MySQL",
      "TypeORM",
      "Swagger",
      "Render",
    ],

    highlights: [
      "CRUD completo",
      "API REST",
      "Integração frontend-backend",
      "Validação de dados",
      "Deploy em produção",
    ],

    github: "https://github.com/Commit8/maria_gasolina",
  },

  {
    id: "inovarh",

    title: "InovaRH",

    context: "Projeto colaborativo • Backend",

    impact:
      "Sistema voltado para otimizar processos de gestão de pessoas, com foco em organização e eficiência operacional.",

    description: {
      card: "API REST para gestão de colaboradores com arquitetura limpa e escalável.",

      summary:
        "Backend estruturado para gerenciamento de colaboradores com boas práticas e organização de código.",

      full: `O InovaRH é um sistema backend desenvolvido com foco na gestão de recursos humanos, com o objetivo de organizar informações de colaboradores e otimizar processos internos em empresas.

A aplicação foi construída utilizando NestJS e TypeScript, seguindo princípios de arquitetura limpa, separação de responsabilidades e organização modular do código.

Foram implementados endpoints RESTful para gerenciamento de colaboradores, incluindo criação, atualização, listagem e filtros por critérios como cargo e setor, permitindo maior controle sobre os dados.

A persistência foi realizada com MySQL e TypeORM, garantindo consistência e facilidade na manipulação das entidades.

Durante o desenvolvimento, foram aplicadas boas práticas como validação de dados, injeção de dependência e estruturação escalável da aplicação.

Este projeto demonstra capacidade de desenvolvimento backend estruturado, organização de código e trabalho em equipe em um contexto colaborativo.`,
    },

    stack: ["NestJS", "Node.js", "TypeScript", "MySQL", "TypeORM"],

    highlights: [
      "Arquitetura limpa",
      "CRUD RESTful",
      "Filtros por dados",
      "Validação de entrada",
      "Código escalável",
    ],

    github: "https://github.com/Commit8/inova_rh",
  },

  {
    id: "modelo-banco",

    title: "Sistema Bancário (Java)",

    context: "Projeto de estudo • Backend",

    impact:
      "Projeto focado em aprofundar conhecimento em APIs robustas no ecossistema Java.",

    description: {
      card: "API bancária em Java com Spring Boot, JPA e controle de migrations.",

      summary:
        "Sistema backend para gerenciamento bancário com arquitetura robusta e boas práticas.",

      full: `Este projeto consiste no desenvolvimento de um sistema backend bancário utilizando Java com Spring Boot, com foco em aprofundar conhecimentos em construção de APIs robustas.

A aplicação implementa gerenciamento de usuários bancários, utilizando JPA para persistência de dados e MySQL como banco relacional.

Um dos principais destaques é o uso do Flyway para controle de migrations, permitindo versionamento do banco de dados e maior segurança na evolução da aplicação.

Também foram implementados tratamento global de exceções e logs com SLF4J, garantindo padronização de respostas e melhor capacidade de monitoramento.

O projeto segue princípios como injeção de dependência e separação de responsabilidades, reforçando boas práticas do ecossistema Java.

Essa aplicação demonstra versatilidade tecnológica e capacidade de atuar com diferentes stacks backend.`,
    },

    stack: ["Java", "Spring Boot", "JPA", "MySQL", "Flyway", "Maven"],

    highlights: [
      "Spring Boot",
      "JPA",
      "Flyway",
      "Tratamento de exceções",
      "Arquitetura REST",
    ],

    github: "https://github.com/Akanni-Silva/api-banco.git",
  },

  {
    id: "upbody",

    title: "UpBody",

    context: "Projeto pessoal • Fullstack",

    impact:
      "Aplicação voltada para organização de treinos e acompanhamento de evolução física, incentivando consistência e controle.",

    description: {
      card: "Aplicação fullstack para gestão de treinos e acompanhamento físico.",

      summary:
        "Sistema completo para organização de treinos, evolução e rotina de exercícios.",

      full: `O UpBody é uma aplicação fullstack desenvolvida com o objetivo de auxiliar no acompanhamento de treinos e evolução física, promovendo organização e consistência nas rotinas de exercício.

O projeto surgiu da necessidade de estruturar informações de treino, permitindo que usuários registrem atividades, acompanhem progresso e mantenham histórico de evolução.

No frontend, foi desenvolvida uma interface com React e TypeScript, focada em simplicidade, usabilidade e responsividade, facilitando o uso contínuo da aplicação.

No backend, foi estruturada uma API responsável pelo gerenciamento de usuários, treinos e registros, garantindo persistência de dados e organização das informações.

A modelagem de dados foi pensada para permitir expansão futura, incluindo métricas como desempenho, carga e frequência de treinos.

O UpBody demonstra a capacidade de construir sistemas voltados ao usuário final, integrando frontend, backend e organização de dados em uma solução prática e escalável.`,
    },

    stack: ["React", "TypeScript", "Node.js", "API REST"],

    highlights: [
      "Gestão de treinos",
      "Histórico de evolução",
      "Interface responsiva",
      "Integração frontend-backend",
      "Modelagem de dados",
    ],

    github: "https://github.com/Commit8/up_body.git",
  },
];