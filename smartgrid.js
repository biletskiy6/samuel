var smartgrid = require('smart-grid');

var settings = {
  outputStyle: 'sass',
  columns: 12,
  offset: '30px',
  mobileFirst: false,
  container: {
    maxWidth: '1410px',
    fields: '20px',
  },
  breakPoints: {
    md: {
      width: '1366px',
      fields: '15px',
    },
    mdx: {
      width: '1280px',
      fields: '15px',
    },
    tablet: {
      width: '992px',
      fields: '15px',
    },
    tabletx: {
      width: '768px',
      fields: '15px',
    },
    phone: {
      width: '480px',
      fields: '10px',
    },
    iphone: {
      width: '320px',
      fields: '10px',
    },
  },
};

smartgrid('./src/static/sass', settings);
