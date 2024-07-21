

// create the sign up form view

// create the route and add controllers for get and post 

// form validation, front end, 

// do I need to pass this error object to the frontend. 


// 7.15 

/// adding validation on the front and backend 


// can I ensure that the errors appear in the same place? 

// can I just move my logic into the controller and pass it down that way? 

// 7/16 

// figure out membership status 


// PROBLEM 

// trying to have the user login, however I am at the point where I am comparing passwords, 

// the password that the user entered and the password stored in the database for that user 

// how can I get access to that input field where the user enters a password 

// SO I can properly compare passwords. 




// 7/20 

// how can I access the currently logged in user, within the join club controller and 

// properly update their status 

// how can I get access to the current user 



// **** 


// now I need a way to use conditionals within index 

// that if the users membership status is member only show the author and date 
//      and not the title or text?


// *** before I do that, I need to add the author and date to the model 

// then use those conditionals 







// <% if (user && user.membershipStatus === 'Member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.author %></h3>
//       <p><%= message.date %></p>
//     <% }) %> 
//   <% } else if (user && user.membershipStatus === 'Non-member') { %>
//     <% messages.forEach(message => { %>
//       <h3><%= message.title %></h3>
//       <p><%= message.text %></p>
//     <% }) %> 
//   <% } %>




// <% if (user && user.membershipStatus === 'Non-member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.title %></h3>
//       <p><%= message.text %></p>
//     <% }) %> 
//   <% } else { %>
//     <% messages.forEach(message => { %>
//       <h3><%= message.author %></h3>
//       <p><%= message.date %></p>
//     <% }) %> 
//   <% } %>



// this throws ejs error 

// <% if (user) {%>
//     <h1>WELCOME BACK <%= user.firstName %></h1>
//     <form action="/log_out?_method=DELETE" method="post">
//       <button type="submit">Log out</button>
//     </form>


//   <% } %>

//   <h1>Members Only</h1>
//   <p>Welcome to Members Only</p>


//   <a href="/create_user">Sign up</a>
//   <a href="/user_login">Login</a>
//   <a href="/join_club">Become a member</a>


//   <% if (user) {%>
//     <button>
//       <a href="/new_message">Make a post</a>
//     </button>

//   <% } %>

//   <h3>Messages:</h3>






//   <% if (user && user.membershipStatus === 'Member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.author %></h3>
//       <p><%= message.date %></p>
//     <% }) %> 
//   <% }  %>
    

//   % if (user && user.membershipStatus === 'Non-member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.title %></h3>
//       <p><%= message.text %></p>
//     <% }) %> 
//   <% }  %>
  


//   <% messages.forEach(message => { %>
//     <h3><%= message.title %></h3>
//     <p><%= message.text %></p>
//   <% }) %> 







/// *** 

// <% if (user && user.membershipStatus === 'Member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.author %></h3>
//       <p><%= message.date %></p>
//     <% }) %> 
//   <% } %>

//   <% if (user && user.membershipStatus === 'Non-member') { %> 
//     <% messages.forEach(message => { %>
//       <h3><%= message.title %></h3>
//       <p><%= message.text %></p>
//     <% }) %> 
//   <% } %>

//   <% messages.forEach(message => { %>
//     <h3><%= message.title %></h3>
//     <p><%= message.text %></p>
//   <% }) %> 