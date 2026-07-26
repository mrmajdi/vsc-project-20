import React from 'react';

interface NavbarProps {
  /** نام کاربر وارد شده؛ null در صورت عدم ورود */
  user: { name: string } | null;
  /** callback برای ورود */
  onLogin: () => void;
  /** callback برای خروج */
  onLogout: () => void;
}

/**
 * نوار ناوبری ساده با دکمه‌های ورود/خروج و نمایش نام کاربر.
 * کامپوننت به صورت کامل با TypeScript و Tailwind CSS استایل شده است.
 */
const Navbar: React.FC<NavbarProps> = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm">
      <!-- لوگو یا نام پروژه -->
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-indigo-600">سیستم کارها</span>
      </div>

      <!-- بخش وسط: می‌توان جستجو یا سایر لینک‌ها را اینجا گذاشت -->
      <div className="hidden md:flex items-center space-x-4">
        {/* مثال لینک‌ها */}
        <a href="#" className="text-gray-600 hover:text-gray-900">داشبورد</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">وظایف</a>
      </div>

      <!-- بخش راست: اطلاعات کاربر و دکمه‌ها -->
      <div className="flex items-center space-x-3">
        {user ? (
          <>
            <span className="text-sm text-gray-700">خوش آمدید، </span>
            <span className="font-medium text-gray-900">{user.name}</span>
            <button
              onClick={onLogout}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              خروج
            </button>
          </>
        ) : (
          <button
            onClick={onLogin}
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            ورود
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;