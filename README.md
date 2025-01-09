set up path for component in react
 -install react router dom using the command npm i react-router-dom
 -steps to set-up path for component using react router dom
    -React App must render inside
    <BrowserRouter></BrowserRouter>
    - components needs to set-up path must inside <Routes> component of react router dom
    -using <Route> define each component path
    -<Route> is higher order component(HOC) :- getting component as props in a component
-create json-server
    -create a folder to hold json file
    -create package.json file using the command npm init -y
    -create a json file
    -install json-server using the command npm i json-server
    -run json file using the command npx json-server json_file_name    
    
-how to diploy json file using nodejs
-----------------------------------------
1.create a index.js file in server folder
2.update script in "package.json" file as "start":"node index.js"
3.create .gitignore file and add node_modules folder
4.define json-server to run json file in index.js
        
