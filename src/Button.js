import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({text}) {
    return
    <button className={StyleSheet.title}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Button;