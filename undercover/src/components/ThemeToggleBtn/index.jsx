import './style.scss';
import { themeToggle } from '../../func/theme';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function ThemeToggleBtn({ className }) {
    const dispatch = useDispatch();
    const isDarkModeOn = useSelector((state) => state.theme.dark);
    return(
        <button
            type='button'
            onClick={() => themeToggle(dispatch)}
            className={className === null ? 'themeToggleBtn' : `themeToggleBtn ${className}`}
        >
            {isDarkModeOn ? <MdLightMode /> : <MdDarkMode />}
        </button>
    )
}

ThemeToggleBtn.propTypes = {
    className: PropTypes.string
}

ThemeToggleBtn.defaultProps = {
    className: null
}

export default ThemeToggleBtn;