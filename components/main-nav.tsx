import Link from 'next/link';

export default function MainNav() {
  return (
    <nav className='flex flex-row  justify-between bg-gray-800 h-10 px-4'>
      <div className='flex flex-row gap-2 items-center'>
        <Link className='flex gap-1 items-center text-white' href={'/games'}>
          Games
        </Link>
        <Link className='flex gap-1 items-center text-white' href={'/games/23'}>
          Game Details
        </Link>
      </div>
      <div className='flex gap-10 items-center'></div>
    </nav>
  );
}
