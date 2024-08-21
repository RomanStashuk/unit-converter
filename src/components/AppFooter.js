import { Footer } from 'flowbite-react';

const AppFooter = () => {
  return (
    <Footer
      container
      className='rounded-none bg-gradient-to-r from-violet-400 to-purple-300 shadow shadow-slate-200 dark:from-slate-900 dark:to-slate-800'
    >
      <div className='w-full text-center'>
        <Footer.Copyright
          className='text-slate-800 dark:text-slate-50'
          href='https://github.com/RomanStashuk'
          by='Roman Stashuk'
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default AppFooter;
