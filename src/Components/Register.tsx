import {useState} from 'react'
import {Link} from 'react-router-dom'

interface FormDetails {
	username: string
	email: string
	password: string
}

export default function Register() {
	const [formDetails, setFormDetails] = useState<FormDetails>({
		username: '',
		email: '',
		password: '',
	})

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log(formDetails)
	}

	return (
		<div className='max-w-[40rem] h-[20rem] bg-violet-400 mx-auto my-20 rounded-md'>
			<h1 className='py-4 text-4xl font-bold text-center uppercase font-serif'>
				Register
			</h1>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-center justify-center gap-4 h-full w-full p-4 bg-violet-300 rounded-b-md shadow-xl'>
				<input
					className=' px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent w-[25rem]'
					type='text'
					placeholder='Username'
					value={formDetails.username}
					onChange={e =>
						setFormDetails(previousState => ({
							...previousState,
							username: e.target.value,
						}))
					}
				/>
				<input
					className='px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent w-[25rem]'
					type='email'
					placeholder='Email'
					value={formDetails.email}
					onChange={e =>
						setFormDetails(previousState => ({
							...previousState,
							email: e.target.value,
						}))
					}
				/>
				<input
					className='mb-4 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent w-[25rem]'
					type='password'
					placeholder='Password'
					value={formDetails.password}
					onChange={e =>
						setFormDetails(previousState => ({
							...previousState,
							password: e.target.value,
						}))
					}
				/>
                
				<button
					type='submit'
					className='font-bold uppercase w-[15rem] bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition duration-300 ease-in-out'>
					Register
				</button>
				<p className='font-mono text-gray-700'>
					{' '}
					Already have an account?{' '}
					<span className='text-black font-semibold'>
						{' '}
						<Link to='/login'>Login</Link>
					</span>
				</p>
			</form>
		</div>
	)
}
