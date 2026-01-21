import styles from './CharacterMap.module.scss';
import classNames from 'classnames';

const characters =
    [
        // Music notation symbols
        '♩', '♫', '♪', '♬', '♭', '♮', '♯', '𝄞', '𝄢', '𝄡', '𝄪', '𝄫',

        // Audio/Media controls
        '▶', '⏸', '⏹', '⏺', '⏭', '⏮', '⏯',
        '🔀', '🔁', '🔂', '🔃', '🔄', '🔉', '🔊', '🔇', '🔈',
        '⏪', '⏩', '⏫', '⏬', '⏯️', '⏹️', '⏺️',

        // Generic symbols - checkmarks and crosses
        '✓', '✔', '✅', '☑', '✗', '✘', '✖', '❌', '❎',

        // Arrows
        '→', '←', '↑', '↓', '↖', '↗', '↘', '↙', '↔', '↕',
        '⇒', '⇐', '⇑', '⇓', '⇔', '⇕', '➡', '⬅', '⬆', '⬇',

        // Plus, minus, multiplication
        '+', '-', '±', '×', '÷', '∓', '⊕', '⊖', '⊗', '⊘',

        // Hearts and shapes
        '♥', '♡', '♠', '♣', '♦', '♤', '♧', '♢',
        '★', '☆', '●', '○', '■', '□', '▲', '△', '▼', '▽',

        // OK and other text symbols
        '🆗', '🆘', '🆙', '🆕', '🆒', '🆓',

        // Miscellaneous useful symbols
        '¶', '†', '‡', '•',
        'Ω', 'μ', 'π', '∞', '≈', '≠', '≤', '≥',

        // Mystical and magical
        '🔮', '✨', '🌟', '💫', '⭐', '🌙', '☽', '☾', '🌛', '🌜',
        '☮', '🛸', '👽', '🔥', '💎',

        // Weather and nature
        '☀️', '🌞', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️',
        '🌨️', '❄️', '☃️', '⛄', '🌈', '🌊', '💧', '⚡', '🌪️', '🌀',

        // Fun and interesting
        '🎭', '🎪', '🎨', '🎯', '🎲', '🎮', '👑', '💰', '🏆', '🎁',
        '🌺', '🌸', '🌼', '🌻', '🌹', '🌷', '🌲', '🌴', '🍄', '🌵',
        '🦚', '🦜', '🦢', '🦩', '🐚', '🦕', '🦖', '🐲', '🧚',

        // Animals
        '🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
        '🦁', '🐮', '🐷', '🐸', '🐵', '🐧', '🐦', '🐤', '🦆', '🦅',
        '🦉', '🐺', '🐗', '🦄', '🐴', '🦓', '🦒', '🐘', '🦏', '🦛',
        '🐊', '🐢', '🦎', '🐍', '🐙', '🦑', '🦐', '🦀', '🐠', '🐟',
        '🐝', '🦋', '🐛', '🐞', '🕷️', '🦗', '🐜',
    ];

function CharacterMap({ labels, setLabels, focusedLabelId }) {
    const insertCharacter = (character) => {
        // Only insert if there's a focused label
        if (!focusedLabelId) {
            // alert('Please click on a text field first to select where to insert the character.');
            return;
        }

        // Find the focused label
        const focusedLabel = labels.find(label => label.id === focusedLabelId);
        if (!focusedLabel) return;

        // Try to get cursor position from the input element
        const inputElement = document.querySelector(`input[name="label-${focusedLabelId}"]`);
        let cursorPosition = focusedLabel.value.length; // Default to end

        if (inputElement && inputElement.selectionStart !== null) {
            cursorPosition = inputElement.selectionStart;
        }

        // Insert character at cursor position
        const currentValue = focusedLabel.value;
        const newValue = currentValue.slice(0, cursorPosition) + character + currentValue.slice(cursorPosition);

        // Update the labels state
        const newLabels = labels.map(l => {
            if (l.id === focusedLabelId) {
                return { ...l, value: newValue };
            }
            return l;
        });
        setLabels(newLabels);

        // Restore focus and set cursor position after the inserted character
        setTimeout(() => {
            if (inputElement) {
                const newCursorPosition = cursorPosition + character.length;
                inputElement.focus();
                inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
            }
        }, 0);
    };

    return (
        <div className={styles.characterMapContainer}>

            <div className={
                classNames(styles.characterMap, focusedLabelId ? styles.active : null)
            }>
                {characters.map((char, index) => (
                    <button
                        key={index}
                        disabled={!focusedLabelId}
                        className={styles.characterButton}
                        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                        onClick={() => insertCharacter(char)}
                        type="button"
                        title={`Insert ${char}`}
                    >
                        {char}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CharacterMap;