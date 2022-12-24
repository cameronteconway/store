import '../styles/Guarantees.css';
import Guarantee from './Guarantee';

const Guarantees = ({ data }) => {
    const renderGuarantees = data.map((item, index) => (
        <Guarantee guarantee={item} key={index} />
    ));

    return (
        <section>
            <div className='wrapper'>
                <div className='guarantees-container'>{renderGuarantees}</div>
            </div>
        </section>
    );
};

export default Guarantees;
