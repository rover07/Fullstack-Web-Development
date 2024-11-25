// Import the MotivationalSloth class
import MotivationalSloth from "motivational-sloth";

// Create an instance of MotivationalSloth
const sloth = new MotivationalSloth();

// Get a random quote from a specific theme
const lifeQuote = sloth.getQuote("Life");
console.log(`Random Life Quote: "${lifeQuote}"`);

// Get all available themes
const themes = sloth.getThemes();
console.log(`Available Themes: ${themes.join(", ")}`);

// Add a custom quote
const response = sloth.addCustomQuote("Slow and steady wins the race!");
console.log(response);
