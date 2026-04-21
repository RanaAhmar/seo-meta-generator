/**
 * seo-meta-generator
 * Automatically generates highly optimized SEO meta tags, OpenGraph, and Twitter Cards formatting.
 */

class SEOMetaGenerator {
  /**
   * Initializes the SEO Meta Generator with default settings.
   * @param {Object} defaultOptions Default meta tag values.
   */
  constructor(defaultOptions = {}) {
    this.defaults = {
      title: 'Default Title',
      description: 'Default Description.',
      url: 'https://example.com',
      image: 'https://example.com/default-image.jpg',
      siteName: 'My Website',
      twitterHandle: '@twitterhandle',
      locale: 'en_US',
      ...defaultOptions,
    };
  }

  /**
   * Generates a string of HTML meta tags based on provided data.
   * @param {Object} pageData Data for the specific page.
   * @returns {string} The generated HTML tags.
   */
  generate(pageData = {}) {
    const data = { ...this.defaults, ...pageData };

    const tags = [
      `<!-- Standard SEO -->`,
      `<title>${this._escape(data.title)}</title>`,
      `<meta name="description" content="${this._escape(data.description)}" />`,
      `<link rel="canonical" href="${this._escape(data.url)}" />`,
      
      `\n<!-- Open Graph / Facebook -->`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${this._escape(data.url)}" />`,
      `<meta property="og:title" content="${this._escape(data.title)}" />`,
      `<meta property="og:description" content="${this._escape(data.description)}" />`,
      `<meta property="og:image" content="${this._escape(data.image)}" />`,
      `<meta property="og:site_name" content="${this._escape(data.siteName)}" />`,
      `<meta property="og:locale" content="${this._escape(data.locale)}" />`,
      
      `\n<!-- Twitter -->`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:url" content="${this._escape(data.url)}" />`,
      `<meta name="twitter:title" content="${this._escape(data.title)}" />`,
      `<meta name="twitter:description" content="${this._escape(data.description)}" />`,
      `<meta name="twitter:image" content="${this._escape(data.image)}" />`,
      `<meta name="twitter:site" content="${this._escape(data.twitterHandle)}" />`,
      `<meta name="twitter:creator" content="${this._escape(data.twitterHandle)}" />`
    ];

    if (data.keywords && Array.isArray(data.keywords)) {
      tags.splice(3, 0, `<meta name="keywords" content="${this._escape(data.keywords.join(', '))}" />`);
    }

    return tags.join('\n');
  }

  /**
   * Helper function to escape HTML to prevent XSS.
   */
  _escape(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}

module.exports = SEOMetaGenerator;
