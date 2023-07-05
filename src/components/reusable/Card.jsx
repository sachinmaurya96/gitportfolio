import React from 'react'

function Card(props) {
  return (
    <>
      <div>
        <p style={{ fontSize: "20px" }}>{props.title}</p>
        <div className="grid-2">
         {
          props.projects.map((elem,i)=>{
            return(
              <div className="card" key={i}>
              <div className="card-body">
                <h5 className="card-title">{elem.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{elem.language}</h6>
                <p className="card-text">
                 {elem.description}
                </p>
                <a href={elem.demo} className="card-link button-4">
                  Demo
                </a>
                <a href={elem.github} target='_blank' className="card-link button-4">
                  Github
                </a>
              </div>
            </div>
            )
          })
         }
        </div>
      </div>
    </>
  )
}

export default Card
