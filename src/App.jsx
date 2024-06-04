import '@/App.scss'
import CustomRouter from "@/routes.jsx";
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';

function App() {

  useEffect(() => {
    register()
  }, [])

  return (
    <div className="App">
      <CustomRouter />
    </div>
  )
}

export default App
