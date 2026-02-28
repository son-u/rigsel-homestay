/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://rigselhomestay.in',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/server-sitemap.xml'], // if using dynamic sitemaps
}
