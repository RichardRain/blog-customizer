import clsx from 'clsx';
import { Button } from '../button';
import { useRef, useState } from 'react';
import { Text } from '../text';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';
import { ArrowButton } from '../arrow-button';

type ParamsProps = {
	setSettings(settings: ArticleStateType): void;
};

export const ArticleParamsForm = ({ setSettings }: ParamsProps) => {
	// Хук отвечающий за состояние отображения сайдбара
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	// Хуки состояний настроек
	const [newFont, setFont] = useState(defaultArticleState.fontFamilyOption);
	const [newSize, setSize] = useState(defaultArticleState.fontSizeOption);
	const [newFontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [newBackgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [newWidth, setWidth] = useState(defaultArticleState.contentWidth);

	const rootRef = useRef<HTMLDivElement | null>(null);

	// Хук отвеачющий за закрытие при клике вне сайдбара
	useOutsideClickClose({
		isOpen,
		rootRef,
		onChange: () => {
			setIsOpen(false);
		},
	});

	const formStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	// Сброс настроек на стандартные
	const resetSettings = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setWidth(defaultArticleState.contentWidth);
		setSettings({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
	};

	// Применение текущих настроек
	const submitSettings = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setSettings({
			fontFamilyOption: newFont,
			fontSizeOption: newSize,
			fontColor: newFontColor,
			backgroundColor: newBackgroundColor,
			contentWidth: newWidth,
		});
	};

	return (
		<div ref={rootRef}>
			<ArrowButton onClick={toggleSidebar} state={isOpen} />
			<aside className={formStyle}>
				<form className={styles.form} onSubmit={submitSettings}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						placeholder='Шрифт'
						selected={newFont}
						options={fontFamilyOptions}
						onChange={setFont}
					/>
					<RadioGroup
						name='font-size'
						title='Размер шрифта'
						selected={newSize}
						options={fontSizeOptions}
						onChange={setSize}
					/>
					<Select
						placeholder='Цвет шрифта'
						selected={newFontColor}
						options={fontColors}
						onChange={setFontColor}
					/>
					<Separator />
					<Select
						placeholder='Цвет фона'
						selected={newBackgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
					/>
					<Select
						placeholder='Ширина контента'
						selected={newWidth}
						options={contentWidthArr}
						onChange={setWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetSettings} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
