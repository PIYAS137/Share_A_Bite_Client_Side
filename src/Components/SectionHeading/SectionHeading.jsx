
const SectionHeading = ({big,small}) => {
  return (
    <div className=" my-10 pt-10">
        <h1 className=" text-5xl font-bold text-center">{big}</h1>
        <p className=" text-center mt-3 mb-5">{small}</p>
    </div>
  )
}

export default SectionHeading