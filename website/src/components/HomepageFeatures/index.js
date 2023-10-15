import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
	return (
		<>
			<section className={styles.features}>
				<div className="container">
					<div className={clsx("row", styles.row)}>
						<div className={clsx("col col--4", styles.leftSection)}>
							<div className={styles.portraitContainer}>
								<img src={require("@site/static/img/portrait.jpg").default} className={styles.portraitJpg} role="img" />
							</div>
						</div>

						<div className={clsx("col col--4", styles.centerSection)}>
							<div className="text--center">
								<img src={require("@site/static/img/title.jpg").default} className={styles.titleJpg} role="img" />
							</div>
						</div>

						<div className={clsx("col col--4", styles.rightSection)}>
							<div className={styles.camelContainer}>
								<img src={require("@site/static/img/camel.jpg").default} className={styles.camelJpg} role="img" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.features}>
				<div className="container">
					<div className={clsx("row", styles.row)}>
						<div className={clsx("col col--4", styles.leftSection)}>
							<div className={styles.portraitContainer}>
								<img src={require("@site/static/img/1.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/2.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/3.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/4.jpg").default} className={styles.portraitJpg} role="img" />
							</div>
						</div>

						<div className={clsx("col col--4", styles.centerSection)}>
							<div className="text--center padding-horiz--md">
								<p>
									Алеша Добряков – лирик-сатирик, а также менестрель и философ, и ещё – собиратель песенного фольклора. «ВЕСНА,
									ЛЮБОВЬ И ВИНО», «НА ЭТАПАХ ЛЮБВИ», «БОЖЕСТВЕННЫЕ СТИХИ», «СТИХИ ПРО СТИХИ», «Я – СЕКСА ОДИНОКОГО ПЕВЕЦ» –
									тематические подборки его стихов, где он, по своему обыкновению, никогда не обходит запретные темы и не
									занимается «кастрацией родного языка». Имя автора известно по книгам "Уличные песни", "Озорные стихи", "Русский
									мат", "Негатив", "Наш дом", "Упущенная альтернатива", а также по отдельным публикациям и Интернету. Некторые
									стихи Алеши могут слегка шокировать, но тем не менее они, безусловно, основательно развлекут и расширят
									кругозор. Кое-кто, пользуясь именем Алеши Добрякова, размещает в Интернете собственную плоскую похабщину. Имейте
									ввиду, что подобных опусов у реального Алеши нет.
								</p>
							</div>
						</div>

						<div className={clsx("col col--4", styles.rightSection)}>
							<div className={styles.camelContainer}>
								<img src={require("@site/static/img/5.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/6.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/7.jpg").default} className={styles.portraitJpg} role="img" />
								<img src={require("@site/static/img/8.jpg").default} className={styles.portraitJpg} role="img" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className={styles.links}>
						<Link className={clsx("button button--secondary button--lg", styles.link)} to="/docs/favorites/spring-love-wine">
							Весна, любовь и вино
						</Link>
						<Link className={clsx("button button--secondary button--lg", styles.link)} to="/docs/favorites/stages-love">
							На этапах любви
						</Link>
						<Link className={clsx("button button--secondary button--lg", styles.link)} to="/docs/favorites/sexy-singer">
							Я - секса однокого певец
						</Link>
						<Link className={clsx("button button--secondary button--lg", styles.link)} to="/docs/favorites/divine-poems">
							Божественные стихи
						</Link>
						<Link className={clsx("button button--secondary button--lg", styles.link)} to="/docs/favorites/poems-about-poems">
							Стихи про стихи
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
