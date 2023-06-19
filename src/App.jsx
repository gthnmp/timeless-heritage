/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  SmoothWrapper,
  Preloader, 
  Introduction, 
  Sidebar, 
  Final
} from "./components"

import { Overview } from "./components/overview";
import { History } from "./components/history";
import { Present } from "./components/present";
import { Timeline } from "./components/timeline";

export default function App() {
  return (
    <div id = "layout" className="w-screen h-max">
      <Preloader/>
      <Sidebar/>
      <SmoothWrapper id = "wrapper" className="w-full h-max flex flex-col">
        <Introduction/>
        <Overview/>
        <History/>
        {/* <Present/>
        <Timeline/> */}
        <Final/>
      </SmoothWrapper>
    </div>
  )
}

