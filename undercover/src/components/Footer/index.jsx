import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
    return(
        <footer className='footer'>
            <Link to="/cgu">CGU</Link>
            <Link to="/mentionlegale">Mention Légale</Link>
        </footer>
    )
}

export default Footer;