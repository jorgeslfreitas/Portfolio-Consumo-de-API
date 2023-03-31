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
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => {
        console.log(skill)
        /* `<li>
            <img src=${skill} alt="JavaScript" title="JavaScript">
        </li>` */
    })
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    //console.log(profileData)
})()