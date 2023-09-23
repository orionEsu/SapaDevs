import '../styles/Nav.css';
import ActionButton from './ActionButton';
import HamburgerIcon from '../assets/svgs/hamburger.svg';
import LogoIcon from '../assets/svgs/logo.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import MobileNav from './MobileNav';
export default function Nav() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log(pathname);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav>
			<div className='Nav__component container'>
				<a
					onClick={() => navigate('/')}
					className='logo'
					href='#'
				>
					<img
						src={LogoIcon}
						alt=''
					/>
				</a>
				<div className='Desktop__nav'>
					<ul>
						<li>
							<a href='#timeline'>Timeline</a>
						</li>
						<li>
							<a href='#overview'>Overview</a>
						</li>
						<li>
							<a href='#faq'>FAQs</a>
						</li>
						<li
							onClick={() => navigate('/contact')}
							className={
								(pathname === '/register' ||
									pathname === '/contact') &&
								'nav__link--gradient'
							}
						>
							Contact
						</li>
					</ul>
					<ActionButton
						BtnContent={'Register'}
						onFunc={() => navigate('/register')}
					/>
				</div>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='Mobile__nav'
				>
					<img
						src={HamburgerIcon}
						alt='Hamburger Icon'
					/>
				</div>
				<MobileNav
					onOpen={setIsOpen}
					isOpen={isOpen}
				/>
			</div>
		</nav>
	);
}
