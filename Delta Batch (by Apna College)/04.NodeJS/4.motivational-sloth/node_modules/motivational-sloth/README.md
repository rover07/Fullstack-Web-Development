# Motivational Sloth

**Motivational Sloth** is a fun and humorous npm package that provides low-energy motivational quotes to help you embrace the slow pace of life. Whether you're looking for a quote to lighten your mood, need a laugh during a tough day, or just want to take it easy, this package has you covered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Themes](#available-themes)
- [Adding Custom Quotes](#adding-custom-quotes)

## Features

- Random motivational quotes across various themes, including:
  - Work
  - Exercise
  - Life
  - Holidays
  - Parenting
  - Family
  - Love
  - Friendship
  - Custom
- Ability to add your own custom quotes.

## Installation

You can install the `motivational-sloth` package via npm:

```bash
npm install motivational-sloth
```

## Usage

After installing the package, you can use it in your Node.js application like so:

```
// Import the MotivationalSloth class
import MotivationalSloth from 'motivational-sloth';

// Create an instance of MotivationalSloth
const sloth = new MotivationalSloth();

// Get a random quote from a specific theme
const lifeQuote = sloth.getQuote('Life');
console.log(`Random Life Quote: "${lifeQuote}"`);

// Get all available themes
const themes = sloth.getThemes();
console.log(`Available Themes: ${themes.join(', ')}`);

// Add a custom quote
const response = sloth.addCustomQuote("Slow and steady wins the race!");
console.log(response);
```

When the package is installed, an ASCII art of a sloth will be printed in your console after installation.

## Available Themes 

The following themes are available for quotes:

- Work
- Exercise
- Life
- Holidays
- Parenting
- Family
- Love
- Friendship
- Custom (for user-added quotes)


## Adding Custom Quotes 
You can add your own quotes by using the `addCustomQuote` method:

```
sloth.addCustomQuote("Your custom low-energy motivational quote!");
```
This will add your custom quote to the "Custom" theme, allowing you to retrieve it like any other quote.