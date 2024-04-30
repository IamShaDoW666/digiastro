// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection, reference } from 'astro:content';

const categoriesCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    id: z.number(),
    name: z.string(),
    products: z.array(reference("products"))
  }),
});

const featureCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    id: z.number(),
    title: z.string(),
    body: z.string(),    
    name: z.string(),
  }),
});

const productsCollection = defineCollection({
  type: 'data',
    schema: ({ image }) => z.object({
    main: z.object({
      id: z.number(),
      title: z.string(),
      subTitle: z.string(),
      category: z.string(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    description: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
      third: image().optional(),
    }),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  authorImage: image(),
  authorImageAlt: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
  }),
});
const testimonialCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    id: z.number(),
    content: z.string(),
    author: z.string(),
    role: z.string(),
    avatarSrc: image(),
    avatarAlt: z.string(),
  }),
});

export const collections = {
  'feature' : featureCollection,
  'products': productsCollection,
  'blog': blogCollection,
  'category': categoriesCollection,
  'testimonials': testimonialCollection,
};