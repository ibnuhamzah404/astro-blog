import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image : image().optional(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    cta: z.string().optional(),
  }),
});


const strugglesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    img: z.string().url(),
    alt: z.string().optional(),
    source: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  struggles: strugglesCollection,
};
