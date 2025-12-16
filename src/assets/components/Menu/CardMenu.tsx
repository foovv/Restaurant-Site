interface CardMenus {
	photoSrc: string
	photoAlt: string
	text: string
	cost: string
}

export default function CardMenu({ photoSrc, photoAlt, text, cost }: CardMenus) {
	return (
		<div className='w-1/4 h-1/2 mx-1 bg-white'>
			<div className='flex flex-col justify-center items-center m-5'>
				<img src={photoSrc} alt={photoAlt} />
				<div className='flex justify-between w-full'>
					<p className='font-medium'>{text}</p>
					<p className='font-bold text-accent'>{cost}</p>
				</div>
			</div>
		</div>
	)
}
