const pizzas = [
    { 
        id: 1,
        nombre: "Pizza muzzarella",
        ingredientes : ["muzzarella", "jamón cocido", "aceitunas"],
        precio: 1000,
    },
    { 
        id: 2,
        nombre: "Pizza de pepperoni" ,
        ingredientes: ["pepperoni", "orégano", "salsa"],
        precio: 1250,
    },
    { 
        id: 3,
        nombre: "Pizza con champiñones ",
        ingredientes: ["Champiñones", "queso", "salsa"],
        precio: 900,
    },
    { 
        id: 4,
        nombre: "Pizza fugazza ",
        ingredientes: ["cebolla", "queso", "aceitunas"],
        precio: 490,
    },
    { 
        id: 5,
        nombre: "Pizza con anchoas",
        ingredientes: ["anchoas" , "salsa" , "aceitunas"],
        precio: 500,
    },
    { 
        id: 6,
        nombre: "Pizza con anana",
        ingredientes: ["anana", "salsa", "aceitunas"],
        precio: 1100,
    },

]

console.log(pizzas);

// Pizzas con id impar

const IdImpares = pizzas.filter ((pizza) => {
    return pizza.id % 2 !== 0
}
);

IdImpares.forEach ((pizza) => {
    console.log(`El producto ${pizza.nombre} tiene id impar `);
});

// Pizzas Economicas que salgan menos de 600

const PizzasEconomicas = pizzas.filter((pizza) =>{
    return pizza.precio < 600
});

PizzasEconomicas.forEach ((pizza) =>{
    console.log(`El producto ${pizza.nombre} vale menos de $600`);
});

// Todos los ingredientes de cada pizza

pizzas.forEach(pizzas => console.log(`Las pizzas ${pizzas.nombre} tienen estos ingredientes: ${pizzas.ingredientes}`));
