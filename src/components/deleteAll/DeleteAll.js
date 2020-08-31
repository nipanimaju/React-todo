import React from 'react';
import "./deleteAll.scss"


const ClearAll = (props) =>  {
    return (
        <button className="deleteAll" onClick={() => props.deleteAll()}> Clear All &#x1f5d1;</button>
    )
}

export default ClearAll;