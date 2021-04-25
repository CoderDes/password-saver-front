import styled from 'styled-components';

const StyledRow = styled.form`
	display: flex;
	flex-direction: space-between;
	margin-top: 10px;

	.field {
		font-family: monospace;
		width: 80%;
		margin: 0;
		text-align: left;

		&--title {
			width: 30%;
		}

		&--password {
			width: 30%;
			border: 0px;
		}

		&:hover {
			cursor: pointer
		}
	}

	.btn-block {
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
		marrgin-left: 10px;
	}
`;

export default StyledRow;