import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mr-10" key={route.id}><a href={route.path}></a>
            {route.name}
        </li>
    );
};
Link.prototype = {
    route: PropTypes.object
}
export default Link;