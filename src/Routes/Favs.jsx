import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';
import Info from '../Components/Info.jsx';

const Favs = () => {
    const { state } = useGlobalStates();
    return (
        <>
           <h1>
                 Dentistas Favoritos
            </h1>
            <div className='Fav' style={{
                display: 'flex',

            }}>
                {state.favorites.length > 0 ? (
                    state.favorites.map((dentist) => <Card dentist={dentist} key={dentist.id} />)
                ) : (
                    <Info/>
                )}
            </div>
        </>
    );
};

export default Favs;

