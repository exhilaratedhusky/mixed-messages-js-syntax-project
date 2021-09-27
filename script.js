JavaScript
 function generateRandomNumber(num) {
      return Math.floor(Math.random() * num)
}
const scenarios = {
     quotes: [' "I came here to be talked off a ledge, not pushed!", ', ' "Never assume, dear. It makes an ass out of both of us"', ' "This is a teachable moment for all of us," ', ' "I just want a bath tub and a long extension chord, please, "', ' "You were my mistake,"', ' "I just finally cried myself to sleep, "'],
     characters: [' John Mulaney', ' Peppa Pig', ' Margaret Thatcher', ' Lorde', ' Lil Nas X', ' Gordon Ramsay'],
     activity: [' said with utter disregard.', ' screeched like a hungover banshee.', ' uttered while exiting the building with style and disgust.', ' yelled excitedly.', ' sang to the tune of Rasputin.', ' came to realize the contents of encrypted government communication cable.']
}

let randomSituation = []

for (let item in scenarios) {
     let optionX = generateRandomNumber(scenarios[item].length) 
    switch(item) {
        case 'quotes':
        randomSituation.push(`" ${scenarios[item][optionX]}",`)
        break
        case 'characters':
        randomSituation.push(` ${scenarios[item][optionX]}`)
        break
        case 'activity':
        randomSituation.push(` ${scenarios[item][optionX]}`)
        break
        default:
        return 'your vibe threw me off, error!'
    }
}

function formatScenario(scenario) {
    const formatted = randomSituation.join('\n')
    console.log(formatted)
}

formatScenario(randomSituation);


