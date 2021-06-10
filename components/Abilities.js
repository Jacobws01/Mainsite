import { SiNextDotJs, SiStrapi, SiDynamics365, SiGatsby, SiReact, SiHtml5, SiCss3, SiJavascript, SiGraphql, SiNetlify } from 'react-icons/si'
import { GiSpeedometer } from 'react-icons/gi'
import { DiResponsive } from 'react-icons/di'
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineKey } from 'react-icons/ai'
import { FaStripe, FaSass, FaNode, FaKey } from 'react-icons/fa'
import Image from 'next/image'

import styles from '../styles/Abilities.module.css'

function Abilities() {
    return (
      <section className={styles.ability}>
          <div className={styles.container}>
                <div className={styles.wrappedheader}>
                    <div className={styles.header}>
                      <div className={styles.headerblock}>
                        <h3><span>About</span></h3>
                        <p className={styles.textcenter}>fdasfdasfsafdasfasfdasfasf fdsafdsafsadf idsaf</p>
                      </div>
                    </div>
                </div>
                <div className={styles.wrappedblock}>
                    <div className={styles.block}>
                      <div className={styles.formera}>
                        <div className={styles.serv}>
                          <div className={styles.image}>
                            <GiSpeedometer />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.itemdesctitle}>Fast</div>
                            <div className={styles.itemdesctext}>Fast load times, Check out this website score on Google's PageSpeed Insights.</div>
                            <div className={styles.hey}>
                                 <a to='/' className={styles.mainbutton}>Speed test</a>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block}>
                      <div className={styles.formera}>
                        <div className={styles.serv}>
                          <div className={styles.image}>
                            <AiOutlineDesktop />
                            <AiOutlineMobile  />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.itemdesctitle}>Responsive</div>
                            <div className={styles.itemdesctext}>My websites will work on any device, big or small.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block}>
                      <div className={styles.formera}>
                        <div className={styles.serv}>
                          <div className={styles.image1}>
                            <FaStripe />
                            <SiStrapi />
                            <AiOutlineKey />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.itemdesctitle}>Tools</div>
                            <div className={styles.itemdesctext}>I use seperate tools to accomplish Payment Processing, Headless CMS, Login and Order Storing. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block}>
                      <div className={styles.formera}>
                        <div className={styles.serv}>
                          <div className={styles.image}>
                            <SiNextDotJs />
                            <SiGatsby />
                            <SiReact />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.itemdesctitle}>Frameworks</div>
                            <div className={styles.itemdesctext}>All sites are made with React based frameworks, Nextjs, Gatsbyjs and Reactjs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.blockend}>
                      <div className={styles.formera}>
                        <div className={styles.serv}>
                          <div className={styles.imageend}>
                            <SiHtml5 />
                            <SiCss3 />
                            <FaSass />
                            <SiJavascript />
                            <SiGraphql />
                            <FaNode />
                            <SiNetlify />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.itemdesctitleend}>Development</div>
                            <div className={styles.itemdesctextend}>I use multiple technologies to build each and every website. This allows me to fully customize every website to the clients specifications.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Abilities;