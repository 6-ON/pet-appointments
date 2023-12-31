import React from 'react'
import {AppointmentT} from '../types'
import {BsFillTrashFill} from 'react-icons/bs'

const Appointment: React.FC<{appointment: AppointmentT,onDelete: (id:number|string)=>void}> = ({appointment,onDelete}) => {
    return (
        <>
            <div className="bg-gray-200 rounded my-4 grid grid-cols-[auto_1fr_auto] gap-4 w-full p-2">
                <div className="p-4">
                    <BsFillTrashFill onClick={(e)=>onDelete(appointment.id)} className="text-2xl text-red-400 hover:text-red-700 cursor-pointer" />
                </div>
                <div className="text-left">
                    <h2 className="font-semibold text-[#60a5fa] text-xl">{appointment.petName}</h2>
                    <div className="text-sm">
                        <span className="text-[#60a5fa] font-semibold">Owner : </span>{' '}
                        <span>{appointment.ownerName}</span>
                    </div>
                    <div className="text-sm">{appointment.aptNotes}</div>
                </div>
                <div className="self-center text-sm">
                    <span>{appointment.aptDate}</span>
                </div>
            </div>
        </>
    )
}

export default Appointment
