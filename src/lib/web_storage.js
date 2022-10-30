export function getItem(name){
    return Number(localStorage.getItem(name))
}
export function setItem(name, content){
    localStorage.setItem(name, content)
}