import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export enum EImageCard {
  SQUARE = 'square',
  RECTANGLE = 'rectangle',
}

interface IImageCardProps {
  url: string;
  type?: EImageCard;
  className?: string;
}

const ImageCard: React.FunctionComponent<IImageCardProps> = ({ url, type = EImageCard.RECTANGLE, className }) => {
  const props = {
    className: cn(className, 'imagecard', `imagecard--${type}`),
    style: {
      backgroundImage: `url('${url}')`,
    },
  };

  return <div {...props}></div>;
};

export default ImageCard;
