import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Routage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/test"
          Component={() => {
            return <div>Test</div>
          }}
        />
        <Route
          path="/"
          Component={() => {
            return <div>Home</div>
          }}
        />
      </Routes>
    </BrowserRouter>
  )
}
