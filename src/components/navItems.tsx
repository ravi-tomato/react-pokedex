const navLinks = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Pokemon",
        path: "/Pokemon"
    }
]

export const NavItems = () => {
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {
                navLinks.map((link) => {
                    return (
                        <li
                            key={ link.path }
                            className="md:transition-up"
                        >
                            <a href={ link.path }>
                                <span className="text-base font-medium leading-normal">
                                    { link.label }
                                </span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}