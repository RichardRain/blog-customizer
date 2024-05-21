import { useState } from 'react';

export const useToogleSidebar = () => {
	const [isOpen, setState] = useState(false);

	const toggleSidebar = () => {
		isOpen ? closeSidebar() : openSidebar();
	};

	const openSidebar = () => {
		setState(true);
	};

	const closeSidebar = () => {
		setState(false);
	};

	return { isOpen, toggleSidebar, openSidebar, closeSidebar };
};
