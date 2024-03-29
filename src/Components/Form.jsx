import { useGlobalStates } from '../Context/Context.jsx'
import Info from './Info.jsx';



const Form = () => {
    const { state, dispatch } = useGlobalStates();

    const fullNameRegExp = /^[a-z' 'áéíóúñ'-]{5,30}$/g;
    const emailRegExp = /[\w.-]{2,30}@[\w.-]{2,30}\.\w{2,4}(?:.\w{2,4})?/g;

    const handleFullNameBlur = () => {
        dispatch({
            type: 'VALIDATE_CONTACT_FULL_NAME',
            payload: fullNameRegExp.test(state.contact.fullName.toLowerCase()),
        });
        dispatch({
            type: 'SHOW_CONTACT_FULL_NAME_FEEDBACK',
        });
    };

    const handleEmailBlur = () => {
        dispatch({
            type: 'VALIDATE_CONTACT_EMAIL',
            payload: emailRegExp.test(state.contact.email.toLowerCase()),
        });
        dispatch({
            type: 'SHOW_CONTACT_EMAIL_FEEDBACK',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'SHOW_SUBMIT_FEEDBACK',
            payload: true,
        });

        setTimeout(
            () =>
                dispatch({
                    type: 'SHOW_SUBMIT_FEEDBACK',
                    payload: false,
                }),
            15000
        );

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Nombre completo:</label>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    placeholder="Armando Bronca Segura."
                    onChange={(e) =>
                        dispatch({ type: 'GET_CONTACT_FULL_NAME', payload: e.target.value })
                    }
                    onBlur={handleFullNameBlur}
                />
                {state.contact.showFullNameFeedback ? (
                    <Info
                        icon={'fa-solid fa-circle-xmark'}
                        feedback={
                            "The name you typed is invalid, please only use letters, hyphens (-) and apostrophes (')," +
                            ' it must have at least 5 characters.'
                        }
                        color={'#9b5151'}
                    />
                ) : null}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Armando.Bronca@segura.cl"
                    onChange={(e) =>
                        dispatch({ type: 'GET_CONTACT_EMAIL', payload: e.target.value })
                    }
                    onBlur={handleEmailBlur}
                />
                {state.contact.showEmailFeedback ? (
                    <Info                      
                    />
                ) : null}
                <button
                    type="submit"
                    disabled={!(state.contact.isFullNameValid && state.contact.isEmailValid)}>
                    <i className="fa-regular fa-paper-plane"></i> Send
                </button>
                {state.contact.showSubmitFeedback ? (
                    <Info
                    />
                ) : null}
            </form>
        </>
    );
};

export default Form;
