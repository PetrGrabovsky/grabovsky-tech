import clsx from 'clsx';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='h-full py-1'>
      <Link
        href='/'
        aria-label='Logo grabovsky.tech, přejít na domovskou stránku'
        className='block h-full p-1'
      >
        <svg
          viewBox='0 0 376 276'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='h-full w-auto fill-current'
        >
          <g filter='url(#logoInnerShadow)'>
            <path
              className='text-brand-primary'
              d={clsx(
                'M173.721 275.251H58.2507L0.515625 175.251L58.2507',
                '75.2515L173.721 75.2515L202.588',
                '125.251H144.853H128.486H87.1182L58.2507 175.251L87.1182',
                '225.251H144.853L159.287 200.251H217.022L173.721 275.251Z'
              )}
            />
            <path
              className='text-brand-secondary'
              d={clsx(
                'M159.383 50.2515H130.42L159.287',
                '0.251465H245.986H303.721L361.456 100.251L318.155',
                '175.251L375.89 275.251H318.155L274.853',
                '200.251H245.986H188.251H97.6845L83.2507 175.251L97.6845',
                '150.251H159.383H217.118H245.986H256.633H274.853L303.721',
                '100.251L274.853 50.2515H256.633H245.986H217.118H159.383Z'
              )}
            />
          </g>
          <defs>
            <filter
              id='logoInnerShadow'
              x='0.515625'
              y='0.251465'
              width='380.374'
              height='280'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='5' dy='5' />
              <feGaussianBlur stdDeviation='2.5' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect1_innerShadow_811_683'
              />
            </filter>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
