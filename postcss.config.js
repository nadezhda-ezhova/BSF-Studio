module.exports = function (webpack) {
  return {
    plugins: [
      require('postcss-partial-import')({ addDependencyTo: webpack }),
      require('postcss-nested')({}),
      require('postcss-custom-media')({
        importFrom: {
          customMedia: {
            '--min-tiny-phone': '(min-width: 320px)',
            '--min-small-phone': '(min-width: 469px)',
            '--min-phone': '(min-width: 571px)',
            '--min-tablet': '(min-width: 769px)',
            '--min-desktop': '(min-width: 997px)',
            '--min-big-desktop': '(min-width: 1280px)',
            '--min-large-desktop': '(min-width: 1440px)',
            '--max-small-phone': '(max-width: 468px)',
            '--max-phone': '(max-width: 570px)',
            '--max-tablet': '(max-width: 769px)',
            '--max-desktop': '(max-width: 996px)',
            '--max-big-desktop': '(max-width: 1279px)',
            '--max-large-desktop': '(max-width: 1440px)',
          }
        }
      }),
      require('lost')({}),
      require('postcss-css-variables')({
        variables: {

          '--primary'         : '#82bc4b',
          '--second'          : '#ffda48',

          '--red'             : '#f70008',
          '--redLight'        : '#ff0008',

          '--yellow'          : '#ffda48',
          '--yellowLight'     : '#ffe347',

          '--green'           : '#6fab36',
          '--greenLight'      : '#82bc4b',
          '--greenDark'       : '#459771',

          '--beige'           : '#f5efe6',

          '--white'           : '#ffffff',
          '--whiteGrey'       : '#fafafa',
          '--whiteDark'       : '#f0f1f5',

          '--whiteToGrey'     : '#d4d7df',

          '--greyLight'       : '#B8BCC8',
          '--grey'            : '#9CA1B1',
          '--greyDark'        : '#83899B',

          '--greyToBlack'     : '#565C6C',

          '--blackLight'      : '#393E4B',
          '--blackDark'       : '#272C39',
          '--black'           : '#141927',

        }
      }),
      require('postcss-custom-properties')({}),
      require('postcss-calc')({}),
    ]
  };
};
