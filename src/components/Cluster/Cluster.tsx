import { type CSSProperties, type ComponentPropsWithoutRef } from 'react';
import {
  type CSSAlignItemsProperty,
  type CSSJustifyContentProperty,
  type CSSLength,
} from '../../types';
import './Cluster.css';

type ClusterVariants =
  | { isFluid: true; minSize?: CSSLength }
  | {
      isFluid?: false;
      justify?: CSSJustifyContentProperty;
      align?: CSSAlignItemsProperty;
    };

type ClusterCommonProps = {
  children: React.ReactNode;
  horizontalSpace?: CSSLength;
  verticalSpace?: CSSLength;
  space?: CSSLength;
};

type ClusterProps = ClusterCommonProps &
  ClusterVariants &
  ComponentPropsWithoutRef<'div'>;

function Cluster(props: ClusterProps) {
  const {
    children,
    horizontalSpace,
    verticalSpace,
    space,
    isFluid,
    className,
    ...delegated
  } = props;
  const minSize = isFluid ? props.minSize : undefined;
  const justify = !isFluid ? props.justify : undefined;
  const align = !isFluid ? props.align : undefined;
  const classes = `${className || ''} cluster`.trim();

  return (
    <div
      className={classes}
      style={
        {
          '--cluster-horizontal-space': horizontalSpace,
          '--cluster-vertical-space': verticalSpace,
          '--cluster-space': space,
          '--min-size': minSize,
          '--justify': justify,
          '--align': align,
        } as CSSProperties
      }
      data-variant={props.isFluid ? 'fluid' : undefined}
      {...delegated}
    >
      {children}
    </div>
  );
}

export default Cluster;
