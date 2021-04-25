import React from 'react';

import StyledHeader from './style';
import Button from '../Button/index';

interface HeaderProps {
	pageTitle: string;
	userEmail: string;
	handleLogout: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	return (
		<StyledHeader>
			<h1 className="page-title">{props.pageTitle}</h1>
			<div className="user-block">
				<span>{props.userEmail}</span>
				<Button 
					onClick={props.handleLogout}
				>
					Logout
				</Button>
			</div>
		</StyledHeader>
	);
};

export default Header;