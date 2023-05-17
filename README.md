# micro-frontends-react-

# run on Docker 
    # $ docker compose build

    # $ docker compose up

make sure that DB  is running as well look up the ports are in dockercompose.yml 

## Architecture

The micro-frontends-react project follows a micro frontends architecture, which allows for the development and deployment of independent frontend applications that can be composed into a single user interface.

The main architectural components of this project are:

    Reacthost: The Reacthost application acts as the host for all the micro frontend applications. It handles the routing and composition of the individual micro frontends. with help of webpack and the
     -- plugins: [ModuleFederationPlugin]

    Micro Frontends: Each micro frontend is an independent React application that can be developed and deployed separately. It encapsulates a specific functionality or feature of the overall application.

## Components

The micro-frontends-react project consists of the following components:

    Reacthost: The shell application is responsible for loading and integrating the micro frontend applications into a single user interface. It provides the routing mechanism and handles communication between the micro frontends.

    nodeApi: The nodeApi application provides the backend API for the micro frontend applications. It is a Node.js application that uses the Express framework and it uses the mongoDB as database to save the user data.

    remoteLogin: The remoteLogin application provides the login functionality for the micro frontend applications. It is a React application that uses the Auth0 service for authentication and authorization. 

    remoteNotes: The remoteNotes application provides the notes functionality for the micro frontend applications. It is a React application that uses the nodeApi service for CRUD operations on the notes.

    remoteSearch: The remoteSearch application provides the search functionality for the micro frontend applications. It is a React application that uses the nodeApi service for searching the notes with help of elasticsearch [WiP].

    Shared Library: The shared library contains reusable components, utilities, and resources that can be shared among the micro frontend applications.

# Usage

    we are moving into docker compose to run the whole project in one command --- [WiP]
    after cloning the project you need to run the following commands in the root directory of the project

    
    run this scripts in the Reacthost directory of the project
    # $ yarn install
    # $ yarn start
    # $ yarn remoteLogin
    # $ yarn remoteCounter
    # $ yarn remoteSearch
    # $ yarn remoteNotes
    # $ yarn backend
    ------------------------------
    # Scripts:

    "remoteLogin": "cd ../remoteLogin && yarn start ",
    "remoteCounter": "cd ../rmoteAppReact && yarn start",
    "backend": "cd nodeApi && yarn start",
    "remoteSearch": "cd ../remoteSearch && yarn start",
    "remoteNotes": "cd ../remoteNotes && yarn start"


# Contributing

Contributions to the micro-frontends-react project are welcome and encouraged. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

--- as i expericed this could be alos a good cheat sheet for the micro frontends architecture and every reactjs nodejs project in gerenal.

😃.  😃.  😃.   😃.   😃.   😃.  😃.  😃. 
