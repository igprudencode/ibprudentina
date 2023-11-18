const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "firebasestorage.googleapis.com",
      ],
      loader: "default",
    },
    i18n: {
      locales: ['enUs', 'ptBr'],
      defaultLocale: 'ptBr'
    }
  };
  
  module.exports = nextConfig;