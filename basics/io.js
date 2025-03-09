// INFO: typical way for CLI tools

const prompt = "Enter something: ";
process.stdout.write(prompt);
for await (const line of console) {
  console.log(`You Types, ${line}`);
  process.stdout.write(prompt);
}
