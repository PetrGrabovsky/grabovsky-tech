import { forwardRef, MutableRefObject } from 'react';

const Marker = forwardRef<HTMLSpanElement | undefined>((_, reference) => {
  return (
    <span
      ref={reference as MutableRefObject<HTMLSpanElement>}
      aria-hidden='true'
      className='h-0 w-0'
    />
  );
});

Marker.displayName = 'Marker';

export default Marker;
