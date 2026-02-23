import { Outlet } from 'react-router-dom'
import FeatureBar from './FeatureBar/FeatureBar'
import Home from './Home/Home'


function Layout() {
  return (
    <div className='px-20 w-full h-screen' >
     <Home/>
     <Outlet/>
     <FeatureBar/>
    </div>
  )
}

export default Layout
