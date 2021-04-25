import React from 'react';

import StyledList from './style';
import Record from '../Record/index';
import { IRecord } from '../../interfaces/index';

interface RecordListProps {
	records: IRecord[];
}

const RecordList: React.FunctionComponent<RecordListProps> = (props: RecordListProps) => (
	<StyledList>
		<li key={Math.random()}>
			<div className="block-title">
				<span className="title">service title</span>
				<span className="title">password</span>
			</div>
		</li>
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
	</StyledList>
);

export default RecordList;