import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Tool, MainCategory } from '../types';
import { mainCategories, subCategoriesByMain } from '../data/categories';

interface AddResourceModalProps {
  onClose: () => void;
  onAdd: (resource: Omit<Tool, 'id'>) => void;
  customCategories?: MainCategory[];
  customSubCategories?: Record<string, string[]>;
}

export function AddResourceModal({ 
  onClose, 
  onAdd,
  customCategories = [],
  customSubCategories = {}
}: AddResourceModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [pricing, setPricing] = useState<'Free' | 'Freemium' | 'Paid'>('Free');
  const [priceRange, setPriceRange] = useState({ starter: 0 });

  const allCategories = [...mainCategories, ...customCategories];
  const allSubCategories = { ...subCategoriesByMain, ...customSubCategories };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newResource: Omit<Tool, 'id'> = {
      name,
      description,
      url,
      mainCategory,
      subCategory: subCategory as any,
      pricing,
      icon: mainCategory === 'learning' ? 'Video' : mainCategory === 'open-source' ? 'Github' : 'Bot',
      addedBy: 'user',
      addedDate: new Date().toISOString(),
      ...(pricing !== 'Free' && { priceRange })
    };

    onAdd(newResource);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New Resource</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                required
                value={mainCategory}
                onChange={(e) => setMainCategory(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                <option value="">Select category</option>
                {allCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {mainCategory && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Subcategory</label>
                <select
                  required
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                >
                  <option value="">Select subcategory</option>
                  {allSubCategories[mainCategory]?.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pricing</label>
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value as 'Free' | 'Freemium' | 'Paid')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                <option value="Free">Free</option>
                <option value="Freemium">Freemium</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            {pricing !== 'Free' && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Starting Price ($/mo)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  value={priceRange.starter}
                  onChange={(e) => setPriceRange({ starter: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Add Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}