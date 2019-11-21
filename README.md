

# **Eatple Website**

[![build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://bitbucket.org/xengiennering/sn3d-project) [![platform](https://img.shields.io/badge/platform-mac-lightgrey.svg)]()

### **Used Editor**

- [VS Code for mac](https://code.visualstudio.com/)

# **Features**

---

> This README.md uses the [Markdown](http://daringfireball.net/projects/markdown/) syntax. The [MarkDownDemo tutorial](https://bitbucket.org/tutorials/markdowndemo) shows how various elements are rendered. The [Bitbucketdocumentation](https://confluence.atlassian.com/bitbucket/readme-content-221449772.html) has more information about using a README.md.

# **Install & Compile**

---

#### **_Step 1._** Clone git repository.

```
$ git clone https://${UserName}@bitbucket.org/eatplus/eat-website.git
```

#### **_Step 2._** NPM Install.

```
$ npm install
```

#### **_Step 3._** Web Server Starting.

```
$ npm start
```

#### **_Step 4._** Check Local Website.

http://localhost:3000

# **Available Scripts**

In the project directory, you can run:

```
$ npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```
$ npm test
```
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
$ npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
$ npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# **Docker Scripts**

### `$ docker build -t benkim07120/eatplus .`

build docker images

### `$ docker push benkim07120/eatplus`

push docker image to on cloud server

### `$ sh docker_build.sh`
this script file for docker build and docker push to remote server(docker hub)


# **Reference**

## **Library**
* # React 
  - ### [**ESLint**](https://eslint.org/)
  - ### [**React Hook**](https://ko.reactjs.org/docs/hooks-reference.html)
  - ### [**Prettier**](https://prettier.io/)

* # NPM
  - ### [**React Spring**](https://www.react-spring.io/)
  - ### [**Styled Components**](https://www.styled-components.com/)
  - ### [**React Animated Number**](https://www.npmjs.com/package/react-animated-number)
  - ### [**Stickyroll**](https://github.com/stickyroll/react-stickyroll)

## **Documents**
  * ## [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
  * ## [Docker CLI Document](https://docs.docker.com/engine/reference/run/)

# To-Do List 

- [x] Not Yet.

# BUG Reports

- [x] Not Founded;

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

