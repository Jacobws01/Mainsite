import Head from 'next/head'
import Link from 'next/link'
import Mainpage from '../components/Mainpage'
import Abilities from '../components/Abilities'
import Portfolio1 from '../components/Portfolio1'
import Contact1 from '../components/Contact1'
import styles from '../styles/Home.module.css'
import { BiUpArrowCircle } from 'react-icons/bi'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Jacob Sinclair</title>
        <link rel="icon" href="/angle-bt.svg" />
      </Head>
		<Mainpage />
		<Abilities /> 
		<Portfolio1 />
		<Contact1 />
	   </div>
  )
}
