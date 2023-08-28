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
  content: PortableTextBlock[];
  benefits: Universal[];
  benefit: string;
  benefitDescription: string;
  feature: string;
  featureImages: Universal[];
  features: Universal[];
  team: Universal[];
  excerpt: string;
  color: string;
};
