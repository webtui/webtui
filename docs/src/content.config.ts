import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export enum PluginType {
  theme = 'theme',
  plugin = 'plugin',
}

export const pluginInfo: Record<PluginType, { color: string; icon: string }> = {
  [PluginType.theme]: {
    color: 'var(--mauve)',
    icon: '󰏘',
  },
  [PluginType.plugin]: {
    color: 'var(--green)',
    icon: '󰐱',
  },
};

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages' }),
  schema: z.object({
    title: z.string(),
    order: z.number().nullish(),
    pluginType: z.nativeEnum(PluginType).nullish(),
  }),
});

export const collections = { docs };
