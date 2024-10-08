<h1 style="text-align:center">T3A2-Full-Stack-App</h1>

<h2 style="text-align:center">Table of Contents</h2>

- [Purpose](#purpose)
- [Functionality / Features](#Features)
- [Target Audience](#audience)
- [Tech Stack](#stack)
- [Dataflow Diagram](#dataflow_diagram)
- [Application Architecture Diagram](#aad)
- [Wireframes](#wireframes)
- [Trello](#trello)

<h2 style="text-align:center"> R1 Description of Web Application</h2>

<h2 style="text-align:center" id="purpose">Purpose</h2>

Our client is a local small business, named Bright Academics who specialises in providing tutoring services to individuals at all levels of their education journey, however, they have a definite focus on individuals who are sitting their HSC or equivalent. Due to an increase in both the number of tutors who are employed, as well as an increase in clients, Bright Academics is in need of a full fledged web application which provides usefulness to both clients and admins through the same web application. This web application will provide ease of use and allow for business processes for Bright Academics to be enhanced and improved.

## <h2 style="text-align:center" id="Features">Functionality / Features</h2>

At this point in time, the MVP for our web application has three main features. These include: User Authenication which will allow for user registration and login as well as profile management including password recovery, Tutor Listing which will provide clients with tutor resumes, the subjects which they teach, pricing and filter functionality to allow for efficient searching based on price and subjects taught, and finally, there will be an admin dashboard where users with the correct permissions will be able to manage employment records. On top of these features, there will be a small amount of stretch goal features which may be present at final submission. A key strech goal for the project includes the implementation of an online booking system which will allow clients to view real time availability of tutors and allow for easy booking/cancellation of sessions.

## <h2 style="text-align:center" id="audience">Target Audience</h2>

There are two key groups of individuals to which this web application will be appealing. This is of course the admin of Bright Academics who will be able to update tutor profiles on the application and manage employment records of tutors through the web application. Another key audience of this web application are prospective and current clients of Bright Academics who are interested in viewing the services/pricing which is offered. This will be a multi purpose app which is able to be utilised by both audiences, however the way they do so will be different in nature.

## <h2 style="text-align:center" id="stack">Tech Stack</h2>

In order to complete this web application, we will be utilsiing the MERN stack. This includes; MongoDB, Express, React and Node.JS. A description of each will be discussed below:

- MongoDB: A database management system which is considered to be a noSQL database. The data is stored in documents which further stored in collections. This will be uilised as the database for out web application.

- Express: Is a back-end web application which is utilised to create RESTful APIs inconjunction with Node.Js. It is lightweight and flexible in terms of its ability to route due to its use of middleware. Within this application, Express is being utilised to create the API.

- React: Is an extremely powerful JavaScript library which allows users to create dynamic and responsive front-ends for web applications. In our web application, it will be utilised to handle and maintain the front-end.

- Node.js: Is a cross platform, open source JavaScript runtime environment. It allows for and executes JavaScript code outside of the web broswer and in combination with Express, will be utilised to create and maintain the API.

## <h2 style="text-align:center" id="dataflow_diagram">R2 Dataflow Diagram</h2>

![Image of Dataflow diagram](docs/dataFlowD.png)

## <h2 style="text-align:center" id="aad">R3 Application Architecture Diagram</h2>

![Application Architecture Diagram](docs/aad.png)

<h2 style="text-align:center">R4 User Stories</h2>

<h3 style="text-align:center" id="trello">Trello Board</h2>

We have decided to use a Trello board to for the project management, which will see us utilize Agile Methodology, with a focus on SCRUM.

Conventions Used:

- Each feature is an Epic identified by the labels provided to the user stories.
- Within each Epic each story is prioritized according to requirements of the feature
- A fourth label epic for cross-stories over the features.
- Columns for:
  - Backlog
  - To-Do
  - Blockers
  - Done

The following features make up our minimum viable product.

<details>
<summary><h3>Feature: User Authentication</h3></summary>

<h4>Epics</h4>

    [x] User Registration and Login
    [x] Profile Management including password recovery

---

        Story: User Registration

            Description:
                As new user, I want to register an account so that I can access the platform.

            Acceptance Criteria:
                1. User Can register with a valide email and password
                2. Password must meet best practices for security criteria
                3. Confirmation email is sent to user after registration

            Test Cases:
                1. Verify User can register with valid credentials
                2.Verify an error message is shown for invalid email formats.
                3. Verify password criteria enforcement
                4. Verify confirmation email is sent to user after registration
        Link:
        https://trello.com/c/tjuJ4cJB

![User Registration](/docs/UserRegistration.png)
![Testing - User Registration](/docs/Testing%20-%20User%20Registration.png)

---

        Story: User Login

            Description:
                As a registered user, I want to log in so that I can access my account.

            Acceptance Criteria:
                1. User can log in with a registered email and password.
                2. Incorrect login attempts display an error message.
                3. After successful login, the user is redirected to the dashboard.

            Test Cases:
                Verify user can log in with valid credentials.
                Verify an error message for incorrect credentials.
                Verify user is redirected to the dashboard after login.
        Link:
        https://trello.com/c/Fu77sCLd

![User Login](/docs/UserLogin.png)
![Testing - User Login](/docs/Testing%20-%20User%20Login.png)

---

        Story: Password Recovery

            Description:

                As a user, I want to recover my password if I forget it.

            Acceptance Criteria:

                1. User can request a password reset link.
                2. Password reset link is sent to the user’s registered email.
                3. User can reset the password using the link.

            Test Cases:

                1. Verify password reset request with a valid email.
                2. Verify password reset link is sent.
                3. Verify the user can set a new password.
        Link:
        https://trello.com/c/ymTLTmaE

![Password Recovery](/docs/Password%20Recovery.png)
![Testing - Password Recovery](/docs/Testing%20-%20Password%20Recovery.png)

---

        Story: Profile Update

            Description:
                As a user, I want to update my profile information.

            Acceptance Criteria:
                1. User can update personal details such as name, email, and phone number.
                2. User can change their password.
                3. User changes are saved and reflected in the respective profile.

            Test Cases:
                1. Verify user can update profile details.
                2. Verify changes are saved correctly.
                3. Verify password change functionality.
        Link:
        https://trello.com/c/VZjvga0a

![Profile Update](/docs/Profile%20Update.png)
![Testing - Profile Update](/docs/Testing%20-%20Profile%20Update.png)

---

</details>

<details>
<summary><h3>Feature: Tutor Listing</h3></summary>

<h4>Epics</h4>

    [x] Tutor Resume
    [x] Subjects List
    [x] Pricing
    [x] Search and filter functionality by tutor
    [x] Search and filter functionality by subject
    [x] Search and filter functionality by price

---

        Story: Tutor List

            Description:

                As a user, I want to view a list of available tutors.

            Acceptance Criteria:

                1. Tutors are displayed with key details (name, subjects, pricing).
                2. List is paginated (if dataset is large enough).

            Test Cases:

                1. Verify user can view tutor’s detailed profile.
                2. Verify subjects and qualifications are displayed correctly.

        Link:
        https://trello.com/c/3fMwBwCO

![Tutor Listing](/docs/Tutor%20List.png)
![Testing - Tutor Listing](/docs/Testing%20-%20Tutor%20List.png)

---

        Story: Subject and Pricing Information

            Description:

                As a user, I want to view the subjects and pricing for each tutor.

            Acceptance Criteria:

                1. Subjects offered by tutors are listed with their respective pricing.
                2. Users can view pricing for different subjects.

            Test Cases:

                1. Verify subjects are listed with correct pricing.
                2. Verify pricing information is accurate.

        Link:
        https://trello.com/c/uql5btlj

![Subject and Pricing Information](/docs/Subject%20and%20Pricing%20Information.png)
![Testing - Pricing](/docs/Testing%20-%20Subject%20and%20Pricing%20Information.png)

---

        Story: Search Tutors by Subject and Price

            Description:

                As a user, I want to search and filter tutors by subject and price.

            Acceptance Criteria:

                1. Users can search tutors by entering subject keywords.
                2. Users can filter search results by price range.

            Test Cases:

                1. Verify search functionality by subject.
                2. Verify filter functionality by price.
                3. Verify that the search results are accurate.

        Link:
        https://trello.com/c/70WbcBK3

![Search Tutors](/docs/Search%20Tutors%20by%20Subject%20and%20Price.png)
![Testing - Search Tutors](/docs/Testing%20-%20Search%20Tutors%20by%20Subject%20and%20Price.png)

---

        Story: View Tutor Profile

            Description:

                As a user, I want to view the detailed profile/resume of a tutor.

            Acceptance Criteria:

                1. User can view tutor's full profile, including experience and qualifications.
                2. User can see subjects taught by the tutor.

            Test Cases:

                1. Verify user can view tutor’s detailed profile.
                2. Verify subjects and qualifications are displayed correctly.

        Link:
        https://trello.com/c/qZ8lz0ML

![Tutor Profile](/docs/View%20Tutor%20Profile.png)
![Testing - Tutor Profile](/docs/Testing%20-%20View%20Tutor%20Profile.png)

---

</details>

<details>
<summary><h3>Feature: Business Owner/Admin Dashboard</h3></summary>

<h4>Epics</h4>

    [x] Management Employment Records
    [x] Admin/Overview of Site

---

        Story: Manage Employment Records

            Description:
                As an admin, I want to manage employment records for tutors.

            Acceptance Criteria:
                1. Admin can C.R.U.D. Records.
                2. All changes are logged accordingly.

            Test Cases:
                1. Verify admin can view employment records.
                2. Verify admin can add a new record.
                3. Verify admin can update existing records.
                4. Verify admin can delete records and that changes are logged.
        Link:
        https://trello.com/c/cdJOKUmP

![Manage Employment Records](/docs/Manage%20Employment%20Records.png)
![Testing - User Login](/docs/Testing%20-%20User%20Login.png)

</details>

<h2 style="text-align:center" id="wireframes">R5 Wireframes</h2>

<details>

<summary>

### Tutors List

</summary>

#### Desktop

![tutors-desktop](docs/tutors-desktop.png)

Clicking on a tutor card opens a modal with more information

![modal-desktop](docs/modal-desktop.png)

#### Mobile

On mobile the desktop navbar is replaced by a hamburger menu. The menu has been opened in the image below

![tutors-mobile](docs/tutors-mobile.png)

The menu is closed and a modal is open in the image below

![modal-mobile](docs/modal-mobile.png)

</details>

<details>

<summary>

### Dashboard

</summary>

#### Desktop

Admin users will see a dashboard link in the navbar. Signed in users, whether or not they are admins, will see the profile link in the navbar instead of sign up and login links

![dashboard-desktop](docs/dashboard-desktop.png)

Similar to the view only tutors list, the dashboard also shows a modal when a card or the new tutor button is clicked

![dash-modal-desktop](docs/dash-modal-desktop.png)

#### Mobile

![dashboard-mobile](docs/dashboard-mobile.png)

![dash-modal-mobile](docs/dash-modal-mobile.png)

</details>

<details>

<summary>

### Login

</summary>

#### Desktop

![login-desktop](docs/login-desktop.png)

Image above shows a message that would be displayed after the user has inputed a valid email adress with an associated account and clicked the reset password button

Mobile version of this page is identical except for using a hamburger menu

</details>

<details>

<summary>

### Sign up

</summary>

#### Mobile

![signup-mobile](docs/signup-mobile.png)

Desktop version looks identical but with full navbar

</details>

<details>

<summary>

### Profile

</summary>

#### Desktop

![profile-desktop](docs/profile-desktop.png)

User is redirected to tutors list after pressing sign out button

Mobile version looks identical but with hamburger menu

</details>

####

<h2 style="text-align:center">R6 Trello Board</h2>

<a href="https://trello.com/b/wi2g4Wkf/full-stack-application" target="_blank">Trello Board - Full Stack Application</a>

---

# Part B Updates

## Links

[GitHub](https://github.com/intameli/T3A2-Full-Stack-App)

[Deployed Site](https://tutor.jacobasmith.com)

## Admin Account

To view the full functionality of the site an admin account is needed. Use the following account to login as an admin:

Email: tutorapp00@gmail.com

Password: admin2

## How to run locally

For assignment markers wishing to run the site locally, the following .env file in required for the backend:

```
DB_URI='mongodb+srv://jacob:supersecret@cluster0.tqurfer.mongodb.net/'
PORT=8000
JWT_SECRET_KEY='secretkey123'
EMAIL_USER='tutorapp00@gmail.com'
EMAIL_PASSWORD='ybenfpwoxmvwjapn'
FRONTEND_URL='localhost:5173'
```

Additionally, you can change the frontend to connect to the locally running backend by uncommenting the backend variable in both the useFetchData and useFetchFunc hooks (will also need to comment out old backend variable)

## Site Changes

The final version of the full-stack web app did not change much during development. The two main changes made from the initial designs were:

- In order for new admin accounts to be created securely, an add admin page was added that is only visible to logged in admins. This page sends an email to the new admin with a random password. They can then login with that password and change it if they wish.

- We decided not to show the tutor pages as a modal ontop of the tutor cards. It made more sense to give each tutor their own url based on their id with their own page. Makes the site more user friendly as links to tutor pages can be shared.

## User Testing

### Backend

The backend was tested using Insomnia both in development and in production.

Development Testing

![backend dev test](./docs/test-dev.png)

Production Testing

![backend dev test](./docs/test-prod.png)

### Frontend

The frontend was continuously tested as features were added. User testing informed design changes as well. For example the filter component originally looked like this:

![filter](./docs/filter.png)

After the feature had been implemented and tested it became obvious that the "Apply Filters" button was not necessary and that pressing the "Add subject" button should apply the filters. Testing also revealed how automatic it is to press the enter key after typing into an input so the component was changed to use a form element to support this. Using the form element introduced when removing subjects as the button click events were propogating up to the form onSubmit event. User testing was vital in discovering this bug and fixing it.

### User Acceptance Testing (UAT) Checklist for Tutor Platform MVP

#### User Authentication

User Registration

Verify users can register with valid email and password.
Confirm that passwords meet security requirements.
Ensure confirmation email is received after registration.
Validate that the confirmation link activates the account.

User Login

Verify users can log in with correct credentials.
Confirm that an error message is displayed for incorrect credentials.
Check that users are redirected to the dashboard after successful login.

Password Recovery

Ensure users can request a password reset link.
Confirm the password reset link is sent to the registered email.
Verify users can reset their password using the provided link.

#### Profile Management

Profile Update

Verify users can change their password.
Confirm changes are saved and reflected in the profile.

#### Tutor Listing

List Tutors

Verify that tutors are listed with correct details (name, subjects, pricing).
Ensure pagination works correctly for the list of tutors.

#### Tutor Profile/Resume

View Tutor Profile

Ensure users can view the detailed profile of a tutor.
Verify that subjects taught by the tutor are correctly displayed.
Confirm the tutor’s qualifications and experience are accurately presented.

#### Subjects and Pricing

Subject and Pricing Information

Verify that the subjects offered by tutors are listed correctly.
Ensure that pricing information for each subject is accurate and visible.
Search and Filter Functionality
Search Tutors by Subject and Price

Confirm users can search for tutors by entering subject keywords.
Ensure that the search results match the entered subject keywords.

#### Admin Dashboard

Manage Employment Records

Ensure admins can view all employment records of tutors.
Verify that admins can add new employment records.
Check that admins can update existing employment records.
Confirm that admins can delete employment records and that all changes are logged.

#### General

Site Navigation

Verify that navigation across the platform is smooth and intuitive.
Ensure that all links and buttons are functional and lead to the correct pages.

User Interface

Check that the UI is responsive and displays correctly across different devices (desktop, tablet, mobile).
Ensure that all text is legible, and elements are aligned and consistent across the platform.

Performance

Confirm that the platform loads quickly and performs well under normal user load.
Test the platform’s behavior under peak load conditions (if possible).

Security

Ensure that user data is securely transmitted (e.g., via HTTPS).
Verify that sensitive data (like passwords) is encrypted.
Check for any vulnerabilities that could lead to unauthorized access.

## Project Management

### Use a recognised project management methodology

Our team decided to use the Agile Methodology with a particular emphasis on Scrum instead of Kanban as it made sense approaching the product development from a fixed time frame view instead of ongoing.
Sprint Planning:
We adapted the ceremony of sprint planning into the first section of our assignment. Where we undertook the discussion and creation of user stories. As this project was only a couple of weeks in duration it was important to focus on the quality of the stories and viewing every few days as a new sprint. Until we had completed the release.

Daily Standups:
We undertook daily standups where we would check-in as a team to discuss.
What did I do yesterday?
What are we doing today?
Any roadblocks? Was assistance needed and should we take it offline to discuss so that the standup wasn’t made excessively long in duration. We also participated in a larger daily standup with our Product Owner (Matt) reporting on the above each work day.

Sprint Retrospective:
We enacted a sprint retro after completing part a of assignment in an effort to review what had worked and what could be improved upon.

### Use a recognised task delegation methodology

As part of the scrum approach in the agile methodology we delegated tasks via the following:

User Stories:
Divided our work into user stories as part of our PI planning. These were small bite size feature deliverables. Which would enable us to produce increments of work. These stories were sorted and organized in the backlog for “each sprint”. This included undertaking a fist of five activity.

Task Assignment:
In our team in an effort to implement the spirit of Scrum wholly our members volunteered for tasks based on their expertise and workload. We are trying to approach the project as a self-organizing team where we encourage and support ownership and accountability.
Task Tracking:
Our board was shared amongst the team and due to our clear daily standups where we “spoke” to the board. We are able to effectively communicate and overcome any issues or roadblocks before they arise. It enabled the team to visualize and approach the project with clear accountability and an understanding of components and features that each team member was producing.

## List of Libraries used

### Bcrypt

Primarly utilised to complete hashin and salting of passwords which are entered in by users to create their account and reset their password. This way, the password is stored securely within the applications database.

Hashin converts the password from plaintext to a hashed string which is than stored within the database. This can only be completed one way and the password cannot be reverse engineered to retrieve the password.

Salting refers to a process which occurs prior to hashing the password. A unique property is added to ensure that the password remains unique within the database even in instances where passwords of users may be reused.

### Cors

Cors adds a layer of protection and securely allows individuals to access the application from ips which are not of the deployer. It works by permitting and specifying which domains can and cannot access the application. This is done by manipulating the headers of the request to ensure the right domains are accessing the resource.

### Jsonwebtoken

Is a libery which allows users to login and access specific resources within the application. This is done through two different process which include token generation and token verification. When a registered user logs into the application, Jsonwebtoken will be used to create a token which has the users information embedded in the token. Following this process, the token is verified each time they try to access a restricted route. The token is stored within the authorisation request in the headers and when this is completed, the api will scan this token to see if it meets the criteria set by the developer and the users information.

### Mongoose

This allows schemas to be created and utilised to ensure models of stored within the applications databse are done so in a convient and efficient manner. It allows for seemless communication between MongoDB databases and node.js application, allowed for models in databases to adhere to a strict guideline and defined structure. It also allows for middleware to be implemented within applications to run functions prior to operations within an API being executed. It also allows for complex and unique queries to be utilised to increase the efficiency of searches within the application.

### Nodemailer

Is a libary which allows emails to be sent directly from node applications. It allows customisable email content to be sent to multiple users and is commonly utilised to assist in the delivery of recover account emails to users who are wishing to reset their passwords. In the context of our application, this is exactly the context it is being utilised in and has been used accross two different routes in the backend.

### Jest/Supertest/Vitest

These are the libraries used to write the automated tests. Vitest is used on the frontend for integration tests allowing complex actions to be tested such as forms being filled in and pages being navigated. Supertest and Jest are used to write tests for the backend endpoints.

### React-router-dom

React-router-dom is used for routing within our SPA. The entire application is wrapped in the BrowserRouter component and routes are defined inside the App component using the Route component. Links to routes are handled using the NavLink component.

### Express

Is the main library utilised to conduct and build the back-end of our application. It is a web application framwork which provides features to build API's and enable developers to build server side code utilising JavaScript. Allows for effiency as the same programming language can be utilised for both ends of the application.

### Dotenv

Allows for the creation and management of environment variables to be utilised within an application. This is extremely important for security purposes, as well as the creation of configuration settings within the application. All variables are stored within a single .env file which is not pushed too Git. This practice enhances flexibility and security within the application.
