type Universal = {
  [key: string]: string;
};

export type Category = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  industries: Universal[];
};
