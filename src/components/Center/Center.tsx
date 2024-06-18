import { CSSProperties, type ComponentPropsWithoutRef } from 'react';
import { type CSSLength } from '../../types';
import './Center.css';

type CenterProps = {
  max?: CSSLength;
  gutters?: CSSLength;
} & ComponentPropsWithoutRef<'div'>;

function Center({ max, gutters, children }: CenterProps) {
  return (
    <div
      className="center"
      style={
        {
          '--center-max-size': max,
          '--center-gutters': gutters,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export default Center;
