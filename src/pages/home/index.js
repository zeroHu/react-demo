import { DatePicker } from 'antd';
import { Button } from 'antd';


const Home = () => {
  return (
    <div className='font-base'>
      <h1 className='font-base'>home page</h1>
      <h2 className='font-base'>tips</h2>
      <p className='font-base'>line</p>
      <DatePicker />

      <Button type="primary">Button</Button>
    </div>
  )
}

export default Home
