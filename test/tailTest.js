const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["Yo Yo", "Lighthouse", "Labs", "Partner", "Dream"];


assertEqual(tail(words), "Labs");
assertEqual(tail(words2), "Dream");