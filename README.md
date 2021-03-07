# Peach
An Angular based Instagram clone using Ionic Angular and Firebase. This app is a personal project that is an Instagram like app with with many important features such as following users, private profiles, chatting with mutually followed users, creating image posts, likes, comments, captions, and bookmarks. 

<img width="376" alt="Screen Shot of login screen" src="https://user-images.githubusercontent.com/45472641/110227022-ede61980-7ec1-11eb-920d-69171a6c7164.png"> <img width="375" alt="Screen Shot of home page" src="https://user-images.githubusercontent.com/45472641/110227056-53d2a100-7ec2-11eb-936b-93abdd38df20.png"> <img width="375" alt="Screen Shot of Profile page" src="https://user-images.githubusercontent.com/45472641/110227066-6a78f800-7ec2-11eb-9005-7895e7d0a711.png"> <img width="376" alt="Screen Shot of chat" src="https://user-images.githubusercontent.com/45472641/110227071-749af680-7ec2-11eb-9794-1eb25a8710df.png">

## Demo
You can run through the app here: https://peach-644f1.web.app/ **(Camera does not work on web app)**

## Getting Started
- Before getting started, you will need to have NodeJS installed, found [here](https://nodejs.org/en/).

- After installing NodeJS, install Ionic CLI following instructions from [here](https://ionicframework.com/docs/intro/cli).

- You will also need to have a Google Firebase account for your backend database. In order to setup your own firebase project, follow steps 1 and 2 from [here](https://firebase.google.com/docs/web/setup). 

**Take a note of your firebase config, it will look like this:**

```var firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://myapp-project-123.firebaseio.com",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"
};
```

1. ```git clone``` this project to your desired directory.
2. Go into the "Peach" directory that is created and run ```npm install``` or ```sudo npm install```.
3. Next, create a new file in ```Peach/src/app``` called **firebaseConfig.ts**
4. Paste the following code into the newly created file:

```
export const firebaseConfig = {
    var firebaseConfig = {
      apiKey: "API_KEY",
      authDomain: "PROJECT_ID.firebaseapp.com",
      databaseURL: "https://PROJECT_ID.firebaseio.com",
      projectId: "PROJECT_ID",
      storageBucket: "PROJECT_ID.appspot.com",
      messagingSenderId: "SENDER_ID",
      appId: "APP_ID",
      measurementId: "G-MEASUREMENT_ID",
    };
  };
```

5. Replace the config information with your firebase project's config from earlier.

6. You are done, run ```ionic serve``` inside the Peach directory to run the app locally.

## Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

## Technologies Used

This project was made using:

- [NodeJS](https://nodejs.org/en/about/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [Ionic Angular](https://ionicframework.com/docs/angular/overview) - Ionic Framework is an app developement platform for web developers. Used to created cross platform apps using JavaScript and Apache Cordova.
- [Google Firebase](https://firebase.google.com/docs/functions/get-started) - Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase makes it easy to setup a database without the need for a lot of backend database management.

## License
Copyright 2020 Rutvik Patel ©

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
