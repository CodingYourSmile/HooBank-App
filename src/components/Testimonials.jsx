import React from 'react';
import styles from '../styles';
import { feedback } from '../constants';
import { quotes } from '../assets';

const Testimonials = () => (
  <section className={`${styles.marginY} flex flex-col gap-6`}>
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <h1 className={`${styles.heading2} md:max-w-[450px]`}>What people are saying about us</h1>
      <p className={`${styles.paragraph} md:max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className="flex flex-wrap justify-between">
      {
        feedback.map( (feed, index)=>(
          <div className={`${index === 0 ? 'bg-black-gradient' : ''} flex flex-col justify-between px-10 py-14 rounded-2xl max-w-[370px] min-h-[390px]`} key={feed.id}>
            <img className=" w-16" src={quotes} alt="quote"/>
            <p className={`${styles.paragraph} `}>{feed.content}</p>
            <div className="flex items-center gap-4 ">
              <img className="w-12 h-12" src={feed.img} alt={feed.name}/>
              <p className={`${styles.paragraph}`}>
                <span className="font-semibold" >{feed.name}</span> <br/>
                {feed.title}
              </p>
            </div>
          </div>
        ) )
      }
    </div>
  </section>
)


export default Testimonials