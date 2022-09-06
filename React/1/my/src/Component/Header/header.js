import PropTypes from "prop-types";
import './header.css';
const header = (props) => {
    return (
        <header>
            <h1 style={headingstyle}>Hello Header {props.title}</h1>
            <h2 className="h2head">H2 heading</h2>
            <h3 id="h3head">H3 heading</h3>
            <button className="btn">Add</button>
        </header>
    );
};

const headingstyle = {
    color:"darkcyan",
    backgroundColor:"lightblue",
    textAlign:"center",
};
header.defaultProps={
    title:"Task Tracker",
};
header.propTypes={
    title: PropTypes.string.isRequired,
};
export default header;