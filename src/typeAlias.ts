type Size = "small" | "medium" | "large";
type Callback = (size: Size) => Size;

const selectSize: Callback = (x) => x

selectSize("small")