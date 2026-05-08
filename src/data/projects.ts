import type { Project } from "../models/projectsModel";

export const projects: Project[] = [
  {
    id: "apkoukan",

    title: "ApKoukan",

    context: "Projeto pessoal • Fullstack",

    impact:
      "Sistema criado para resolver uma necessidade real de organização de dados, com foco em escalabilidade e segurança.",

    description: {
      card: "Aplicação fullstack com autenticação JWT, modelagem relacional e arquitetura escalável.",

      summary:
        "Projeto fullstack desenvolvido com foco em arquitetura backend, segurança e organização de dados em cenários reais.",

      full: "O ApKoukan é uma aplicação fullstack desenvolvida com o objetivo de resolver um problema real de organização e gerenciamento de informações. O projeto foi concebido desde o início com foco em boas práticas de engenharia de software, priorizando escalabilidade, segurança e clareza arquitetural.\n\nNo backend, foi construída uma API REST utilizando NestJS e TypeORM, com separação clara de responsabilidades em camadas (controllers, services e repositories). A autenticação é realizada via JWT, com implementação de guards para proteção de rotas e controle de acesso. Também foram aplicados conceitos avançados de modelagem de dados, incluindo relacionamentos complexos como Many-to-Many, garantindo flexibilidade e consistência na estrutura das entidades.\n\nAlém disso, o projeto conta com documentação interativa utilizando Swagger, permitindo fácil visualização e teste dos endpoints, o que simula um ambiente profissional de desenvolvimento e integração entre equipes.\n\nNo frontend, a aplicação consome os dados da API e apresenta uma interface moderna e responsiva, construída com React e TypeScript, mantendo consistência com a arquitetura tipada do backend.\n\nO ApKoukan representa não apenas um projeto técnico, mas uma evolução prática na construção de sistemas completos, integrando backend, frontend e boas práticas de desenvolvimento, com foco em aplicações reais e sustentáveis.",
    },

    stack: [
      "TypeScript",
      "NestJS",
      "React",
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
      "Documentação Swagger",
    ],

    github: "<PRIVATE_URL>",
  },

  {
    id: "maria-gasolina",

    title: "Maria Gasolina",

    context: "Projeto acadêmico • Backend",

    impact:
      "Plataforma voltada para mobilidade urbana, conectando usuários a soluções de carona compartilhada.",

    description: {
      card: "API REST para sistema de caronas com CRUD completo e arquitetura organizada.",

      summary:
        "Backend estruturado para gerenciamento de usuários, corridas e categorias em um sistema de mobilidade.",

      full: "O Maria Gasolina é um sistema backend desenvolvido com o objetivo de simular uma plataforma de caronas compartilhadas, conectando motoristas e passageiros em um ambiente digital estruturado.\n\nO projeto foi construído utilizando Node.js com NestJS, aplicando conceitos sólidos de arquitetura RESTful. Foram implementados endpoints completos de CRUD para gerenciamento de usuários, corridas e categorias, garantindo uma base consistente para evolução da aplicação.\n\nA persistência de dados foi realizada com MySQL e TypeORM, permitindo a criação de entidades bem definidas e relacionamentos estruturados entre os dados. Além disso, foram aplicadas validações de entrada para garantir integridade das informações e evitar inconsistências no sistema.\n\nOutro ponto relevante foi a documentação dos endpoints com Swagger, facilitando o entendimento da API e permitindo testes rápidos durante o desenvolvimento.\n\nO projeto também foi publicado em ambiente de deploy (Render), proporcionando experiência prática com disponibilização de aplicações backend em produção.\n\nEste projeto demonstra domínio na construção de APIs completas, organização de código e aplicação de boas práticas no desenvolvimento backend, além de evidenciar capacidade de estruturar soluções para problemas reais de mobilidade.",
    },

    stack: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "MySQL",
      "TypeORM",
      "Swagger",
      "Render",
    ],

    highlights: [
      "CRUD completo",
      "API REST",
      "Validação de dados",
      "Deploy em produção",
      "Documentação Swagger",
    ],

    github: "<PRIVATE_URL>",
  },

  {
    id: "inovarh",

    title: "InovaRH",

    context: "Projeto colaborativo • Backend",

    impact:
      "Sistema voltado para otimizar processos de gestão de pessoas dentro de organizações.",

    description: {
      card: "Sistema de RH com API REST escalável e arquitetura limpa.",

      summary:
        "Projeto backend focado em gestão de colaboradores com organização e boas práticas.",

      full: "O InovaRH é um sistema backend desenvolvido com foco na gestão de recursos humanos, com o objetivo de organizar informações de colaboradores e otimizar processos internos dentro de empresas.\n\nO projeto foi construído utilizando NestJS e TypeScript, seguindo princípios de arquitetura limpa e boas práticas de desenvolvimento. A estrutura do código foi organizada de forma modular, permitindo escalabilidade e fácil manutenção.\n\nForam implementados endpoints RESTful para gerenciamento de colaboradores, incluindo funcionalidades como criação, atualização, listagem e filtragem de dados com base em critérios como cargo e setor.\n\nA aplicação também utiliza TypeORM para mapeamento objeto-relacional, garantindo consistência na comunicação com o banco de dados e facilitando a manipulação das entidades.\n\nDurante o desenvolvimento, foram aplicados conceitos como injeção de dependência, separação de responsabilidades e validação de dados, reforçando a qualidade e robustez da aplicação.\n\nEste projeto evidencia a capacidade de trabalhar em equipe, seguir padrões de desenvolvimento e construir soluções organizadas para problemas corporativos reais, especialmente em contextos de gestão e operação.",
    },

    stack: ["NestJS", "Node.js", "TypeScript", "MySQL", "TypeORM"],

    highlights: [
      "Arquitetura limpa",
      "CRUD RESTful",
      "Filtros por dados",
      "Validação de entrada",
      "Código escalável",
    ],

    github: "<PRIVATE_URL>",
  },

  {
    id: "modelo-banco",

    title: "Sistema Bancário (Java)",

    context: "Projeto de estudo • Backend",

    impact:
      "Projeto voltado ao aprofundamento em APIs REST robustas no ecossistema Java.",

    description: {
      card: "API REST bancária em Java com Spring Boot, JPA e controle de migrations.",

      summary:
        "Sistema backend para gerenciamento de usuários bancários com foco em arquitetura robusta.",

      full: "Este projeto consiste no desenvolvimento de um sistema backend bancário utilizando Java com Spring Boot, com o objetivo de aprofundar conhecimentos em construção de APIs REST robustas e bem estruturadas.\n\nA aplicação implementa gerenciamento de usuários bancários, utilizando JPA para persistência de dados e MySQL como banco relacional. A estrutura do projeto segue padrões amplamente utilizados no ecossistema Java, garantindo organização e escalabilidade.\n\nUm dos destaques é o uso do Flyway para controle de migrations, permitindo versionamento do banco de dados e maior segurança na evolução da aplicação.\n\nAlém disso, foram implementados mecanismos de tratamento global de exceções, garantindo respostas padronizadas e melhor experiência para consumidores da API. Também foram utilizados logs com SLF4J para monitoramento e depuração.\n\nO projeto segue princípios de injeção de dependência e separação de responsabilidades, reforçando boas práticas no desenvolvimento backend.\n\nEssa aplicação demonstra versatilidade tecnológica, mostrando capacidade de atuar não apenas com Node.js, mas também com Java, além de evidenciar domínio em construção de APIs robustas, organizadas e prontas para ambientes reais.",
    },

    stack: ["Java", "Spring Boot", "JPA", "MySQL", "Flyway", "Maven"],

    highlights: [
      "Spring Boot",
      "JPA",
      "Flyway",
      "Tratamento de exceções",
      "Arquitetura REST",
    ],

    github: "<PRIVATE_URL>",
  },
  {
    id: "upbody",

    title: "UpBody",

    context: "Projeto pessoal • Fullstack",

    impact:
      "Aplicação voltada para acompanhamento físico e organização de treinos, incentivando consistência e controle de evolução.",

    description: {
      card: "Aplicação para gestão de treinos e acompanhamento físico com foco em organização e consistência.",

      summary:
        "Sistema desenvolvido para auxiliar no controle de treinos, evolução física e organização de rotinas de exercício.",

      full: "O UpBody é uma aplicação desenvolvida com o objetivo de auxiliar no acompanhamento de treinos e evolução física, focando na organização e consistência de rotinas de exercício.\n\nA ideia do projeto surgiu da necessidade de estruturar melhor informações relacionadas a treinos, permitindo que o usuário registre atividades, acompanhe sua evolução e mantenha um histórico organizado.\n\nDo ponto de vista técnico, o projeto foi pensado como uma aplicação fullstack, com separação clara entre frontend e backend. O frontend foi desenvolvido com React e TypeScript, priorizando uma interface simples, intuitiva e responsiva, facilitando o uso contínuo da aplicação.\n\nNo backend, foi estruturada uma API responsável pelo gerenciamento dos dados de treino, usuários e registros, seguindo princípios de organização e escalabilidade. A aplicação trabalha com persistência de dados, permitindo manter histórico de evolução ao longo do tempo.\n\nAlém da implementação técnica, o projeto também teve como foco a modelagem de dados, definindo entidades como usuário, treino e registros de atividade, garantindo flexibilidade para expansão futura, como inclusão de métricas mais avançadas (peso, repetições, desempenho, etc.).\n\nO UpBody demonstra a capacidade de construir soluções voltadas ao usuário final, combinando organização de dados, usabilidade e arquitetura de software. Também evidencia preocupação com evolução contínua do sistema, permitindo adaptações e crescimento conforme novas necessidades surgem.",
    },

    stack: ["React", "TypeScript", "Node.js", "API REST"],

    highlights: [
      "Gestão de treinos",
      "Organização de dados",
      "Histórico de evolução",
      "Interface responsiva",
      "Modelagem de entidades",
    ],

    github: "<PRIVATE_URL>",
  },
];
