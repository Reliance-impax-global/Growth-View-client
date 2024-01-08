const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tic = new Date().getTime();

rl.question('Enter the year: ', () => {
  const y = 34434434312;

  if (y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0)) {
    console.log('This is a leap year');
  } else {
    console.log('This isn\'t a leap year');
  }

  const toc = new Date().getTime();
  const elapsedSeconds = (toc - tic) / 1000;

  console.log(`Elapsed: ${elapsedSeconds} seconds`);
  
  rl.close();
});
