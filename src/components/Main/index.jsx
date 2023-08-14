import styles from "./styles.module.css";
import Container from "../Container/Container";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>manish</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		<div className={styles.container}>
		<Container />
		</div>
		</>

	);
};

export default Main;
