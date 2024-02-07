import * as React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AboutPage = () => {
	return (
		<Container component="main" maxWidth="md" sx={{ mb: 4 }}>
			<Paper elevation={3} sx={{ p: 3, mt: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					About Us
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Typography variant="h6" component="h2">
						Our Vision
					</Typography>
					<Typography paragraph>Welcome to our community platform, a dynamic space dedicated to connecting individuals with local businesses through a seamless digital experience. Our vision is to empower consumers by providing them with a comprehensive display of business cards, while also offering businesses the opportunity to showcase their services and connect directly with their target audience.</Typography>
					<Typography variant="h6" component="h2">
						What We Offer
					</Typography>
					<Typography paragraph>Our website is designed with accessibility and user engagement at its core. Here's what you can expect:</Typography>
					<Typography paragraph>
						- <strong>For Unsigned Users:</strong> Enjoy unrestricted access to our homepage and about page, where you can browse through business cards displaying essential information. Each card is equipped with a phone icon, allowing you to directly contact the business with a simple click.
					</Typography>
					<Typography paragraph>
						- <strong>For Signed-In Users:</strong> Delve deeper into what our community has to offer by adding your favorite businesses to a personalized favorites tab. This feature, along with dedicated navigation links to the favorites section, is exclusively available to our registered users.
					</Typography>
					<Typography paragraph>
						- <strong>For Business Owners:</strong> If you're a business owner, our platform becomes even more powerful. Not only can you list your business, but you'll also gain access to a 'My Cards' section via the navigation bars. This feature allows you to manage your listings and exclusively view the cards created by your business.
					</Typography>
					<Typography paragraph>
						- <strong>For Admins:</strong> Administrators have the crucial role of maintaining the quality and integrity of our platform. With the ability to delete business cards, admins ensure that only the most accurate and reliable information is available to our users.
					</Typography>
					<Typography variant="h6" component="h2">
						Join Us
					</Typography>
					<Typography paragraph>Whether you're looking to discover new businesses, list your own, or simply explore what your community has to offer, [Your Website Name] is your go-to platform. Sign up today and be part of a growing community that values connection, accessibility, and local engagement.</Typography>
				</Box>
			</Paper>
		</Container>
	);
};

export default AboutPage;
