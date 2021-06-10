



import styles from '../styles/Contact.module.css'



function Contact1() {
	return(
		<section className={styles.contact}>
		<div className={styles.container}>
		<div className={styles.contactform}>
			<div className={styles.contacttitle}><h3>Get A <span>Quote</span></h3></div>
			<form name="contact" method="POST" data-netlify="true" className={styles.contactform}>
				<div className={styles.inputcontact}>
					<input type="text" id="name" name="name" required placeholder="Your Name *" />
				</div>
				<div className={styles.inputcontact}>
					<input type="email" id="email" name="email" required placeholder="Your Email *" />
				</div>
				<div className={styles.inputtextarea}>
					<textarea id="message" name="message" placeholder="Your Comment"></textarea>
				</div>
				
					<button className={styles.button} type="submit"/>
				
			</form>
		</div>
		</div>
		</section>
		)
}

export default Contact1;
