const authFormStyles = {
	form: {
		display: 'flex',
		flexDirection: 'column' as 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		height: '30%',
		margin: '0 auto',
	}, 
	fieldWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'space-between',
		marginTop: '10px',
		width: '100%',
	},
	fieldLabel: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	field: {
		fontFamily: 'monospace',
		border: '1px solid transparent',
	},
	button: {
		maxWidth: '20%',
		marginTop: '20px',
	}
}

export default authFormStyles;