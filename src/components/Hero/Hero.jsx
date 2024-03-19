import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
		<div className={styles.content}>
			<h1 className={styles.title}>Hi, I'm Alex</h1>
			<p className={styles.description}>
				I am a software developer. My expertise primarily lies in developing robust backend systems.
				I am also open to engaging with frontend and infrastructure aspects of product development.
				Regardless of the area, my goal is to craft solutions that are both elegant and comprehensible and <i>just make sense</i>.
			</p>
			<a href="mailto:alexujfa@outlook.com"
				className={styles.contactBtn}>
				Contact me
			</a>
		</div>
		<img
			src={getImageUrl("hero/heroImage.png")}
			alt="Hero image of me"
			className={styles.heroImg}
		/>
    	<div className={styles.topBlur} />
    	<div className={styles.bottomBlur} />
    </section>
  );
};