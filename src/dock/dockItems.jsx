import {VscHome, VscArchive, VscAccount, VscSettingsGear, VscTerminal, VscRobot} from 'react-icons/vsc';
import { FiLogIn } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

export default function useDockItems() {
    const navigate = useNavigate();

    const items = [
        {icon: <VscHome size={21}/>, label: 'Home', onClick: () => navigate('/')},
        {icon: <VscRobot size={21}/>, label: 'Me', onClick: () => navigate('/me')},
        {icon: <VscTerminal size={21}/>, label: 'Projects', onClick: () => navigate('/projects')},
        // {
        //     icon: <RiLinkedinLine size={21}/>,
        //     label: 'LinkedIn',
        //     onClick: () => window.open('https://linkedin.com/in/YOUR_USERNAME', '_blank')
        // },
        {icon: <FiLogIn size={21}/>, label: 'Login', onClick: () => alert('Log in!')},
    ];

    return items;
}