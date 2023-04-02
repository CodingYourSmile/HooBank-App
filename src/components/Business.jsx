import React from 'react';
import styles from '../styles';
import { features } from '../constants';

const Business = () => (
  <section id="features" className={`${styles.marginY} flex flex-col md:flex-row`}>

    <div className="flex flex-col gap-6 md:max-w-[620px] mr-0 md:mr-20">
      <h1 className={`${styles.heading2}`}>You do the business, we’ll handle the money.</h1>
      <p className={`${styles.paragraph} text-justify md:text-left`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <button className="self-center md:self-start w-[170px] h-[74px] rounded-md bg-blue-gradient text-[18px] font-medium font-poppins" type="button">Get Started</button>
    </div>

    <div className="flex flex-col">
      {
        features.map((feature, index)=>(
          <div className={`flex flex-col lg:items-center lg:flex-row my-6 ${index == 1 ? 'bg-black-gradient' : ''} rounded-[20px] p-4`} key={feature.id}>
            <div className="flex flex-2 justify-center items-center bg-dimBlue w-16 h-16 rounded-full mb-4 lg:mb-0 lg:mr-5">
              <img src={feature.icon} />
            </div>
            <p className={`${styles.paragraph} flex-1`}>
              <span className="font-bold">{feature.title}</span> <br/>
              {feature.content}
            </p>
          </div>
        ))
      }
    </div>

  </section> 
)


export default Business