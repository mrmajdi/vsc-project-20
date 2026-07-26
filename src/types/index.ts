// src/types/index.ts
// انواع داده‌ای برای سیستم مدیریت کارهای روزانه

/** اولویت کار */
export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

/** وضعیت کار */
export enum TaskStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
}

/** مدل کاربر */
export interface User {
  id: string;
  name: string;
  email: string;
  /** تاریخ عضویت */
  createdAt: Date;
}

/** مدل کار (Task) */
export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: TaskStatus;
  /** شناسه کاربر auquel کار اختصاص داده شده است (може бути null) */
  assignedToId: string | null;
  /** تاریخ مهلت کار */
  dueDate: Date | null;
  /** تاریخ ایجاد */
  createdAt: Date;
  /** تاریخ آخرین به‌روزرسانی */
  updatedAt: Date;
}

// نوع‌های کمکی برای ایجاد و به‌روزرسانی
export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTaskInput = Partial<Pick<Task, 'title' | 'description' | 'priority' | 'status' | 'assignedToId' | 'dueDate'>> & Pick<Task, 'id'>;