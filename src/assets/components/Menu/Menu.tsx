import CategoryMenu from './CategoryMenu'
import CardMenu from './CardMenu'

export default function Menu() {
	const categories = ['Burgery', 'Pizza', 'Obiady', 'Drinki', 'Desery']

	return (
		<section id='Menu' className='min-h-screen bg-pureWhite m-2'>
			<div className='flex justify-center items-center'>
				<h2 className='text-8xl uppercase font-fjalla mt-20'>Menu</h2>
			</div>
			<div className='mx-auto max-w-[1200px]'>
				<div className='bg-white h-[60px] rounded-2xl mt-10 px-20 flex justify-between items-center'>
					{categories.map(category => (
						<CategoryMenu key={category} name={category} />
					))}
				</div>
			</div>
			<div className='mx-auto max-w-[1200px] h-[600px] mt-5 flex '>
				<CardMenu photoAlt='asd' photoSrc='asd.jpg' text='kotlet' cost='5zl' />
				<CardMenu photoAlt='asd' photoSrc='asd.jpg' text='kotlet' cost='5zl' />
				<CardMenu photoAlt='asd' photoSrc='asd.jpg' text='kotlet' cost='5zl' />
				<CardMenu photoAlt='asd' photoSrc='asd.jpg' text='kotlet' cost='5zl' />
			</div>
		</section>
	)
}
