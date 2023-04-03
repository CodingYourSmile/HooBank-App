import styles from '../styles';
import {bill, apple, google} from '../assets';

const Billing = () => (
  <section className={`${styles.marginY} flex flex-col md:flex-row`}>
    <div className="w-full flex justify-center items-center">
      <img src={bill} alt="bill" className="w-full"/>
    </div>
    <div className="flex flex-col gap-12 md:max-w-2xl">
      <h1 className={`${styles.heading2}`}>Easily control your billing & invoicing</h1>
      <p className={`${styles.paragraph} text-justify`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="flex gap-4 justify-center md:justify-start">
        <img className="cursor-pointer" src={apple}/>
        <img className="cursor-pointer" src={google}/>
      </div>
    </div>
  </section>
)


export default Billing