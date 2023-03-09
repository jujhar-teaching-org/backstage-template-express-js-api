# Backstage template express-js-api

Express js based API template with:

- added Hurl integration tests
- docs
- logging configigured
- kubernetes manifest

## Add to your own Backstage catalog

To add this to your own `/app-config.yaml: catalog.locations` section

```yaml
# add under /app-config.yaml catalog.locations
# remote catalog template template-express-js-api
- type: url
  target: https://github.com/jujhar-teaching-org/backstage-template-express-js-api/blob/main/backstage-catalog-template.yaml
  rules:
    - allow: [Template]
```
