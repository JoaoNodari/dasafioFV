const btnEnviar = document.querySelector(".btn-enviar")
const inputs = document.querySelectorAll("input, textarea")

console.log(inputs)

btnEnviar.addEventListener("click", () => {
    inputs.forEach(element => {
        if (element.value === "") {
            element.classList.add("campoNaoPreenchido")
            element.classList.remove("campoPreenchido")
        } else {
            element.classList.add("campoPreenchido")
            element.classList.remove("campoNaoPreenchido")
        }
    })
})