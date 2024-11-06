import React from 'react';
import { Tool } from '../types';

interface UsageModalProps {
  tool: Tool;
  usageStats?: {
    lastUsed: string;
    totalUses: number;
    averageMonthlyUses: number;
  };
  onClose: () => void;
}

export function UsageModal({ tool, usageStats, onClose }: UsageModalProps) {
  if (!usageStats) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">{tool.name} Usage Statistics</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Last used</p>
            <p className="text-base font-medium">
              {new Date(usageStats.lastUsed).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total uses</p>
            <p className="text-base font-medium">{usageStats.totalUses}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average monthly uses</p>
            <p className="text-base font-medium">
              {usageStats.averageMonthlyUses.toFixed(1)}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}