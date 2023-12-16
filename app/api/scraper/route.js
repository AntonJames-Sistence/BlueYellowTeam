import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const url = 'https://www.facebook.com/BlueYellowFoundation'; // Replace with the URL you want to scrape
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: 'networkidle0', // Wait until there are no more than 0 network connections for 500 ms
    });

    const titles = await page.evaluate(() => {
      const titles = [];
      const titleElements = document.querySelectorAll('.article-title');
      titleElements.forEach(title => {
        titles.push(title.textContent.trim());
      });
      return titles;
    });

    await browser.close();

    res.status(200).json({ articleTitles: titles });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'An error occurred while scraping data' });
  }
}
