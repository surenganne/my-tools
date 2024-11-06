import { ExternalLink, Bookmark, BookmarkCheck, Clock } from 'lucide-react';
import * as Icons from 'lucide-react';
import React from 'react';
import { Tool, UserToolData } from '../types';
import { UsageModal } from './UsageModal';
import { mainCategories } from '../data/categories';

interface ToolCardProps {
  tool: Tool;
  userData?: UserToolData;
  onBookmark: (toolId: string) => void;
  onUpdateUsage: (toolId: string) => void;
}

export function ToolCard({ tool, userData, onBookmark, onUpdateUsage }: ToolCardProps) {
  const [showUsageModal, setShowUsageModal] = React.useState(false);
  const IconComponent = Icons[tool.icon as keyof typeof Icons];

  const mainCategory = mainCategories.find(cat => cat.id === tool.mainCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleVisit = () => {
    onUpdateUsage(tool.id);
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className={`bg-white rounded-lg ${
        tool.featured 
          ? 'ring-2 ring-purple-500 shadow-lg' 
          : 'border border-gray-200 shadow-sm'
      } hover:shadow-md transition-all duration-300 p-6`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-lg ${
              tool.featured ? 'bg-purple-100' : 'bg-gray-100'
            } flex items-center justify-center`}>
              <IconComponent className={`h-6 w-6 ${
                tool.featured ? 'text-purple-600' : 'text-gray-600'
              }`} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-purple-600">
                    {tool.name}
                  </h3>
                  <button
                    onClick={() => onBookmark(tool.id)}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={userData?.bookmarked ? "Remove bookmark" : "Add bookmark"}
                  >
                    {userData?.bookmarked ? (
                      <BookmarkCheck className="h-5 w-5 fill-purple-600 text-purple-600" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {tool.featured && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-1">
                    Featured
                  </span>
                )}
              </div>
              <button
                onClick={handleVisit}
                className="ml-4 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline"
              >
                Visit
                <ExternalLink className="ml-1 h-3 w-3" />
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {tool.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {mainCategory?.name}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {tool.subCategory}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                tool.pricing === 'Free' 
                  ? 'bg-green-100 text-green-800'
                  : tool.pricing === 'Freemium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {tool.pricing}
              </span>
              {tool.priceRange && (
                <span className="text-xs text-gray-500">
                  From {formatPrice(tool.priceRange.starter)}/mo
                </span>
              )}
              {userData?.subscription && (
                <span className="text-xs text-purple-600 font-medium">
                  {userData.subscription.plan} • Expires {new Date(userData.subscription.expiryDate).toLocaleDateString()}
                </span>
              )}
              {userData?.usageStats && (
                <button
                  onClick={() => setShowUsageModal(true)}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
                >
                  <Clock className="h-3 w-3" />
                  {userData.usageStats.totalUses} uses
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {showUsageModal && (
        <UsageModal
          tool={tool}
          usageStats={userData?.usageStats}
          onClose={() => setShowUsageModal(false)}
        />
      )}
    </>
  );
}