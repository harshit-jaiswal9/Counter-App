import React, { Component } from "react";
import Counter from "./counter";
// import {Counter} from "./counter";
import { FcRefresh,FcCollect } from "react-icons/fc";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, counters, onRestart } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className=''>
            <button
              className="btn btn-success m-2"
              onClick={onReset}
              disabled={counters.length === 0 ? "disabled" : ""}
            >
              <FcRefresh size="20px"/>
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={onRestart}
              disabled={counters.length !== 0 ? "disabled" : ""}
            >
           <FcCollect size="20px"/>     
         
            </button>
          </div>
        </div>
       { counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

