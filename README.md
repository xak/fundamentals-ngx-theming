# Fundamentals Angular Theming

This is a simple project to demonstrate the theming capabilities of CSS vars in the Fiori Fundamentals library.

### This uses a dev version of [`fiori-fundamentals`](https://github.com/SAP/fundamental). You must have the main project cloned locally.

In the `fundamental` repo ...
```
npm pack
```
In this project ...
```
npm install ../fundamental/fiori-fundamentals-1.4.1.tgz
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build
`ng build --prod --aot=false --base-href http://test.zackfrazier.com/guess/`
