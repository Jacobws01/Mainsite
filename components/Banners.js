import styles from '../styles/Banners.module.css'
import Particles from 'react-particles-js';
import { motion } from 'framer-motion'

export function Bannerabout() {
	return (
		<section className={styles.home}>
			<div className={styles.bannercontainer}>
  				<div className={styles.bannertext}>
          <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .8,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.4
                      }
                    },
                  }}>                                                                                                                 
    				<h1 className={styles.btext}>portfolio</h1>
            </motion.div>
  				</div>
  			  <span className={styles.spantext}>portfolio</span>
			</div>
			<Particles id="particles-js2"
            params={{
                "particles": {
    "number": {
      "value": 18,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#FFFDFD"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#FFFF28"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 600,
      "color": "#fff",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
}} />     
		</section>
	)
};

export function Bannercontact() {
	return (
		<section className={styles.home}>
			<div className={styles.bannercontainer}>
  				<div className={styles.bannertext}>
          <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .8,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.4
                      }
                    },
                  }}>                                                                                                                            
    				<h1 className={styles.btext}>Contact</h1>
            </motion.div>
  				</div>
  			  <span className={styles.spantext}>Contact</span>
			</div>
			<Particles id="particles-js2"
            params={{
                "particles": {
    "number": {
      "value": 27,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#FFFDFD"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#FFFF28"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 600,
      "color": "#fff",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
}} />     
		</section>
	)
};