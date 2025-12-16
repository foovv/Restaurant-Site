import CategoryMenu from './CategoryMenu'

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
		</section>
	)
}
