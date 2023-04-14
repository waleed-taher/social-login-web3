import Logo from '@/app/assets/logo.png'
import Image from 'next/image'
import RainbowKitExample from './RainbowKitExample'




const Header = () => {
  return (
    
      <header className='max-w-screen-2xl mx-auto px-4 flex justify-between py-7 sticky items-center top-0 cursor-pointer'>

       
        <div className='header_left'>
            <Image src={Logo} alt='panaverse_logo'/>
        </div>
        <div className="header_right space-x-8 flex font-medium text-medium w-auto items-center">
            <RainbowKitExample />
        </div>
        {/* Header Options */}
        

      </header>
   
  )
}

export default Header