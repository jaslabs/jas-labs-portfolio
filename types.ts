export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}