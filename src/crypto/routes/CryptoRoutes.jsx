import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CryptoPage } from '../pages/CryptoPage'

export const CryptoRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CryptoPage/>} />
        <Route path='/*' element={< Navigate to={'/'} />} />
    </Routes>
  )
}
