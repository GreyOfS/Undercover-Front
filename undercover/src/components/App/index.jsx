import './style.scss';
import { Page404 } from '../Error';
import { Button, Input } from '../Input';
import ThemeToggleBtn from '../ThemeToggleBtn';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLoginAndSignin from '../PageLoginAndSignin';

function App() {
    const isDarkModeOn = useSelector((state) => state.theme.dark);
    const [input, setInput] = useState('')
    return(
        <BrowserRouter>
            <div className={`app ${isDarkModeOn ? 'dark' : 'light'}`}>
                <Routes>
                    <Route path='/' element={<>
                        <Input type="text" tag="Mon Input" value={input} setValue={setInput} />
                        <Button type="button">Button</Button>
                        <ThemeToggleBtn />
                    </>}/>
                    <Route path='/login' element={<PageLoginAndSignin tab='LOGIN' />} />
                    <Route path='/signin' element={<PageLoginAndSignin tab='SIGNIN' />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;