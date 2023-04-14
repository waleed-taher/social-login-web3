
import Image from "next/image"
import Poster from '@/app/assets/Piaicposter.jpg'

const Hero = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 ">
        
            <div className="flex items-center">
                {/* Left Section */}
                <div className="flex-1">
                    <h4 className="text-teal-800 font-semibold text-[21px]">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                    <h1 className="text-6xl font-bold leading-[80px]">Certified Web 3.0 and Metaverse Developer</h1>
                    <p className="mt-4 text-2xl text-slate-600">
                        A One and Quarter Years Panaverse DAO Earn as you Learn Program 
                        Getting Ready for the Next Generation of the Internet
                    </p>
                    <p className="mt-5 text-2xl text-slate-600">
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, 
                        Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                    </p>
                    <button className="absolute mt-9 rounded-full bg-teal-700 px-12 py-6 text-white font-semibold   ">Learn More</button>
                </div>
                {/* Right Section */}
                <div className="flex-1">
                    <Image src={Poster} alt="Hero Image" />
                </div>
            </div>            
        
    </section>
  )
}

export default Hero