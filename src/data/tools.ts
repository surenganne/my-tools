import { Tool } from '../types';

export const tools: Tool[] = [
  // AI Tools - Text & Writing
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced language model for text generation and conversations.',
    url: 'https://chat.openai.com',
    mainCategory: 'ai-tools',
    subCategory: 'Text & Writing',
    pricing: 'Freemium',
    priceRange: {
      starter: 20,
    },
    icon: 'MessageSquare'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for marketing content.',
    url: 'https://www.copy.ai',
    mainCategory: 'ai-tools',
    subCategory: 'Text & Writing',
    pricing: 'Freemium',
    priceRange: {
      starter: 36,
    },
    icon: 'Pen'
  },

  // AI Tools - Audio & Speech
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice generation platform with natural-sounding voices.',
    url: 'https://elevenlabs.io',
    mainCategory: 'ai-tools',
    subCategory: 'Audio & Speech',
    pricing: 'Freemium',
    priceRange: {
      starter: 5,
    },
    icon: 'Mic'
  },
  {
    id: 'whisper',
    name: 'OpenAI Whisper',
    description: 'Advanced speech recognition system for transcription.',
    url: 'https://openai.com/research/whisper',
    mainCategory: 'ai-tools',
    subCategory: 'Audio & Speech',
    pricing: 'Free',
    icon: 'Headphones'
  },

  // AI Tools - Video Creation
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video creation platform with virtual avatars.',
    url: 'https://www.synthesia.io',
    mainCategory: 'ai-tools',
    subCategory: 'Video Creation',
    pricing: 'Paid',
    priceRange: {
      starter: 30,
    },
    icon: 'Video'
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video editing platform with AI features.',
    url: 'https://www.descript.com',
    mainCategory: 'ai-tools',
    subCategory: 'Video Creation',
    pricing: 'Freemium',
    priceRange: {
      starter: 12,
    },
    icon: 'Film'
  },

  // AI Tools - Development
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster.',
    url: 'https://github.com/features/copilot',
    mainCategory: 'ai-tools',
    subCategory: 'Development',
    pricing: 'Paid',
    priceRange: {
      starter: 10,
    },
    icon: 'Code'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion assistant for multiple languages.',
    url: 'https://www.tabnine.com',
    mainCategory: 'ai-tools',
    subCategory: 'Development',
    pricing: 'Freemium',
    priceRange: {
      starter: 12,
    },
    icon: 'Terminal'
  },

  // AI Tools - Productivity
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI-powered writing assistant integrated with Notion.',
    url: 'https://notion.so',
    mainCategory: 'ai-tools',
    subCategory: 'Productivity',
    pricing: 'Freemium',
    priceRange: {
      starter: 10,
    },
    icon: 'Layout'
  },
  {
    id: 'mem-ai',
    name: 'Mem.ai',
    description: 'AI-powered personal knowledge assistant.',
    url: 'https://mem.ai',
    mainCategory: 'ai-tools',
    subCategory: 'Productivity',
    pricing: 'Freemium',
    priceRange: {
      starter: 8,
    },
    icon: 'Brain'
  },

  // AI Tools - Research
  {
    id: 'elicit',
    name: 'Elicit',
    description: 'AI research assistant for academic papers.',
    url: 'https://elicit.org',
    mainCategory: 'ai-tools',
    subCategory: 'Research',
    pricing: 'Free',
    icon: 'Search'
  },
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'AI-powered search engine for scientific research.',
    url: 'https://consensus.app',
    mainCategory: 'ai-tools',
    subCategory: 'Research',
    pricing: 'Freemium',
    priceRange: {
      starter: 10,
    },
    icon: 'GraduationCap'
  },

  // Open Source - Frontend
  {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    url: 'https://github.com/facebook/react',
    mainCategory: 'open-source',
    subCategory: 'Frontend',
    pricing: 'Free',
    icon: 'Code'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'Progressive JavaScript framework for UIs.',
    url: 'https://github.com/vuejs/core',
    mainCategory: 'open-source',
    subCategory: 'Frontend',
    pricing: 'Free',
    icon: 'Layout'
  },

  // Open Source - Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine.',
    url: 'https://github.com/nodejs/node',
    mainCategory: 'open-source',
    subCategory: 'Backend',
    pricing: 'Free',
    icon: 'Server'
  },
  {
    id: 'deno',
    name: 'Deno',
    description: 'Secure runtime for JavaScript and TypeScript.',
    url: 'https://github.com/denoland/deno',
    mainCategory: 'open-source',
    subCategory: 'Backend',
    pricing: 'Free',
    icon: 'Terminal'
  },

  // Open Source - Mobile
  {
    id: 'react-native',
    name: 'React Native',
    description: 'Framework for building native mobile applications.',
    url: 'https://github.com/facebook/react-native',
    mainCategory: 'open-source',
    subCategory: 'Mobile',
    pricing: 'Free',
    icon: 'Smartphone'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    description: 'Google\'s UI toolkit for building native applications.',
    url: 'https://github.com/flutter/flutter',
    mainCategory: 'open-source',
    subCategory: 'Mobile',
    pricing: 'Free',
    icon: 'Smartphone'
  },

  // Open Source - DevOps
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'Container orchestration platform.',
    url: 'https://github.com/kubernetes/kubernetes',
    mainCategory: 'open-source',
    subCategory: 'DevOps',
    pricing: 'Free',
    icon: 'Container'
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications.',
    url: 'https://github.com/docker/docker-ce',
    mainCategory: 'open-source',
    subCategory: 'DevOps',
    pricing: 'Free',
    icon: 'Box'
  },

  // Open Source - Security
  {
    id: 'metasploit',
    name: 'Metasploit',
    description: 'Penetration testing framework.',
    url: 'https://github.com/rapid7/metasploit-framework',
    mainCategory: 'open-source',
    subCategory: 'Security',
    pricing: 'Free',
    icon: 'Shield'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    description: 'Network protocol analyzer.',
    url: 'https://github.com/wireshark/wireshark',
    mainCategory: 'open-source',
    subCategory: 'Security',
    pricing: 'Free',
    icon: 'Network'
  },

  // Learning - Web Development
  {
    id: 'mdn',
    name: 'MDN Web Docs',
    description: 'Comprehensive web development documentation and tutorials.',
    url: 'https://developer.mozilla.org',
    mainCategory: 'learning',
    subCategory: 'Web Development',
    pricing: 'Free',
    icon: 'Book'
  },
  {
    id: 'freecodecamp',
    name: 'freeCodeCamp',
    description: 'Learn to code with interactive tutorials.',
    url: 'https://www.freecodecamp.org',
    mainCategory: 'learning',
    subCategory: 'Web Development',
    pricing: 'Free',
    icon: 'Code2'
  },

  // Learning - Mobile Development
  {
    id: 'raywenderlich',
    name: 'raywenderlich.com',
    description: 'Mobile development tutorials and courses.',
    url: 'https://www.raywenderlich.com',
    mainCategory: 'learning',
    subCategory: 'Mobile Development',
    pricing: 'Freemium',
    priceRange: {
      starter: 20,
    },
    icon: 'Smartphone'
  },
  {
    id: 'androiddev',
    name: 'Android Developers',
    description: 'Official Android development resources and tutorials.',
    url: 'https://developer.android.com',
    mainCategory: 'learning',
    subCategory: 'Mobile Development',
    pricing: 'Free',
    icon: 'Smartphone'
  },

  // Learning - AI & ML
  {
    id: 'coursera-ai',
    name: 'Coursera AI',
    description: 'AI and Machine Learning courses from top universities.',
    url: 'https://www.coursera.org/courses?query=artificial%20intelligence',
    mainCategory: 'learning',
    subCategory: 'AI & ML',
    pricing: 'Freemium',
    priceRange: {
      starter: 49,
    },
    icon: 'Brain'
  },
  {
    id: 'fast-ai',
    name: 'fast.ai',
    description: 'Making neural networks uncool again.',
    url: 'https://www.fast.ai',
    mainCategory: 'learning',
    subCategory: 'AI & ML',
    pricing: 'Free',
    icon: 'Network'
  },

  // Learning - DevOps & Cloud
  {
    id: 'aws-training',
    name: 'AWS Training',
    description: 'Official AWS cloud training and certification.',
    url: 'https://aws.amazon.com/training',
    mainCategory: 'learning',
    subCategory: 'DevOps & Cloud',
    pricing: 'Freemium',
    priceRange: {
      starter: 30,
    },
    icon: 'Cloud'
  },
  {
    id: 'linux-academy',
    name: 'Linux Academy',
    description: 'Cloud and DevOps training platform.',
    url: 'https://linuxacademy.com',
    mainCategory: 'learning',
    subCategory: 'DevOps & Cloud',
    pricing: 'Paid',
    priceRange: {
      starter: 49,
    },
    icon: 'Terminal'
  },

  // Learning - Programming Languages
  {
    id: 'exercism',
    name: 'Exercism',
    description: 'Code practice and mentorship.',
    url: 'https://exercism.io',
    mainCategory: 'learning',
    subCategory: 'Programming Languages',
    pricing: 'Free',
    icon: 'Code'
  },
  {
    id: 'codecademy',
    name: 'Codecademy',
    description: 'Interactive programming courses.',
    url: 'https://www.codecademy.com',
    mainCategory: 'learning',
    subCategory: 'Programming Languages',
    pricing: 'Freemium',
    priceRange: {
      starter: 20,
    },
    icon: 'Terminal'
  },

  // Learning - System Design
  {
    id: 'system-design-primer',
    name: 'System Design Primer',
    description: 'Learn how to design large-scale systems.',
    url: 'https://github.com/donnemartin/system-design-primer',
    mainCategory: 'learning',
    subCategory: 'System Design',
    pricing: 'Free',
    icon: 'Network'
  },
  {
    id: 'grokking-system-design',
    name: 'Grokking System Design',
    description: 'Comprehensive system design interview preparation.',
    url: 'https://www.educative.io/courses/grokking-the-system-design-interview',
    mainCategory: 'learning',
    subCategory: 'System Design',
    pricing: 'Paid',
    priceRange: {
      starter: 79,
    },
    icon: 'Layout'
  }
];