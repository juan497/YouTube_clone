import React from 'react'
import "./RecomendedVideos.css"
import VideoCard from './VideoCard'
function RecomendedVideos() {
  return (
    <div className='recomendedVideos'>
        <h2>recommended</h2>
        <div className='recomendedVideos__videos'>
          <VideoCard
            title="Become a Web Dev"
            views= "2.3 views"
            timestamp="3 days ago"
            channel="juan"
            image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </div>
    </div>
  )
}

export default RecomendedVideos