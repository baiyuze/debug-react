import logo from './logo.svg';
import './App.css';
import { React } from "./adaptation";
const Fragment = React.Fragment;
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'primary',
      count: 1
    }
  }

  value = 1;

  onClick() {
    console.log(this,'-----====-------');
    this.setState({ count: this.state.count +1 })
  }

  render() {
    const {count} = this.state;
    return (
      <Fragment>
        <p style={{fontSize: 15}}>{count}</p>
        <button onClick={this.onClick.bind(this)}>我是按钮</button>
      </Fragment>
    );
  }
}

export default Button;
