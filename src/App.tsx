import React, { useMemo, useState } from 'react';
import { CategoryFilter } from './components/CategoryFilter';
import { Header } from './components/Header';
import { ToolCard } from './components/ToolCard';
import { AddResourceModal } from './components/AddResourceModal';
import { tools as initialTools } from './data/tools';
import { SubCategory, Tool, UserPreferences } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialUserPreferences: UserPreferences = {
  bookmarks: [],
  toolData: {},
  customCategories: [],
  customSubCategories: {},
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [tools, setTools] = useLocalStorage<Tool[]>('tools', initialTools);
  const [userPreferences, setUserPreferences] = useLocalStorage<UserPreferences>(
    'userPreferences',
    initialUserPreferences
  );

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Debug logging for each tool
      console.log('Filtering tool:', {
        name: tool.name,
        mainCategory: tool.mainCategory,
        subCategory: tool.subCategory,
        selectedMain: selectedMainCategory,
        selectedSub: selectedSubCategory,
      });

      // Search filter
      const matchesSearch = !searchQuery || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Main category filter
      const matchesMainCategory = !selectedMainCategory || 
        tool.mainCategory === selectedMainCategory;

      // Sub category filter - ensure exact match
      const matchesSubCategory = !selectedSubCategory || 
        tool.subCategory === selectedSubCategory;

      const matches = matchesSearch && matchesMainCategory && matchesSubCategory;

      // Debug log the match result
      console.log('Match result:', {
        tool: tool.name,
        matchesSearch,
        matchesMainCategory,
        matchesSubCategory,
        finalMatch: matches
      });

      return matches;
    });
  }, [tools, searchQuery, selectedMainCategory, selectedSubCategory]);

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  const handleAddResource = (newResource: Omit<Tool, 'id'>) => {
    const newTool: Tool = {
      ...newResource,
      id: `${newResource.mainCategory}-${Date.now()}`,
    };
    setTools([...tools, newTool]);
  };

  const handleBookmark = (toolId: string) => {
    setUserPreferences(prev => {
      const bookmarked = prev.bookmarks.includes(toolId);
      return {
        ...prev,
        bookmarks: bookmarked
          ? prev.bookmarks.filter(id => id !== toolId)
          : [...prev.bookmarks, toolId],
        toolData: {
          ...prev.toolData,
          [toolId]: {
            ...prev.toolData[toolId],
            bookmarked: !bookmarked,
          },
        },
      };
    });
  };

  const handleUpdateUsage = (toolId: string) => {
    setUserPreferences(prev => {
      const now = new Date().toISOString();
      const currentData = prev.toolData[toolId] || {
        toolId,
        bookmarked: false,
        usageStats: {
          lastUsed: now,
          totalUses: 0,
          averageMonthlyUses: 0,
        },
      };

      const totalUses = currentData.usageStats.totalUses + 1;
      const monthsSinceFirstUse = currentData.usageStats.lastUsed
        ? (new Date().getTime() - new Date(currentData.usageStats.lastUsed).getTime()) / (1000 * 60 * 60 * 24 * 30)
        : 1;

      return {
        ...prev,
        toolData: {
          ...prev.toolData,
          [toolId]: {
            ...currentData,
            usageStats: {
              lastUsed: now,
              totalUses,
              averageMonthlyUses: totalUses / Math.max(1, monthsSinceFirstUse),
            },
          },
        },
      };
    });
  };

  // Debug information
  console.log('Current state:', {
    mainCategory: selectedMainCategory,
    subCategory: selectedSubCategory,
    totalTools: tools.length,
    filteredCount: filteredTools.length,
    allCategories: [...new Set(tools.map(t => t.mainCategory))],
    allSubCategories: [...new Set(tools.map(t => t.subCategory))],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery}
        onAddNew={() => setShowAddModal(true)}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <CategoryFilter
            selectedMainCategory={selectedMainCategory}
            selectedSubCategory={selectedSubCategory}
            onMainCategoryChange={setSelectedMainCategory}
            onSubCategoryChange={setSelectedSubCategory}
          />
        </div>

        {featuredTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Resources</h2>
            <div className="grid grid-cols-1 gap-6">
              {featuredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  userData={userPreferences.toolData[tool.id]}
                  onBookmark={handleBookmark}
                  onUpdateUsage={handleUpdateUsage}
                />
              ))}
            </div>
          </div>
        )}

        {regularTools.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Resources</h2>
            <div className="grid grid-cols-1 gap-6">
              {regularTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  userData={userPreferences.toolData[tool.id]}
                  onBookmark={handleBookmark}
                  onUpdateUsage={handleUpdateUsage}
                />
              ))}
            </div>
          </div>
        )}

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No resources found matching your criteria.
            </p>
          </div>
        )}
      </main>

      {showAddModal && (
        <AddResourceModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddResource}
          customCategories={userPreferences.customCategories}
          customSubCategories={userPreferences.customSubCategories}
        />
      )}

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 My Tools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}