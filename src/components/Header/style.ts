import styled from 'styled-components';

const Header = styled.header`
	display: grid;
	grid-template-columns: repeat(12, 1fr);

	.page-title {
		display: block;
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 4;
		grid-column-end: 10;
		margin-top: 10px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
	}

	.user-block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 10;
		grid-column-end: 13;
	}
`;

export default Header;