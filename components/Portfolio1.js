
import Image from 'next/image'

import styles from '../styles/Portfolio.module.css'

function Portfolio1() {
    return (
      <section className={styles.ability}>
          <div className={styles.container}>
                <div className={styles.wrappedheader}>
                    <div className={styles.header}>
                      <div className={styles.headerblock}>
                        <h3><span>Projects</span></h3>
                        <p className={styles.textcenter}>Projects are made in NextJS and GatsbyJS</p>
                      </div>
                    </div>
                </div>
            </div>
           <div className={styles.container}>
            <div className={styles.portfolioblock}>
              <div className={styles.itemholder}>
                <div className={styles.theitem}>
                  <a href="/">
                    <div className={styles.Image}>
                      <Image src='/product2.png' width={457} height={621.9}/>
                    </div>
                    <div className={styles.desc}>
                      <div className={styles.text}>NextJS Ecommerce Platform</div>
                      <div className={styles.title}>Cards</div>
                    </div>
                  </a>
                </div>
                <div className={styles.theitem}>
                  <a href="/">
                    <div className={styles.Image}>
                      <Image src='/product3.png' width={457} height={621.9}/>
                    </div>
                    <div className={styles.desc}>
                      <div className={styles.text}>NextJS Ecommerce Platform</div>
                      <div className={styles.title}>Cigarley</div>
                    </div>
                  </a>
                </div>
                <div className={styles.theitem}>
                  <a href="https://gallant-elion-f28d8a.netlify.app/" target="_blank">
                    <div className={styles.Image}>
                      <Image src='/product1.png' width={457} height={621.9}/>
                    </div>
                    <div className={styles.desc}>
                      <div className={styles.text}>GatsbyJS Landing Page</div>
                      <div className={styles.title}>Travel</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
           </div>
        </section>
    );
}

export default Portfolio1;