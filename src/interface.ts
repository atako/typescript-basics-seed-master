interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  [key: number]: string;
}

export const interfaceModule = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes
  };
}