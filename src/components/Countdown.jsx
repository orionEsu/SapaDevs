export default function Countdown() {
	return (
		<div className='countdown'>
			<p className='countdown__time'>
				00<span className='countdown__type'>H</span>
			</p>
			<p className='countdown__time'>
				00<span className='countdown__type'>M</span>
			</p>
			<p className='countdown__time'>
				00<span className='countdown__type'>S</span>
			</p>
		</div>
	);
}
