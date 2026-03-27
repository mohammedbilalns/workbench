
# Headers 
- highly extensible
- acts as kind of remote control 
## Request Headers 
- User Agent 
- Authorization
- Cookie
- Accept 

## General headers (used in request and response)
- Date 
- cache-control
- connection

## Representation headers
- content-type
- content-length
- content-encoding
- etag

## Security headers
- Strict-Transport-Security(HSTS)
- Content-Security-Policy(CSP)
- X-Frame-Options
- X-content-type-options
- set-cookie

# Methods
defines the intent of the request
- get , put and delete are idempotent
- post is not idempotent
## Options 
- For simple request
    - server checks for the origin header in the request 
    - if it is allowed server includes access-control-allow-origin header in the response
- To do a preflight request  
    - it should be cross origin request 
    - the request method should not be get, post or head (eg: put, delete)
    - the request incudes non simp;le headers like Authorization, x-Custom-Header 
    - the request has a content-type other than application/x-www-form-urlencoded, multipart/form-data, text/plain, or an unknown content-type
## Preflight request 
- in the preflight request there will be two request headerers , Access-Control-Requst-Method: PUT, Access-Control-Request-Headers: Authorization 
- the server verifies and sends back with access-control-allow-origin, Access-control-Allow-Methods : PUT, DELETE, Access-Control-Max-Age : 3423
- status code 204 

# Status codes
## 1xx - Informational
- switching protocols
## 2xx - Successful
- 200 - successful reponse  
- 201 - created
- 204 - no content ( for delete and cors reponses )
## 3xx redirection
- 301 - permanent redirect
- 302 - temporary redirect
- 304 - Not Modified ( conditional get , caching )
## 4xx client error
- 400 - bad request
- 401 - unauthorized
- 403 - forbidden
- 404 - not found
- 405 - method not allowed
- 409 - Conflict
- 429 - too many requests
## 5xx server error
- 500 - internal server error
- 501 - not implemented
- 502 - bad gateway
- 503 - service unavailable
- 504 - gateway timeout

# Caching
- Response can contain
    - Cache-Control header 
    - ETag 
    - Last-Modified
- Request can contain
    - If-None-Match - contains etag 
    - If-Modified-Since

# Content Negotiation
Three types of content negotiation
- with the request header 
    - Accept-Language header to request for a specific language
    - Accept header to request for a specific content type
    - Accpet-Encoding header to request for a specific encoding(gzip, deflate, br, zstd)

# Persistant connections
- Using the header keep-alive
- Http1.1 is persistent by default
# Handling large requests and responses
## Multipart reqeusts
- for sending large files to server from client 
    - binary data is send to the server as parts  
- there will be boundary header used to seperate the parts
## Streaming Responsese 
- Content-Type: text/event-stream

# Routing
Routiung handles where should the request be handled


# Serialization and Deserialization
- converting data from a format to domain agnostic format
- json, xml and yaml are  the common text serialization formats
- protobuf and avro are the common binary serialization formats





