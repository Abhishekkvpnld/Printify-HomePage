import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="nav_logo">
                <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="logo" title="logo" />
            </div>

            <div className="nav_options">
                <a>Catalog</a>
                <a> How it works</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Services</a>
                <a>Use-cases</a>
                <a>Need help?</a>
            </div>

            <div className="nav_btn">
                <button className="nav_login">Log in</button>
                <button className="nav_signup">Sign up</button>
            </div>

        </div>
    )
}

export default Navbar;