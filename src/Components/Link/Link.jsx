

const Link = ({ route }) => {
    return (
        <li className="mr-10" key={route.id}><a href={route.path}></a>
            {route.name}
        </li>
    );
};

export default Link;