import PropTypes from "prop-types";
import './header.css';
import Button from"../Button/Button";

const header = (props) => {
    const onclick=(e)=>{
        console.log('click'.e);
    }
    return (
        <header>
            <h1 style={headingstyle}>Hello Header {props.title}</h1>
            <button className="btn">Add</button>
            <Button onclick={onclick} color="green" text="hieeee"/>
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