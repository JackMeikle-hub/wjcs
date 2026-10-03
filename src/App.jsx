import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StationHeader from './StationHeader'
import StreamPlayer from './StreamPlayer'
import CoverageMap from './CoverageMap'
function App() {
  return (
    <>
    <StationHeader
      stationName={"WJCS"}
      location={"Monmouth County, NJ"}
      slogan = "Jersey Classics From Yours Truly"
      >
      </StationHeader>
      <StreamPlayer
      stationName= "WJCS"
      streamUrl= "https://d4cbg8stml4t6.cloudfront.net/stream"
      />
      <CoverageMap stationName = "WJCS" />
    </>
  );
}

export default App
