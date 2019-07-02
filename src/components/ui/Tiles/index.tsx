import * as React from 'react';

import './_styles.scss';

export interface ITilesProps {
	gutter?: string;
	children: React.ReactNode;
}

const Tiles: React.FunctionComponent<ITilesProps> = ({ gutter = '0px', children }) => {
	let style = {
		gridGap: gutter,
		padding: gutter,
	};
	return (
		<div
			{...{
				className: 'tiles',
				style,
			}}
		>
			{children}
		</div>
	);
};

export default Tiles;
