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

function generateRandomString(length, charset) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
}

function generateKey() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const notAmbiguous = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const hex = '0123456789ABCDEF';

    let key = '';
    
    switch(selectedType) {
        case 'basic8':
            key = generateRandomString(8, lowercase + uppercase + numbers);
            break;
        case 'basic10':
            key = generateRandomString(10, lowercase + uppercase + numbers);
            break;
        case 'basic16':
            key = generateRandomString(16, lowercase + uppercase + numbers);
            break;
        case 'strongNotAmbiguous':
            key = generateRandomString(16, notAmbiguous + specialChars);
            break;
        case 'strong':
            key = generateRandomString(16, lowercase + uppercase + numbers + specialChars);
            break;
        case 'high':
            key = generateRandomString(32, lowercase + uppercase + numbers + specialChars);
            break;
        case 'encryption256':
            key = generateRandomString(32, lowercase + uppercase + numbers);
            break;
        case 'wep64':
            key = generateRandomString(5, hex);
            break;
        case 'wep128':
            key = generateRandomString(13, hex);
            break;
        case 'wep256':
            key = generateRandomString(29, hex);
            break;
    }

    document.getElementById('generatedKey').value = key;
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
