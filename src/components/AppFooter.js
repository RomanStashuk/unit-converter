import { Footer } from 'flowbite-react';

const AppFooter = () => {
  return (
    <Footer
      container
      className='rounded-none bg-gradient-to-r from-violet-400 to-purple-300 shadow shadow-slate-200 dark:from-slate-950 dark:to-slate-700'
    >
      <Footer.Copyright
        className='text-slate-700 dark:text-slate-200'
        href='https://github.com/RomanStashuk'
        by='Roman Stashuk'
        year={2024}
      />
    </Footer>
  );
};

export default AppFooter;
