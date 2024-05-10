import { Component } from "react";
import Controls from "./Controls";

export default class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedState = Number(localStorage.getItem("index"))

    if (savedState) {
      this.setState({
        index: savedState
      })
    }
    console.log('savedState', savedState)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
        localStorage.setItem("index", this.state.index)
    }
  }

  changeIndex = (value) => {
    this.setState((prev) => ({
      index: prev.index + value,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length
    // console.log("items[index]: -->", items[index]);
    return (
      <div>
        <p>
          {index + 1}/{totalItems}
        </p>
        <Controls 
            // index={index}
            current={index + 1}
            onChange={this.changeIndex}
            total={totalItems}
        />
        <article>
            <h3>{items.title}</h3>
            <p>{items.text}</p>
        </article>
        {/* <button
            type="button" 
            onClick={() => this.changeIndex(1)}
            disabled={index + 1  === totalItems}
        >
          forward
        </button>
        <button
            type="button"
            onClick={() => this.changeIndex(-1)}
            disabled={index === 1}
        >
          back
        </button> */}
      </div>
    );
  }
}
