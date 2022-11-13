import PropTypes from 'prop-types';
import './GlobalStyles.css';
import './Dark.css';
import './Light.css';
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
