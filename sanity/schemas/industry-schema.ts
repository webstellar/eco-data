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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Food", value: "food" },
          { title: "Construction", value: "construction" },
          { title: "Transportation", value: "transportation" },
          { title: "Manufacturing", value: "manufacturing" },
          { title: "Agriculture", value: "agriculture" },
          { title: "Mining", value: "mining" },
          { title: "Health care", value: "healthcare" },
          { title: "Petroleum", value: "petroleum" },
          { title: "Retail", value: "retail" },
          { title: "Energy", value: "energy" },
          { title: "Forestry", value: "forestry" },
          { title: "Automotive", value: "automotive" },
          { title: "Financial", value: "financial" },
          { title: "Business", value: "business" },
          { title: "Hospitality", value: "hospitality" },
          { title: "Pharmaceutics", value: "pharmaceutical" },
          { title: "Service", value: "service" },
          { title: "Chemical", value: "chemical" },
          { title: "Metal", value: "metal" },
          { title: "Utilities", value: "utilities" },
          { title: "Music", value: "music" },
        ],
        layout: "dropdown",
      },
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
