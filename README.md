# Image Processing API 

## Scripts

### To install dependencies
`npm i`

### To build code
`npm run build`

### To test
`npm run test`

### To run the server using nodemon
`npm run devstart`

### to run server for production
`npm run start`


## Endpoints

**Server running on port 3000**

### Image resize

* Make sure image in folder 'input'
* Enter file name without file extenstion
endpoint:
`/api/images?filename=[Filename]&width=[Width]&height=[Height]`

example:
`http://localhost:3000/api/images?filename=palmtunnel&width=2000&height=2000`