# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- ![Desktop Home ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/desktop-home.png)
- 
- ![Desktop Results Page ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/desktop-results.png)

- ![Mobile home ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/home-mobile.png)

- ![Mobile home text enter ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/home-mobile-text-input.png)

- ![Mobile Results Page ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/page-results.png)
-
- ![Mobile Results Page text enter ](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/page-results-text.png)

- ![Mobile Results Page with description](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/page-result-description-text.png)

-  ![Mobile Results Page with description](https://github.com/paulo70/agile-content-technical/blob/main/src/assets/page-result-description-text.png)
