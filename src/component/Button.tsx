import styles from '../styes/modules/Button.module.css';
const Button: React.FC<{ label: string }> = ({ label }) => {
return <button className={styles.button}>{label}</button>;
};
export default Button;