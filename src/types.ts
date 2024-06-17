export type CSSLength =
  | number
  | `${number}${'px' | 'ch' | 'pt' | 'cm' | 'in' | 'em' | 'rem' | ''}`
  | `var(--${string})`;

export type CSSJustifyContentProperty =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

export type CSSAlignItemsProperty =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});
