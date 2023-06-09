import { clients } from '../constants';
import styles from '../styles';

const Clients = () => (
  <section className={`${styles.marginY} flex flex-wrap items-center justify-center gap-6 sm:justify-between`} id="clients">
    {
      clients.map( (client, index)=>(
        <img className="w-[150px] sm:w-[200px]" src={client.logo} alt={client.id} key={client.id}/>
      ) ) 
    }
  </section>
)


export default Clients