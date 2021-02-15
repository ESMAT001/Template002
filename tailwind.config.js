module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html'],
    defaultExtractor: content => content.match[/[A-Za-z0-9-_:/]+/g] || []
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
