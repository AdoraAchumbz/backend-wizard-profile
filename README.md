# HNG Backend - Stage 0 Task

## Description
A simple Express.js API that returns my profile information along with a random cat fact.

## Endpoint
`GET /me`

### Response Example
```json
{
  "status": "success",
  "user": {
    "email": "adorachigozieachumba.com",
    "name": "Chigozie Achumba",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T15:00:12.789Z",
  "fact": "Cats can jump up to six times their length."
}