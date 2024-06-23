import {useState, ChangeEvent} from 'react'
import axios from 'axios'
import {Button, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import TextField from '@mui/material/TextField'

interface Question {
	ques: string
	options: string[]
	correctAnswer: string
}

interface QuizData {
	title: string
	genre: string
	marks: number
	questions: Question[]
}

const PostQuiz: React.FC = () => {
	const [data, setData] = useState<QuizData>({
		title: '',
		genre: '',
		marks: 0,
		questions: [],
	})
	const [question, setQuestion] = useState<string>('')
	const [options, setOptions] = useState<{
		option1: string
		option2: string
		option3: string
		option4: string
	}>({
		option1: '',
		option2: '',
		option3: '',
		option4: '',
	})
	const [answer, setAnswer] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name
		const value = e.target.value
		setData({...data, [key]: value})
	}

	const handleOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name
		const value = e.target.value
		setOptions({...options, [key]: value})
	}

	const open = () => {
		setIsOpen(true)
	}

	const close = () => {
		const newQuestion: Question = {
			ques: question,
			options: Object.values(options),
			correctAnswer: answer,
		}
		setData({...data, questions: [...data.questions, newQuestion]})
		setQuestion('')
		setOptions({option1: '', option2: '', option3: '', option4: ''})
		setAnswer('')
		setIsOpen(false)
	}

	const handleSubmit = async () => {
		try {
			const res = await axios.post('/api/v1/quiz/create', data)
			const reponseData = await res.data

			if( reponseData.status === 201) 
				alert('Quiz created successfully')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='p-4 h-full min-h-screen flex justify-center relative'>
			<>
				<Button
					onClick={open}
					className='absolute bottom-4 right-4 rounded-md bg-black/80 hover:bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none hover:bg-black/30 focus:outline-1 focus:outline-white'>
					Add Questions
				</Button>

				<Dialog
					open={isOpen}
					as='div'
					className='relative z-10 focus:outline-none'
					onClose={close}>
					<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4'>
							<DialogPanel
								transition
								className='w-full shadow max-w-lg rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out closed:transform-[scale(95%)] closed:opacity-0'>
								<DialogTitle
									as='h3'
									className='text-base font-medium text-black my-2'>
									Fill the details
								</DialogTitle>
								<div>
									<TextField
										id='filled-basic'
										label='Question'
										variant='filled'
										color='success'
										size='small'
										fullWidth
										value={question}
										onChange={e =>
											setQuestion(e.target.value)
										}
									/>
									<TextField
										id='standard-basic'
										label='Option 1'
										variant='standard'
										fullWidth
										name='option1'
										value={options.option1}
										onChange={handleOptionsChange}
									/>
									<TextField
										id='standard-basic'
										label='Option 2'
										variant='standard'
										fullWidth
										name='option2'
										value={options.option2}
										onChange={handleOptionsChange}
									/>
									<TextField
										id='standard-basic'
										label='Option 3'
										variant='standard'
										fullWidth
										name='option3'
										value={options.option3}
										onChange={handleOptionsChange}
									/>
									<TextField
										id='standard-basic'
										label='Option 4'
										variant='standard'
										fullWidth
										name='option4'
										value={options.option4}
										onChange={handleOptionsChange}
									/>
									<TextField
										id='standard-basic'
										label='Correct Option'
										variant='standard'
										fullWidth
										value={answer}
										onChange={e =>
											setAnswer(e.target.value)
										}
									/>
								</div>
								<div className='mt-4'>
									<Button
										className='inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-1 focus:outline-white'
										onClick={close}>
										Add Question
									</Button>
								</div>
							</DialogPanel>
						</div>
					</div>
				</Dialog>
			</>

			<div className='w-full max-w-xl shadow p-4 border-t-4 border-[#2ec4b6]'>
				<h3 className='text-2xl text-[#2ec4b6]'>
					Create your own Quiz
				</h3>
				<TextField
					sx={{my: 2}}
					label='Quiz Name'
					id='standard-size-normal'
					variant='standard'
					color='success'
					fullWidth
					name='title'
					value={data.title}
					onChange={handleChange}
				/>
				<TextField
					sx={{my: 2}}
					label='Quiz Type'
					id='standard-size-normal'
					variant='standard'
					color='success'
					fullWidth
					name='genre'
					value={data.genre}
					onChange={handleChange}
				/>
				<TextField
					sx={{my: 2}}
					label='Total Marks'
					id='standard-size-normal'
					variant='standard'
					color='success'
					fullWidth
					type='number'
					name='marks'
					value={data.marks}
					onChange={handleChange}
				/>
				<div className='my-2'>
					{data.questions.length > 0 &&
						data.questions.map((item, index) => (
							<div key={index} className='my-2'>
								<p>{item.ques}</p>
								<ul>
									{item.options.map((option, idx) => (
										<li key={idx}>{option}</li>
									))}
								</ul>
							</div>
						))}
				</div>
				<button
					className='px-4 py-3 rounded w-full bg-[#cbf3f0] text-[#2ec4b6] my-10'
					onClick={handleSubmit}>
					Submit Quiz
				</button>
			</div>
		</div>
	)
}

export default PostQuiz
