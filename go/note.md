## Files
- `go.mod` - text file located at the root of the project directory that defines the module name and its dependencies with specific minimum version require
- `go.sum` - this file contains cryptographic checksums for the content of all direct and indirect dependencies, verifying their integrigty and projecting against supply chain attacks 

## Commands  
- `go mod init <module path>` - initialize the project 

## Directory Structure 
- `/cmd` - this dir contains the main application or service that the poject builds to executable binaries 
- `/internal` - this is for private application and library code that is not meant to be imported by external projetcts. 
- `/pkg` - This dir holds public reusable 

