interface CategoryProps {
	name: string
	href?: string
}

export default function CategoryMenu({ name, href }: CategoryProps) {
	return (
		<a href={href} className='inline-block px-6 py-3 bg-cwel font-bold text-[14px] rounded-2xl text-black hover:text-accent transition-colors'>
			{name}
		</a>
	)
}
