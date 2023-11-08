
const SingleCardMarquee = ({data}) => {
  return (
    <div className="shadow-lg mx-5 dark:bg-slate-600 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-8">
          <div className="-mt-12">
            <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
              <img className="w-full h-full rounded-full mx-auto object-cover" src={data.img} alt="" />
            </div>
            <p className=" text-md mt-2 font-semibold">{data.name}</p>
            <p className="text-gray-400 text-sm">We beleave in peace. Lets donate food for all</p>
          </div>
        </div>
  )
}

export default SingleCardMarquee