import React, { useState, useEffect } from 'react';

interface LoaderProps {
	loaderTitle: string;
}

const Loader: React.FunctionComponent<LoaderProps> = (props: LoaderProps) => {
	const DELAY_MS = 500;
	const [dots, setDots] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (dots.length >= 3) {
				setDots('');
			} else {
				setDots(dots + '.');
			}
		}, DELAY_MS);

		return function cleanup() {
			timer && clearTimeout(timer);
		}
	}, [dots]);

	return (
		<span>
			{`${props.loaderTitle.toUpperCase()}${dots}`}
		</span>
	);
};

export default Loader;