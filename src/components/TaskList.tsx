import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Task {
  id: string | number;
  title: string;
  completed?: boolean;
}

const TaskList: React.FC = () => {
  const { data, error, isLoading, mutate } = useSWR<Task[]>('/api/tasks', fetcher);

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در بارگذاری کارها</div>;
  if (!data || data.length === 0) return <div>هیچ کاری یافت نشد.</div>;

  return (
    <ul className="space-y-2">
      {data.map(task => (
        <li key={task.id} className="flex items-center justify-between p-2 border rounded">
          <span className={task.completed ? 'line-through text-gray-500' : ''}>
            {task.title}
          </span>
          <button
            onClick={() => {
              // optimistic update
              mutate(
                data.map(t =>
                  t.id === task.id ? { ...t, completed: !t.completed } : t
                ),
                false
              );
              // persist change
              fetch(`/api/tasks/${task.id}`, { method: 'PATCH' });
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {task.completed ? 'بازگرداندن' : 'تکمیل'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;