## Running the application:
1. Clone or download the repository
2. Run `npm install` and `npm run dev` to install all necessary dependencies, and launch the application on `http:localhost:3000`
3. Go to `[https://clerk.com](https://clerk.com)` and create an account if you don't have one, or log in if you already have an account.
4. Create a new application in the clerk dashboard.
5. Copy the environment variables that will be provided to you.
6. Go to your workspace and create a new file called `.env` and paste in the environment variables.
7. Paste in the following additional variables to handle redirecting correctly:
   ```
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```
This will ensure that when you log in, you are redirected to the dashboard page and you don't remain on the homepage.

For more information, visit the clerk docs at `[https://clerk.com/docs](https://clerk.com/docs)`
