# Expres based API

This is some Fake API docs using the mkdocs standard

![doggy woggy](images/dogecoin.jpg)

## How to build

`npm run dev`

## How to access API documentation ?

### Download openapi yaml documentation.

Run following command to get openapi yaml documentation:

```sh
 curl http://localhost:8080/v3/api-docs.yaml
```

You should see output as shown below.

```
openapi: 3.0.1
info:
  title: OpenAPI definition
  version: v0
servers:
- url: http://localhost:8080
  description: Generated server url
paths:
  /api/v1/hello:
    get:
      tags:
      - hello-controller
      operationId: hello
      parameters:
      - name: name
        in: query
        required: false
        schema:
          type: string
      responses:
        "200":
          description: OK
          content:
            '*/*':
              schema:
                type: string
components:
  schemas: {}
```

### Interact API using swagger.

Paste link below in your browser.

```
http://localhost:8080/api/v1/hello
```

You should see swagger UI as shown below.

![Swagger UI](images/swagger-ui.png)
