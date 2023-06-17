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
import { Articles } from "./components/articles";
import { Timeline } from "./components/timeline";

export default function App() {
  return (
    <div id = "layout" className="w-screen h-max">
      <Preloader/>
      <Sidebar/>
      <SmoothWrapper>
        <Introduction/>
        <Overview/>
        <History/>
        <Articles/>
        <Timeline/>
        <Final/>
      </SmoothWrapper>
    </div>
  )
}

