const f14g = {
    postId: 2,
    id: 3,
    name: "id labore ex et quam laborum",
    email: "Nikita@garfield.biz",
    body: "DVEZ7bTFzczEwbl80"
}

window.sessionStorage.setItem ("key", JSON.stringify(f14g))
if (localStorage.nfois === localStorage.count === undefined) {
    window.localStorage.nfois = 0
    window.localStorage.count = 0
}


const form = document.createElement ("form")
form.action = ""

const input = document.createElement ("input")
input.type = "text"
input.placeholder = "message top secret"
input.name = "valeur"

const button = document.createElement ("button")
button.innerHTML = "acceder"

form.append (input, button)
document.body.prepend (form)

const injection = "SVRMQUJ"
let changed = false
 // maybe flag is here
/**
 * @param {PointerEvent} event 
 */
function stop(event) {
    localStorage.count++
    const button = event.currentTarget
    if (!changed) {
        button.style.transform = `translate(200px)`
        changed = true
    }else {
        button.style.transform = `translate(0)`
        changed = false
    }
    if (parseInt(localStorage.count) >= 300 ) {
        button.removeEventListener('mouseover', stop)
        localStorage.nfois++
        localStorage.count = 0
        localStorage.count -= localStorage.nfois * 300
    }

}


/**
 * @param {PointerEvent} event 
 */
function hideData (event) {
    event.preventDefault ()
    const valeur = new FormData (event.currentTarget).get ("valeur").toString().trim ()
    if (valeur === "flag itlab") {
        const error = document.createElement ("p")
        const div = document.querySelector ('.hint')
        error.innerHTML = `hint :${injection} ${JSON.parse(sessionStorage.getItem ("key")).body}Y2MwbXBsMWV9`
        div.append (error)
        
        setTimeout(() => {
            error.remove()
            
            location.reload ()
        }, 1500);
    }

}

function interdit (event) {
    if (event.key === "Enter") {
        event.preventDefault ()
    }
}

button.addEventListener('mouseover', stop)
form.addEventListener ("submit", hideData)
form.addEventListener ("keydown", interdit)


