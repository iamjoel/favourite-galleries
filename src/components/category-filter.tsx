import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  value: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  value,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-3 md:mb-6 ml:mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${value.id === category.id
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};