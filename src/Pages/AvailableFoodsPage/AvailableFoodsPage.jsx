import { useEffect, useState } from "react"
import SingleCardFeaturedFood from "../../Components/FeaturedFood/SingleCardFeaturedFood"
import useAxiosSecure from "../../SecureAxiosHook/useAxiosSecure"
import { useScroll, motion, useSpring } from "framer-motion"


const AvailableFoodsPage = () => {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const secureAxios = useAxiosSecure()
  const [datas, setDatas] = useState([])
  const [text, setText] = useState('')
  const [permanentData, setParmanentData] = useState([])
  const url = '/getFoods';

  useEffect(() => {
    secureAxios.get(url)
      .then(res => {
        setDatas(res.data);
        setParmanentData(res.data);
      })
  }, []);

  useEffect(() => {
    document.title = "Homepage | Available Food"
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const wow = permanentData?.filter(one => one.food_name.toLowerCase().includes(text.toLocaleLowerCase()))
    console.log(wow);
    setDatas(wow)
  };




  return (

    <div >
      <h1 className="text-5xl font-bold text-center mt-10">Available Food </h1>
      <p className=" text-center pt-2 mb-3">Share your extra bites to everyone !</p>
      <p className=" text-center mb-2 clear-left text-blue-400">{datas.length} food found </p>
      <motion.div style={{ scaleX }}>
        <form onSubmit={handleSubmit} className=" mb-7 flex justify-center">

          <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="search by food name" className="input border border-purple-900 dark:bg-gray-700 input-bordered input-md w-full max-w-xs" />
          <button className=" btn btn-primary ml-2">Search</button>
          {
            datas.length !== permanentData.length && <button onClick={() => setDatas(permanentData)} className=" btn btn-primary ml-2">Reset Data</button>
          }

        </form>
      </motion.div>
      <div className="flex flex-wrap justify-around gap-10">
        {
          datas?.map(one => <SingleCardFeaturedFood data={one} key={one._id} />)
        }
      </div>
    </div>


  )
}

export default AvailableFoodsPage