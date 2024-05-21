import clsx from 'clsx';
import { Button } from '../button';
import { useRef } from 'react';
import { Text } from '../text'
import { useToogleSidebar } from './hooks/useToggleSidebar'
import { useOutsideClickClose } from './hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';
import { ArrowButton } from '../arrow-button';


export const ArticleParamsForm = () => {
	const { isOpen, toggleSidebar, openSidebar, closeSidebar } = useToogleSidebar();

	const rootRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onChange: closeSidebar,
	});

	const formStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton onClick={toggleSidebar} state={isOpen} />
			<aside className={formStyle}>
				<form className={styles.form}>
					<Text
						size={31}
						weight={800}
						uppercase>
						Задайте параметры</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
