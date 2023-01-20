module.exports = {
  catalogs: [
    {
      include: ["src"],
      path: "src/locales/{locale}/messages",
    },
  ],
  format: "minimal",
  locales: ["en", "ru", "sp"],
  sourceLocale: "en",
};
