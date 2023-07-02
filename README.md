# Eveluate news article #

## Project description
This App shows the sentiment analysis of texts from different URL sources with the help of NLP system from [Meaning CLoud API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis) in two parameters: polarity and subjectivity.

## Demo ##
Take a look on [demo](./demo/demo_app.mp4) of app 

## Quick start
* open index.html file in any browser
* choose in internet any article you whant to analyse
* add your url in the input field and press submit button
* for checking webpack configuration open files webpack.dev and webpack.prod 
* for checking connection to API Data use sercer/index.js in Visual Studio Code.

## Usage
APP information is presented within a page with a submission form and a result field with article analysis.
You could use the from with two options:
- Check article analysis using article URL and pressing submit button 
- check validating the form input pressing submit button input without url 

## Development 
- Javascript was developed using ES2015/ES6. Please [check](https://caniuse.com/?search=es6) if your browser supports it.
- Code was developed using Visual Studio Code using "Javascript (ES6) code snippets", "HtmlWebPackPlugin", "WorkboxPlugin", "CleanWebpackPlugin" plugins.
- Project was made with the build tool Webpack
- each JS file was tested with JEST
- offline functioanlity was build on Workbox plugin

## Dependeces ##
dotenv, webpack, webpck-cli, express. For more information about development dependencies see file package.json

## Authors ##
[Elizaveta Tolstikova](github.com/ElizavettaT) 

## Educational Programm
Project was made in the framework of [Front End Nanodegree Programm](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)