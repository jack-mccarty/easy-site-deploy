# easy-site-deploy
Simple way to get a website online for free, without a lot of work. 


## Sign up for a free Deno Deploy account
Go to https://wwww.deno.land/deploy and sign up for a free account.

## Clone This Repo
Clone this repo into your own Github repository.

## Deploy from Deno
In Deno Deploy, click on +New Project.  Choose the github repo you just created. 
Use the automatic option to have your site auto-update.

## Update Code
Update the existing files or add your own. Just make sure to set your css and js links 
to 
```/public/styles/yourstyle.css``` 
or 
```.../public/scripts/yourscript.js```

## Auto Update
Merge your changes into the branch you selected (or just edit and push to main if you are new to 
source control). 

Deno will automatically update the code. 

## NOTE
Occasionally large code changes (or something small you can't find) will cause some issues. 
If your project works locally and fails to deploy to Deno, you can go into your project
and unlink the repo, then relink it. 

## Bonus
In Deno Deploy, you can go into your projects settings and give it a more user-friendly name
yourcoolurl.deno.dev.

You also get analytics as well as HTTPS.   Enjoy!
