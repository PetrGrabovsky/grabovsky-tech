import clsx from 'clsx';

const Header = () => {
  return (
    <header
      className={clsx(
        'layout-background fixed inset-0 h-16 border-b bg-gradient-to-b'
      )}
    >
      <div className='container'>Header</div>
    </header>
  );
};

export default Header;
