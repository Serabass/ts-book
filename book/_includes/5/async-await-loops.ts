
async function myAsyncAwaitFunction(): Promise<void> {
  for (let i = 0; i < 10; i++) {
      let data = await fs.readFile(`file_${i}.txt`);
      await fs.writeFile(`file_${i}.txt`, '');
  }
}