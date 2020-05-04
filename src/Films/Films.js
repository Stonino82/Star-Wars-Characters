import React from 'react'
import './Films.css'

const Films = (props) => {

    const [...args] = props.films.map(function(data, index) {
        return ([
          <li key={index}>
            <img src={data.imgPath} alt=""/>
            <p><strong>{data.title}</strong></p>
          </li>
        ]);
      });


    return(
        <div className="episodes">
            <h4><strong>Related episodes</strong></h4>
            <ul>
              {args}
            </ul>
        </div>
    )

}

export default Films