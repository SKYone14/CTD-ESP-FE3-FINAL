import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context.jsx';
import doctor from '../utils/images/doctor.jpg'


const Card = ({ dentist }) => {
    const { state, dispatch } = useGlobalStates();
    const favorite = state.favorites.find((dent) => dent.id === dentist.id);

    const addFavorite = () => dispatch({ type: 'ADD_FAVORITE', payload: dentist });
    const removeFavorite = () => dispatch({ type: 'REMOVE_FAVORITE', payload: dentist.id });

    const handleClick = () => {
        state.favorites.find((dent) => dent.id === dentist.id) ? removeFavorite() : addFavorite();
    };

    return (
        <article className='lacarta'>
            <Link to={`/dentist/${dentist.id}`}>
                <img src= {doctor} style={{maxWidth: '500px', maxHeight: '200px'}} />
                <h2>{dentist.name}</h2>
                <p>Especialidad:</p>
                <p>Dentalis 🦇 Tormentis</p>
               
                <p>@{dentist.username.toLowerCase()}</p>
            </Link>
            <button onClick={handleClick} title="Agrega a Favoritos">
            <i role="img"
               aria-label="Star"
               style={{ marginRight: '5px' }}>{favorite ? '⭐️' : '☆'}
    </i>
            </button>
        </article>
    );
};

Card.propTypes = {
    dentist: PropTypes.object,
};

export default Card;