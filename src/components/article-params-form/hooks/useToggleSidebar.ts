import { useState, useEffect } from 'react';

export const useToogleSidebar = () => {
	const [isOpen, setState] = useState(true); // true - для удобства разработки

	const toggleSidebar = () => {
		isOpen ? closeSidebar() : openSidebar();
	};

	const openSidebar = () => {
		setState(true);
	}

	const closeSidebar = () => {
		setState(false);
	}

	return {isOpen, toggleSidebar, openSidebar, closeSidebar};
}