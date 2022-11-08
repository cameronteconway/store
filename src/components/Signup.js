import '../styles/Signup.css';

const Signup = () => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <section>
            <div className='colour-block-signup'>
                <div className='wrapper'>
                    <div className='signup-container'>
                        <div className='newsletter'>
                            <form onSubmit={onSubmit}>
                                <input
                                    aria-labelledby='weekly-updates'
                                    className='input-box'
                                    type='email'
                                    id='signup'
                                    name='signupemails'
                                    placeholder='Enter your email'
                                />
                                <input
                                    title='Submit email address for weekly updates'
                                    className='submit-button'
                                    type='submit'
                                    name='submit'
                                    value='Sign Me Up'
                                />
                            </form>
                        </div>
                        <span className='weekly' id='weekly-updates'>
                            Sign up fo weekly updates
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
