const path = require("path");
const { title, keywords, description, author, defaultLang, trackingId } = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
     "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Agency",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file: "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
          {
            name: "Roboto Slab",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms"
    },
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
          threshold: 0.50, // Pct of element's area that needs to be visable
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations

          // Advanced options
          selector: '[data-sal]', // Selector of elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name 
      }
    }
  ],
};
