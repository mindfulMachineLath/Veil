import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
