
let linesBody = null
let lines = null
let menu = null

const openMobileMenu = (linesBodyRef, mobileMenuRef) => {
    linesBody = linesBodyRef.current
    lines = linesBody.children

    menu = mobileMenuRef.current
    menu.classList.toggle('is-open')

    const isToggled = !!lines[0].classList.contains("menu-line1__rotated")
    toggleLines(isToggled)
}

const toggleLines = (isToggled) => {
    if (isToggled) {
        lines[0].classList.toggle("menu-line1__rotated")
        lines[1].classList.toggle("menu-line2__rotated")
        lines[0].classList.toggle("menu-line1__enabled")
        lines[1].classList.toggle("menu-line2__enabled")

        setTimeout(() => {
            lines[0].classList.toggle("menu-line1__enabled")
            lines[1].classList.toggle("menu-line2__enabled")
        }, 200)
    } else {
        lines[0].classList.toggle("menu-line1__enabled")
        lines[1].classList.toggle("menu-line2__enabled")

        setTimeout(() => {
            lines[0].classList.toggle("menu-line1__enabled")
            lines[1].classList.toggle("menu-line2__enabled")
            lines[0].classList.toggle("menu-line1__rotated")
            lines[1].classList.toggle("menu-line2__rotated")
        }, 200)
    }
}


export default openMobileMenu