import { socialMedia, footerLinks } from '../constants';
import { logo } from '../assets';
import styles from '../styles';

const Footer = () => (
  <footer className="flex flex-col gap-8 pb-8 md:pb-16">
    <div className="flex flex-wrap justify-between gap-8">

      <div className="flex flex-col items-center sm:items-start gap-8 sm:max-w-[350px]">
        <img src={logo} alt="logo"/>
        <p className={`${styles.paragraph}`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      {
        footerLinks.map( (footer, index)=>(
          <div key={`${footer.title}-${index}`}>
            <p className={`${styles.footerText} font-bold`}>{footer.title}</p>
            
            <ul>
              {
                footer.links.map( (link, index)=>(
                  <li className={`${styles.footerText}`} key={`${link.name}-${index}`}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ) )
              }
            </ul>
            
          </div>
        ) )
      }

    </div>

    <div className="flex flex-col gap-4">
      <div className="w-full h-px bg-black-gradient-2"/>
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
        <p className={`${styles.footerText}`}>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          {
            socialMedia.map( (social, index)=>(
              <a key={social.id} href={social.link}> <img src={social.icon} alt={social.id}/> </a>
            ) )
          }
        </div>
        
      </div>
    </div>
  </footer>
)


export default Footer