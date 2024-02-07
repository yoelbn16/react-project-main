import { Link, Typography } from '@mui/material';

const CopyrightComponent = (props) => {
	return (
		<Typography variant="body2" color="text.primary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Yasser Assi
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default CopyrightComponent;
