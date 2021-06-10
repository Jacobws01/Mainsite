import '../styles/globals.css'
import Header from '../components/Header'
import { motion } from 'framer-motion'

import { BiUpArrowCircle } from 'react-icons/bi'


import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps, router }) {
  return (
  		<content>
  			<Header />
  			<motion.div key={router.router} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  			<Component {...pageProps} />
  		 	</motion.div>
  		</content>
  	)
}



export default MyApp;
