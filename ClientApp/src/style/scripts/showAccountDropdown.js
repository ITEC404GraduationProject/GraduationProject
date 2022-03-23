let elDropdown = null
let elBody = null

function showAccountDropdown(bodyElementRef, dropdownElementRef) {
    elDropdown = dropdownElementRef.current
    elBody = bodyElementRef.current

    elDropdown.classList.toggle('header-account__dropdown-show')
    elBody.classList.toggle('header-account__body-change')
}

window.onclick = function(event) {
    if (!event.target.classList.value.includes('header-account__') && elDropdown !== null && !elDropdown.contains(event.target)) {
        if (elDropdown.classList.contains('header-account__dropdown-show'))
            elDropdown.classList.remove('header-account__dropdown-show')
        elBody.classList.remove('header-account__body-change')
    }
}

export default showAccountDropdown