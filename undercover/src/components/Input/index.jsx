import './style.scss';
import PropTypes from 'prop-types';

/*--- Input ---*/

export function Input({ type, register, tag, onChange }) {
    return(
        <div className='input'>
            <input
                type={type}
                {...register}
                placeholder=" "
                className='input_field'
                onChange={(e) => {
                    onChange(e)
                }}
            />
            <span className='input_label'>{tag}</span>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'password',
        'number',
        'email',
        'search',
        'tel',
        'url',
        'datetime'
    ]).isRequired,
    register: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

Input.defaultProps = {
    onChange: (e) => {}
}

/*--- Input ---*/
/*--- Button ---*/

export function Button({ type, children, border }) {
    return(
        <button
            className={border ? 'button border' : 'button'}
            type={type}
        >{children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf([
        'submit',
        'reset',
        'button'
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    border: PropTypes.bool
}

Button.defaultProps = {
    button: false
}

/*--- Button ---*/
/*--- Slider ---*/

export function Slider() {
    return(
        <div className='slider'>

        </div>
    )
}

/*--- Slider ---*/