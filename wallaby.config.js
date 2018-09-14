module.exports = function(w) {
  return {
    files: [{ pattern: "src/**/*test.ts", ignore: true }, "src/**/*.ts"],

    tests: ["src/**/*test.ts"],
    env: {
      type: "node"
    },
    testFramework: "jest"
  };
};
