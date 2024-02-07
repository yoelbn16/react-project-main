import { Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../Component/CardComponent';
import useHandleEditCard from '../hooks/useHandleEdit';
import useHandleFavClick from '../hooks/useHandleFav';
import normalizeFav from '../services/normalizeFavs';
import GetCardsContext from '../store/getCardsContext';
import useFilterdData from '../hooks/useFilterdData';
import useHandleDelete from '../hooks/useHandleDelete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ROUTES from '../routes/ROUTES';

const HomePage = () => {
	let { cardsFromServer, setCardsFromServer, setCardsCopy } = useContext(GetCardsContext);
	const [visibleItems, setVisibleItems] = useState(8);
	const FavFilter = useFilterdData();
	const { handleFavClick } = useHandleFavClick();
	const { handleEditClick } = useHandleEditCard();
	const { handleDeleteClick } = useHandleDelete();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				await axios.get('/cards').then(({ data }) => {
					setCardsFromServer(normalizeFav(data));
					setCardsCopy(normalizeFav(data));
				});
			} catch (error) {
				return <Typography>Error,Could not find any card</Typography>;
			}
		};

		fetchData();
	}, [setCardsFromServer, setCardsCopy]);

	if (!cardsFromServer || !cardsFromServer.length) {
		return <Typography>Could not find results</Typography>;
	}

	const handleShowMore = () => {
		setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<Grid container spacing={2} mt={2}>
			{FavFilter.slice(0, visibleItems).map((card, index) => (
				<Grid item lg={3} md={4} sm={6} xs={12} key={'carsCard' + index}>
					<CardComponent id={card._id} title={card.title} subtitle={card.subtitle} img={card.image.url} phone={card.phone} address={card.address} cardNumber={card.bizNumber} onDelete={handleDeleteCard} Info={handleInfoClick} onEdit={handleEditCard} onFav={handleFavCard} isFav={card.liked} />
				</Grid>
			))}
			<Grid container direction="row" justifyContent="center" alignItems="center" m={3}>
				{visibleItems < cardsFromServer.length && (
					<Button variant="contained" endIcon={<ExpandMoreIcon />} onClick={handleShowMore} color="primary">
						Show More Cards
					</Button>
				)}
				{visibleItems > cardsFromServer.length && (
					<Button variant="contained" endIcon={<ArrowDropUpIcon />} onClick={scrollToTop} color="primary">
						scroll To Top
					</Button>
				)}
			</Grid>
		</Grid>
	);
};

export default HomePage;
