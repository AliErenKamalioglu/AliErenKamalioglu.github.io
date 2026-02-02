let currentLang = localStorage.getItem('siteLang') || 'tr'; 
let typeIndex = 0, charIndex = 0, isDeleting = false, typeElement = null;

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    
    const langBtn = document.getElementById('lang-btn');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === 'tr') ? 'en' : 'tr';
            localStorage.setItem('siteLang', currentLang);
            applyLanguage(currentLang);
        });
    }

    const pageId = document.body.getAttribute('id');
    if (pageId === 'projects-page') renderProjects();
    if (pageId === 'journal-page') renderJournal();
    if (pageId === 'home-page') {
        typeElement = document.getElementById('typewriter-text');
        if(typeElement) typewriterEffect();
    }
});

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const t = data.translations[lang];
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const val = getNestedValue(t, el.getAttribute('data-lang'));
        if(val) el.innerHTML = val;
    });
    
    document.querySelectorAll('[data-lang-ph]').forEach(el => {
        const val = getNestedValue(t, el.getAttribute('data-lang-ph'));
        if(val) el.placeholder = val;
    });

    if(document.getElementById('projects-grid')) renderProjects();
    if(document.getElementById('journal-grid')) renderJournal();
}

function getNestedValue(obj, path) { return path.split('.').reduce((o, p) => (o ? o[p] : null), obj); }

function typewriterEffect() {
    if(!typeElement) return;
    const t = data.translations[currentLang].hero;
    const words = [t.role_1, t.role_2, t.role_3];
    const currentWord = words[typeIndex % words.length];

    if (isDeleting) {
        typeElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) { isDeleting = true; speed = 2000; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; typeIndex++; speed = 500; }
    
    setTimeout(typewriterEffect, speed);
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    data.projects.forEach(proj => {
        const desc = currentLang === 'tr' ? proj.desc_tr : proj.desc_en;
        grid.innerHTML += `
            <div class="card-item">
                <div class="card-top">
                    <span class="card-cat">${proj.category.toUpperCase()}</span>
                    <a href="${proj.github}" target="_blank" title="GitHub"><i class="fa-brands fa-github" style="font-size:1.2rem; color:#7F8C8D"></i></a>
                </div>
                <h3 class="card-title">${proj.title}</h3>
                <p class="card-desc">${desc}</p>
                <div class="card-tags">${proj.tech.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
            </div>`;
    });
}

function renderJournal() {
    const grid = document.getElementById('journal-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    data.journal.forEach(j => {
        const title = currentLang === 'tr' ? j.title_tr : j.title_en;
        const desc = currentLang === 'tr' ? j.desc_tr : j.desc_en;
        grid.innerHTML += `
            <div class="card-item">
                <div class="card-top"><span class="card-date">${j.date}</span></div>
                <h3 class="card-title">${title}</h3>
                <p class="card-desc">${desc}</p>
                <div class="card-tags">${j.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}</div>
            </div>`;
    });
}