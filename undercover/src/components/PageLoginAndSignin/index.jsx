import './style.scss';
import Page from '../Page';
import { ErrorsMessage } from '../Error';
import { Button, Input } from '../Input';
import ThemeToggleBtn from '../ThemeToggleBtn';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function SigninTab() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorsList, setErrorsList] = useState([]);
    return(
        <form className='signinTab' onSubmit={handleSubmit((data) => {
            console.log(data, errors);
        })}>
            <Input type='email' register={{...register('email', { required: "The email is required" })}} tag='email' />
            <Input type='text' register={{...register('name', { required: "The name is required" })}} tag='name' />
            <Input type='password' register={{...register('password1', { required: "The password is required" })}} tag='password' />
            <Input type='password' register={{...register('password2', { required: "The confirmation password is required" })}} tag='confirmation' />
            <span>
                <input type="checkbox" register={{...register('cguAccepted')}} />
                <label>I accept the general conditions of use</label>
            </span>
            <ErrorsMessage codes={errorsList} />
            <Button type='submit'>Sign In</Button>
        </form>
        )
}

function LoginTab() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorsList, setErrorsList] = useState([]);
    return(
        <form className='loginTab' onSubmit={handleSubmit((data) => {
            console.log(data, errors);
        })}>
            <Input type='email' register={{...register('email', { required: "The email is required" })}} tag='email'/>
            <Input type='password' register={{...register('password', { required: "The password is required" })}} tag='password'/>
            <ErrorsMessage codes={errorsList} />
            <Button type='submit'>Login</Button>
        </form>
        )
}

function PageLoginAndSignin({ tab }) {
    return(
        <Page className='pageLoginAndSignin'>
            <ThemeToggleBtn className='pageLoginAndSignin_themeToggleBtn'/>
            <section className='pageLoginAndSignin_section'>
                <nav className='pageLoginAndSignin_section_nav'>
                    <NavLink
                        to='/login'
                        className={({ isActive }) => isActive ? 'pageLoginAndSignin_section_nav_link pageLoginAndSignin_section_nav_link--active' : 'pageLoginAndSignin_section_nav_link'}
                        >Login
                    </NavLink>
                    <NavLink
                        to='/signin'
                        className={({ isActive }) => isActive ? 'pageLoginAndSignin_section_nav_link pageLoginAndSignin_section_nav_link--active' : 'pageLoginAndSignin_section_nav_link'}
                        >Signin
                    </NavLink>
                </nav>
                {tab === 'LOGIN' && <LoginTab />}
                {tab === 'SIGNIN' && <SigninTab />}
            </section>
        </Page>
    )
}

PageLoginAndSignin.propTypes = {
    tab: PropTypes.oneOf(['LOGIN', 'SIGNIN']).isRequired
}

export default PageLoginAndSignin;