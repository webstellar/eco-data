const industry = {
  name: "industry",
  title: "Industries",
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
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "infographics",
      title: "Infographics",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "dataVisuals",
      title: "Data Visualizations",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Report URL",
      name: "reportUrl",
      type: "url",
    },
    {
      title: "Highlights",
      name: "highlight",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
            },
            {
              type: "string",
              name: "description",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
};

export default industry;
