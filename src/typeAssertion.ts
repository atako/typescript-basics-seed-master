type Pizza = { name: string, toppings: number }

const pizza: Pizza = { name: "Margarita", toppings: 4 }

const serialized = JSON.stringify(pizza);

const getNameFromJson = (obj: string) => {
  return (JSON.parse(obj) as Pizza).name
};

getNameFromJson(serialized);