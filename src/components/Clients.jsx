import { clients } from '../constants';
import styles from '../styles';

const Clients = () => (
  <section className={`${styles.marginY} flex flex-wrap items-center justify-center gap-6 sm:justify-between`}>
    {
      clients.map( (client, index)=>(
        <img className="w-[150px] sm:w-[200px]" src={client.logo} alt={client.id}/>
      ) ) 
    }
  </section>
)


export default Clients