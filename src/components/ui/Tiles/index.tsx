import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export interface ITilesProps {
	className?: string;
	gutter?: string;
	children: React.ReactNode;
}

const Tiles: React.FunctionComponent<ITilesProps> = ({ gutter, className, children }) => {
	const tilesRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const { current: tiles } = tilesRef;
		if (tiles && !className && gutter) {
			tiles.style.setProperty('--tiles-gutter', gutter);
		}
	}, [gutter, className]);

	return (
		<div ref={tilesRef} className={cn('tiles', className)}>
			{children}
		</div>
	);
};

export default Tiles;
