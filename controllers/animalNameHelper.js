const adjectives = [
    "Bubbly",
    "Zesty",
    "Sparkly",
    "Chirpy",
    "Peppy",
    "Jolly",
    "Witty",
    "Bouncy",
    "Snappy",
    "Gleeful",
    "Perky",
    "Jumpy",
    "Whimsical",
    "Zany",
    "Radiant",
    "Goofy",
    "Dandy",
    "Dazzling",
    "Jumpy",
    "Quirky",
    "Silly",
    "Cheery",
    "Fizzy",
    "Giddy",
    "Sassy"
];

const animals = [
    "Alligator",
    "Anteater",
    "Armadillo",
    "Auroch",
    "Axolotl",
    "Badger",
    "Bat",
    "Bear",
    "Beaver",
    "Blobfish",
    "Buffalo",
    "Camel",
    "Chameleon",
    "Cheetah",
    "Chipmunk",
    "Chinchilla",
    "Chupacabra",
    "Cormorant",
    "Coyote",
    "Crow",
    "Dingo",
    "Dinosaur",
    "Dog",
    "Dolphin",
    "Dragon",
    "Duck",
    "Dumbo Octopus",
    "Elephant",
    "Ferret",
    "Fox",
    "Frog",
    "Giraffe",
    "Goose",
    "Gopher",
    "Grizzly",
    "Hamster",
    "Hedgehog",
    "Hippo",
    "Hyena",
    "Jackal",
    "Jackalope",
    "Ibex",
    "Ifrit",
    "Iguana",
    "Kangaroo",
    "Kiwi",
    "Koala",
    "Kraken",
    "Lemur",
    "Leopard",
    "Liger",
    "Lion",
    "Llama",
    "Manatee",
    "Mink",
    "Monkey",
    "Moose",
    "Narwhal",
    "Nyan Cat",
    "Orangutan",
    "Otter",
    "Panda",
    "Penguin",
    "Platypus",
    "Python",
    "Pumpkin",
    "Quagga",
    "Quokka",
    "Rabbit",
    "Raccoon",
    "Rhino",
    "Sheep",
    "Shrew",
    "Skunk",
    "Slow Loris",
    "Squirrel",
    "Tiger",
    "Turtle",
    "Unicorn",
    "Walrus",
    "Wolf",
    "Wolverine",
    "Wombat",
];




function genAnimal() {
    const shuffledAdj = adjectives.sort(() => 0.5 - Math.random());
    const shuffledAni = animals.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffledAdj.slice(0, 1);
    let selected2 = shuffledAni.slice(0, 1);

    return (selected[0] + " " + selected2[0]).trim();
}

module.exports = {genAnimal};