import React, { useCallback, useEffect, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { SortOptionsT } from '../types'

type PropsT = {
	change: React.ChangeEventHandler<HTMLInputElement>
	sortChange: (options: SortOptionsT) => void
}

const SearchSort: React.FC<PropsT> = ({ change, sortChange }) => {
	const [sortOpen, setSortOpen] = useState<boolean>(false)
	const [sort, setSort] = useState<SortOptionsT>({ orderBy: 'petName', orderDir: 'asc' })
	useEffect(()=>{
		console.log(sort);
		
		sortChange(sort)
	},[sort])
	return (
		<>
			<div className="flex items-center w-full my-4">
				<div className="w-full">
					<input
						type="text"
						placeholder="search"
						onChange={change}
						className="w-full py-1 px-2 border border-[#ccc] rounded-l"
					/>
				</div>
				<div className="relative">
					<button className="bg-[#ccc] px-4 py-1 rounded-r" onClick={() => setSortOpen(!sortOpen)}>
						Sort
					</button>
					{sortOpen && (
						<div className="absolute -bottom-1  right-0 translate-y-[100%] p-4 bg-blue-200 rounded-md w-max select-none">
							<div className="flex flex-col">
								<label className="flex justify-between w-40 hover:bg-blue-400 p-0.5 px-2 rounded">
									<input
										type="radio"
										className="peer/pet"
										hidden
										checked={sort.orderBy === 'petName'}
										name="sort"
										onChange={(e) => setSort({ ...sort, orderBy: 'petName' })}
									/>
									<BsCheck className="invisible peer-checked/pet:visible" />
									<span className="">Pet Name</span>
								</label>
								<label className="flex justify-between hover:bg-blue-400 p-0.5 px-2 rounded">
									<input
										type="radio"
										className="peer/owner"
										hidden
										checked={sort.orderBy === 'ownerName'}
										name="sort"
										onChange={(e) => setSort({ ...sort, orderBy: 'ownerName' })}
									/>
									<BsCheck className="invisible peer-checked/owner:visible" />
									<span className="">Owner Name</span>
								</label>
								<label className="flex justify-between hover:bg-blue-400 p-0.5 px-2 rounded">
									<input
										type="radio"
										className="peer/date"
										hidden
										checked={sort.orderBy === 'aptDate'}
										name="sort"
										onChange={(e) => setSort({ ...sort, orderBy: 'aptDate' })}
									/>
									<BsCheck className="invisible peer-checked/date:visible" />
									<span className="">Date</span>
								</label>
								<br className="py-3 w-2" />
								<label className="flex justify-between hover:bg-blue-400 p-0.5 px-2 rounded">
									<input
										type="radio"
										className="peer/asc"
										hidden
										name="order"
										checked={sort.orderDir === 'asc'}
										onChange={() => setSort({ ...sort, orderDir: 'asc' })}
									/>
									<BsCheck className="invisible peer-checked/asc:visible" />
									<span className="">Ascending</span>
								</label>
								<label className="flex justify-between hover:bg-blue-400 p-0.5 px-2 rounded">
									<input
										type="radio"
										className="peer/desc"
										hidden
										name="order"
										checked={sort.orderDir === 'desc'}
										onChange={(e) => setSort({ ...sort, orderDir: 'desc' })}
									/>
									<BsCheck className="invisible peer-checked/desc:visible" />
									<span className="">Descending</span>
								</label>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default SearchSort
