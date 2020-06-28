# wm-product-search-ui
---------------------
UI Service that provides service search.

### Run local on you IDE:
---------------------
* Ensure to set up the environment variables (See Environment variables needed)
* Run the service locally: ``` npm run start ```
* Then your service will be up on http://localhost:4200. Try it! (See Services Availables in this doc page).

### Build and run a static build from you IDE:
---------------------
* Ensure to set up the environment variables (See Environment variables needed)
* Build the service locally: ``` npm run build ```
* Run the service locally: ``` npm run start-dist ```
* Then your service will be up on http://localhost:8080. Try it! (See Services Availables in this doc page).

### Build and run as Docker Container:
---------------------
* Ensure you get up the wm-product-search-back service instance.
* Run the command ``` sh build-local.sh ``` on the root of this repository. This will build the docker image tagged with :local and then will run the container.
* Then your service will be up on http://localhost:8080. Try it! You will see a page with a Banner to Search products. Insert your words and press enter. Results will show below.

### Testing:
---------------------
* Unit tests: ``` npm run test ```
* Coverage: ``` npm run test:coverage ```
* Eslint check: ``` npm run lint ```
