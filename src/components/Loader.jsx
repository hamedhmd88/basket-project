import { RotatingLines } from "react-loader-spinner"
function Loader() {
  return (
    <div className="w-full flex justify-center items-center mt-[100px]">
      <RotatingLines  width="100px" height='100px' strokeWidth="3" strokeColor="#0B2982"/>
    </div>
  )
}

export default Loader
