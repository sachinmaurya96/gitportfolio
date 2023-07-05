import React from 'react'
import Card from '../reusable/Card'
import { projects } from '../data'

function Compleate() {
  return (
    <div>
     <Card title="Compleate projects" projects={projects}/>
    </div>
  )
}

export default Compleate
