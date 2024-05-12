import clsx from 'clsx';
import { Button } from 'components/button';
import { ReactNode } from 'react';

import styles from './ArticleParamsForm.module.scss';

export type ParamsProps = {
	state: boolean;
	arrowButton: ReactNode;
};

export const ArticleParamsForm = ({ state, arrowButton }: ParamsProps) => {
	const formStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: state,
	});

	return (
		<>
			{arrowButton}
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
