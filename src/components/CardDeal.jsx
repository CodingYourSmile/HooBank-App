import styles from '../styles';
import { card } from '../assets';
import { Button } from '../components';

const CardDeal = () => (
    <section className={`${styles.marginY} flex flex-col md:flex-row md:gap-20`}>
      <div className="flex flex-col gap-6">
        <h1 className={`${styles.heading2}`}>Find a better card deal in few easy steps</h1>
        <p className={`${styles.paragraph} text-justify`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
      </div>
      <div className="flex justify-center items-center">
        <img src={card} alt="card" className="w-full mt-6 md:mt-0"/>
      </div>
    </section>
  )


export default CardDeal