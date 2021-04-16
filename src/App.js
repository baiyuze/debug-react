import logo from './logo.svg';
import './App.css';
import { React } from "./adaptation";
import Button from "./button";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 1,
      count: 1
    }
  }

  functioN () {
    this.setState({count: this.state.count+1}, () => {
      window.requestAnimationFrame(() => {
        this.functioN();
      });
    })
  }
  componentDidMount() {
    // window.requestAnimationFrame(() => {
    //   this.functioN();
    // });
  };
  render() {
    const { name, count } = this.state;
    return (
      <div className="App">
          <Button name={name} />
        {
          count
        }
      </div>
    );
  }
}

export default App;
