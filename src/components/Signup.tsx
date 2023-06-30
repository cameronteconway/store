import { useRef } from 'react';
import '../styles/Signup.scss';

const Signup = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onFocus = () => {
        if (formRef.current)
            formRef.current.style.boxShadow = '0px 0px 5px var(--cyan)';
    };

    const onBlur = () => {
        if (formRef.current) formRef.current.style.boxShadow = 'unset';
    };

    return (
        <section>
            <div className='wrapper'>
                <div className='signup'>
                    <p className='signup__large-text'>
                        If you really like us follow our{' '}
                        <a href='#' className='signup__link'>
                            Insta?
                        </a>
                    </p>
                    <p className='signup__or'>Or...</p>
                    <p className='signup__large-text'>Join our mailing list?</p>
                    {/* <div> */}
                    <form
                        onSubmit={onSubmit}
                        ref={formRef}
                        className='signup__newsletter'
                    >
                        <input
                            aria-labelledby='weekly-updates'
                            className='signup__input-box'
                            type='email'
                            id='signup'
                            name='signupemails'
                            placeholder='Enter your email'
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                        <input
                            title='Submit email address for weekly updates'
                            className='signup__submit-button'
                            type='submit'
                            name='submit'
                            value='Submit'
                        />
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Signup;
