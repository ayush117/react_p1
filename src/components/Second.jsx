import axios from 'axios';
import {React, useState} from 'react'
import { default as SplitGrid } from "react-split-grid";
import First from '../components/First'

function Second(props) {
  const [data, setData] = useState('')

  const handleChange = (event) => {
    setData(event.target.value);
  }

  const handleSubmit = (event) => {
    const article = { action: data };
    axios.post('https://mysterious-ridge-76787.herokuapp.com/todos', article)
         .then(response => console.log('res',response));
    event.preventDefault();
  }

  const handleClick = () => {
    const article = { action: data };
    axios.post('https://mysterious-ridge-76787.herokuapp.com/todos', article)
         .then(response => console.log('res',response));
  }

  return (
    <div className="App">
      <SplitGrid
        columnCursor="col-resize"
        rowCursor="row-resize"
        render={({ getGridProps, getGutterProps }) => {
          return (
            <div className={"grid-container"} {...getGridProps()}>
              <div className={"grid-item item1"}>Column One

                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={data.value} onChange={handleChange} />
                  </label>
                  
                  <input type="submit" value="Add" />
                </form>
      
                <button onClick={handleClick}>
                  Update
                </button>

              </div>
              <div
                className={"grid-gutter item2 gutter-horizontal"}
                {...getGutterProps("column", 1)}
              />
              <div className={"grid-item item3"}>Column Two
                <br/>
                Drag the line to resize.
                <br/>
                DB used = mongdb
              </div>

              <div
                className={"grid-gutter item6 gutter-vertical"}
                {...getGutterProps("row", 1)}
              />
              <div className={"grid-item item7"}>Row Two
                  <First data={props.count}/>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Second
