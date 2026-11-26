console.log("Hello, World!");

var vel = 66;
console.log(`A velocidade do seu carro é ${vel} km/h`);

console.log("Dirija sempre com cinto de seguranca, sua velocidade atual é de " + vel + " km/h");

if (vel < 60) {
    console.log("Você está dentro da velocidade permitida");
} else if (vel > 60) {
    console.log("Você está acima da velocidade permitida. MULTADO!");
}
