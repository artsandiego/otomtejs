const fse = require('fs-extra');
const environment = process.env.NODE_ENV;

if (environment === 'react' || environment === 'vue') {
  fse.remove('./src/js/', err => {
    if (err) return console.error(err);
    fse.copy(`./config/${environment}-config/`, './src/js/', err => {
      if (err) return console.error(err);
      console.log(`Environment is set to use ${environment} js!`);
    });
  });
} else {
  fse.copy(`./config/wp-config/`, '.', err => {
    if (err) return console.error(err);
    console.log(`OtomteJS ❤️  WP!`);
  });
}
