
import PropTypes from 'prop-types'
const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log('e')
    }

    return ( <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}
    {text}
    </button>
    )
}

Button.defaultprops = {
    color: 'steelblue'
}
Button.PropTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button

