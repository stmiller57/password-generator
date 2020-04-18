# Creating a password generator
## First step
I started by working on the questions I wanted answered once the "generate password" button was pushed. 

The first question I wanted a user to answer was how many characters she wanted in her password. The answer needed to fall between 8-128 characters. If the answer was outside that range, the user was prompted to try again for a number in the 8-128 range. 

## Moving on
I then set about defining which characters would be used in the password through a series of confirm boxes. The user was asked to decide if she wanted lowercase, uppercase, numeric and special characters. Each answer helped determine the character set used to generate a random password. 

## Final steps
The final major step was devising a "for loop" that would iterate through the character set the user defined through her selections in the confirm boxes. The loop produced a password of the user's selected length and with the character sets she wanted included. 


### Deployed application and repo
Deployed application: https://stmiller57.github.io/password-generator/

Repo: https://github.com/stmiller57/password-generator

### Screenshot
![ScreenShot](https://raw.githubusercontent.com/stmiller57/password-generator/master/assets/passwordScreen.png)
