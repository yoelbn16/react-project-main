import ROUTES from '../../routes/ROUTES';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const alwaysButtons = [
	{
		to: ROUTES.ABOUT,
		title: 'About Us',
		icon: <InfoOutlinedIcon />,
	},
];

const loggedInButtons = [{ to: ROUTES.FAV, title: 'Favroites', icon: <FavoriteBorderOutlinedIcon /> }];

const bizButtons = [{ to: ROUTES.MYCARDS, title: 'My Cards', icon: <PersonPinOutlinedIcon /> }];

const adminButtons = [{ to: ROUTES.SANDBOX, title: 'UserManage', icon: <SettingsOutlinedIcon /> }];

const loggedOutButtons = [
	{
		to: ROUTES.REGISTER,
		title: 'Register page',
		icon: <CreateOutlinedIcon />,
	},
	{ to: ROUTES.LOGIN, title: 'Login page', icon: <LoginIcon /> },
];

export { alwaysButtons, loggedInButtons, loggedOutButtons, bizButtons, adminButtons };
