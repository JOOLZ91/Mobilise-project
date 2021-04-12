## INSTALL ##

BACKEND
1. Open terminal in server folder. 
2. Type 'npm install' to install all dependencies.
3. Type 'npm start' to run the server.

FRONTEND
1. Open second terminal in client folder (make sure the server is still running).
2. Type 'npm install' to install all dependencies.
3. Type 'npm start' to run application

Necessary enviroment variables

**.env from client folder
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_CHEC_PUBLIC_KEY=pk_257874289a6723cb53a1c4ed09182320e6c0739f1ac74

**.env from server folder
DB_STRING = mongodb+srv://Filip:filip123@cluster0.wntdt.mongodb.net/Mobilisedata?retryWrites=true&w=majority

In case of deployment switch 'REACT_APP_BACKEND_URL=http://localhost:5000'
to the URL of the server

**Sign in page
LOGIN: jsmith
PASSWORD: johnsmith