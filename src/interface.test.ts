import { interfaceModule } from "./interface";

test.only("should return some string", () => {
  expect(interfaceModule("some", ["small"])).toEqual({
    name: "some",
    sizes: ["small"]
  })
});
