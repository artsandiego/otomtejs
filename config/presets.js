const fse = require('fs-extra');
const environment = process.env.NODE_ENV;

const mode = environment === 'react' ? 'react' : 'vue';
fse.remove('./src/js/', err => {
  if (err) return console.error(err);
  fse.copy(`./config/${mode}-config/`, './src/js/', err => {
    if (err) return console.error(err);
    console.log('Happy hacking!');
  });
});
