const category = {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "Industries",
      name: "industries",
      type: "reference",
      weak: true,
      to: [{ type: "industry" }],
    },
  ],
};

export default category;
