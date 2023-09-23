import { useNavigate } from 'react-router-dom';
import Close from '../assets/svgs/close.svg';

export default function MobileNav({ onOpen, isOpen }) {
	const navigate = useNavigate();

	return (
		<div className={`mobile__nav-component ${isOpen ? 'active' : ''}`}>
			<div
				className='nav__close'
				onClick={() => onOpen(!isOpen)}
			>
				<img
					src={Close}
					alt=''
				/>
			</div>
			<ul className='mobile__nav-list'>
				<li onClick={() => onOpen(!isOpen)}>
					<a href='#timeline'>Timeline</a>
				</li>
				<li onClick={() => onOpen(!isOpen)}>
					<a href='#overview'>Overview</a>
				</li>
				<li onClick={() => onOpen(!isOpen)}>
					<a href='#faq'>FAQ</a>
				</li>
				<li
					onClick={() => {
						onOpen(!isOpen);
						navigate('/contact');
					}}
					className="nav__link--gradient"
				>
					Contact
				</li>
			</ul>
		</div>
	);
}
