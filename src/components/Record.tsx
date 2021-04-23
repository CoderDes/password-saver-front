import React, { useState } from 'react';

import { IRecord } from '../interfaces/index';


const Record: React.FunctionComponent<IRecord> = (props: IRecord) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<span>{props.title}</span>
			<input 
				type={isHovered ? 'text' : 'password'}
				value={props.password}
				readOnly // change later
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
		</div>
	);
}

export default Record;