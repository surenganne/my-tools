export interface MainCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  mainCategory: 'ai-tools' | 'open-source' | 'learning';
  subCategory: SubCategory;
  pricing: 'Free' | 'Freemium' | 'Paid';
  priceRange?: {
    starter: number;
    professional?: number;
    enterprise?: string;
  };
  icon: string;
  featured?: boolean;
  addedBy?: string;
  addedDate?: string;
}

export type SubCategory = 
  // AI Tools
  | 'Text & Writing'
  | 'Audio & Speech'
  | 'Video Creation'
  | 'Development'
  | 'Productivity'
  | 'Research'
  // Open Source
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'DevOps'
  | 'Security'
  // Learning Resources
  | 'Web Development'
  | 'Mobile Development'
  | 'AI & ML'
  | 'DevOps & Cloud'
  | 'Programming Languages'
  | 'System Design';

export interface UserToolData {
  toolId: string;
  bookmarked: boolean;
  subscription?: {
    plan: string;
    expiryDate: string;
  };
  usageStats: {
    lastUsed: string;
    totalUses: number;
    averageMonthlyUses: number;
  };
}

export interface UserPreferences {
  bookmarks: string[];
  toolData: Record<string, UserToolData>;
  customCategories: MainCategory[];
  customSubCategories: Record<string, string[]>;
}