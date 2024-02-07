import { Container, Grid, Typography, Button } from '@mui/material';
import ROUTES from '../routes/ROUTES';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8}>
					<Typography variant="h5" color="initial">
						Ooops... The Request URL was not found on this server
					</Typography>
					<Link to={ROUTES.HOME}>
						<Button variant="text" color="primary">
							CLICK HERE TO RETURN TO THE hOME PAGE...
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={4} justifyContent="center" alignItems="center">
					<img width="60%" src="/assets/imgs/404.jpg" alt="404" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default ErrorPage;
