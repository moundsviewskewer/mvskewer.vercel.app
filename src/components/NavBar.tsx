import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
	function handleClick() {
		if (location.pathname === '/') alert('wait what');
		history.back();
	}
	
	return (
		<div onClick={handleClick}>
			<Image
				src="/icons/backbutton.svg"
				className={styles.navbar}
				alt="back button"
				width="50"
				height="50"
				id="backbutton-svg"
			></Image>
		</div>
	);
}