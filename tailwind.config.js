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
          primary: "#1E40AF",
          secondary: "#9333EA",
          accent: "#F59E0B",
          neutral: "#374151",
          "base-100": "#F3F4F6",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F97316",
          error: "#EF4444",
        },
      },
      "light",
      "dark",
    ],
  },
}
