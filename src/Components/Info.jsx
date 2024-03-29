import PropTypes from 'prop-types';


const Info = ({ icon, feedback, color }) => {
    return (
        <div style={{ backgroundColor: color }}>
            <i className={icon}></i>
            <p>{feedback}</p>
        </div>
    );
};

Info.propTypes = {
    icon: PropTypes.string,
    feedback: PropTypes.string,
    color: PropTypes.string,
};

export default Info;