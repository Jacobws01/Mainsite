import Particles from 'react-particles-js';
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from '../styles/Mainpage.module.css'

function Mainpage() {
    return (
		<div className={styles.wrapper}>
        <Particles id="particles-js"
            params={{
                "particles": {
    "number": {
      "value": 63,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff0000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
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
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 7,
        "duration": 2,
        "opacity": 0.8,
        "speed": 4
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}} />
            <div className={styles.container}>
                <div className={styles.wrappedtitle}>
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
                    <h1>
                    <span>
                    Jacob
                    </span>
                     Sinclair
                     </h1>
                  </motion.div>
                </div>
                <div className={styles.wrappeddesc}>
                    <h2>Full Stack Web Developer</h2>
                </div>
                <div className={styles.hey}>
                    <a href='/portfolio' className={styles.mainbutton}>View my work</a>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;