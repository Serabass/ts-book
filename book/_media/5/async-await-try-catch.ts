async function myAsyncAwaitFunction(): Promise<void> {
  try {
      let data = await fs.readFile('file.txt');
      await fs.writeFile('file.txt', '');
  } catch (err) {
      // ...
  }
}