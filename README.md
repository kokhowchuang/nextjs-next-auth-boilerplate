<picture>

<source  media="(prefers-color-scheme: dark)"  srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">

<source  media="(prefers-color-scheme: light)"  srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">

<img  alt="Shows all of the tools in the stack for this template, also listed in the README file."  src="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">

</picture>

<div  align="center"><strong>Insurance Company Take Home Assessment</strong></div>

<div  align="center">Built with the Next.js App Router</div>

## Scenario

You will be meeting the CIO and Digital Architect of Z**\*** APAC, one of the largest insurers in the region. Recently they have made efforts to digitize their technology stack and provide more solutions/open integrations to partners in the region.

Z**\*** would like to build a customer portal for customers to create an account, purchase and/or renew their insurance, check their insurance portfolio, and submit a claim.

The frontend of the portal needs to be built with React JS or Next JS. For this assignment, Google OAuth2 will be used to log customers in.

## Frontend Web Functions

1. Login – mechanism to authenticate the user. Upon successful login, the user will be redirected to the home page. Unauthorized users will be shown an error page if they attempt to access the URL directly.

2. On the home screen, there are 3 major components: header, footer and the content area (body). The header and footer are reusable and configurable components.

3. In the content section, you are required to make an API call to
   https://reqres.in/api/users.

4. Filter the API response to display records with first name starting with “G”, or last name starting with “W”. As the API response is paginated, you will need to traverse all pages to get the complete set of records.

## Getting Started

In order to run the server, you're required to create your own `.env.local` file based on the `.env.local.example` file provided. You can use my credentials as below:

```
GOOGLE_ID=1095203081299-6h4m8b6lvkgj4cdb333jdq52g8nkfoeu.apps.googleusercontent.com
GOOGLE_SECRET=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
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=e88a3175a4ed553edf00b735be825bb045e8e60b5ceb30b70767662ea2f8da83
```

Finally, run the following commands to start the development server:

```
yarn
yarn run dev
```

You should now be able to access the application at http://localhost:3000.

## Result

### Protected Page

The URL `/playground/` is a protected page that is only visible to the users after logged on.

<img  alt="Shows the protected landing page after login."  src="./screenshots/landing.png">

### Filter Record

When 'G' is typed into the input box, the API will search through all pages to get the complete sets of records.

<img  alt="Shows the protected landing page after login."  src="./screenshots/filter-result.png">
