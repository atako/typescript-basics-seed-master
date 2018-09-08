type Pizza = { name: string, toppings: number }

const pizza: Pizza = { name: "Margarita", toppings: 4 }

const serialized = JSON.stringify(pizza);

const getNameFromJson = (obj: string) => (JSON.parse(obj) as Pizza).name;

getNameFromJson(serialized);