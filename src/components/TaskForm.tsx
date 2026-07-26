import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (task: {
    title: string;
    description: string;
    priority: string;
    date: string;
  }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !date) {
      alert('لطفاً عنوان و تاریخ را وارد کنید');
      return;
    }
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      priority,
      date,
    });
    // reset form
    setTitle('');
    setDescription('');
    setPriority('low');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>افزودن کار جدید</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>عنوان:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان کار"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>توضیحات:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="توضیحات اضافی"
          style={{ width: '100%', height: '80px', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>اولویت:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="low">پایین</option>
          <option value="medium">متوسط</option>
          <option value="high">بالا</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>تاریخ:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        افزودن کار
      </button>
    </form>
  );
};

export default TaskForm;