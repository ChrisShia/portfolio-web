import {VscHome, VscArchive, VscAccount, VscSettingsGear, VscTerminal, VscRobot} from 'react-icons/vsc';
import { FiLogIn } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const items = [
    { icon: <VscRobot size={21} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscTerminal size={21} />, label: 'Co\\de', onClick: () => alert('MyCode!') },
    { icon: <VscHome size={21} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <RiLinkedinLine size={21} />, label: 'Settings', onClick: () => alert('Settings!') },
    { icon: <FiLogIn size={21} />, label: 'Login', onClick: () => alert('Log in!') },
];

export default items;