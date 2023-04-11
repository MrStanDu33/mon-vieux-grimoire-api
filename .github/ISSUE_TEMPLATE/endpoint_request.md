---
name: Endpoint request
about: Suggest an API endpoint
title: ''
labels: ['feature', 'endpoint']
assignees: ''
---

# `/api/my/super/endpoint`

## Description

> Describe here the endpoint, why we should call it.

### Protections

- [ ] 🔒 This endpoint requires to be authenticated.
- [ ] 👮 This endpoint is only available to resource owner .

### Request parameters

> Describe here all headers we should use while calling the endpoint.

| Name         | Location        | Type      | Description                  |
| ------------ | --------------- | --------- | ---------------------------- |
| `:id`        | URL             | `string`  | User identifier              |
| `pagination` | Query parameter | `boolean` | Wether or not use pagination |

### Request body

> Describe here the payload we should use while calling the endpoint with example values.

- MIME type: `application/json`

  ```json
  {
    "email": "joe@example.com",
    "password": "password123"
  }
  ```

- MIME type: `multipart/form-data`

  | Field name | Field type | Value             |
  | ---------- | ---------- | ----------------- |
  | email      | `string`   | `joe@example.com` |
  | password   | `string`   | `password123`     |
  | avatar     | `file`     | --                |

### Responses

- **200** - _Success_

  description of when this response is returned

  ```json
  {
    "message": "Ok"
  }
  ```
