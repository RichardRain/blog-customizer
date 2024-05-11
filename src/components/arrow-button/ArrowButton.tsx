import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowProps = {
	onClick: OnClick;
	state: boolean;
};

export const ArrowButton = ({ onClick, state }: ArrowProps) => {
	let buttonStyle = styles.container;
	let arrowStyle = styles.arrow;

	if (state) {
		buttonStyle = `${styles.container} ${styles.container_open}`;
		arrowStyle = `${styles.arrow} ${styles.arrow_open}`;
	} else {
		buttonStyle = styles.container;
		arrowStyle = styles.arrow;
	}
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={buttonStyle}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={arrowStyle} />
		</div>
	);
};
