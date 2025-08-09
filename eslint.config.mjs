import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore generated build/export output so ESLint doesn't try to parse HTML or static files
  { ignores: ["out/**", ".next/**", "dist/**", "coverage/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Loosen some rules inside test files only, to avoid blocking builds
  {
    files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "react/display-name": "off",
      "jsx-a11y/alt-text": "off",
    },
  },
];

export default eslintConfig;
