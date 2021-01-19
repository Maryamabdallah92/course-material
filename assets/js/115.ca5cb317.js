(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{517:function(e,t,a){"use strict";a.r(t);var o=a(40),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branches"}},[e._v("#")]),e._v(" Git Branches")]),e._v(" "),a("p",[e._v("When you work alone on a project with a Git repository, you usually don't need to worry that much about branches in Git. This is especially true when the repository only exists locally on your own computer, because then the repository only have a single branch (a default branch) called "),a("em",[e._v("master")]),e._v(", and you can more or less ignore the fact that branches exist in Git, even though you do work on the master branch all the time. But most often, this is not the case, and you need to have a basic understanding of how branches work in Git for you to use Git in best way possible. Furthermore, Linus Torvalds designed Git around the usage of branches, so they play a very central role in Git.")]),e._v(" "),a("h2",{attrs:{id:"what-is-a-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-branch"}},[e._v("#")]),e._v(" What is a branch?")]),e._v(" "),a("p",[e._v("We usually use commits to remember earlier versions of the project, but we can also use commits to work on different versions of the project at the same time. This is the case when the repository does not consists of a single chain of commits. An example of that would be a repository consisting of the following commits:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                       Commit 4                HEAD\n                          ↓                      ↓ \nCommit 1      <--      Commit 2      <--      Commit 3\n")])])]),a("p",[e._v("Here we can see that we have two different latest versions of the project represented by Commit 4 and Commit 3 respectively. They both contain features/functionalities the other version does not contain, and we say that we have two branches of the project at Commit 2. To know which version of the project we are working on, Git uses the HEAD pointer, so in this case we can see that we are currently working on the branch with Commit 3 (if we would create a new commit, that commit would point to Commit 3).")]),e._v(" "),a("p",[e._v("So, a "),a("em",[e._v("branch")]),e._v(" is simply a separate line of commits that takes the project in a different direction.")]),e._v(" "),a("p",[e._v("By default, there exists a single branch called "),a("code",[e._v("master")]),e._v(', which usually is used for the "main version" of the project. As long as you don\'t create a new branch and switch to it, you always work on the '),a("code",[e._v("master")]),e._v(" branch.")]),e._v(" "),a("p",[e._v("In practice, a branch is just a pointer that points to the latest commit in that branch. The HEAD pointer in turn points to the branch you are currently working on.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("To simplify, we previous said that HEAD pointed to the latest commit. This is wrong; HEAD points to the branch you are currently working on.")])]),e._v(" "),a("p",[e._v("A repository with a single branch (the "),a("code",[e._v("master")]),e._v(" branch only) and two commits would look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),a("p",[e._v("Then when you create a new commit, the "),a("code",[e._v("master")]),e._v(" branch pointer is changed to point to the newly created commit:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n")])])]),a("h2",{attrs:{id:"creating-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-branches"}},[e._v("#")]),e._v(" Creating branches")]),e._v(" "),a("p",[e._v("It is possible to create a new branch using the command "),a("code",[e._v("git reset --hard XXX")]),e._v(", but Git have better support for working with branches through other commands that are better to use.")]),e._v(" "),a("p",[e._v("The best way to create a new branch is by using the command "),a("code",[e._v("git branch BRANCH_NAME")]),e._v(". This create a new branch with the name "),a("code",[e._v("BRANCH_NAME")]),e._v(" that points to the commit your current branch is pointing to. Note that this command only creates the branch, it does not switch to that branch, so we are still working on the same branch as we were on before.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),a("p",[e._v("If your repository looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),a("p",[e._v("And you then run the command "),a("code",[e._v("git branch test")]),e._v(", then your repository would look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                      TEST BRANCH\n")])])])]),e._v(" "),a("h2",{attrs:{id:"switching-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-branches"}},[e._v("#")]),e._v(" Switching branches")]),e._v(" "),a("p",[e._v("To change which branch you are working on, you use the command "),a("code",[e._v("git checkout BRANCH_NAME")]),e._v(". This will change the HEAD pointer to point to the branch "),a("code",[e._v("BRANCH_NAME")]),e._v(", and it will also change all the source files in the project to the way they looked like in the commit that branch pointer points to. Do not use this command if you have changes made to the source code in your project you haven't committed yet.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),a("p",[e._v("Imagine our repository looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                      TEST BRANCH\n")])])]),a("p",[e._v("We are currently working on the "),a("code",[e._v("master")]),e._v(" branch. To switch to the test branch, we run the command "),a("code",[e._v("git checkout test")]),e._v(". Then our repository will look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                      TEST BRANCH\n                          ↑\n                        HEAD\n")])])]),a("p",[e._v("If we then make changes to the source files and create a new commit, it would look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n                                                 ↑\n                                               HEAD\n")])])]),a("p",[e._v("If you now run the command "),a("code",[e._v("git checkout master")]),e._v(", it would look like this (all the source files will be changed to what they contained in Commit 2):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n")])])]),a("p",[e._v("And if you now make changes to the source files and create a new commit, it would look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\n                       Commit 4\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n")])])])]),e._v(" "),a("h2",{attrs:{id:"why-use-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-branches"}},[e._v("#")]),e._v(" Why use branches?")]),e._v(" "),a("p",[e._v("So, a branch is basically a sequence of a commits that takes the project in another direction. But why would you want that? In the end, you only want to have a single version of the project that contains all the features/functionalities, and not 5 different versions that each contains a fifth of all the functionalities, right?")]),e._v(" "),a("p",[e._v("When you have two branches, you can merge the work you have done (the commits) in one of them into the other. You do that by creating a special type of commit called a "),a("em",[e._v("merge commit")]),e._v(". A merge commit is new commit that points to the latest commit in each of the two branches, so this new commit will contain the features/functionality from both branches.")]),e._v(" "),a("p",[e._v("When you have created a merge commit, the commits in a repository can look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\n                       Commit 4      <--      Commit 5\n                          ↓                      ↓ \nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n")])])]),a("p",[e._v("Commit 5 will now contain the features/functionality from both Commit 4 and Commit 3, and can now be seen as the single latest version of the project. Creating merge commits can be a little bit complicated (you can have conflicts (contradictive changes to the source code in the two different branches)) that you need to handle, but let's go through how to merge branches later. For now, it's enough for you to know that you can do it.")]),e._v(" "),a("p",[e._v("But why use branches at all if we don't want to have them in the end? Turns out that branches are really useful during development. Especially when multiple programmers work on the same project at the same time, because a programmer don't want to be disturbed by commits from other programmers that might interfere with the programmer's own work before it is finished. So each programmer can create her own branch which the other programmers won't interfere with, and when the programmer is done with all of her work on that branch, she can share her work with the other programmers by merging it with the "),a("code",[e._v("master")]),e._v(" branch. It can for example look like this (let's ignore the HEAD pointer, because it is not important in this example):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                       Commit 3      <--      Commit 6      <--      ALICE BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      MASTER BRANCH\n                          ↑\n                       Commit 4      <--      Commit 5      <--      BOB BRANCH\n")])])]),a("p",[e._v("When Alice is done with her work, she merges her branch with the master branch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                       Commit 3      <--      Commit 6\n                          ↓                      ↑\nCommit 1      <--      Commit 2      <--      Commit 7      <--      MASTER BRANCH (now also containing Alice's work)\n                          ↑\n                       Commit 4      <--      Commit 5      <--      BOB BRANCH\n")])])]),a("p",[e._v("And when Bob is done with his work, he merges his work with the master branch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                       Commit 3      <--      Commit 6\n                          ↓                      ↑\nCommit 1      <--      Commit 2      <--      Commit 7      <--      Commit 8      <--      MASTER BRANCH (now containing both Alice's work and Bob's work)\n                          ↑                                             |\n                       Commit 4      <--      Commit 5      <-----------┙\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("How multiple programmers sitting at different computers can work on the same repository (to synch commits) is not something we cover in this lecture, but Git has special support for this which we will cover in next lecture.")])]),e._v(" "),a("p",[e._v("There are more use-cases for branches than just \"one branch per programmer\". For example, if you create a library, then you might want to have one branch for each major version of the library you have, so you conveniently can switch between them. This way, it is easy to fix bugs/security vulnerabilities in older versions of the library, and to add new features in the latest version of the library. Or maybe you just want to test something new which you don't know if you'll have any use of. Then you can do that work in a new branch, and if you later discover that it didn't play out well, you go back and work as usual on the "),a("code",[e._v("master")]),e._v(" branch or your own branch.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),a("p",[e._v("A designer was given the task to improve the layout on a website (change the placement of menus, change the colors used, etc.). It was a very big website containing hundreds of webpages, so it took her 2 weeks to change everything. She did all her work in her own branch, so during these two weeks, the other programmers working on the same project was not disturbed by her work: they did never see some pages with the old layout and some pages in the new layout, they saw all pages in the old layout until she after 2 weeks merged her branch with the master branch, at which point they saw all pages with the new layout.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),a("p",[e._v("A web developer was given the task to add two major functionalities to an existing website:")]),e._v(" "),a("ul",[a("li",[e._v("Users should be able to send an email with feedback to the author of an article on the website through a form on the website.")]),e._v(" "),a("li",[e._v("Users should be able to write comments on an article on the website after having created and logged into an account.")])]),e._v(" "),a("p",[e._v("The web developer created a new branch and started to implement the first functionality (emailing feedback) in it. When she was half done with this (had created 5 commits on the new branch), the owner of the website contacted her and told her that he needed to have the comment and login functionality ASAP, so she needed to stop working on the first functionality, and instead start to implement the second functionality. To do that, she simply:")]),e._v(" "),a("ol",[a("li",[e._v("Switched back to the master branch (with no traces of her half finished first functionality).")]),e._v(" "),a("li",[e._v("Created a new branch.")]),e._v(" "),a("li",[e._v("Implemented the comment and login functionality (12 commits) in the new branch.")]),e._v(" "),a("li",[e._v("Merged the new branch with the master branch.")])]),e._v(" "),a("p",[e._v("Then she reported back to the website owner that the comment and login functionality now was implemented in the master branch. Then she checked out the first branch she created and continued with the implementation of the first functionality.")])]),e._v(" "),a("h2",{attrs:{id:"viewing-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-branches"}},[e._v("#")]),e._v(" Viewing branches")]),e._v(" "),a("p",[e._v("If you forget which branch you are currently working on, you can use the command "),a("code",[e._v("git branch")]),e._v(". Then Git will show you which branches that exist in the repository and which one of these you are currently working on (which branch HEAD points to).")]),e._v(" "),a("h2",{attrs:{id:"merging-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merging-branches"}},[e._v("#")]),e._v(" Merging branches")]),e._v(" "),a("p",[e._v("So, let's take a closer look at how we can merge the commits in one branch into another branch. This can be really easy, or a bit complicated, depending on which commits the branches contain.")]),e._v(" "),a("h3",{attrs:{id:"fast-forward-merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-forward-merging"}},[e._v("#")]),e._v(" Fast-Forward merging")]),e._v(" "),a("p",[e._v("Imagine our repository looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n                                                                        ↑\n                                                                      HEAD\n")])])]),a("p",[e._v("That, is we have created a new branch called "),a("code",[e._v("alice")]),e._v(", implemented a new feature on that branch in Commit 3 and Commit 4, and now we want to merge that into the "),a("code",[e._v("master")]),e._v(" branch. To make that happen, we first need to be working on the branch we want to merge the work into, so we start by running the command "),a("code",[e._v("git checkout master")]),e._v(", so our repository looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n")])])]),a("p",[e._v("Then we use the command "),a("code",[e._v("git merge alice")]),e._v(", to tell Git to take the commits in the "),a("code",[e._v("alice")]),e._v(" branch and merge them into the current branch (the "),a("code",[e._v("master")]),e._v(" branch). Since the "),a("code",[e._v("master")]),e._v(" branch doesn't have any commit the "),a("code",[e._v("alice")]),e._v(" branch doesn't have, Git uses a merge strategy here called fast-forward. In this case Git doesn't need to create an extra commit to merge the two branches, but will instead simply move the "),a("code",[e._v("master")]),e._v(" branch pointer to the "),a("code",[e._v("alice")]),e._v(" branch pointer, so the repository will look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                                                                      HEAD\n                                                                        ↓\n                                                                  MASTER BRANCH\n                                                                        ↓\nCommit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n")])])]),a("p",[e._v("This is the simplest type of merging, but it only works as long as extra work (new commits) exists in only one of the branches, which is not always the case.")]),e._v(" "),a("h3",{attrs:{id:"three-way-merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#three-way-merging"}},[e._v("#")]),e._v(" Three-way merging")]),e._v(" "),a("p",[e._v("Often when you merge branches, both of them contain commits the other one does not contain. Then the fast-forward merging strategy can't be used, and git uses a merge strategy called three-way merging.")]),e._v(" "),a("h4",{attrs:{id:"the-simple-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-simple-case"}},[e._v("#")]),e._v(" The simple case")]),e._v(" "),a("p",[e._v("If you have not done contradictive changes to the source code in the two branches you are merging, creating the merge commit is really easy. Imagine our repository looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\n                       Commit 4\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n")])])]),a("p",[e._v("And that we in Commit 4 created a new file called "),a("code",[e._v("master-file.txt")]),e._v(", and in Commit 3 created a new file called "),a("code",[e._v("test-file.txt")]),e._v(". The only sensible outcome of merging the two branches is to end up with both of the files, and Git understands that.")]),e._v(" "),a("p",[e._v("So, to merge the "),a("code",[e._v("test")]),e._v(" branch into the "),a("code",[e._v("master")]),e._v(" branch we run the command "),a("code",[e._v("git merge test")]),e._v(". When we do that, Git will create a new merge commit (Commit 5) that contains both "),a("code",[e._v("master-file.txt")]),e._v(" and "),a("code",[e._v("test-file.txt")]),e._v(", and our repository will look like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\n                       Commit 4      <--      Commit 5\n                          ↓                      ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n")])])]),a("p",[e._v("Simple as that!")]),e._v(" "),a("p",[e._v("Git is also quite smart. If two different branches modifies the same file, but different parts of it, Git will figure out what makes most sense to end up with when you merge them, and use that.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),a("p",[e._v("If the original file looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("a = 1\nb = 2\nsum = a + b\nprint(sum)\n")])])]),a("p",[e._v("And one branch says that it should look like this (second line changed):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("a = 1\nb = 20\nsum = a + b\nprint(sum)\n")])])]),a("p",[e._v("And another branch says that it should look like this (last line changed):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('a = 1\nb = 2\nsum = a + b\nprint("The sum is: "+sum)\n')])])]),a("p",[e._v("Then when you merge these two branches Git automatically figures out that you want to end up with this (the second and last line changed):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('a = 1\nb = 20\nsum = a + b\nprint("The sum is: "+sum)\n')])])])]),e._v(" "),a("h4",{attrs:{id:"the-harder-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-harder-case"}},[e._v("#")]),e._v(" The harder case")]),e._v(" "),a("p",[e._v("If you have done contradictive changes to the source code in the two branches you are merging, then Git won't know what you want to end up with, so it let you know that a merge conflict exists that you need to handle manually (you need to tell Git what the result of the merge should be).")]),e._v(" "),a("p",[e._v("For example, if the original file looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x = 1\ny = 2\nprint(x*y)\n")])])]),a("p",[e._v("And one branch says that it should look like this (first line changed):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x = 10\ny = 2\nprint(x*y)\n")])])]),a("p",[e._v("And another branch says that it should look like this (first line changed):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x = 5\ny = 2\nprint(x*y)\n")])])]),a("p",[e._v("Git won't be able to figure out what the outcome of the merge should be, so when you try to merge the two branches by running the command "),a("code",[e._v("git merge BRANCH_NAME")]),e._v(", the merge commit will not be created. Instead, Git will print an error message saying that the file contains a merge conflict, and it will change the content of the file to this (you can see the changes each branch want to make to the file):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----------------\nx = 10\n-----------------\nx = 5\n-----------------\ny = 2\nprint(x*y)\n")])])]),a("p",[e._v("You need to resolve this conflict manually by:")]),e._v(" "),a("ol",[a("li",[e._v("Change the content to the file to what you want it be.")]),e._v(" "),a("li",[e._v("Save the file.")]),e._v(" "),a("li",[e._v("Run the command "),a("code",[e._v("git commit")]),e._v(" (which will create the merge commit).")])]),e._v(" "),a("p",[e._v("In this case, maybe the average value of 5 and 10 is what makes sense to use, so you would change the content of the file to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x = 7.5\ny = 2\nprint(x*y)\n")])])]),a("p",[e._v("And then create the next commit.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("When you merge two branches you might end up with multiple merge conflicts (in multiple files, and even multiple conflicts within the same file). You should resolve all of them by changing the code and save the files before you create the next commit.")])]),e._v(" "),a("h3",{attrs:{id:"rebasing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebasing"}},[e._v("#")]),e._v(" Rebasing")]),e._v(" "),a("p",[e._v("We will not cover it in this lecture, but instead of creating merge commits, you can do something called "),a("em",[e._v("rebasing")]),e._v(". Instead of creating a merge commit, this will rather copy the commits from one branch to other. The main benefit with this solution is that the history of a branch becomes much simpler: it will consist of a linear sequence of commits only, making it much easier to read. When you create merge commits, the history of a branch will not be a linear sequence, but rather a tree of commits, which can be a bit hard to interpret.")]),e._v(" "),a("h2",{attrs:{id:"practising"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practising"}},[e._v("#")]),e._v(" Practising")]),e._v(" "),a("p",[e._v("Play around with "),a("a",{attrs:{href:"http://git-school.github.io/visualizing-git/#free",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visualizing Git"),a("OutboundLink")],1),e._v(" to learn how branches work. With this tool, you never use "),a("code",[e._v("git add")]),e._v("; just use "),a("code",[e._v('git commit -m "Message"')]),e._v(" directly to create a new commit, and then you can also use the commands "),a("code",[e._v("git branch BRANCH_NAME")]),e._v(", "),a("code",[e._v("git checkout BRANCH_NAME")]),e._v(" and "),a("code",[e._v("git merge BRNACH_NAME")]),e._v(" as expected (but you will never end up with merge conflicts, so you can't practice on resolving them using this tool).")]),e._v(" "),a("p",[e._v("If you want some more practice, you can also try "),a("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Git Branching"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"recommended-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pro Git"),a("OutboundLink")],1),e._v(" by "),a("em",[e._v("Scott Chacon")]),e._v(" and "),a("em",[e._v("Ben Straub")]),e._v(". It is available for free online in multiple different formats.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 3: Git Branching"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("You can skip the parts about using a remote repository ("),a("code",[e._v("git clone")]),e._v(", "),a("code",[e._v("git pull")]),e._v(", "),a("code",[e._v("git push")]),e._v(", ...)")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);