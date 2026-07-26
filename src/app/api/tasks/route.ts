import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In a real app, verify token against a database or use NextAuth.
// Here we use a simple secret from env for demonstration.
const API_TOKEN = process.env.API_TOKEN || 'dev-token';

async function authenticate(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.split(' ')[1];
  return token === API_TOKEN;
}

// GET /api/tasks - list tasks (mock)
export async function GET(request: NextRequest) {
  const isAuthenticated = await authenticate(request);
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In a real app, fetch from DB.
  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];
  return NextResponse.json(tasks);
}

// POST /api/tasks - create a new task
export async function POST(request: NextRequest) {
  const isAuthenticated = await authenticate(request);
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title } = body;
  if (!title || typeof title !== 'string') {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  // Simulate saving to DB and returning new task.
  const newTask = {
    id: Date.now(), // temporary ID
    title,
    completed: false,
  };

  return NextResponse.json(newTask, { status: 201 });
}