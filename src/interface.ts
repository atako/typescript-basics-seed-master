interface Pizza {
  name: string;
  sizes: string[];
}

export const interfaceModule = (name: string, sizes: string[]): Pizza => {
  return {
    name,
    sizes
  }
}