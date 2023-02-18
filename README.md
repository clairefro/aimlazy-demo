# aimlazy-demo

Code for OpenAI CLI tool demo (https://www.youtube.com/watch?v=nUnKos5xzOM)

## Installation & Setup

`npm install`

`cp .env.example .env`
=> Add your API KEY from [OpenAI](https://openai.com/api/)

To set up as a global command,

1. run `chmod -x cli.js`
2. run `npm link` while in the project folder

## Usage

Call `aimlazy p "<your prompt>"` from any folder to call OpenAI.

Examples:

- `aimlazy p "what's the cron syntax for twice weekly, on Mondays and Thursdays?"`
- `aimlazy p "what's the current weather in Boston?"`
- `aimlazy p "why do people develop in Windows?"`

### Writing files

You can write the OpenAI API response to a file using the `-o <filname>` syntax

Example: `aimlazy p "generate a CSS file with a modern theme that uses the Spotify color pallette" -o style.css`

## Take it further

Take your skills to the next level by adding your own features. For example:

- add a command for summarizing the contents of files, using `readFileSync()`
- add a command for updating the API KEY settings (securely!)
- add options for adjusting the parameters of the OpenAI API call (ex: set the max token count with a flag `-t <num. of tokens>`)
- add a command for generating image files from text
- add a prompt that asks if the user wants to execute the command returned from OpenAI (y/n)

Tag me on Twitter (@clairefroe) letting me know what you make!
