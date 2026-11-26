var vel = document.getElementById('velocidade');

console.log(`A velocidade do seu carro é ${vel} km/h`);

if (vel < 60) {
    console.log(`Sua velocidade é de ${vel} km/h. Você está dentro da velocidade permitida.`);
} else {
    console.log(`Sua velocidade é de ${vel} km/h. Você está acima da velocidade permitida. MULTADO!`);
}