import styled from 'styled-components';

const Button = styled.button`
	background-color: transparent;
	border-color: black;
	font-family: monospace;
	margin-right: 10px;
	margin-left: 10px;

	&:hover {
		border-color: grey;
		cursor: pointer;
	}
`;

export default Button;