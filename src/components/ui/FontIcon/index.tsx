import * as React from 'react';
import cn from 'classnames';

export interface IFontIconProps {
  name: string;
  className?: string | string[];
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const FontIcon: React.FunctionComponent<IFontIconProps> = ({ name, className, ...otherProps }) => {
  const classes = cn(`icon icon-${name}_icon`, className);
  return <i className={classes} {...otherProps}></i>;
};

export default FontIcon;
