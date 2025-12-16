interface Liprops {
	description: string
	href?: string
}

export default function LiItem({ description, href }: Liprops) {
	return (
		<li className='px-5 h-full w-full hover:text-accent transition-colors duration-400'>
			<a className='block w-full h-full' href={href}>
				{description}
			</a>
		</li>
		
	)
}
