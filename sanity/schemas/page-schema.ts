const page = {
  name: "page",
  title: "Pages",
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
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "benefit",
      title: "Benefit",
      type: "string",
    },
    {
      name: "benefitDescription",
      title: "Benefit Description",
      type: "string",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              title: "Benefit Name",
              name: "benefitName",
            },
            {
              type: "string",
              title: "Benefit Description",
              name: "benefitdescription",
            },
            {
              type: "image",
              name: "icon",
              title: "Benefit Icon",
              options: { hotspot: true, accept: "image/svg+xml", svg: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "color",
      title: "Hex Color",
      type: "string",
    },
    {
      name: "textcolor",
      title: "Text Hex Color",
      type: "string",
    },
    {
      name: "feature",
      title: "Feature Title",
      type: "string",
    },
    {
      name: "featureImageOne",
      title: "Featured Image One",
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
      name: "featureImageTwo",
      title: "Featured Image Two",
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
      name: "featureImageThree",
      title: "Featured Image Three",
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
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "featureTitle",
              title: "Feature Title",
              type: "string",
            },
            {
              name: "featureDescription",
              title: "Feature Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "team",
      title: "Our Team",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              title: "Team Name",
              name: "teamName",
            },
            {
              type: "string",
              title: "Position",
              name: "position",
            },
            {
              type: "image",
              name: "profile",
              title: "Profile Image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default page;
