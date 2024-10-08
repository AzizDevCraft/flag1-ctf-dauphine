const f14g = {
    postId: 3,
    id: 3,
    name: "id labore ex et quam laborum",
    email: "Nikita@garfield.biz",
    body: "SVRMQUJDVEZ7bTFzczEwbl80"
}

window.sessionStorage.setItem ("key", JSON.stringify(f14g))

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


let changed = false
let count = 0 // maybe flag is here
/**
 * @param {PointerEvent} event 
 */
function moveButton(event) {
    count++
    const button = event.currentTarget
    if (!changed) {
        button.style.transform = `translate(200px)`
        changed = true
    }else {
        button.style.transform = `translate(0)`
        changed = false
    }
    if (count >= 500 ) {
        button.removeEventListener('mouseover', moveButton)
    }

}
/**
 * @param {PointerEvent} event 
 */
function displayData (event) {
    event.preventDefault ()
    const valeur = new FormData (event.currentTarget).get ("valeur").toString().trim ()
    if (valeur === "flag itlab") {
        const error = document.createElement ("p")
        const div = document.querySelector ('.hint')
        error.innerHTML = `hint : ${JSON.parse(sessionStorage.getItem ("key")).body}Y2MwbXBsMWV9`
        div.append (error)
        setTimeout(() => {
            error.remove()
            location.reload ()
        }, 2000);
    }

}

function interdit (event) {
    if (event.key === "Enter") {
        event.preventDefault ()
    }
}

// When the user hovers the mouse over the button, move it
button.addEventListener('mouseover', moveButton)
form.addEventListener ("submit", displayData)
form.addEventListener ("keydown", interdit)
