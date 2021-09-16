module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary":   "#a991f7",
          "secondary": "#f6d860",
          "accent":    "#37cdbe",
          "neutral":   "#3d4451",
          "base-100":  "#ffffff",
          "info":      "#2094f3",
          "success":   "#009485",
          "warning":   "#ff9900",
          "error":     "#ff5724",
        },
      },
      "light",
      "dark",
    ],
  },
}
