export default function Navbar () {
  return(
    <header className='fixed top-0 w-screen h-20 z-10'>
      <ul className='h-full hidden lg:flex justify-center items-center gap-32 open-sans text-white text-base font-normal uppercase'>
        <li><a href = '/' className="text-gray-300 duration-300 hover:text-white">About</a></li>
        <li><a href = '/' className="text-gray-300 duration-300 hover:text-white">Projects</a></li>
        <li><a href = '/' className="text-gray-300 duration-300 hover:text-white">Journal</a></li>
        <li><a href = '/' className="text-gray-300 duration-300 hover:text-white">Contact</a></li>
      </ul>
    </header>
  )
}