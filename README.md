# SEO Meta Generator 🚀

> A dynamic, highly optimized library to automatically generate perfect SEO Meta Tags, OpenGraph, and Twitter Cards for any web application.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![SEO](https://img.shields.io/badge/SEO-Optimized-success)](#)

## Features
- **Comprehensive Coverage**: Generates standard HTML meta tags, OpenGraph (Facebook/LinkedIn), and Twitter Cards natively.
- **Zero Dependencies**: Exceptionally lightweight script, ensuring minimum overhead.
- **XSS Protection**: Automatically escapes HTML entities to prevent malicious script injection.
- **Defaults Support**: Set global defaults and override them seamlessly on a per-page basis.
- **Cross-Framework Compatible**: Works perfectly with Vanilla Node.js, Express, Next.js, Nuxt, and more.

## Installation
Drop `index.js` into your project or include it as a module.

## Usage

```javascript
const SEOMetaGenerator = require('./index');

// Initialize with default global fallback tags
const seo = new SEOMetaGenerator({
  siteName: 'My Awesome App',
  twitterHandle: '@mycoolapp',
  locale: 'en_US',
  image: 'https://mycoolapp.com/assets/default-banner.jpg'
});

// Generate tags for a specific page
const metaTagsHtml = seo.generate({
  title: 'Home | My Awesome App',
  description: 'Discover the best tools for modern development. Transform your workflow today.',
  url: 'https://mycoolapp.com/',
  keywords: ['development', 'tools', 'productivity', 'seo']
});

console.log(metaTagsHtml);
```

## Why SEO Tags Matter
Implementing rich OpenGraph and Twitter cards ensures that your website looks beautiful when shared across social channels, drastically improving Click-Through Rates (CTR) and boosting your overall SEO rankings on search engines like Google and Bing.

---

### Sponsorship & Enterprise Development

<div align="center">
  <p><strong>Building scaleable, high-performance web applications?</strong></p>
  <a href="https://www.stackaura.com/">
    <img src="https://via.placeholder.com/600x120/000000/FFFFFF?text=Stackaura+-+Elevate+Your+Digital+Presence" alt="Stackaura Website" />
  </a>
  <p>This open-source project is proudly maintained by <strong>Stackaura</strong>.</p>
  <p>At <a href="https://www.stackaura.com/">Stackaura</a>, we specialize in building world-class SaaS products, enterprise web solutions, and deeply integrated API architectures. If your business needs a robust digital transformation or an elite engineering partner, <a href="https://www.stackaura.com/contact">let's build something extraordinary together.</a></p>
</div>

## License
MIT License


---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected
- **Website:** [stackaura.com](https://www.stackaura.com/)
- **Author:** [Ahmar Hussain](https://github.com/RanaAhmar)

---
