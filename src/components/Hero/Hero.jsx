import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
		<div className={styles.content}>
			<h1 className={styles.title}>Hi, I'm Alex</h1>
			<p className={styles.description}>
				I'm a software developer and in love with technology. 
				I'm always exploring new ideas so I can craft better solutions 
				that are elegant, easy to follow <br/> and <i>just make sense</i>.
			</p>
			<a href="mailto:alexujfa@outlook.com"
				className={styles.contactBtn}>
				Email me
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