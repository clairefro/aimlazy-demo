#! /usr/bin/env node

const program = require("commander");
const { openai } = require("./lib/openai");
const { writeDataToFile } = require("./lib/writeDataToFile");

program
  .version("1.0.0")
  .description("A Node CLI for generating responses from OpenAI's API");

program
  .command("prompt <prompt>")
  .alias("p")
  .description("Generates an OpenAI response for any given text prompt.")
  .option("-o, --out <out>", "Write the output to a file")
  .action(async (prompt, opts) => {
    try {
      const res = await openai.completion(prompt);
      const text = res.data.choices[0].text.trim();
      console.log(text);

      if (!!opts.out) {
        writeDataToFile(text, opts.out);
      }
    } catch (e) {
      console.log("something went wrong when calling the API");
      process.exit(1);
    }
  });

program.command("prompt <prompt>");

program.parse(process.argv);
