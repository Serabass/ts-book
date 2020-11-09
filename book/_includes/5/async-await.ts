async function myAsyncAwaitFunction(): Promise<void> {
  let data = await fs.readFile('file.txt');
  await fs.writeFile('file.txt', '');
}
