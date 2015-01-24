# NodeJS RESTful API Starter

Streamline starting from scratch. This provides a minimal working NodeJS restful API. What's a RESTful API? API's make engineers happy. Head over to Vimeo for a [great intro to REST](http://vimeo.com/17785736).

### Project Structure

- restful-api
    - collections/ - structured lists of the models
    - models/ - structures for objects of data
    - node_modules/ - libraries that node installs and uses, don't commit this
    - public/ - code and files that can be fetched by a client web browser
        - images/ - hosting for image files
        - javascripts/ - hosting for JS
            - lib/ - JS libraries like jQuery, underscore, etc
        - stylesheets/ - CSS
    - routes/ - handle GET, POST, PUT, DELETE for pages and services
    - views/ - html, jade, server-side html building
    - app.js - starts the web server
    - Gruntfile.js - maintenance, builds, development, automated tasks
    - package.json - list of node packages your server needs
    - server.js - script to run app.js on all your cores

## Installation

First you'll need to install NodeJS from [nodejs.org](http://nodejs.org/download/) or [node version manager](https://github.com/creationix/nvm). Supported version is node 10.32.

Once installed, check the version

    node --version  #should read 0.10.32 or greater

Next install grunt-cli globally so that we can run grunt scripts later.

    npm install -g grunt-cli

    grunt --version  #verifies correct install

### Launching the restful-api starter

Clone this repo if you don’t have it.

    git clone https://github.com/NUDelta/node-restful-api-starter

Navigate to that directory.

    cd node-restful-api-starter/restful-api

Install the node dependencies

    npm install #should run for less than one minute

Check for errors. If none, we’re good. Run the command below and navigate to [http://localhost:3000](http://localhost:3000).

    node app.js #then, open your browser at

Or if you want to develop with live-reload and JS Linting enabled:

    grunt up
