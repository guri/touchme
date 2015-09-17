System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "typescriptOptions": {
    "emitDecoratorMetadata": true
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app": "src"
  },
  "packages": {
    "app": {
      "main": "ugmain.ts",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "typescript": "lib/typescript"
  }
});

