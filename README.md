# Easy Site Deploy

Easy Site Deploy provides a streamlined and straightforward solution for deploying your website with minimal effort. By leveraging Deno Deploy, you can launch your website with ease, without the need for extensive setup or infrastructure maintenance.

## Getting Started

To get started with Easy Site Deploy, follow these steps:

1. Sign up for a free [Deno Deploy](https://deno.com/deploy) account.

2. Clone this repository into your own Github repository.

3. In Deno Deploy, create a new project by selecting **+New Project** and choosing the Github repository you just created.

4. Utilize the automatic option to enable auto-updating of your site. Deno Deploy will automatically update your website each time you make changes to your code.

5. Customize the existing files or incorporate your own. Ensure that you specify your CSS and JS links to `/public/styles/yourstyle.css` or `/public/scripts/yourscript.js`. It's essential to ensure that the file paths are accurate to ensure that your CSS and JS files are loaded correctly.

6. Merge your modifications into the branch you selected, or push them directly to the main branch if you're new to source control. Deno Deploy will automatically update your website each time you make changes to your code.

## Troubleshooting

In some cases, substantial code changes or other issues may cause problems with your deployment. If your project functions correctly locally but fails to deploy to Deno, you may attempt to unlink and relink your repository to see if that resolves the issue.

## Bonus Features

Deno Deploy offers several additional features to enhance your website's functionality. These include:

- **User-friendly project naming:** Customize your project's name (such as `yourcoolurl.deno.dev`) to make it more memorable and easier to share.
- **Analytics:** Use Deno Deploy to monitor visitor metrics and gain insights into how people are interacting with your site.
- **HTTPS:** All Deno Deploy projects are automatically secured with HTTPS, ensuring that your website is secure and trustworthy.

We hope that Easy Site Deploy will assist you in deploying your website quickly and effortlessly!
