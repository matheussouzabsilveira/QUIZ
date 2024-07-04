function clicar(){
    let elementSelect1 = document.getElementById("resposta1")
    let elementSelect2 = document.getElementById("resposta2")
    let elementSelect3 = document.getElementById("resposta3")
    let elementText = document.getElementById("pont")

    elementText.value = Number(elementSelect1.value) + Number(elementSelect2.value) + Number(elementSelect3.value)
}