# Search through contacts
This application provides two features to store contacts and search through them. This application is build using angularjs controllers, services, and filter. Also karma-jasmine nodejs package is used for executing the unit test cases. 

## Getting Started

To get you started you can simply clone the contact-application-angularjs repository and install the dependencies:

### Prerequisites

You need git to clone the contact-application-angularjs repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test contact-application-angularjs. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone contact-application-angularjs

Clone the contact-application-angularjs repository using [git][git]:

```
git clone https://github.com/sunil-jhamnani/contact-application-angularjs.git
cd contact-application-angularjs
```

### Install Dependencies

We use karma-jasmine node module for unit testing in the application. After installing node.js and its package manager (npm) run this command to install all the karma dependencies:

```
npm install
````
We need karma command line interface to execute all the test case. This needs to be install globally so run this command: 
(use sudo as prefix on ubuntu and MAC)

```
npm install karma-cli -g
```

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

This is a small application and need not required any server. Simplest way to run the application is to just launch the index.html file which resides here:
contact-application-angularjs/app/index.html

### Running Unit Tests

* the configuration is found at `karma.conf.js`
* the unit tests are found in the `contact-application-angularjs/test` folder containing the name of the file which will be tested as `…Spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
