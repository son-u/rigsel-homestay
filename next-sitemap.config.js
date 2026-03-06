/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://rigselhomestay.in',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    
    exclude: [
        '/about',
        '/rooms',
        '/food',
        '/not-found',
        '/error',
        '/global-error',
        '/server-sitemap.xml',
    ],
   
    transform: async (config, path) => {
        
        if (path === '/') {
            return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
        }
        
        if (path === '/explore' || path === '/gallery') {
            return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
       
        if (path === '/contact' || path === '/how-to-reach') {
            return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        
        if (path === '/privacy' || path === '/terms') {
            return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
        }
        
        return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    },
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
}
