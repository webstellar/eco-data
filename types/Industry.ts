import { PortableTextBlock } from "sanity";

type Universal = {
  [key: string]: string;
};

export type Industry = {
  _id: string;
  _createdAt?: Date;
  name: string;
  slug: string;
  image: string;
  report: string;
  content: PortableTextBlock[];
  dataVisuals: PortableTextBlock[];
  category: Universal[];
  highlight: Universal[];
  infographics: string;
};
