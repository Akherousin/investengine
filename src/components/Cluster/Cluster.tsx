import { CSSProperties } from 'react';
import {
  type CSSAlignItemsProperty,
  type CSSJustifyContentProperty,
  type CSSLength,
} from '../../types';
import './Cluster.css';

type ClusterVariants =
  | { isFluid: true; minSize: CSSLength }
  | {
      isFluid?: false;
      justify?: CSSJustifyContentProperty;
      align?: CSSAlignItemsProperty;
    };

type ClusterProps = {
  children: React.ReactNode;
  horizontalSpace?: CSSLength;
  verticalSpace?: CSSLength;
  space?: CSSLength;
} & ClusterVariants;

function Cluster(props: ClusterProps) {
  const { children, horizontalSpace, verticalSpace, space, isFluid } = props;
  const minSize = isFluid ? props.minSize : undefined;
  const justify = !isFluid ? props.justify : undefined;
  const align = !isFluid ? props.align : undefined;

  return (
    <div
      className="cluster"
      style={
        {
          '--horizontal-space': horizontalSpace,
          '--vertical-space': verticalSpace,
          '--space': space,
          '--min-size': minSize,
          '--justify': justify,
          '--align': align,
        } as CSSProperties
      }
      data-variant={props.isFluid ? 'fluid' : undefined}
    >
      {children}
    </div>
  );
}

export default Cluster;
