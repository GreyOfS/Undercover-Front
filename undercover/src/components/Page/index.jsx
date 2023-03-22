import './style.scss';
import Footer from '../Footer';
import PropTypes from 'prop-types';

function Page({ children, className }) {
    return(
        <div className='page'>
            <main className={className === null ? 'page_main' : `page_main ${className}`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Page.defaultProps = {
    className: null
}

export default Page;