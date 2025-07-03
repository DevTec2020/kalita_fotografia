import { Link } from 'react-router-dom'
import HomeImg from '../../assets/Picture-about-me.svg'

const Sobre = () => {
  return (
    <>

      {/* Mobile */}

      <main className='py-10 md:py-0 bg-quaternary md:bg-white'>
        {/* md:bg-white */}


        <div className='md:hidden'>
          <h1 className='text-primary text-[64px] font-bold font-lata leading-[110%] text-center mb-4 md:hidden'>Sobre mim</h1>
          <div className='w-full'>
            <img
              src={HomeImg}
              alt='imagem da kalita'
              className='w-full h-auto'
            />

            <div className='p-5'>
              <p
                className='text-base text-left text-[#242424] font-lata leading-relaxed'
              >
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
              </p>

              <Link
                to='/contato'
                className='bg-secondary py-3 px-6 rounded-[48px] text-tertiary font-bold font-lata text-base cursor-pointer hover:opacity-80 active:opacity-60 w-full block text-center mt-5'>
                Vamos conversar
              </Link>
            </div>
          </div>
        </div>


        {/* Desktop */}

        <div className='hidden md:flex justify-center px-6 lg:px-12 xl:px-20'>
          <div className='bg-[#E5DACE] w-full h-[calc(100vh-180px)] max-w-7xl mx-auto  '>
            <div className='h-full flex items-center px-3'>

              <div className='overflow-visible relative flex-shrink-0'>
                <img
                  src={HomeImg}
                  alt='imagem da kalita'
                  className='-translate-x-6 lg:-translate-x-20 xl:-translate-x-36'
                />
              </div>


              <div>
                <h1 className='text-primary text-[64px] font-homeKalita mb-6'>Kalita</h1>
                <p className='font-bold font-lata text-[#242424] text-2xl mb-[42px]'>Sorem ipsum dolor sit amet, consectetur.</p>

                <Link
                  to='/contato'
                  className='bg-secondary py-3 px-6 rounded-[48px] text-tertiary font-bold text-base cursor-pointer hover:opacity-80 active:opacity-60 w-max block text-center mx-auto'>
                  Vamos conversar
                </Link>
              </div>

            </div>


          </div>
        </div>

      </main>




    </>
  )
}
export default Sobre