let personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 34 },
    { nombre: "Pedro", edad: 28 },
    { nombre: "María", edad: 41 },
    { nombre: "Juan", edad: 19 },
    { nombre: "Clara", edad: 30 },
    { nombre: "Roberto", edad: 37 },
];

let gruposPorDecadas = personas.reduce((acumulador, persona) => {

    let decada = Math.floor(persona.edad / 10) * 10;

    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }

    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(gruposPorDecadas);
