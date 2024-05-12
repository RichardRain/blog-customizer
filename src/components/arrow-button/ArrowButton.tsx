import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowProps = {
	onClick: OnClick;
	state: boolean;
};

export const ArrowButton = ({ onClick, state }: ArrowProps) => {
	const buttonStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: state,
	});

	const arrowStyle = clsx({
		[styles.arrow]: true,
		[styles.arrow_open]: state,
	});

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
