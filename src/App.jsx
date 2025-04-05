import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from './Counter'
import ViewEmp from './Emp/ViewEmp'
import AddEmp from './Emp/AddEmp'
import Header from './Header'
import UpdateEmp from './Emp/UpdateEmp'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<AddEmp />} />
                    <Route path="/viewemp" element={<ViewEmp />} />
                    <Route path='/updateEmp/:id' element={<UpdateEmp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
