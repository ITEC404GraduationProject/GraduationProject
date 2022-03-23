const showSearchMore = () => {
    const elSearchForm = document.querySelector('.search__form')
    const elSearchMore = document.querySelector('.search__more')
    const elSearchMoreArrow = document.querySelector('.show-more__arrow')
    elSearchMoreArrow.classList.toggle('show-more__arrow-toggle')
    elSearchForm.classList.toggle('search__form-toggle')
    elSearchMore.classList.toggle('search__more-toggle')
}

export default showSearchMore