import React from 'react';
import { MainCategory, SubCategory } from '../types';
import { mainCategories, subCategoriesByMain } from '../data/categories';

interface CategoryFilterProps {
  selectedMainCategory: string | null;
  selectedSubCategory: SubCategory | null;
  onMainCategoryChange: (category: string | null) => void;
  onSubCategoryChange: (category: SubCategory | null) => void;
}

export function CategoryFilter({
  selectedMainCategory,
  selectedSubCategory,
  onMainCategoryChange,
  onSubCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            onMainCategoryChange(null);
            onSubCategoryChange(null);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedMainCategory === null
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {mainCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              onMainCategoryChange(category.id);
              onSubCategoryChange(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedMainCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedMainCategory && (
        <div className="flex flex-wrap gap-2">
          {subCategoriesByMain[selectedMainCategory].map((subCategory) => (
            <button
              key={subCategory}
              onClick={() => onSubCategoryChange(subCategory as SubCategory)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                selectedSubCategory === subCategory
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}