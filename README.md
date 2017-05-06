# TwitterNeuralNet

## Introduction
This is a Node service, which runs the Python script included at the root of the project (where the classifications take place). 


## Running
You must have Node, NPM and Python 2.7 installed on your system to run this application. 

- 1: **Running**

Clone this repo through the command line:

`$ git clone https://github.com/omer921/TwitterNeuralNet.git TwitterNeuralNet && cd TwitterNeuralNet`

- 2: **install npm modules** 

For the site to run, the modules need to be installed (they are not provided on the git repo). Run:

`$ npm install`

- 3: **Start Server**

Run the server locally:

`$ npm start`

_Note: If you want to run with a hot reloader such as nodemon, run:_

`$ nodemon ./bin/www`

- 4: **Thats it!**

The command line will let you know what address your site is now loading on. Simply navigate there and use the website interface. 

## Usage
Usage is straight forward, with the exception that the first time being used could potentially create a `504: Timeout` error. This is caused because during the initial run, the python script trains the models if they are not available (we do not include them in the git repo). After this, depending on your machine, classification will only take around 10 seconds. You should see the models created in the root directory after the initial run. 

Since the script is run asynchronously, it will continue and complete despite the timeout exception. 
