(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{515:function(e,t,o){"use strict";o.r(t);var r=o(40),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"git-synching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-synching"}},[e._v("#")]),e._v(" Git Synching")]),e._v(" "),o("p",[e._v("If you need to share your project with other programmers (could be programmers working on the same project, or if you want to release the project as open source), then it is not good enough to only have a local repository on your own computer, because how would the other programmers get access to it? Your own computer is probably not connected to the Internet all the time, and even if it would be, how would you configure who would have access to your different repositories? Therefor it is very common that you have the repository on a server on the Internet instead, where it is available to anyone that should be able to access it 24/7, and it is through this repository multiple programmers can work on the project at the same time.")]),e._v(" "),o("h2",{attrs:{id:"remote-repositories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-repositories"}},[e._v("#")]),e._v(" Remote repositories")]),e._v(" "),o("p",[e._v("We call a repository hosted on a server on the Internet for a "),o("em",[e._v("remote repository")]),e._v(", because it is not a local repository that exists locally on your own computer, but a repository on a remote computer.")]),e._v(" "),o("p",[e._v("There exists two different types of remote repositories: public and private repositories.")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("public repository")]),e._v(" is a repository anyone have read access to. The creator of the repository can give other members write access, so others can contribute to the project. Open Source projects usually use a public repository.")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("private repository")]),e._v(" is a repository that only the creator and invited members have read & write access to. This is usually used by companies working on projects they are selling to customers and don't want to give away for free.")]),e._v(" "),o("p",[e._v("Instead of you setting up your own server to host your repositories, you can use one of the many websites that offer to host your repositories for you:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLab"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.git-tower.com/blog/git-hosting-services-compared/",target:"_blank",rel:"noopener noreferrer"}},[e._v("And some other..."),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("In addition to hosting your repositories, these websites usually offers some other good-to-have features, such as:")]),e._v(" "),o("ul",[o("li",[e._v("Issue tracking (let users report errors they find).")]),e._v(" "),o("li",[e._v("Collaboration (give other users read/write access to your repositories).")]),e._v(" "),o("li",[e._v("Continuos Integration")]),e._v(" "),o("li",[e._v("...")])]),e._v(" "),o("p",[e._v('Which of these websites you should use depends on which features you need and how much you are willing to pay for them, but GitHub is one of the most popular choices for open source projects. A benefit with GitLab is that GitLab itself is open source, so if you later discover that you need to host your repositories on your own server, then you can "easily" setup your own GitLab server and move your repositories over there, and then continue to work as usual.')]),e._v(" "),o("h2",{attrs:{id:"connecting-remote-and-local-repositories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-remote-and-local-repositories"}},[e._v("#")]),e._v(" Connecting remote and local repositories")]),e._v(" "),o("p",[e._v("So, often when you start to work on a new project, you start by creating a new remote repository on one of the previously mentioned websites. Each remote repository get's a URI (Uniform Resource Identifier) that uniquely identifies that repository. That URI is something you can use to "),o("em",[e._v("clone")]),e._v(" (create a copy of) that repository to you own computer using the command "),o("code",[e._v("git clone THE_URI")]),e._v(". This will create a new folder locally on your own computer that contains a copy of the remote repository. The idea is that when you want to add features/fix bugs, then you change the code in the local repository on your own computer and create commits there. Then you can send these commits to the remote repository, where the rest of the world (or only invited users) can take part of them.")]),e._v(" "),o("p",[e._v("Most often, we have just one remote repository, but it is possible to have multiple remote repositories for the same project. We will not get into the details of that here, but a consequence of that is that each remote repository also gets a name we can use to refer to that specific remote repository. When you use "),o("code",[e._v("git clone THE_URI")]),e._v(", the remote repository will get the name "),o("em",[e._v("origin")]),e._v(" (we say that the origin of our local repository is the remote repository we cloned it from), so in our local repository the name "),o("code",[e._v("origin")]),e._v(" will refer to the remote repository (the name of the remote repository is something we will use later).")]),e._v(" "),o("p",[e._v("When a local repository is connected to a remote repository, it has extra pointers to keep track of the branches in the remote repository. For example, imagine that the remote repository looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),o("p",[e._v("When you clone the remote repository to your own computer, your local repository will look like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("That is, it has a pointer called "),o("code",[e._v("origin/master")]),e._v(" that points to the latest commit on the "),o("code",[e._v("master")]),e._v(" branch you have received from the remote ("),o("code",[e._v("origin")]),e._v(") repository, and a branch called "),o("code",[e._v("master")]),e._v(" that keeps track of the latest commit you have on your own local "),o("code",[e._v("master")]),e._v(" branch. The same is true for all other branches you have in the repository (if you had a branch called "),o("code",[e._v("test")]),e._v(", you would also have a pointer called "),o("code",[e._v("origin/test")]),e._v(", or whatever you call your remote repository).")]),e._v(" "),o("p",[e._v("When you then create a new commit (Commit 3) in your local repository on the "),o("code",[e._v("master")]),e._v(" branch, it looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("That is, creating a new commit on the "),o("code",[e._v("master")]),e._v(" branch does not update the "),o("code",[e._v("origin/master")]),e._v(" pointer, only your own "),o("code",[e._v("master")]),e._v(" pointer. Git uses these extra pointers (one for each branch) to keep track of which commits you have in your local repository that you haven't uploaded to the remote repository yet, and which commits in the remote repository you haven't downloaded yet (that has been uploaded by other programmers).")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[o("code",[e._v("git clone THE_URI")]),e._v(' is not the only way to "connect" two repositories. If you already have a local repository that you want to share with the world, then you can create an empty remote repository and then "connect" to it from your local repository using the command '),o("code",[e._v("git remote add")]),e._v(" instead of the command "),o("code",[e._v("git clone")]),e._v(", but we will not cover the details here, but do be aware of the possibility.")])]),e._v(" "),o("h2",{attrs:{id:"synching-commits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synching-commits"}},[e._v("#")]),e._v(" Synching commits")]),e._v(" "),o("p",[e._v("So the idea is that we have one remote repository, and each programmer that wants to work on the project clones the remote repository to her own computer using the "),o("code",[e._v("git clone THE_URI")]),e._v(" command, and then each programmer gets their own local repository where they can modify the source code on their own computers and create commits that only exists in their own local repository. When a programmer wants the other programmers that work on the project to take part of her commits, she uploads her local commits to the remote repository, and then the other programmers can download her commits from there.")]),e._v(" "),o("h3",{attrs:{id:"downloading-commits-pulling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#downloading-commits-pulling"}},[e._v("#")]),e._v(" Downloading commits (pulling)")]),e._v(" "),o("p",[e._v("So imagine that you clone a remote repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),o("p",[e._v("Then you get a local repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("Then someone uploads a new commit (Commit 3) to the "),o("code",[e._v("master")]),e._v(" branch on the remote repository, so the remote repository looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n")])])]),o("p",[e._v("If you want to download Commit 3 to your local repository, then you would run the command "),o("code",[e._v("git fetch origin master")]),e._v(". This command tells Git to download the commits from the "),o("code",[e._v("master")]),e._v(" branch in the remote repository that you don't yet have in your local repository. Afterwards, your local repository would look this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("You usually don't just want to download the remote commits, you usually also want the remote commits on the "),o("code",[e._v("master")]),e._v(" branch to be part of your own "),o("code",[e._v("master")]),e._v(" branch, so you usually immediately afterwards merges the branch "),o("code",[e._v("origin/master")]),e._v(" into the "),o("code",[e._v("master")]),e._v(" branch by running the command "),o("code",[e._v("git merge origin/master")]),e._v(", so your local repository becomes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("In this case, the branch "),o("code",[e._v("origin/master")]),e._v(" contained all the commits the branch "),o("code",[e._v("master")]),e._v(" contained, so Git simply used the fast-forward merge strategy, but if you would have created your own local commits on the "),o("code",[e._v("master")]),e._v(" branch, you could here have had a merge conflict that you now would need to resolve manually.")]),e._v(" "),o("p",[e._v("Very often when you use "),o("code",[e._v("git fetch")]),e._v(" you want to use "),o("code",[e._v("git merge")]),e._v(" immediately afterwards. Therefore, Git provides another command for executing these two commands called "),o("code",[e._v("git pull")]),e._v(". So instead of first running "),o("code",[e._v("git fetch origin master")]),e._v(" and then "),o("code",[e._v("git merge origin/master")]),e._v(", we could simply had run "),o("code",[e._v("git pull origin master")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"uploading-commits-pushing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uploading-commits-pushing"}},[e._v("#")]),e._v(" Uploading commits (pushing)")]),e._v(" "),o("p",[e._v("When you have created some commits in your own local repository and want to upload these to the remote repository you use the command "),o("code",[e._v("git push origin BRANCH_NAME")]),e._v(". This is known as "),o("em",[e._v("pushing")]),e._v(". "),o("code",[e._v("origin")]),e._v(" is the name of the remote repository you want to push the commits to. This doesn't have to be "),o("code",[e._v("origin")]),e._v(", but if you only have one remote repository (which most often is the case), you should use "),o("code",[e._v("origin")]),e._v(". "),o("code",[e._v("BRANCH_NAME")]),e._v(" if the name of the branch whose commits you want to push, for example "),o("code",[e._v("master")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("You can only push your own newly created commits to the remote repository if you have all the commits the remote repository contains. If you don't have that, Git will display an error message to you when you try to push. If that's the case, then you first need to download the commits from the remote repository you don't have, resolve any merge conflicts you might get, and then you can push to the remote repository.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),o("p",[e._v("Imagine that you clone a remote repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),o("p",[e._v("Then you get a local repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("Then you create a new commit (Commit 3), so your local repository looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("To send Commit 3 to the remote repository, you run the command "),o("code",[e._v("git push origin master")]),e._v(". If no one else has push any new commits to the remote repository everything will be fine, and the remote repository will become:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n")])])]),o("p",[e._v("And your own local repository will become:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n")])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),o("p",[e._v("Imagine that you clone a remote repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n")])])]),o("p",[e._v("Then you get a local repository looking like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      <--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("Then you create a new commit (Commit 3), so your local repository looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("Before you push your Commit 3 to the remote repository, someone else has pushed a commit to it (Commit 4), so the remote repository is:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 4\n")])])]),o("p",[e._v("If you try to run "),o("code",[e._v("git push origin master")]),e._v(" now, you will get an error, because the remote repository contains a commit (Commit 4) that your local repository does not contain. So before you can push, you need to run "),o("code",[e._v("git pull origin master")]),e._v(", but let's do this by manually running "),o("code",[e._v("git fetch origin master")]),e._v(" followed by "),o("code",[e._v("git merge origin/master")]),e._v(", so you can see what happens.")]),e._v(" "),o("p",[e._v("So first we run "),o("code",[e._v("git fetch origin master")]),e._v(", and our local repository becomes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      <--      Commit 2      <--      Commit 3\n                          ↑\n                       Commit 4\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("Then we run the command "),o("code",[e._v("git merge origin/master")]),e._v(", and a merge commit (Commit 5) is created (if there were conflicts, we needed to resolve those manually before the merge commit is created), and our local repository looks like:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Commit 1      <--      Commit 2      <--      Commit 3                   HEAD\n                          ↑                      ↑                         ↓\n                       Commit 4      <--      Commit 5      <--      MASTER BRANCH\n                          ↑\n                 ORIGIN/MASTER BRANCH\n")])])]),o("p",[e._v("We can then run "),o("code",[e._v("git push origin master")]),e._v(" to upload Commit 3 and Commit 5 to the remote repository, so the remote repository becomes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Commit 1      <--      Commit 2      <--      Commit 3\n                          ↑                      ↑\n                       Commit 4      <--      Commit 5      <--      MASTER BRANCH\n")])])]),o("p",[e._v("And our local repository becomes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Commit 1      <--      Commit 2      <--      Commit 3                   HEAD\n                          ↑                      ↑                         ↓\n                       Commit 4      <--      Commit 5      <--      MASTER BRANCH\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n")])])])]),e._v(" "),o("h2",{attrs:{id:"practising"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#practising"}},[e._v("#")]),e._v(" Practising")]),e._v(" "),o("p",[e._v("Play around with "),o("a",{attrs:{href:"http://git-school.github.io/visualizing-git/#free-remote",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visualizing Git (Free Explore with Remote)"),o("OutboundLink")],1),e._v(" to learn how branches work. With this tool, you never use "),o("code",[e._v("git add")]),e._v("; just use "),o("code",[e._v('git commit -m "Message"')]),e._v(" directly to create a new commit, and then you can also use the commands "),o("code",[e._v("git branch BRANCH_NAME")]),e._v(", "),o("code",[e._v("git checkout BRANCH_NAME")]),e._v(", "),o("code",[e._v("git merge BRANCH_NAME")]),e._v(", "),o("code",[e._v("git pull origin BRANCH_NAME")]),e._v(", "),o("code",[e._v("git push origin BRANCH_NAME")]),e._v(", etc. as expected.")]),e._v(" "),o("p",[e._v("If you want some more practice, you can also try "),o("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Git Branching"),o("OutboundLink")],1),e._v(" (the parts about using a remote repository).")]),e._v(" "),o("h2",{attrs:{id:"recommended-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pro Git"),o("OutboundLink")],1),e._v(" by "),o("em",[e._v("Scott Chacon")]),e._v(" and "),o("em",[e._v("Ben Straub")]),e._v(". It is available for free online in multiple different formats.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 2: Git Basics"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("The parts about using a remote repository ("),o("code",[e._v("git clone")]),e._v(", "),o("code",[e._v("git pull")]),e._v(", "),o("code",[e._v("git push")]),e._v(", ...)")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 3: Git Branching"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("The parts about using a remote repository ("),o("code",[e._v("git clone")]),e._v(", "),o("code",[e._v("git pull")]),e._v(", "),o("code",[e._v("git push")]),e._v(", ...)")])])])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://rogerdudler.github.io/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git - the simple guide"),o("OutboundLink")],1),e._v(" is a nice short summary of what you have learned in this small Git course.")])])}),[],!1,null,null,null);t.default=a.exports}}]);