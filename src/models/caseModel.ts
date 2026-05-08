export type Case = {
  id: string;
  title: string;
  type: string; // pessoal, acadêmico, etc

  problem: string;
  actions: string[];
  results: string[];

  stack?: string[];
};
