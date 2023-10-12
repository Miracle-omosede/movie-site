import moviePoster from "../assets/default1.jpg"

// 84a345cf

const Body = () => {
  return (
    <div className='border-t-2 my-5 py-5'>
        <div className="grid grid-cols-12">
            <div className="col-span-6">
            <div>
            {/* title, genre, release year */}
            <div className='flex items-center justify-start text-white text-md gap-3 '>
                <span>Series</span>
                <span>&#x2022;</span>
                <span>Action</span>
                <span>&#x2022;</span>
                <span>2h.30m.4s</span>
            </div>

            {/* main title gaan */}
            <div className='py-3 text-6xl font-[600]'>
                <h1>Game of Thrones.</h1>
            </div>
            <div>
                <p className="text-xl">
                    Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, mollitia rem tempora a iste molestias aut amet quisquam sapiente quaerat, omnis esse nesciunt officia vitae, facilis aspernatur minus? Eos, consectetur.
                </p>
            </div>
        </div>
            </div>
            <div className="col-span-6">
                <div className="w-full flex items-center justify-center h-full">
                <div className="h-[500px] w-[350px]">
                <img src={ moviePoster } alt="movie poster" className="relative" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body