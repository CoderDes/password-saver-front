import React from 'react';

import { IRecord } from '../interfaces/index';
import RecordList from './RecordList';

interface TableProps {
	records: IRecord[],
}

const Table: React.FunctionComponent<TableProps> = (props: TableProps) => {
	return (
		<React.Fragment>
			<h2>Table</h2>
			<RecordList records={props.records}/>
		</React.Fragment>
	)
}

export default Table;