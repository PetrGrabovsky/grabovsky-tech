'use client';

import clsx from 'clsx';

import socialLinks from '@/data/socialLinks';
import useLayout from '@/hooks/useLayout';
import { sora } from '@/styles/fonts';

const Footer = () => {
  const { isMobileNavOpen } = useLayout();

  return (
    <footer
      aria-hidden={isMobileNavOpen}
      className='flex h-12 flex-col justify-end'
    >
      <div
        className={clsx(
          'layout-background transition-primary w-full border-t',
          'overflow-hidden bg-gradient-to-t',
          isMobileNavOpen ? 'h-0' : 'h-12'
        )}
      >
        <div
          className={clsx(
            sora.className,
            'transition-primary container flex h-full w-full items-center',
            'justify-between text-sm text-text-secondary',
            isMobileNavOpen ? 'opacity-0' : 'opacity-100'
          )}
        >
          <a
            href='mailto:info@grabovsky.tech'
            aria-label='Kontaktujte mě e-mailem na info@grabovsky.tech'
            className='transition-primary hover:scale-105'
          >
            info@grabovsky.tech
          </a>
          <div className='flex h-full items-center space-x-3 py-2'>
            {socialLinks.map(({ id, href, Icon, label }) => (
              <a
                key={id}
                href={href}
                aria-label={label}
                tabIndex={isMobileNavOpen ? -1 : 0}
                target='_blank'
                rel='noopener noreferrer'
                className={clsx(
                  'transition-primary h-full w-auto p-1',
                  'hover:scale-110'
                )}
              >
                <Icon aria-hidden='true' className='h-full w-auto' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
