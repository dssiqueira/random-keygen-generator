const translations = {
    en: {
        title: 'CyberKey Generator',
        basic8: 'Basic 8',
        basic10: 'Basic 10',
        basic16: 'Basic 16',
        strongNotAmbiguous: 'Strong (Not Ambiguous)',
        strong: 'Strong',
        high: 'High Security',
        encryption256: 'Encryption Key 256',
        wep64: '64 bit WEP',
        wep128: '128 bit WEP',
        wep256: '256 bit WEP',
        generate: 'Generate',
        copied: 'Copied to clipboard!',
        select: 'Select key type',
        explanationTitle: 'Secure Password Generator',
        explanationText: 'Our random password generation tool was designed to ensure maximum security in creating strong credentials that are difficult to crack. With an advanced algorithm, we generate unique combinations that include uppercase and lowercase letters, numbers, and special characters, making your passwords highly secure against cyber attacks.',
        whyUseTitle: 'Why use a password generator?',
        whyUseList: [
            '🔒 More security - Random passwords are more resistant to brute force attacks and leaks.',
            '⚡ Convenience - Generate complex passwords instantly, without having to create combinations manually.',
            '🔑 Unique and customizable - Set the size and complexity level to meet your needs.'
        ],
        footerText: 'Protecting your accounts and data has never been easier. Generate your secure password now and protect your information!'
    },
    es: {
        title: 'Generador CyberKey',
        basic8: 'Básica 8',
        basic10: 'Básica 10',
        basic16: 'Básica 16',
        strongNotAmbiguous: 'Fuerte (Sin Ambigüedad)',
        strong: 'Fuerte',
        high: 'Alta Seguridad',
        encryption256: 'Clave de Cifrado 256',
        wep64: 'WEP 64 bits',
        wep128: 'WEP 128 bits',
        wep256: 'WEP 256 bits',
        generate: 'Generar',
        copied: '¡Copiado al portapapeles!',
        select: 'Selecciona el tipo de clave',
        explanationTitle: 'Generador de Contraseñas Seguras',
        explanationText: 'Nuestra herramienta de generación de contraseñas aleatorias fue desarrollada para garantizar la máxima seguridad en la creación de credenciales fuertes y difíciles de descifrar. Con un algoritmo avanzado, generamos combinaciones únicas que incluyen letras mayúsculas y minúsculas, números y caracteres especiales, haciendo que tus contraseñas sean altamente seguras contra ataques cibernéticos.',
        whyUseTitle: '¿Por qué usar un generador de contraseñas?',
        whyUseList: [
            '🔒 Más seguridad - Las contraseñas aleatorias son más resistentes a ataques de fuerza bruta y filtraciones.',
            '⚡ Practicidad - Genera contraseñas complejas instantáneamente, sin necesidad de crear combinaciones manualmente.',
            '🔑 Únicas y personalizables - Define el tamaño y nivel de complejidad para satisfacer tus necesidades.'
        ],
        footerText: '¡Proteger tus cuentas y datos nunca fue tan fácil. ¡Genera ahora tu contraseña segura y protege tu información!'
    },
    pt: {
        title: 'Gerador CyberKey',
        basic8: 'Básica 8',
        basic10: 'Básica 10',
        basic16: 'Básica 16',
        strongNotAmbiguous: 'Forte (Sem Ambiguidade)',
        strong: 'Forte',
        high: 'Alta Segurança',
        encryption256: 'Chave de Criptografia 256',
        wep64: 'WEP 64 bits',
        wep128: 'WEP 128 bits',
        wep256: 'WEP 256 bits',
        generate: 'Gerar',
        copied: 'Copiado para área de transferência!',
        select: 'Selecione o tipo de chave',
        explanationTitle: 'Gerador de Senhas Seguras',
        explanationText: 'Nossa ferramenta de geração de senhas aleatórias foi desenvolvida para garantir a máxima segurança na criação de credenciais fortes e difíceis de serem quebradas. Com um algoritmo avançado, geramos combinações únicas que incluem letras maiúsculas e minúsculas, números e caracteres especiais, tornando suas senhas altamente seguras contra ataques cibernéticos.',
        whyUseTitle: 'Por que usar um gerador de senhas?',
        whyUseList: [
            '🔒 Mais segurança – Senhas aleatórias são mais resistentes a ataques de força bruta e vazamentos.',
            '⚡ Praticidade – Gere senhas complexas instantaneamente, sem precisar criar combinações manualmente.',
            '🔑 Únicas e personalizáveis – Defina o tamanho e o nível de complexidade para atender às suas necessidades.'
        ],
        footerText: 'Proteger suas contas e dados nunca foi tão fácil. Gere agora sua senha segura e proteja suas informações!'
    }
};

// Get language from URL or use default
function getInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return translations[langParam] ? langParam : 'pt';
}

// Export currentLanguage as a global variable
window.currentLanguage = getInitialLanguage();

function changeLanguage(lang) {
    window.currentLanguage = lang;
    // Update URL with new language
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = translations[lang][key];
            } else if (element.classList.contains('why-use-list')) {
                element.innerHTML = translations[lang].whyUseList.map(item => `<li>${item}</li>`).join('');
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}
