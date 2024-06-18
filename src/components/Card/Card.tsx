import { ComponentPropsWithoutRef } from 'react';
import './Card.css';

type CardVariants =
  | {
      variant: 'fulltint';
      color: 'blue' | 'magenta';
    }
  | {
      variant: 'stripe-accent';
      color: 'blue';
    };

type CardProps = CardVariants & ComponentPropsWithoutRef<'article'>;

function Card(props: CardProps) {
  const { variant, color, className, children, ...delegated } = props;
  const classes = `${className ? className : ''} card`.trim();

  return (
    <article
      className={classes}
      data-variant={variant}
      data-color={color}
      {...delegated}
    >
      <div className="card-content"> {children}</div>
    </article>
  );
}

type TitleProps = {
  level?: 2 | 3 | 4 | 5 | 6;
  size?: 'm' | 'l' | 'xl' | 'xxl';
} & ComponentPropsWithoutRef<'h2'>;

function Title(props: TitleProps) {
  const { level = 2, size = 'xl', children } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className="card-title" data-size={size}>
      {children}
    </Tag>
  );
}

type DescriptionProps = ComponentPropsWithoutRef<'p'>;

function Description(props: DescriptionProps) {
  return <p className="card-description">{props.children}</p>;
}

type ImageProps = ComponentPropsWithoutRef<'img'>;
function Image(props: ImageProps) {
  return (
    <div className="card-image">
      <img {...props} />
    </div>
  );
}

type ActionProps =
  | ({ as: 'button' } & ComponentPropsWithoutRef<'button'>)
  | ({ as: 'link' } & ComponentPropsWithoutRef<'a'>);

function Action(props: ActionProps) {
  const { as, children, ...delegated } = props;

  const classes = 'card-action';

  return (
    <>
      {as === 'button' ? (
        <button
          {...(delegated as ComponentPropsWithoutRef<'button'>)}
          className={classes}
        >
          {children}
        </button>
      ) : (
        <a
          {...(delegated as ComponentPropsWithoutRef<'a'>)}
          className={classes}
        >
          {children}
        </a>
      )}
    </>
  );
}

Card.Title = Title;
Card.Description = Description;
Card.Image = Image;
Card.Action = Action;

export default Card;
