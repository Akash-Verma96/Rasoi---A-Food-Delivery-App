import { Outlet } from 'react-router-dom'
import FeatureBar from './FeatureBar/FeatureBar'
import Home from './Home/Home'


function Layout() {
  return (
    <div className='px-10 w-full h-screen' >
     <Outlet/>
     
     <FeatureBar/>
    </div>
  )
}

export default Layout
