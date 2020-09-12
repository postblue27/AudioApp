# AudioApp
Web application created with ASP.NET Core 3 and Angular 8

To start project:
1. Download project to your local machine.

2. Download and install .Net Core(3.0.100) 
Direct link to installer for Windows: https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.0.100-windows-x64-installer
Link to Microsoft web site where you can find installers for different OS: https://dotnet.microsoft.com/download/dotnet-core/3.0

3. Download and install Node.js.
Link: https://nodejs.org/uk/download/

4. Download Angular.
For Windows: 
  1. Open cmd;
  2. Run "npm install -g @angular/cli".

5. Open project in VS Code, change directory to AudioApp-SPA folder via terminal(ctrl+`) and run "npm install".
It will install all modules needed for angular project to run.

6. Still inside AudioApp-SPA folder run "ng serve".
You may have troubles with Execution Policies on this step. To resolve it - run Windows PowerShell as administrator and run "Set-ExecutionPolicy -ExecutionPolicy Unrestricted" and then type "A"(for all).

7. Open another terminal window (ctrl + shift + `), change directory to AudioApp.API and run "dotnet run".

YOU'RE DONE.

P.S.
Frontend runs on http://localhost:4200/ by default.
Backend runs on http://localhost:5000/ by default.
I highly recommend you to use Postman to test API and SQLite DbBrowser to access database.
