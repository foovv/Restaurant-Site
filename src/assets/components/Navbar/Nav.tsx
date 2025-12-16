import LiItem from './LiItem.tsx'
import menu from '../../menu.svg'
import icon from '../../bold.svg'
import { useState } from 'react'

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='w-full h-[60px] pt-1 fixed z-50 px-4'>
			<div className='max-w-[500px]  mx-auto  h-full rounded-2xl flex justify-between items-center p-1  bg-cwel text-black font-dmsans font-mediumbold'>
				<div className='pl-1'>
					<img src={icon} alt='' />
				</div>
				<div className='flex justify-end flex-1 small:justify-center '>
					<ul className='hidden w-full small:flex'>
						<LiItem href='#Menu' description='Menu' />
						<LiItem href='#O-nas' description='O nas' />
						<LiItem href='#Lokalizacja' description='Lokalizacja' />
					</ul>
					<button onClick={() => setIsMenuOpen(prev => !prev)} className='h-[60px] p-5 cursor-pointer small:hidden tran'>
						<img src={menu} alt='' />
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className='bg-cwel w-full mx-auto max-w-[500px] h-[100px] rounded-2xl flex justify-between items-center mt-5 z-50'>
					<ul className='cursor-pointer w-full'>
						<LiItem href='#Menu' description='Menu' />
						<LiItem href='#O-nas' description='O nas' />
						<LiItem href='#Lokalizacja' description='Lokalizacja' />
					</ul>
				</div>
			)}
		</nav>
	)
}
