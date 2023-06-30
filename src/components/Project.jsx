import redirect from "../assets/redirect.png"

function Project({ title, projectVariant, proImage, projectLink }) {

    // const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30
    //  flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`

    //  title = Project 1 
    //  projectTitle = project-1 
    const projectTitle = title.toLowerCase()
    return (
        // <motion.div variants={projectVariant} className="relative">

        //     <div className={overlayStyles}>
        //         <p className="text-2xl font-playfair">{title}</p>
        //         <p className="mt-7">Beneath the flickering streetlights, a stray cat darted across the empty alleyway, its eyes glowing in the darkness.</p>
        //         <a href={projectLink} className="mt-5 px-10 border-2 border-black py-2 border-2 font-bold hover:bg-blue hover:text-white transition duration-1000 rounded-xl border-sky-500 ">View Experience</a>
        //     </div>
        //     <img src={`${proImage}`} alt={projectTitle} />

        // </motion.div>
        <div className="w-[404px] h-[439px] border-2 rounded-[20px] mt-[20px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.9) ">
            <div className="w-[365px] h-[284px]  mr-5 ml-5 mt-6  mb-[10px] rounded-[20px]">
                <img src={`${proImage}`} alt={projectTitle} className="w-full h-full rounded-2xl object-cover" />
            </div>
            <div className="flex items-center justify-center">
                <p>{ `${title}`}</p>
            </div>
            <div className="flex items-center justify-center mt-[10px]">
                <button className="bg-[#31C48D] w-[322px] h-[46px]  border-3 rounded-[20px] text-white">View Experience</button>
            </div>


            <div></div>
        </div>
    )
}

export default Project