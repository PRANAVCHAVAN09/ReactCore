import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseOfUseReducer from './component/usereducerReact'
import { UserProvider } from './context/userContext'
import { UseCountProvider } from './context/useCountContext'
import UseContextProfile from './component/useContextProfile'
import BoxColor from './component/boxColor'
import TrueFalsComp from './component/TrueFalsComp'

function App() {

  return (
    <>
      <div className='HeightClass'>
        <UserProvider>
          <UseCountProvider>
          <UseOfUseReducer />
          <UseContextProfile />
          <BoxColor />
          <TrueFalsComp/>
          </UseCountProvider>
        </UserProvider>
      </div>
    </>
  )


}

export default App
