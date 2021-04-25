import styled from 'styled-components';

const StyledList = styled.ul`
	padding: 0;
	list-style: none;
	width: 100%;

	.block-title {
		display: flex;
		justify-content: flex-start;
		width: 100%;
	}

	.title {
		width: 30%;
		text-transform: uppercase;
	}
`;

export default StyledList;