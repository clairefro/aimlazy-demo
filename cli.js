#! /usr/bin/env node

const program = require("commander");
const { openai } = require("./lib/openai");
const { writeDataToFile } = require("./lib/writeDataToFile");
const package = require("./package.json");

program
  .version(package.version)
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
      console.log("Something went wrong");
      console.log(e.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
