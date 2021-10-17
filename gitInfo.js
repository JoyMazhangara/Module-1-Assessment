/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'It is a system much like Dropbox that allows you to and log all your updates locally (your own computer)'
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'It is a system much like Dropbox that allows you to put a copy of your work globally (online) and logs your updates'
console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = new Object();
    init.description = 'This command initializes a local repository in the current folder you are in ';
    init.code = 'git init ' 
console.log(init.description,init.code)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = new Object();
    clone.description = 'This command makes a copy of an existing repo in a new directory, at another location';
    clone.code = 'git clone URL_GOES_HERE';
console.log(clone.description,clone.code)
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let Status = new Object();
    Status.description = 'This command tells me about the repository you are currently in';
    Status.clone = 'git status';
console.log(Status.description,Status.clone)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = new Object();
    add.description = 'This command adds a file to be tracked';
    add.code = 'git add gitinfo.js';
console.log(add.description,add.code)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = new Object();
    commit.description = 'This command creates a snapshot of the files I am tracking ';
    commit.code = 'git commit -am "Initial commit" ';
console.log(commit.description,commit.code)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = new Object();
    push.description = 'This command copies all your saved work onto a global repository created online';
    push.code = 'git push REPLACE_WITH_REMOTE_NAME main';
console.log(push.description,push.code)