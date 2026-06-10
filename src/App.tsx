import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';
import { TodoFilter, type FilterType } from '@/components/TodoFilter';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-500">Stay organized, stay productive</p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            totalCount={todos.length}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        </div>

        <footer className="text-center mt-6 text-sm text-gray-400">
          Double-click a todo to edit it
        </footer>
      </div>
    </div>
  );
}

export default App;
