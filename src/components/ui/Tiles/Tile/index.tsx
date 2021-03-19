import * as React from 'react';
import cn from 'classnames';
import { TFunction, IDictionary } from 'helpers/definitions';

interface ITileProps {
  key?: string | number;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  onClick?: TFunction;
}

const Tile: React.FunctionComponent<ITileProps> = ({ children, colSpan, rowSpan, className, ...otherProps }) => {
  const style: IDictionary<string> = {};
  if (colSpan) {
    style.gridColumn = `span ${colSpan} / auto`;
  }
  if (rowSpan) {
    style.gridRow = `span ${rowSpan} / auto`;
  }
  return (
    <div
      {...{
        className: cn('tile', className),
        style,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default Tile;
