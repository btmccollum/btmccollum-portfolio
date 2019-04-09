---
layout: post
title:      "Creating Penda - Learning Lessons the Hard Way"
date:       2018-12-07 02:53:44 +0000
permalink:  creating_penda_-_learning_lessons_the_hard_way
---


So before I get to my project, I want to rant just a bit about Rails and a very important lesson that came out of this. My apolofies for the wall of text! I have loved every minute of Rails so far, the amount of abstraction performed and 'magic' it provides you is simply amazing. When you have to spend less time writing out every minute detail it really frees you up to get more creative and spend that time flexing your creative muscle. That being said, and I can't stress this enough, you need to KNOW YOUR SCOPE. Typically I have things very planned out, but going into this project, there were so many ideas and so many things that I wanted to do, and it certainly got the better of me time wise. 

I lost many days up front tinkering with unnecessary gems, or trying to make popular gems work in ways that were perhaps too complex for this particular project. On top of that, I found myself often getting distracted by the odd bit of CSS, optimaztion I could make, or otherwise. If you look around, you'll see a lot of articles out there about scope creep, what it is, and why it is a baaaad thing. Granted this is a smaller scale application, but it still applies. While I have learned a lot in completing this project, the biggest lessons I'm taking away from this are: 1) TDD is crucial, especially since my apps will (or should) only get larger and more complex from here on out, 2) I need to spend more time upfront planning what I want, what it should do, what it shoud look like and more importantly, 3) define what is needed for MVP and take it from there (don't throw the kitchen sink at it. 

Whew, now that probably should have been saved for a conclusion but I wanted to get that out there first.  A lesson learned the hard way. Now to talk about my Rails project, [Penda](https://github.com/btmccollum/penda-app)! Penda is designed to be a time tracking application geared towards project management, primarily in order to provide more transparency in time management and billing hours (yay being client friendly!) to clients while also allowing both ends to connect. However, it doesn't just have to be used for professional projects- a user can even create an account and just use it as a project based time tracker! I put a bit more into the ideation phase, knowing that this project would also be used for the upcoming JavaScript section. Many of my initial ideas and concepts are things that require JavaScript, so it was interesting finding Ruby/Rails work arounds in the meantime.

There were definitely a few challenges in this process. Upfront, authentication was probably where I spent the most time initially. I wanted to try and use Devise for this project but ultimately could not get it to work quite the way I wanted. Devise is fine and dandy when you have a singular user model, and works quite nicely for that as well, but I ran into difficulties getting Devise to work properly with OAuth when dealing with several different types of Users in a single-table inheritance (STI) setup. Ideally I wanted a set up with separate Business and Client users and different signup/login experiences for them. This is definitely something I'd like to revisit and figure out, but for the sake of time and my own sanity, I opted to instead create my own authentication process for users, which I'm quite happy with. Sometimes you just have to realize it's time to move on and take a different approach! 

Most of the challenges I had throughout the design process were really just self-inflicted. I found myself often going off in different directions (hence the reason for my opening paragraph) to make small tweaks, stylize something when it really wansn't important at that point, etc.. It's important to stay on track and not let yourself get distracted by all the other things you could be doing in your project. One of the many future improvements I do have is making my controllers a little bit more skinny, and creating more helpers to thin out my views a bit. I dont quite like how much of a mix I have between Ruby and HTML in my erb templates, something I hope I can refactor further. 

Another change I made in my standard process was going about finding a better way to handle branches. For this project I did want to try out a different structure for github and branching. I wanted to go ahead and share those for anyone else who hasn't spent as much time looking at branching and some of the standards out there: [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/) and [Git/GitHub branching standards & conventions](https://gist.github.com/digitaljhelms/4287848) - check them out if you have some time! 

I'm sure there are many things not coming to mind right now, I'll be sure to update if they come back up. Otherwise I'm excited to continue on this journey and get a chance to revisit these projects once I have learned more. The idea of Penda was largely created with JavaScript in mind, so more to come soon! 