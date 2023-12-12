import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


const Slider = () => {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full max-h-[700px] bg-red-500 rounded-xl overflow-hidden">
                <img src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>

                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>

                        <div className=''>
                            <Link to={'/availablefood'}><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</motion.button></Link>
                            <Link to={'/addfood'}><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</motion.button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide6" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full max-h-[700px] rounded-xl overflow-hidden">
                <img src='https://i.ibb.co/VS8sv7H/sandwich-5549852-1280.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>
                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className=''>
                            <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide1" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full max-h-[700px] rounded-xl overflow-hidden">
                <img src='https://i.ibb.co/FnMtmrD/pizza-8295757-1280.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>
                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className=''>
                            <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide2" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full max-h-[700px] rounded-xl overflow-hidden">
                <img src='https://i.ibb.co/ggGf0Wq/close-up-people-collecting-food.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>
                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className=''>
                            <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide3" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full max-h-[700px] rounded-xl overflow-hidden">
                <img src='https://i.ibb.co/pLxM8tF/volunteer-handing-donation-box.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>
                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className=''>
                            <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide4" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full max-h-[700px] rounded-xl overflow-hidden">
                <img src='https://i.ibb.co/9gzh5c6/close-up-volunteers-working-together.jpg' className="w-full object-cover" />
                <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <div className=' text-white'>
                        <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                        <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className=''>
                            <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                    <a href="#slide5" className="btn btn-circle mr-4 bg-black opacity-50 text-white border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider