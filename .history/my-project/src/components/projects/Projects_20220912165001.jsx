import React from 'react'
import '../projects/projects.css'
import  me  from '../../assets/img/me.jpg';

function Projects() {
  return (
    <div className='project'>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">
                <div className='bg-gray-700 '>
                    <h6>Estos son mi proyectos</h6>
                </div>
            </div>
            <div class="col-span-2 ...">
                <div className='bg-gray-700 '>
                    <h1><span>Alan Mateo</span>
                    <span>Naranjo Alvarado</span></h1>
                </div>
            </div>
            <div class="row-span-2 col-span-2 ...">
                <img className='m-hero-img' src= { me } alt= 'Alan Naranjo'/>
            </div>
        </div>
    </div>
  )
}

export default Projects