import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './assets/components/Navbar/Nav.tsx'
import Header from './assets/components/Header/Header.tsx'
import Menu from './assets/components/Menu/Menu.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Nav />
		<Header />
		<main>
			<Menu />
		</main>
	</StrictMode>
)
