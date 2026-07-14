const responses = {
    "hello": "Hello! Welcome to the IT Department Support. How can I help you today?",
    "courses": "We offer B.Sc. IT, M.Sc. IT, and specialized Post Graduate Diplomas.",
    "admission": "Admissions are based on merit lists compiled from your qualifying examinations.",
    "duration": "B.Sc. IT is a 3-year program, while M.Sc. IT is a 2-year program.",
    "exit": "Goodbye! Have a great career ahead!"
};

function getResponse(input){
    const cleanedInput = input.toLowerCase().trim();

    for(key in responses)
    {
        if(cleanedInput.includes(key))
        {
            return responses[key];
        }
    }

    return "I am sorry, I didn't quite catch that. Try asking about 'courses', 'admission', or type 'exit'."
}

module.exports = { getResponse };