import './style.scss';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
    const isDarkModeOn = useSelector((state) => state.theme.dark);
    return(
        <BrowserRouter>
            <div className={`app ${isDarkModeOn ? 'dark' : 'light'}`}>

            </div>
        </BrowserRouter>
    )
}

export default App;