import Navbar from "../components/Navbar"
import Body from "../components/Body"
import defaultWallpaper from "../assets/default1.jpg"

const Home = () => {
  return (

    // container
    <div className="w-full h-full relative">
      <div className="relative">
        <img src={defaultWallpaper} alt="default" className="object-cover w-full absolute top-0 left-0 h-[800px]" />
        <div className="home__shadow"></div>
        <div className="relative glass__bg max-w-[1300px] mx-auto w-full top-16 py-5 px-[1.5rem]">
        <Navbar/>
        <Body/>
      </div>
      </div>
    </div>
  )
}

export default Home