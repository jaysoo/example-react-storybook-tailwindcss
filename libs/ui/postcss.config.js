const { join } = require("path/posix");

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  }
};
