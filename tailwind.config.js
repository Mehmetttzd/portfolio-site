module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              gray: {
                  900: '#1F1F1F',
                  800: '#242424',
                  700: '#2E2E2E',
              },
              cyan: {
                  400: '#00BFFF',
                  300: '#03A9F4',
              },
          },
      },
  },
  plugins: [],
};
