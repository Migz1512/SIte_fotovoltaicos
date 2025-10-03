let resposta = document.getElementById('resposta')

function principal(){
    let mes = Number(document.getElementById('mes').value)

    // let potencia = Number(document.getElementsByName('potencia').value)

    let kwhDia = Number(document.getElementById('kwhDia').value)

    let placas = Number(document.getElementById('placas').value)

    let calculo = (kwhDia * placas * mes)

    console.log(`${calculo}`)
     
    resposta.innerHTML = ``
    resposta.innerHTML += `A Sua Geracão de Energia No Mês é de: ${calculo}kw`
}