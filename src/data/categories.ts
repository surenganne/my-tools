import { MainCategory } from '../types';

export const mainCategories: MainCategory[] = [
  {
    id: 'ai-tools',
    name: 'AI Tools',
    description: 'Cutting-edge artificial intelligence tools and platforms',
    icon: 'Bot'
  },
  {
    id: 'open-source',
    name: 'Open Source',
    description: 'Popular and trending open source projects on GitHub',
    icon: 'Github'
  },
  {
    id: 'learning',
    name: 'Learning Resources',
    description: 'Curated educational content and tutorials',
    icon: 'GraduationCap'
  }
];

export const subCategoriesByMain: Record<string, string[]> = {
  'ai-tools': [
    'Text & Writing',
    'Audio & Speech',
    'Video Creation',
    'Development',
    'Productivity',
    'Research'
  ],
  'open-source': [
    'Frontend',
    'Backend',
    'Mobile',
    'DevOps',
    'Security'
  ],
  'learning': [
    'Web Development',
    'Mobile Development',
    'AI & ML',
    'DevOps & Cloud',
    'Programming Languages',
    'System Design'
  ]
};