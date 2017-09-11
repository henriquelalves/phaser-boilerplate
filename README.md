## Phaser Boilerplate

A Phaser project boilerplate using Node, some assets loading automation, and dynamic screen resolution settings.

### Instructions

1. Clone this repo (`git clone [this repo address]`)
2. Install node modules (`npm install`)
3. Change `BOILERPLATE` project name on `index.html` and `package.json`.
4. Change screen resolution settings on `boot.js` state.
5. ???
6. Profit!

### How to use
- **Assets loading:** This is done automatically by the use of `jsonfy.py`; it gets everything under the `assets/` folder on a `.json` file-tree structure, and the `preloader.js` state gets this json to load everything without the need of manually loading each and every file. The default boilerplate only loads `.png` (you can load spritesheets by naming them "spritesheet"; check `preloader.js` for more information), but you can easily add more extensions changing the source.
- **Game Resolution:** The solution I found to get the most of different devices resolutions was to use this [Phaser tutorial](http://sbcgamesdev.blogspot.com.br/2015/04/phaser-tutorial-manage-different-screen.html).
- **Testing the game:** Just `npm start`!

### Credits

- Original node boilerplate (made with yeoman): https://github.com/julien/generator-phaser
- JSON file structure script: https://unix.stackexchange.com/questions/164602/how-to-output-the-directory-structure-to-json-format
- Phaser screen resolution tutorial and template: http://sbcgamesdev.blogspot.com.br/2015/04/phaser-tutorial-manage-different-screen.html
