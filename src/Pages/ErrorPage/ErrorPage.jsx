import Loading404 from '..//../Assets/404.json'
import Lottie from 'lottie-react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const ErrorPage = () => {

  useEffect(() => {
    document.title = "Wrong Route !"
 }, []);

  return (
    <div className=' flex justify-center flex-col items-center overflow-hidden h-screen relative'>
      <Lottie animationData={Loading404}></Lottie>
    <Link  className='absolute bottom-36' to={'/'}><button className='btn btn-primary'>Back to HomePage</button></Link>
    </div>
  )
}

export default ErrorPage