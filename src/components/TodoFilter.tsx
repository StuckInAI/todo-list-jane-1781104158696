export type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  totalCount: number;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export function TodoFilter({
  filter,
  onFilterChange,
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFilterProps) {
  if (totalCount === 0) return null;

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
      <span className="text-sm text-gray-500">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>
      <div className="flex gap-1">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className={`px-3 py-1 text-sm rounded transition ${
              filter === f.key
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-gray-500 hover:text-red-600 transition"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
