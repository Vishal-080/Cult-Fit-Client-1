# Cult.Fit Clone

CultFit is a health and fitness company offering digital and offline experiences across fitness, nutrition, and mental well-being. With the aim to make fitness fun and easy, CultFit gives workouts a whole new meaning with a range of trainer-led, online group workout classes.

In this project we have tried to make a look alike clone of CultFit. With our efforts and the technology stack, that we have learned so far in the masai school, we were able to clone the front end with high precision and quality. This Project is build as part of Masai School Curriculum project and completed in duration of 6 days.

## Features

- Book Workout Session By Categories
- Choose Workout Center By Location
- Free Workout Trials 
- Sign in / Sign up with email and Google
- Responsive Pages

## Tech Stack

#### **Frontend**
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Reactjs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Thunks](https://redux.js.org/usage/writing-logic-thunks)

#### **Backend**

- [Mongodb](https://www.mongodb.com/)
- [Expressjs](https://expressjs.com/)
- [Nodejs](https://nodejs.org/en/)

##### **Fetch data**

- [Axios](https://www.npmjs.com/package/axios)

#### **Styles**

- [Style-Components](https://styled-components.com/)

#### **Encryptation and Password Privacy**

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Google oAuth](https://developers.google.com/identity/protocols/oauth2)
- [uuid](https://www.npmjs.com/package/uuid)
- [Json Web Token](https://jwt.io/)

## _Getting Started_

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

Follow the following steps to get development environment running.

1. Clone 'CultFit' repository from GitHub

   ```bash
   git clone https://github.com/pratikjadhav080/Cult-Fit-Client
   ```

   _or using ssh_

   ```bash
   git clone git@github.com:pratikjadhav080/Cult-Fit-Client
   ```

1. Install node modules

- Client

  ```bash
  cd client
  ```

  ```bash
  npm install

  or

  npm i
  ```

- Server

```bash
cd server
```

```bash
npm install

or

npm i
```

- Need to Add .env File with Relevent Environment Variable

### **_Run the project_**

- open two terminal one for client and one for Server after that run this command

  - client

  ```bash
  npm start
  ```

  - server

  ```bash
  npm run server
  ```
  
    ## _Blog of This Project(Know more about the project)_

  [Medium](https://medium.com/@NagendraPatil/building-cult-fit-clone-in-6-days-c6a72ad731a0)

<br/>

## **_Snapshots of the Project_**

- LANDING PAGE

   On the home page, users can see cool animation effects and gifs which are self-explanatory.
   All of this is done using custom CSS and Styled Component.

  <br/>
  
   <img align="center" src="https://miro.medium.com/max/700/1*5gTe7bzsOyeRn5vJUWIJIw.png" alt="Landing page"/>

  <br/>

- CULT PAGE

   Here, Users can see how many free trials are left in their account which is updated dynamically
   once booked (state management done using Redux) and other offers. Also, they can select the genres of exercise to move ahead.
   <br/>
   <br/>
<img align="center" src="https://miro.medium.com/max/700/1*EA6jvOhp8UlC-l8_tZ7CVQ.png" alt="Cult Page"/>

<br/>

- LOGIN-IN, SIGN-UP, and REGISTER
      
   On clicking log in, a modal will open up where the user can choose the appropriate method to proceed further.
   
   <br/>
   <br/>
<img align="center" src="https://miro.medium.com/max/500/1*oybB8izfdvZoaML0eEdSww.png" alt="Sign In/Sign Up page"/>

  <br/>
  <br/>

<img src="https://miro.medium.com/max/500/1*bcKW0bvJTwT_F5XiZnafTg.png" alt="Sign In/Sign Up page"/>

  <br/>
  <br/>

<img src="https://miro.medium.com/max/500/1*DSFdhxvLk_3baFziDvTRug.png" alt="Sign In/Sign Up page"/>
    
  <br/>
  <br/>
  
  
- SELECT LOCATION

   Users can select cities from those given in this modal. Once done, respective training locations, their address, 
   and other information will be fetched from DB and is displayed during session booking. 
   
  <br/>
  <br/>

    <img src="https://miro.medium.com/max/700/1*Z3Y1Z61P0gQhX6I0LXi0Ag.png">

  <br/>
  <br/>
  

- PROFILE
   
   On registering, a user profile will be created as displayed below

   <br/>
   <br/>

    <img src="https://miro.medium.com/max/700/1*P5PfFmHpb5M9mvvYOkeiZg.png"/>

   <br/>
   <br/>

- WORKOUT
   
   On clicking type of workout, the user will be redirected to that page. Here, I clicked on yoga so the following page
   will be displayed which contains the details of that particular workout. From here user can book a slot

   <br/>
   <br/>

   <img src = "https://miro.medium.com/max/700/1*eaUCZavdd8ynSBUeI7oxqQ.png" />

   <br/>
   <br/>
   
- SELECT CENTER
   
   On clicking “book class” on the workout page user will be asked to choose a preferred center next to which details of 
   the center such as address, slot timings, image of the training center will appear. All this data is fetched from the center collection in our DB.

   <br/>
   <br/>

  <img src="https://miro.medium.com/max/700/1*C0nvAZWQ25PoiJT0q4bn_g.png">

   <br/>
   <br/>

- CENTER
   
   Here the user is asked to select the date and time of the slot that is to be booked. After which a modal appears.

   <br/>
   <br/>

  <img src="https://miro.medium.com/max/500/1*9OHDmg08vphJoagxlRrzVg.png">

   <br/>
   <br/>

  <img src="https://miro.medium.com/max/500/1*uLcMyti3NtBYTleG-5kMwA.png">
   <br/>
   <br/>
  
- MAKE PAYMENT
   
   In payment page user can review the price and proceed to payment
   
   <br/>
   <br/>

  <img src="https://miro.medium.com/max/700/1*SiRVDFtmx5fJMb504YSp3w.png">

   <br/>
   <br/>
  
- PAYMENT
   
   The following steps will lead to the payment.
   
   <br/>
   <br/>

   Select the mode of payment
   
   <br/>
  <img src="https://miro.medium.com/max/500/1*iJXgtJGRne3jkMLwEDNr5g.png">

   <br/>
   <br/>
   
   Enter the mobile number to verify Paytm account and then confirm with OTP received.
  
   <br/>
  <img src="https://miro.medium.com/max/500/1*uWUbTeG1CR4u75IgH7Mhzw.png">
   <br/>
  <img src="https://miro.medium.com/max/500/1*yM25a8Hv6QQiTZv7g0yqvw.png">

   <br/>
   <br/>

- PAYMENT SUCCESSFUL
   
   On successful payment, user will be redirected to following pages
   
   <br/>
   <br/>

  <img src="https://miro.medium.com/max/700/1*x3C1xqIE_jNB6wBxmu3DBQ.png">
   
   <br/>
  <img src="https://miro.medium.com/max/700/1*iTx6OPrIbh5pLRQVzygEZg.png">
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

 




# Contributors
- **Pratik Jadhav** [pratikjadhav080](https://github.com/pratikjadhav080)
- **Shihab Shaikh** [shihab-fw11-297](https://github.com/shihab-fw11-297)
- **Nagendra Patil** [NagendraPatil](https://github.com/NagendraPatil)
- **Vishal Rathod** [Vishal-080](https://github.com/Vishal-080)
