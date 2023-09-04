import { PortableTextBlock } from "sanity";

type Universal = {
  [key: string]: string;
};

export type Page = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  excerpt: string;
  content: PortableTextBlock[];
  benefits: Universal[];
  benefit: string;
  benefitDescription: string;
  feature: string;
  featuredImageOne: string;
  featuredImageTwo: string;
  featuredImageThree: string;
  features: Universal[];
  team: Universal[];
  color: string;
  textcolor: string;
};
