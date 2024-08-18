import { DarkThemeToggle } from 'flowbite-react';

const AppHeader = () => {
  return (
    <header className='bg-gradient-to-r from-violet-400 to-purple-300 shadow shadow-slate-200 dark:from-slate-700 dark:to-slate-950'>
      <div className='container mx-auto flex items-center justify-between px-3 py-3'>
        <h1 className='text-xl font-semibold text-slate-700 dark:text-slate-200'>
          Units converter App
        </h1>
        <p>
          <DarkThemeToggle className='text-slate-700 dark:text-slate-200' />
        </p>
      </div>
    </header>
  );
};

export default AppHeader;
