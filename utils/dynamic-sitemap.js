// Change to your custom URL
const globby = require("globby");
const fs = require("fs");
const YOUR_URL = "https://www.noktos.com"
const getDate = new Date().toISOString();


async function generateSiteMap() {
    // Send a list of file names to globby for it to read
    // We add an ! before the files we want to be ignored (in this case, the api pages and the dynamically generated pages
    // change the file path to match the files in your own project
    const pages = await globby([
        'pages/**/*.jsx',
        'pages/_*.jsx',
        'pages/**/[id].jsx',
        'pages/api',
    ])

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
        .map(page => {
            const regex = /(pages)|(src)|(.jsx)|(.js)|(.md)|(index)/gi;
            const route = page.replace(regex, '')
            return `
                      <url>
                          <loc>${`${YOUR_URL}${route}`}</loc>
                      </url>
                  `
        })
        .join('')}
      </urlset>
  `

    fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()