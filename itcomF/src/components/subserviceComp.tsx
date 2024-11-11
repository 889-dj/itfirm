import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const SubserviceComp = ({parent, name ,content,img}: { parent?:string,name: string,content:string ,img?:string}) => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-b from-yellow-300 via-cyan-200 to-emerald-500 bg-cover w-full lg:min-h-[20vh] min-h-[50%] flex flex-col items-center py-24 backdrop-grayscale-1 gap-y-1">
        <h1 className="text-3xl text-gray-800 font-bold mt-6">Cloud services</h1>
        <h2 className="text-lg text-gray-800 font-bold">
          <Link to={'/'}>Home</Link>{'>'}
          <Link to={'/service'}>service</Link>{'>'}<Link to={`/service/${parent?.toLocaleLowerCase()}`}>{parent?.split(' ')[0].toLocaleLowerCase()}</Link>{'>'}{name}
        </h2>
      </div>
      <div className="flex flex-col justify-center shadow-inner">
        <div className="grid lg:grid-cols-10 grid-cols-5 gap-3 p-8 max-w-[90%]">
          {/* Dynamic image sizes */}
          <div className="col-span-2 row-span-2 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/v4.avif" alt="Image 1" />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/mob.jpg" alt="Image 2" />
          </div>
          <div className="col-span-1 row-span-2 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/sec.jpg" alt="Image 3" />
          </div>
          <div className="col-span-2 row-span-1 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/web.jpg" alt="Image 4" />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/w3.jpg" alt="Image 5" />
          </div>
          <div className="col-span-2 row-span-2 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/d.jpg" alt="Image 6" />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/w5.jpg" alt="Image 7" />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/cons.jpg" alt="Image 8" />
          </div>
          <div className="col-span-3 row-span-2 w-full h-full shadow-xl border border-gray-300">
            <img className="w-full h-full object-cover" src="../../public/cons2.jpg" alt="Image 9" />
          </div>
        </div>
        <div className='w-full flex flex-col items-center py-6'>
          <h3 className='text-3xl font-bold text-center'>We Provide <span className='text-blue-500'>Best {name || ""}</span> Services</h3>
          <div className='px-1 py-3 flex flex-col gap-y-3 w-full'>
            <div className='flex flex-col lg:flex-row w-full gap-x-4 shadow-lg drop-shadow-lg'>
              <div className='lg:w-[50%]'>
                <img className='w-full h-full' src={img} alt="" />
              </div>
              <div className='lg:w-[50%] p-3'>
                <p className='whitespace-pre-line'>{content}</p>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-3 py-2'>
            <p className='font-semibold'>for the services please reach out to us</p>
            <Button className='rounded-full bg-blue-500 hover:bg-blue-800'>
              <Link to={'/contact'}>contact us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  );
};

export default SubserviceComp;
