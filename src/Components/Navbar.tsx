import {LayoutDashboard, CircleUser} from 'lucide-react'
import {Link} from 'react-router-dom'

export default function Navbar() {
	return (
		<div className='bg-blue-900 w-full h-[4rem] flex justify-between items-center px-6 py-4'>
			<div>LOGO</div>
			<div>
				<ul className='flex justify-space gap-4 text-gray-200'>
					<Link to='/'>
						<li className='flex justify-space gap-1'>
							<LayoutDashboard />
							Dashboard
						</li>
					</Link>
					<li className='flex justify-space gap-1'>
						<CircleUser />
						User Name
					</li>
				</ul>
			</div>
		</div>
	)
}
