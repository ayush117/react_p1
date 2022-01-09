import React from 'react'

function First(props) {
    const data = [...props.data[0]];
    const length = data.length;

    const listItems = data.map((item)=>
        <li key={item._id}>{item.action}</li>
    )

    return (
      <>
        <br/>Number of times Add clicked = {length}
        <ul>{listItems}</ul>
      </>
    );
}

export default First
