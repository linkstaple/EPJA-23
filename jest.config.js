module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^@theme$": "<rootDir>/src/theme",
    "^.+.(png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^@icons/(.*)$": "<rootDir>/src/assets/icons/$1",
    "^@images/(.*)$": "<rootDir>/src/assets/images/$1",
    "^src/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+/.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    "^.+\\.(png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  testMatch: [
    "**/__tests__/*.(ts|tsx)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
};
