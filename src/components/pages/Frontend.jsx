import React from 'react'
import Card from '../reusable/Card'
import Projects from './Projects'
import { projects } from '../data'

function Frontend() {
  return (
    <div>
      <Card title="Frontend projects" projects={projects}/>
    </div>
  )
}

export default Frontend
