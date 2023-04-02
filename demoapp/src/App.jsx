import React from 'react'
import Table from './CRUD/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './CRUD/Update'
import Form from './CRUD/Form'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App