import styles from '../styles';
import { Button } from '../components';

const CTA = () => (
  <section className={`${styles.marginY} flex flex-col md:flex-row md:justify-between items-center gap-6 p-6 sm:px-[90px] sm:py-[70px] w-full bg-black-gradient-2 rounded-xl`}>
    <div className="max-w-[650px]">
      <h1 className={`${styles.heading2}`}>Let's try our service now!</h1>
      <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <Button/>
  </section>
)


export default CTA