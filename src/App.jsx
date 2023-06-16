/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { 
  Introduction, 
  Navbar, 
  Location,
  Blog,
  Final
} from "./components"

export default function App() {
  return (
    <div id = "layout" className="w-screen h-full">
      <Navbar/>
      <main className='w-full h-full flex flex-col gap-20'>
        <Introduction/>
        <Location/>
        <Blog/>
        <Final/>
      </main>
    </div>
  )
}

