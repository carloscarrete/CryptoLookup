import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CryptoRoutes } from '../crypto/routes/CryptoRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        < Route path='/*' element={<CryptoRoutes />} />
    </Routes>
  )
}
