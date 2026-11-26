var agora = new Date()
var hora = agora.getHours()
if (hora < 6) {
    console.log("Agora são exatamente " + hora + " horas. Boa madrugada!")
}
else if (hora < 12) {
    console.log("Agora são exatamente " + hora + " horas.Bom dia!")
} else if (hora < 18) {
    console.log("Agora são exatamente " + hora + " horas. Boa tarde!")
} else if (hora < 24) {
    console.log("Agora são exatamente " + hora + " horas. Boa noite!")
} 