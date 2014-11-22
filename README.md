# Rock, Paper, Scissors

A sample RPS implementation using Angular, Bootstrap and HTML5 boilerplate.


## Setup

1. Clone the repo and `cd` into the folder
2. `npm install` its dependencies
3. `grunt` && `grunt serve`
4. ????
5. Profit!


## Considerations

![not proud of it](http://s2.favim.com/orig/36/disgusting-moe-proud-simpsons-the-simpsons-Favim.com-291281.gif)

This was made-for and tested with Google's Chrome browser. I would not trust anything other than `v38.0.2125.122`, and strangers offering free candy. Never trust those.

The `play` view was originally intended to be used with a [dropdown button] \([see ref][image-preview]) but ended up going for a dropdown menu due to some problems with `href`s. 
**Note** Alternatives such as [Angular-Bootstrap] do exist, so my guess is I'll be revisiting this option in the near future.

**Important**: the second player's moves are currently hardcoded, I'll be revisiting this as I add the logic to store player + move for each player on the main service helper.

## Libraries and dependencies

Uses the excellent [Angular generator][generator-angular], made with Yeoman. 

Uses the amazing [angular-dropdowns](https://github.com/jseppi/angular-dropdowns) dependency by @jseppi.

For more info and licensing, see the `about` page in-app.


### TODO

- [ ] Write them tests\*
- [ ] Sanitize name input (main screen)
- [ ] Add validations for missing player names
- [ ] Add validations for routes
- [ ] Perhaps switch to a Factory model, instead of using Services? (Somewhat nice to have)


\* I played around with Angular and Karma in a particularly flew-ish afternoon (as in, I had this horrible cold with fever and whatnot), so there's that.

[dropdown button]: http://getbootstrap.com/components/#btn-dropdowns
[image-preview]: https://www.dropbox.com/s/erve0y8uy45hm16/Screenshot%202014-11-21%2001.43.04.png?dl=0
[generator-angular]: https://github.com/yeoman/generator-angular 
[Angular-Bootstrap]: http://angular-ui.github.io/bootstrap/#/getting_started
