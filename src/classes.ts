abstract class ListOfSizes {
  constructor(public sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class NewPizza extends ListOfSizes {
  public toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  public addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const secondpizza = new NewPizza("Pepperoni", ["small", "medium"])