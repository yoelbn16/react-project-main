import ROUTES from '../routes/ROUTES';

const alwaysLinks = [{ to: ROUTES.ABOUT, title: 'About Us' }];

const loggedInLinks = [{ to: ROUTES.FAV, title: 'Favorites' }];

const bizLinks = [{ to: ROUTES.MYCARDS, title: 'My Cards' }];

const adminLinks = [{ to: ROUTES.SANDBOX, title: 'UserManage' }];

const loggedOutLinks = [
	{ to: ROUTES.REGISTER, title: 'Register page' },
	{ to: ROUTES.LOGIN, title: 'Login page' },
];

export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks, adminLinks };
