// INFO: the bun stdlib way
for await (const chunk of Bun.stdin.stream()) {
  // INFO: chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString();
  console.log(`Chunk: ${chunkText}`);
}
