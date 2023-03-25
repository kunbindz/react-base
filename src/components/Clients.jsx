import React from 'react'
import { clients } from '../constants'

const Client = ({ id, logo }) => (
  <div key={id} className='flex-1 flexCenter sm:min-w-[192px] min-w-[120px] '>
    <img src={logo} alt='client' className='sm:w-[192px] w-[100px] object-contain ' />
  </div>
)

const Clients = () => (
  <section className=' flexCenter my-4 '>
    <div className=' flexCenter flex-wrap w-full '>
      {clients.map((client) => (
        <Client {...client} />
      ))}
    </div>
  </section>
)

export default Clients
