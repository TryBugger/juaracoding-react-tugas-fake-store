import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AddProduct from './components/Product/AddProduct'
import AddProductObject from './components/Product/AddProductObject'
import AddCustomer from './components/Customer/AddCustomer'
import TypesExample from './components/ExampleBootstrap/TypesExample'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import AddUserOld from './components/User/AddUserOld'
import User from './pages/User'
import AddUser from './components/User/AddUser'
import EditUser from './components/User/EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AddProductObject />
      <AddCustomer /> */}
      {/* <TypesExample /> */}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users' element={<User />}>
            <Route path='add' element={<AddUser />} />
            <Route path='edit/:id' element={<EditUser />} />
          </ Route>
          {/* <Route path='users' element={<User />} />
          <Route path='adduser' element={<AddUser />} /> */}
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
