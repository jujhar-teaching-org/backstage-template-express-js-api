# template-express-js-api

Express js based API template with added Hurl integration tests

## To run

```bash

# install deps
(cd app && npm i)

# to run
(cd app && npm start)

```

## Add to your own backstage catalog

To add this to your own `/app-config.yaml: catalog->locations`section

```yaml
# remote catalog template example
- type: url
  target: https://github.com/jujhar-teaching-org/template-express-js-api/blob/main/backstage-catalog-template.yaml
  rules:
    - allow: [Template]
```
