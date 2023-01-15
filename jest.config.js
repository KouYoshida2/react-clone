export default {
  roots: ["<rootDir>/src"],

  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  globals: {
    "ts-jest": {
      useESM: true,
      isolatedModules: false,
    },
  },

  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest"],
  },
};
