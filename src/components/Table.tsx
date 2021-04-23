import React from 'react';

import { IRecord } from '../interfaces/index';
import RecordList from './RecordList';
import AddRecord from './AddRecord';

interface TableProps {
	records: IRecord[],
}

const Table: React.FunctionComponent<TableProps> = (props: TableProps) => {
	return (
		<React.Fragment>
			<h2>Table</h2>
			<RecordList records={props.records}/>
			<AddRecord />
		</React.Fragment>
	)
}

export default Table;