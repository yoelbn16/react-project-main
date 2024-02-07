import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import CardComponent from '../../Component/CardComponent';
import useFilterdData from '../../hooks/useFilterdData';

import useHandleFavClick from '../../hooks/useHandleFav';
import useHandleEditCard from '../../hooks/useHandleEdit';
import useHandleDelete from '../../hooks/useHandleDelete';
import normalizeFav from '../../services/normalizeFavs';

import ROUTES from '../../routes/ROUTES';

import axios from 'axios';
import GetCardsContext from '../../store/getCardsContext';

const DetailsPage = () => {
	const { setCardsFromServer } = useContext(GetCardsContext);
	const { id: _id } = useParams();
	const FavFilter = useFilterdData();
	const { handleFavClick } = useHandleFavClick();
	const { handleEditClick } = useHandleEditCard();
	const { handleDeleteClick } = useHandleDelete();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			if (!_id) return;

			try {
				const { data } = await axios.get(`cards/${_id}`);
				setCardsFromServer([normalizeFav(data)]);
			} catch (err) {
				console.log('error Fetching', err);
				alert('Failed to find card data');
			}
		};

		fetchData();
	}, [_id, setCardsFromServer]);

	const location = {
		lat: 32.13147290769876,
		lng: 34.96580113830216,
	};

	const handleEditCard = (id) => {
		handleEditClick(id);
	};

	const handleDeleteCard = (id) => {
		handleDeleteClick(id);
	};

	const handleFavCard = async (id) => {
		handleFavClick(id);
	};

	const handleInfoClick = (id) => {
		navigate(`${ROUTES.DETAILS}/${id}`);
	};

	return (
		<Container>
			<Grid container spacing={2} mt={2}>
				{FavFilter.map((card, index) => (
					<Grid container item xs={12} md={12} key={'carsCard' + index} justifyContent="center" alignItems="center" m={2}>
						<CardComponent id={card._id} title={card.title} subtitle={card.subtitle} img={card.image.url} phone={card.phone} address={card.address} cardNumber={card.bizNumber} onDelete={handleDeleteCard} Info={handleInfoClick} onEdit={handleEditCard} onFav={handleFavCard} isFav={card.liked} />
						<Grid item xs={12} md={6}>
							<Paper elevation={3} sx={{ margin: 2, padding: 10 }}>
								<Typography variant="h4" gutterBottom>
									Welcome to {`${FavFilter[0]?.title || ''}`}
								</Typography>
								<Typography variant="body1" paragraph>
									We are excited to have you visit us at the following location:
								</Typography>
								<Typography variant="body1">
									<strong>Address:</strong> {`${FavFilter[0].address.street || ''}, ${FavFilter[0].address.city || ''}, ${FavFilter[0].address.country || ''}`}
								</Typography>
								<Typography variant="body1">
									<strong>Phone:</strong> {`${FavFilter[0].phone || ''}`}
								</Typography>
								<Typography variant="body1">
									<strong>Email:</strong> {`${FavFilter[0].email || ''}`}
								</Typography>
								<Typography variant="body1" mt={2}>
									Our friendly team is here to assist you. Feel free to reach out for any inquiries or assistance you may need.
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				))}
				<Grid item xs={12} md={12} mb={3}>
					<Paper elevation={3} sx={{ padding: 2, height: '350px' }}>
						<Typography variant="h6" gutterBottom>
							Our Location on Google Maps
						</Typography>
						<LoadScript googleMapsApiKey="AIzaSyCKxCRfh3SS1NNLIh91nbMVASCf6gB6ptY">
							<GoogleMap center={location} zoom={15} mapContainerStyle={{ height: '90%', width: '100%' }}>
								<Marker position={location} label="CardifyHub" />
							</GoogleMap>
						</LoadScript>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DetailsPage;
