import { LuCalendarDays } from 'react-icons/lu'
import { AppointmentT, SortOptionsT } from './types'
import { useEffect, useState } from 'react'
import Form from './Form'
import SearchSort from './components/Search'
import Appointment from './components/Appointment'
import { ToastContainer, toast } from 'react-toastify'
function App() {
	const [data, setData] = useState<AppointmentT[]>([])
	const [{orderBy,orderDir}, setSort] = useState<SortOptionsT>({ orderBy: 'petName', orderDir: 'asc' })

	useEffect(() => {
		fetch('/apps.json')
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [])

	const search = (query: string) => {
		fetch('/apps.json')
			.then((res) => res.json())
			.then((data) => {
				setData(
					data.filter(
						(item: AppointmentT) =>
							item.petName.toLowerCase().includes(query.toLowerCase()) ||
							item.ownerName.toLowerCase().includes(query.toLowerCase())
					)
				)
			})
	}

	const addAppointment = (newAppointment: AppointmentT) => {
		setData([...data, newAppointment])
		toast.success('Appointment created succussfully')
	}

	const deleteAppointment = (id: number | string) => {
		setData(data.filter((item) => item.id !== id))
		toast.warn('Appointment deleted succussfully')
	}


	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				draggable
				theme="dark"
			/>
			<div className="w-11/12 mx-auto">
				<div className="flex gap-2 items-center">
					<LuCalendarDays className="text-7xl text-orange-500" />
					<h1 className="text-2xl font-semibold">Your Appointements</h1>
				</div>
				<div className="border border-[#ccc] rounded">
					<Form addApp={addAppointment} />
				</div>
				<div>
					<SearchSort change={(e) => search(e.target.value)} sortChange={(options) => setSort(options)} sort={{orderBy,orderDir}} />
				</div>
				<div>
					{data
						.sort((a, b) => {
							return (orderDir === 'asc' ? 1 : -1) * (a[orderBy].toLowerCase() < b[orderBy].toLowerCase() ? -1 : 1)
						})
						.map((item, index) => (
							<Appointment key={index} appointment={item} onDelete={deleteAppointment} />
						))}
				</div>
			</div>
		</>
	)
}

export default App
