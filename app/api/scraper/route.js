import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

export async function GET() {
  const url = 'https://news.ycombinator.com/';

  try {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: 'domcontentloaded',
    });

    const titles = await page.evaluate(() => {
      const titleElements = document.querySelectorAll('span.titleline');
      const titles = Array.from(titleElements, (element) => element.textContent.trim());
      return titles;
    });

    await browser.close();

    return NextResponse.json(titles);
  } catch (error) {
    return NextResponse.error(error);
  }
}