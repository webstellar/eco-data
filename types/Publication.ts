import { PortableTextBlock } from "sanity";

export type Publication = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  category: string;
};
