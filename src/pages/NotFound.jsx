import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-10'>
      <h1 className="text-3xl font-bold">Ups... Page not found!</h1>
      <Link to={"/"} className="bg-black hover:bg-[#4169E1] text-black py-3 px-6 rounded-xl w-60 text-white flex items-center justify-center">
        Ir a Login
      </Link>
    </div>
  )
}