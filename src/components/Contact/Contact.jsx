import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
	return (
		<footer id="contact" className={styles.container}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>I would like to hear from you !</p>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
					<a href="mailto:alexujfa@outlook.com">alexujfa@outlook.com</a>
				</li>
				<li className={styles.link}>
					<img
						src={getImageUrl("contact/linkedinIcon.png")}
						alt="LinkedIn icon"
					/>
					<a href="https://www.linkedin.com/in/alexujfa/">linkedin.com/in/alexujfa</a>
				</li>
				<li className={styles.link}>
					<img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
					<a href="https://www.github.com/UjfaA">github.com/UjfaA</a>
				</li>
			</ul>
		</footer>
	);
};