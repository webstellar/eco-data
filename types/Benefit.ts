import { PortableTextBlock } from "sanity";

export type Benefit = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  icon: string;
};
