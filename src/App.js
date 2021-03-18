import React from "react";
import './App.css';

// React.Component 는 return 을 가지고 있지 않다
// render Method 가 존재
// state 를 직접적으로 변경해서는 안된다.
// this.state 에 너무 의존하지 말자 current => () 처럼 function 형식을 지원한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movioe: []
  };

  // 이론적으로 componentDidMount 에서 data를 fetch 한다
  componentDidMount() {
    setTimeout( () => {
      this.setState({ isLoading: false });
    }, 3000);
  }
 
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading ? "Loading..." : "We are ready" }
      </div>
    );
  };
}

export default App;
