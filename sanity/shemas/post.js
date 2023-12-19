export default {
  name: "post",
  type: "document",
  title: "post",
  fields: [
    {
      name: "metaTitle",
      type: "string",
      title: "meta title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishDate",
      type: "date",
      title: "publish date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "caption",
          type: "string",
          title: "caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "attribution",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 100,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "description",
      type: "text",
      title: "description",
    },
    {
      name: "body",
      type: "array",
      title: "body content",
      of: [
        {
          type: "image",
        },
        {
          type: "block",   
        },
      ],
    },
  ],
};
