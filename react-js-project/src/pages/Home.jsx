import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="max-w-[1100px] mx-auto w-full h-screen flex flex-col">
        <div className="grid grid-cols-12 py-10 gap-6 h-full">
            <div className="col-span-8">
                <Navbar/>
            </div>
            <div className="col-span-4 border-l"></div>
        </div>
    </div>
  )
}

export default Home