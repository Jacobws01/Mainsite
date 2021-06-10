import Head from 'next/head'
import { Bannercontact } from '../components/Banners'
import Contact1 from '../components/Contact1'

export default function contact() {
	return (
		<div>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact form" />
			</Head>
			<Bannercontact />
			<Contact1 />
		</div>
	)
}