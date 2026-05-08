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
