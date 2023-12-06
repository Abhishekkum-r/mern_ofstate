import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-red-200 shadow-md'>
<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
        <h1 className='flex font-bold text-sm sm:text-xl'>
            <span className='text-red-300'>Abhi</span>
            <span className='text-red-700'>estate</span>
        </h1>
    </Link>
        <form className=' bg-red-50 p-3 flex items-center  rounded-3xl'>
            <input type='text' placeholder='search..' className='bg-transparent outline-transparent w-24 sm:w-64'></input>
            <FaSearch className="text-pink-300"/>
        </form>
        <ul className='flex gap-3'>
            <Link to='/'>
            <li className=' hidden sm:inline hover:underline'>
                Home</li>
            </Link>
            <Link to='/About'>
            <li className=' hidden sm:inline hover:underline'>About</li>
            </Link>
            <Link to='/SignIN'>
            <li className='sm:inline hover:underline'>Sign In</li>
            </Link>
        </ul>

</div>
    </header>
  )
}
