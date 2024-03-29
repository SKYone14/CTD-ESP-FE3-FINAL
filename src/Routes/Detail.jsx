import { useParams } from 'react-router-dom';
import { URI, useGlobalStates } from '../Context/Context.jsx';
import { useEffect } from 'react';
import axios from 'axios';


const Detail = () => {
    const { state, dispatch } = useGlobalStates();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios(`${URI}/${id}`);
                dispatch({ type: 'GET_DENTIST', payload: response.data });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch, id]);

    return (
        <article>
            <h1>{state.dentist.name}</h1>
                       
            <img/>
            <p></p>
            <h2>Datos Del Profesional</h2>
            <p>
               Email: {state.dentist.email.toLowerCase()}
            </p>
            <p>
                 Telefono {state.dentist.phone}
            </p>
            <p>
                <i></i>
                <a href={`https://www.${state.dentist.website}`} target="_blank" rel="noreferrer">
                    {` www.${state.dentist.website}`}
                </a>
            </p>
        </article>
    );
};

export default Detail;


