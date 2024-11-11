import { Mosaic } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='w-full min-h-screen flex justify-center mt-[50vh]'>
        <div>
        <Mosaic color="#2b302b" size="small" text="" textColor=""/>
        </div>
    </div>
  )
}

export default Loading