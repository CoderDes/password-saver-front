import React from 'react';

import Record from './Record';
import { IRecord } from '../interfaces/index';

interface RecordListProps {
	records: IRecord[];
}

const RecordList: React.FunctionComponent<RecordListProps> = (props: RecordListProps) => (
	<ul>
		{
			props.records.map((record: IRecord) => {
				const {_id, title, password, userId, createdAt} = record;
				return (
					<li key={_id}>
						<Record 
							_id={_id}
							title={title}
							password={password}
							userId={userId}
							createdAt={createdAt}
						/>
					</li>
				)
			})
		}
	</ul>
);

export default RecordList;