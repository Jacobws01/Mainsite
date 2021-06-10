import Head from 'next/head'
import { Bannerabout } from '../components/Banners'
import Portfolio1 from '../components/Portfolio1'

export default function portfolio() {
	return (
		<div>
			<Head>
				<title>portfolio</title>
				<meta name="description" content="portfolio" />
			</Head>
			<Bannerabout />
			<Portfolio1 />
		</div>
	)
}