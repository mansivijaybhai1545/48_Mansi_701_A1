const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

console.log("--- IT Support Chatbot Activated (Type 'exit' to quit) ---");

const askQuestion = () => {
   rl.question('You : ' , (userInput) => {
          const reply =  chatbot.getResponse(userInput);
          console.log(`Bot : ${reply}`);

          if(userInput.toLowerCase().trim() == 'exit')
          {
            rl.close();
          }else{
            askQuestion();
          }
    });
};

askQuestion();
