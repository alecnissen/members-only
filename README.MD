<h1>About This Project</h1> 
This project was designed to practice user authentication and implement logic that grants different access levels to various members. It provided valuable experience in user authentication using Passport.js. Built with MongoDB, Express.js, Node.js, JavaScript, and EJS. 

<br> 

<h1>What I learned</h1>
    <ul>
    <li>User authentication with Passport.js</li>
<li>Using the MVC pattern to structure the website and separate code</li>
<li>Practice with Express.js middleware to handle requests and asynchronous operations</li>
<li>Form validation and sanitization</li>
<li>Properly storing data using a MongoDB database</li>
<li>Passing data from the backend to the frontend</li>
<li>Using EJS and views to render data and conditionally display content based on membership status or admin privileges</li>

 

 <h1>Build With</h1>

 ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 


<h1>Getting Started</h1>

To get project cloned locally: git clone git@github.com:alecnissen/members-only.git

then ``` npm install ``` which will install all dependency's and packages.

<h1>Features</h1>

- All messages are displayed on the home page for the user to see.

<img src='public/images/members-only.png' style="width:300px">

- Users can login and forms also include validation checks to make sure credentials are valid. It will display incorrect password or email.

<img src="public/images/mo-login.png" style="width:300px">

- Welcome page if user authentication is successful using conditional rendering within EJS view.

<img src="public/images/mo-welcome.png" style="width:300px">

- Users can become a member by answering a question. If successful they will be able to see the author and date of the messages. 

<img src="public/images/mo-join.png" style="width:300px">

- Users Can make posts.

<img src="public/images/mo-posts.png" style="width:300px">

- When users sign up they can choose to become an admin.

<img src="public/images/mo-admin-sign-up.png" style="width:300px">

- If the user is an admin they will have the ability to see all the contents of the messages including title, text, author, date as well as the ability to delete messages.

<img src="public/images/mo-delete.png" style="width:300px">

<h1>Acknowledgments</h1> Thank you to everyone within The Odin Project Curriculum from the bottom of my heart! Thank you to anyone who helped me in the discord channels. I promise to help others throughout this journey. 

<h1>Contact</h1>

Creator: Alec J Nissen 
<br>
E-Mail: alecnissen@yahoo.com
<br>
GitHub: https://github.com/alecnissen/members-only