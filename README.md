# Angular Express Rollbase Seed

Start an awesome app with AngularJS on the front, Express + Node as the server, and Rollbase for data storage. This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app using [Rollbase](http://www.progress.com/products/rollbase).

The seed contains angular libraries and a bunch of scripts all preconfigured for instant web development gratification. Just clone the repo (or download the zip/tarball) and you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for HTML, and let AngularJS take care of interpolation on the browser side._

## How to use angular-express-rollbase-seed

Clone the angular-express-rollbase-seed repository, run `npm install` to grab the dependencies, and start hacking!

This project is based on the [angular-express-seed](https://github.com/btford/angular-express-seed).

### Running the app

Runs like a typical express app:

    node app.js

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
    routes/
      api.js            --> route for serving JSON. Rollbase is called here. 
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade

## Example App

A simple [blog](https://github.com/progress/angular-rollbase-blog) based on this seed.

## Contact

For more on Rollbase please check out http://www.progress.com/products/rollbase/ <br />
For more on AngularJS please check out http://angularjs.org/ <br />
For more on Express please check out http://expressjs.com/ <br />
For more on Jade please check out http://jade-lang.com/ <br />

## License

MIT
