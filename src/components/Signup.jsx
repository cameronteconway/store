import { useRef } from 'react';
import '../styles/Signup.css';

const Signup = () => {
    const formRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onFocus = (e) => {
        formRef.current.style.boxShadow = '0px 0px 5px var(--cyan)';
    };

    const onBlur = (e) => {
        formRef.current.style.boxShadow = 'unset';
    };

    return (
        <section>
            <div className='wrapper'>
                <div className='signup-container'>
                    <p className='large-text'>
                        If you really like us follow our{' '}
                        <a href='#' className='outline'>
                            Insta?
                        </a>
                    </p>
                    <p className='or'>Or...</p>
                    <p className='large-text'>Join our mailing list?</p>
                    <div className='newsletter'>
                        <form onSubmit={onSubmit} ref={formRef}>
                            <input
                                aria-labelledby='weekly-updates'
                                className='input-box'
                                type='email'
                                id='signup'
                                name='signupemails'
                                placeholder='Enter your email'
                                onBlur={onBlur}
                                onFocus={onFocus}
                            />
                            <input
                                title='Submit email address for weekly updates'
                                className='submit-button'
                                type='submit'
                                name='submit'
                                value='Submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
