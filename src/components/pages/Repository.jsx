import React from 'react'
import { repo } from '../data'

function Repository() {
  return (
    <>
     <div className="container">
     <p style={{ fontSize: "20px" }}>Github Repository</p>
      <div className="repo__list">
        {
          repo.map((elem,i)=>{
            return(
              <div className="list__item" key={i}>
          <div className="repo__title">{elem.title}</div>
          <a href={elem.url} target='_blank' className='button-4'>Github</a>
        </div>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default Repository
