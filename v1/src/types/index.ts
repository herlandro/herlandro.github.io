
export type Technology = {
  id: string;
  name: string;
  icon: string;
  color?: string;
};

export type Company = {
  id: string;
  name: string;
  logo?: string;
  period: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  company?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  date: string;
};

export type Filter = {
  technologies: string[];
  companies: string[];
};
