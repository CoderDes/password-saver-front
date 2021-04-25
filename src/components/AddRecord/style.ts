import styled from 'styled-components';

const AddRecordWrapper = styled.form`
	width: 100%;
	
	.wrapper {
		display: flex;		

		&--fields {
			justify-content: center;
			margin-top: 20px;
			margin-bottom: 20px;
		}
	}

	.field {
		border: 1px solid transparent;
		font-family: monospace;

		&--title {
			margin-right: 20px;
		}

		&:hover {
			border-bottom: 1px solid black;
			cursor: pointer;
		}
	}

	.icon {
		color: gray;
		margin-left: 10px;

		&:hover {
			cursor: pointer;
		}

		&:active {
			color: black;
		}
	}
`;

export default AddRecordWrapper;