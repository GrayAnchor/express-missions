module.exports = {
  theme: {
    extend: {
      spacing: {
        px: '1px',
        '2px': '2px',
        '5px': '5px', 
        '0': '0',
        '1': '1rem',
        '1_5': '1.5rem',
        '2': '2rem',
        '2_5': '2.5rem',
        '3': '3.75rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '10': '10rem',
        '12': '12rem',
        '14': '14rem',
        '16': '16rem',
        '20': '20rem',
        '22': '22rem',
        '24': '24rem',
        '28': '28rem',
        '32': '32rem',
        '36': '36rem',
        '40': '40rem',
        '43': '43rem',
        '48': '48rem',
        '56': '56rem',
        '64': '64rem',
        '68': '68rem',
        '70': '70rem',
        '72': '72rem',
        '74': '74rem',
        '76': '76rem',
        '78': '78rem',
        '80': '80rem',
        '82': '82rem',
        '84': '84rem',
        '86': '86rem',
        'hero': '37.5rem',
        '88': '88rem',
        '90': '90rem',
        '92': '92rem',
        '94': '94rem',
        '96': '96rem',
        '98': '98rem',
        '100': '100rem',
        '102': '102rem',
        '104': '104rem',
        'large': '123rem',
        'screen50': '50vw',
        'screen-h90':'90vh'
            },
      screens: {
        'xs':'359px'
      },
      fontSize: {
        '14': '1.4rem',
        '16': '1.6rem',
        '20': '2rem',
        '24': '2.4rem',
        '36': '3.6rem',
        '43': '4.3rem',
        '64': '6.4rem'
      },
      fontFamily: {
        'display': ['"DM Serif Display"','serif'],
        'display-sans': ['"Fjalla One"','sans-serif'],
        'body': ['"Hind Vadodara"','sans-serif']
      },
      maxWidth: {
        'smaller': '30rem',
        'small': '32rem',
        'medium': '42rem',
        'form': '50rem',
        'quote': '56.625rem',
        'stat': '58rem',
        's-m-large': '71rem',
        'nav': '30rem',
        'service-large': '82.875rem',
        'cta': '75rem',
        'large':'120rem'
      },
      colors: {
        red: '#cf000a',
        orange: '#FA520D',
        beige: '#E5E5E5',
        darkGrey: '#323232',
        blue: '#4A828F',
        yellow: '#E1DD83'
      },
      boxShadow: {
        large: '0 30px 35px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.04)'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.md',
    ],
    whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'bg-beige'
    ],
    extractors: [
        {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g),
            extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
        },
    ],
}
}
