import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req, res) {
  const url = 'https://news.ycombinator.com/';

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    const pageTitle = await page.title();

    await browser.close();

    // res.status(200).json({ title: pageTitle });
  } catch (error) {
    console.error('Error in scraping:', error);
    // res.status(500).json({ error: 'Failed to scrape data' });
  }
  return NextResponse.json(pageTitle);
}

