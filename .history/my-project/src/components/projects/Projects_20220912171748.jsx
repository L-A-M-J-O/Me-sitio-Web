import '../../components/projects/Projects.css'
import React from 'react'
import  me  from '../../assets/img/me.jpg';

function Projects() {
  return (
    <div className='project'>
        <div className='c-featured-me__inner'>
            <div className='c-featured-me__container'>
                <div className='c-featured-media__content'>
                    <h3 className='c-featured-media__pretitle o-subheading o-heading--no-dot'>
                        Gud sønn av Odin
                    </h3>
                    <h2 className='c-featured-media__title o-heading--4'>
                        Alan Mateo Naranjo Alvarado
                    </h2>
                    <p className='c-featured-media__description'>
                    Our community makes us unique. They have an energy that reverberates around them. Their mission in life is to ensure the wonder in the world is not overlooked.
                    </p>
                    <div className='c-featured-media__focus-container is-desktop'>
                    </div>
                    <div className='c-featured-media__carousel'>
                        <div className='c-featured-media__carousel-slides'>
                            <div className='c-featured-media__carousel-slide is-active'>
                                <div className='c-featured-media__video-container'>
                                    <div className='o-html5-video c-featured-media__video'>
                                        <div className='o-html5-video__video-container'>
                                            <img className='o-html5-video__video' src= { me } alt='Alan Naranjo'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects