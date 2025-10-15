import React, { memo } from 'react';

interface TechStackListProps {
  techStack: string[];
  className?: string;
  maxItems?: number;
}

const TechStackList = memo<TechStackListProps>(({ 
  techStack, 
  className = '', 
  maxItems = 12 
}) => {
  const displayItems = techStack.slice(0, maxItems);
  const remainingCount = techStack.length - maxItems;

  return (
    <div className={`flex flex-wrap gap-1 sm:gap-2 ${className}`}>
      {displayItems.map((tech, index) => (
        <span
          key={`${tech}-${index}`}
          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full font-medium border border-blue-200 dark:border-blue-700/50 hover:scale-105 transition-transform"
        >
          {tech}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs sm:text-sm rounded-full font-medium border border-gray-200 dark:border-gray-600">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
});

TechStackList.displayName = 'TechStackList';

export default TechStackList;
