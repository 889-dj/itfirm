import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-40 px-10 gap-y-4'>
        <h1 className='text-4xl text-blue-600 font-bold'>OOPs u have come the wrong way!!!</h1>
        <p className='text-xl font-semibold'>plz return to the <span className='text-blue-500'><Link to={'/'}>home</Link></span></p>
    </div>
  )
}

export default Error