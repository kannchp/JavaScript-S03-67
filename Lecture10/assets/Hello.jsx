function Hello() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default Hello;

/*
const Hello = ({ message, name }) => {
    console.log({ message, name });
    return (
        <div>
            <h1>
                {message} {name}
            </h1>
        </div>
    );
};

import PropTypes from "prop-types";

Hello.PropTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Hello;
*/