import { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const GlobalStates = createContext({});

export const URI = 'https://jsonplaceholder.typicode.com/users';

const getFavoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites'));
const favoritesInitialState = getFavoritesFromLocalStorage ?? [];

const initialState = {
    data: [],
    dentist: {
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
    },
    favorites: favoritesInitialState,
    isDark: false,
    contact: {
        fullName: '',
        email: '',
        isFullNameValid: false,
        isEmailValid: false,
        showFullNameFeedback: false,
        showEmailFeedback: false,
        showSubmitFeedback: false,
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload,
            };
        case 'GET_DENTIST':
            return {
                ...state,
                dentist: action.payload,
            };
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter((fav) => fav.id !== action.payload),
            };
        case 'TOGGLE_THEME':
            return {
                ...state,
                isDark: !state.isDark,
            };
        case 'GET_CONTACT_FULL_NAME':
            return {
                ...state,
                contact: { ...state.contact, fullName: action.payload },
            };
        case 'VALIDATE_CONTACT_FULL_NAME':
            return {
                ...state,
                contact: {
                    ...state.contact,
                    isFullNameValid: action.payload,
                },
            };
        case 'SHOW_CONTACT_FULL_NAME_FEEDBACK':
            return {
                ...state,
                contact: {
                    ...state.contact,
                    showFullNameFeedback: state.contact.isFullNameValid === false,
                },
            };
        case 'GET_CONTACT_EMAIL':
            return {
                ...state,
                contact: { ...state.contact, email: action.payload },
            };
        case 'VALIDATE_CONTACT_EMAIL':
            return {
                ...state,
                contact: {
                    ...state.contact,
                    isEmailValid: action.payload,
                },
            };
        case 'SHOW_CONTACT_EMAIL_FEEDBACK':
            return {
                ...state,
                contact: {
                    ...state.contact,
                    showEmailFeedback: state.contact.isEmailValid === false,
                },
            };
        
        default:
            throw new Error();
    }
};

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios(URI);
                dispatch({ type: 'GET_DATA', payload: response.data });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    return <GlobalStates.Provider value={{ state, dispatch }}>{children}</GlobalStates.Provider>;
};

Context.propTypes = {
    children: PropTypes.any,
};

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);