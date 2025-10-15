function usePillNavItems() {
    // const navigate = useNavigate();

    const items = [
        // {label: 'Home', href: '/'},
        {label: 'Bio', href: '/me'},
        {label: 'Projects', href: '/projects'},
        {label: 'Login', onClick: () => alert('Log in!')},
    ];

    return items;
}

export default usePillNavItems;