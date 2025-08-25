/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom' 
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const{ doctors } = useContext(AppContext)
  const navigate = useNavigate() 

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through our glam experts</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Makeup' ? navigate('/doctors') : navigate('/doctors/Makeup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Makeup' ? 'bg-indigo-100 text-black' : ''}`}>Makeup</p>
          <p onClick={() => speciality === 'Bridal' ? navigate('/doctors') : navigate('/doctors/Bridal')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Bridal' ? 'bg-indigo-100 text-black' : ''}`}>Bridal</p>
          <p onClick={() => speciality === 'Skincare' ? navigate('/doctors') : navigate('/doctors/Skincare')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Skincare' ? 'bg-indigo-100 text-black' : ''}`}>Skincare</p>
          <p onClick={() => speciality === 'Manicure' ? navigate('/doctors') : navigate('/doctors/Manicure')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Manicure' ? 'bg-indigo-100 text-black' : ''}`}>Manicure</p>
          <p onClick={() => speciality === 'Hair' ? navigate('/doctors') : navigate('/doctors/Hair')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Hair' ? 'bg-indigo-100 text-black' : ''}`}>Hair</p>
          <p onClick={() => speciality === 'Grooming' ? navigate('/doctors') : navigate('/doctors/Grooming')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Grooming' ? 'bg-indigo-100 text-black' : ''}`}>Grooming</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt='Image' />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm '>{item.speciality}</p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors