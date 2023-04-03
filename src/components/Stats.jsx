import {stats} from '../constants'

const Stats = () => (
  <section className="flex flex-wrap  justify-center">

    {stats.map( (stat, index)=>(
      <p key={stat.id} className="font-poppins text-white flex justify-center items-center">
        <span className="mr-6 font-semibold text-4xl">{stat.value} </span>
        <span className={`${index === stats.length - 1 ? 'mr-0' : 'ss:mr-12'} text-gradient text-xl`}>{stat.title}</span> 
        <span className={`w-px h-3.5 mr-12 hidden md:block ${index === stats.length - 1 ? 'hidden' : 'bg-white'}`}/>
      </p>
    ) )}

  </section>
)


export default Stats