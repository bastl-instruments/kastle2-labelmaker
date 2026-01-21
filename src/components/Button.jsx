import styles from './Button.module.scss';

function Button({ children, onClick, disabled = false, ...props }) {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;