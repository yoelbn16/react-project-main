import { Card, CardHeader, CardContent, Typography, CardActionArea, CardMedia, Divider, IconButton, Box } from '@mui/material';
import { useContext } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import { SignalCellular1Bar } from '@mui/icons-material';
import LogInContext from '../store/loginContext';

const CardComponent = ({ title, subtitle, img, phone, address, cardNumber, id, onDelete, Info, onEdit, onFav, isFav }) => {
	const { logIn } = useContext(LogInContext);

	const handleDeleteClick = () => {
		onDelete(id);
	};

	const handleInfoClick = () => {
		Info(id);
	};

	const handleFavClick = () => {
		onFav(id);
	};

	const handleEditClick = () => {
		onEdit(id);
	};

	return (
		<Card raised className="cards">
			<CardActionArea>
				<CardMedia component="img" image={img} alt="image" height={200} />
			</CardActionArea>
			<CardHeader title={title} subheader={subtitle}></CardHeader>
			<Divider></Divider>
			<CardContent>
				<Typography>
					<Typography component="span" fontWeight={700}>
						Phone:
					</Typography>
					{phone}
					<a href={`tel:${phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
						<IconButton aria-label="call" size="small">
							<PhoneIcon />
						</IconButton>
					</a>
				</Typography>
				<Typography>
					<Typography component="span" fontWeight={700}>
						Address:
					</Typography>
					{`${address.state} ${address.country} ${address.city} ${address.zip} ${address.street} ${address.houseNumber}`}
				</Typography>
				<Typography>
					<Typography component="span" fontWeight={700}>
						Card number:
					</Typography>
					{cardNumber}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						{logIn && logIn.isBusiness && (
							<IconButton onClick={handleEditClick}>
								<DeleteIcon />
							</IconButton>
						)}
						{logIn && logIn.isAdmin && (
							<IconButton onClick={handleEditClick}>
								<ModeIcon />
							</IconButton>
						)}
					</Box>
					<Box>
						<IconButton onClick={handleInfoClick}>
							<InfoIcon />
						</IconButton>
						{logIn && (
							<IconButton onClick={handleFavClick}>
								<FavoriteIcon color={isFav ? 'error' : 'inherit'} />
							</IconButton>
						)}
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

CardComponent.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	img: PropTypes.string,
	phone: PropTypes.string.isRequired,
	address: PropTypes.shape({
		state: PropTypes.string,
		country: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		street: PropTypes.string.isRequired,
		houseNumber: PropTypes.number.isRequired,
		zip: PropTypes.number.isRequired,
	}).isRequired,
	cardNumber: PropTypes.number.isRequired,
	onDelete: PropTypes.func,
	Info: PropTypes.func,
	onEdit: PropTypes.func,
	onFav: PropTypes.func,
	isFav: PropTypes.bool,
};

CardComponent.defaultProps = {
	img: SignalCellular1Bar,
	subtitle: 'Cards HomePage',
	phone: ' 050-000-00-00',
	address: {
		city: ' City',
		street: 'Street',
		houseNumber: 11,
	},
	cardNumber: 12345,
};

export default CardComponent;
