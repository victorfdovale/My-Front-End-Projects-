export const goToHome = (history) => {
    history.push('/')
}
export const goToAdmin = (history) => {
    history.push('./admin')
}
export const goToApplicationForm = (history) => {
    history.push('./applicationform')
}
export const goToForm = (history, id) => {
    history.push(`./form/${id}`)
}
export const goToCreate = (history) => {
    history.push('./create')
}

export const goToLogin = (history) => {
    history.push('./login')
}
export const goToDetail = (history, id) => {
    history.push(`./detail/${id}`)
}