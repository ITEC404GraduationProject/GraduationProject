let elButton = null
let elDropdown = null

function showAccountDropdown(buttonElementRef, dropdownElementRef) {
    elButton = buttonElementRef.current
    elDropdown = dropdownElementRef.current

    elButton.classList.toggle('header-account__button-change')
    elDropdown.classList.toggle('header-account__dropdown-show')
}

window.onclick = function(event) {
    if (elDropdown !== null && !elButton.contains(event.target) && !elDropdown.contains(event.target)) {
        if (elDropdown.classList.contains('header-account__dropdown-show'))
            elDropdown.classList.remove('header-account__dropdown-show')
        elButton.classList.remove('header-account__button-change')
    }
}

export default showAccountDropdown