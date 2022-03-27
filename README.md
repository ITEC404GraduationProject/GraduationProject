# ITEC404 Graduation Project

**Hints:**
- Backend addresses:<br>
	https://localhost:7039<br>
	http://localhost:5039
- Frontend address:<br>
	https://localhost:44413
<br>
Welcome to the ITEC404 Graduation Project repository. We are here to build project we designed in ITEC403. This repository consists the whole project structure including both frontend and backend. 

- Frontend is located in **ClientApp** folder. It is based on **React** framework with use of **scss** as styling language

- Backend is based on **ASP.NET** Core in **.NET 6**. Also, we use **MVC** pattern which involves logic separation on **Models, Controllers and Views**. While view is represented in **ClientApp** folder by **React** framework, backend logic is separated on folders **Models** (Represent database model), **Controllers** (Defines endpoints of application), and **Services** (Defines data processing methods that are used in Controllers)

- Database is located in MongoDB. Connection is already set up.

# How to launch a project

1. Clone github repository to your computer.
2. Download any application that can run .NET 6 project (ex. Visual Studio 2022).
3. Launch the project with your application.
4. Wait until all packages are installed (it can take some time)
5. Both backend and frontend should start automatically after all packages are installed.

# How to use github

1. Open dropdown menu with repository branches![image](https://user-images.githubusercontent.com/82456919/160280859-29aedf4c-b628-41d8-b587-10e30a89d50c.png)
2. Create a new branch that you want to work on if it is not created yet:
   - In dropdown menu enter new branch name in format of **part-you-work-on/feature-you-work-on**.<br>For example **frontend/registration-page** or **backend/offer-api**
3. Checkout the branch in your text editor/ide.
4. Make changes.
5. Commit the changes you want
6. Push commits to the branch you were working on
7. Open pull request for your branch
![image](https://user-images.githubusercontent.com/82456919/160281057-4ea1b8ef-df48-4197-b894-9a2f462f533b.png)



# How to clone github repository

## Using Personal Access Token

- Create **Personal access token** in your account. [Click here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) if you don't know how to create Personal access token
- install git on your computer
- Use ``` git clone https://github.com/ITEC404GraduationProject/GraduationProject.git ``` command in the directory where you want.
- Enter you github Username in console when Username is asked
- Enter your **Personal access token instead of a password** when password is asked

