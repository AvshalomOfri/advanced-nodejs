//By wrapping this log call in a function we're allowing the requiring module, i.e index.js, to print this ascii art with every "require('./ascii-art')()" call. If we only require without invoking the function than the ascii art would print only once and disregard any further calls since the first print call result was cached.
module.exports = () => {
  console.log(`
    _ __   __   __   , _ __     _,   __
   ( /  ) ( /  ( /  / ( /  )   / |  ( /
    /--'   /    /  /   /--<   /--|   /
   /     (/___/(_,/_  /   \__/   |_(/___/
     __,  ___    ,___ __    ______
    (    ( /    /   /( /  /(  /
     \`.   /    /  __  /--/   /
   (___)_/_   (___/  /  /_ _/
  `);
};
