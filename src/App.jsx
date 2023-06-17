/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  SmoothWrapper,
  Preloader, 
  Introduction, 
  Sidebar, 
  Location,
  Blog,
  Final
} from "./components"

export default function App() {

  return (
    <div id = "layout" className="w-screen h-max">
      <Preloader/>
      <Sidebar/>
      <SmoothWrapper>
        <Introduction/>
        <Location/>
        <Blog/>
        <Final/>
      </SmoothWrapper>
    </div>
  )
}

