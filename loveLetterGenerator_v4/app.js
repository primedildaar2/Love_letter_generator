
generateLoveLetter()
/*const dictionaryDataStructure = [
    {
        id:1,
        loveKeyWord:"a",
        header:"aaaaaaaaa |",
        footer:"| aaaaaaaaa",
    },
    {
        id:2,
        loveKeyWord:"w",
        header:"wwwwwwww |",
        footer:"| wwwwwwww",
    },
    {
        id:3,
        loveKeyWord:"d",
        header:"ddddddddd |",
        footer:"| dddddddddd",
    },
    {
        id:4,
        loveKeyWord:"s",
        header:"sssssssss |",
        footer:"| ssssssss",
    },
]

function generateLoveLetter(){
    //getting element-nodes and testing existence
    const input1 = document.querySelector(`input[name="from"]`);const input2 = document.querySelector(`input[name="to"]`);const input3 = document.querySelector(`input[name="prompt"]`);const loveLetterInput = document.querySelector(`textarea[name="love_Letter"]`);
    //console.log(input1);console.log(input2);console.log(input3);
    //get the element value attribute and sent it to love letters innerText and testing
    const input1Text = input1.value; const input2Text = input2.value;const input3Text = input3.value;
    for (let i = 0;i < dictionaryDataStructure.length; i++){
        if ( input3Text === dictionaryDataStructure[i].loveKeyWord){
            loveLetterInput.value = dictionaryDataStructure.filter(function(dictionaryDataStructure){
                if (dictionaryDataStructure.id === dictionaryDataStructure[0].id){
                    return dictionaryDataStructure[0];
                }
                if (dictionaryDataStructure.id === dictionaryDataStructure[1].id){
                    return dictionaryDataStructure[1];
                }
                if (dictionaryDataStructure.id === dictionaryDataStructure[2].id){
                    return dictionaryDataStructure[2];
                }
                if (dictionaryDataStructure.id === dictionaryDataStructure[3].id){
                    return dictionaryDataStructure[3];
                }
            }).map(function(item){
                return [item.header,input1Text,item.footer,item.loveKeyWord,input2Text].join("\n")
            });
        } 
    }
}


//generator funtions have a syntax of the following
/*function* myGenerator(){
    yield 1
    yield 2
    yield 3
};
const myGeneratorObject = myGenerator();console.log(myGeneratorObject);
const obj = myGeneratorObject.next();console.log(obj);*/