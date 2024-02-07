import { BottomNavigation, Paper } from '@mui/material';

import BottomButtons from './BottmoNavigation';
const FooterComponent = () => {
	return (
		<Paper elevation={4} sx={{ position: 'sticky', bottom: 0, zIndex: 1, mt: 3, mb: 0, width: '100%' }}>
			<BottomNavigation>
				<BottomButtons />
			</BottomNavigation>
		</Paper>
	);
};

export default FooterComponent;
