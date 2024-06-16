import { Routes, Route } from 'react-router-dom'
import Dashboard from "./Components/Dashboard"
import Login from './Components/Login'
import Register from './Components/Register'
import Navbar from './Components/Navbar'
function App() {
	return <div className='bg-gray-100 h-screen' >
		<Navbar/>
		<Routes>
			<Route path='/' element={<Dashboard/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/register' element={<Register/>}/>
		</Routes>
	</div>
}

export default App
