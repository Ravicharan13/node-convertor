const readline = require('readline');

const EXCHANGE_RATE = 82.0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inrToUsd = (inr) => {
  return inr / EXCHANGE_RATE;
};

const usdToInr = (usd) => 
  return usd * EXCHANGE_RATE;
};

const main = () => {
  console.log("Currency Converter - INR <=> USD");
  rl.question('\nChoose an option:\n1. Convert INR to USD\n2. Convert USD to INR\n3. Exit\n\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter amount in INR: ', (amount) => {
          const inr = parseFloat(amount);
          const usd = inrToUsd(inr);
          console.log(`${inr} INR = ${usd.toFixed(2)} USD`);
          main();
        });
        break;
        
      case '2':
        rl.question('Enter amount in USD: ', (amount) => {
          const usd = parseFloat(amount);
          const inr = usdToInr(usd);
          console.log(`${usd} USD = ${inr.toFixed(2)} INR`);
          main();
        });
        break;

      case '3':
        console.log("Exiting... Thank you for using the Currency Converter!");
        rl.close();
        break;

      default:
        console.log("Invalid choice. Please try again.");
        main();
        break;
    }
  });
};

main();
