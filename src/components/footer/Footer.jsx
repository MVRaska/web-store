import { Link } from "react-router-dom";

const Footer = () => {

    return <footer className="footer">
        <div>Please carefully read our <Link to='/terms'>Terms Of Service</Link> and <Link to='/privacy'>Privacy Policy</Link> before making any purchases of our products.</div>
        <div>For more informations, please <Link to='/contact'>CONTACT</Link> us.</div>
        <p>&copy; 2024 Online Store</p>
    </footer>
}

export default Footer;