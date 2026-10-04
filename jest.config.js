const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

const jestConfig = createJestConfig(customJestConfig);

module.exports = async () => {
  const config = await jestConfig();

  return {
    ...config,
    moduleNameMapper: {
      ...config.moduleNameMapper,
      "^@/(.*)$": "<rootDir>/$1",
    },
  };
};