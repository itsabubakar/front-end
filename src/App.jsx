import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Public from '../components/Public'
import Login from '../features/auth/Login'
import DashLayout from '../components/DashLayout'
import Welcome from '../features/auth/Welcome'
import NoteList from '../features/notes/NoteList'
import UserList from '../features/UserList'

function App() {
  return <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />}>

          <Route index element={<Welcome />} />

          <Route path='notes'>
            <Route index element={<NoteList />} />
          </Route>

          <Route path='users'>
            <Route index element={<UserList />} />
          </Route>

        </Route> {/* End Dash */}

      </Route>
    </Routes>
  </div>
}

export default App
