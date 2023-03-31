function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const whatsapp = document.getElementById('profile.whatsapp')
    whatsapp.href = profileData.whatsapp

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.href = profileData.linkedin

    const github = document.getElementById('profile.github')
    github.href = profileData.github

    const curriculo = document.getElementById('profile.curriculo')
    curriculo.href = profileData.curriculo

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updateProjetos(profileData) {
    const projetos = document.getElementById('profile.projetos')
    projetos.innerHTML = profileData.projetos.map(projetos => {
        return `
        <li>
            <h3 class="github">
                ${projetos.name}
            </h3>
            <a href="${projetos.url}" target="_blank">${projetos.url}</a>
        </li>
        `
    }).join('')
}

function updateExperiences(profileData) {
    const experiences = document.getElementById('profile.experiences')
    experiences.innerHTML = profileData.experiences.map(experiences => {
        return `
        <li>
            <h3 class="title">
                ${experiences.name}
            </h3>
            <p class="period">
                ${experiences.period}
            </p>
            <p><strong>Cargo</strong>: ${experiences.office}</p>
            <p><strong>Principais atividades</strong>: ${experiences.description}</p>
        </li> 
        `
    }).join('')
}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjetos(profileData)
    updateExperiences(profileData)
    //console.log(profileData)
})()