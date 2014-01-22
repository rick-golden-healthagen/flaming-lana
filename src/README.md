# The `src` Directory

```
src/
  |- index.html                - application container
  |- README.md                 - this file
  |
  |- app/                      - application code and templates
  |  |- app.js                   - application configuration and initialization
  |  |- app.spec.js              - application level unit tests
  |  |
  |  |- layout/                  - page layout components (directives)
  |  |  |
  |  |  |- page-header.js          - <page-header> directive code
  |  |  |- page-header.tpl.html    - <page-header> directive html template
  |  |  |
  |  |  |- page-footer.js          - <page-footer> directive code
  |  |  |- page-footer.tpl.html    - <page-footer> directive html template
  |  |
  |  |
  |  |- modules/                 - application modules
  |  |  |
  |  |  |- home/                   - application landing page (index to other pages)
  |  |  |  |
  |  |  |  |- home.js                 - home module
  |  |  |  |- home.tpl.html           - home module html template
  |  |  |  |- home.less               - home module style
  |  |  |  |- home.spec.js            - home module unit tests
  |  |  |
  |  |  |- leakage/                 - leakage by month
  |  |  |  |
  |  |  |  |- leakage.js              - leakage module code
  |  |  |  |- leakage.tpl.html        - leakage module html template
  |  |  |  |- leakage.less            - leakage module style
  |
  |- assets/                   - static assets (none at the moment)
  |
  |- less/                     - application style (CSS generation)
  |  |- main.less                - root of all styles (all *.less files are included here)
  |  |- variables.less           - global *.less variables
```

