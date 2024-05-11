import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

export type ParamsProps = {
	onClick: () => void;
	state: boolean;
};

export const ArticleParamsForm = ({ onClick, state }: ParamsProps) => {
	let formStyle = styles.container;
	if (state) {
		formStyle = `${styles.container} ${styles.container_open}`;
	} else {
		formStyle = styles.container;
	}

	return (
		<>
			<ArrowButton onClick={onClick} state={state} />
			<aside className={formStyle}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
