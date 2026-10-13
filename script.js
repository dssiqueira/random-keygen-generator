let selectedType = 'basic8';

// Add click event listeners to all key type buttons
document.querySelectorAll('.key-type').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.key-type').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedType = button.getAttribute('data-type');
        generateKey();
    });
});

// Initialize the first button as active
document.querySelector('.key-type').classList.add('active');

const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
// No l/1/I/| or o/0/O look-alikes
const NOT_AMBIGUOUS = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789' + SYMBOLS.replace('|', '');
const HEX = '0123456789ABCDEF';
const ALNUM = LOWER + UPPER + DIGITS;

// WEP keys are hex: 64-bit = 40-bit key (10 hex), 128 = 104 (26), 256 = 232 (58).
const KEY_TYPES = {
    basic8:             { length: 8,  charset: ALNUM },
    basic10:            { length: 10, charset: ALNUM },
    basic16:            { length: 16, charset: ALNUM },
    strongNotAmbiguous: { length: 16, charset: NOT_AMBIGUOUS },
    strong:             { length: 16, charset: ALNUM + SYMBOLS },
    high:               { length: 32, charset: ALNUM + SYMBOLS },
    encryption256:      { length: 64, charset: HEX },   // 64 hex digits = 256 bits
    wep64:              { length: 10, charset: HEX },
    wep128:             { length: 26, charset: HEX },
    wep256:             { length: 58, charset: HEX },
};

// Uniform random characters from the browser's CSPRNG (crypto.getRandomValues).
// Rejection sampling avoids the modulo bias of `random % charset.length`.
function generateRandomString(length, charset) {
    const n = charset.length;
    const limit = 256 - (256 % n);
    const buffer = new Uint8Array(length * 2);
    let result = '';
    while (result.length < length) {
        crypto.getRandomValues(buffer);
        for (let i = 0; i < buffer.length && result.length < length; i++) {
            if (buffer[i] < limit) result += charset[buffer[i] % n];
        }
    }
    return result;
}

function generate(type) {
    const { length, charset } = KEY_TYPES[type];
    return generateRandomString(length, charset);
}

function generateKey() {
    document.getElementById('generatedKey').value = generate(selectedType);
}

function copyToClipboard() {
    const keyInput = document.getElementById('generatedKey');
    keyInput.select();
    document.execCommand('copy');
    
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 2000);

    // Add a flash effect to the copied key
    keyInput.style.backgroundColor = 'var(--neon-primary)';
    keyInput.style.color = 'var(--bg-dark)';
    setTimeout(() => {
        keyInput.style.backgroundColor = '';
        keyInput.style.color = '';
    }, 200);
}

// Initialize the explanation text and generate first key when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the explanation text
    const lang = window.currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.classList.contains('why-use-list')) {
                element.innerHTML = translations[lang].whyUseList.map(item => `<li>${item}</li>`).join('');
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Generate initial key
    generateKey();
});
