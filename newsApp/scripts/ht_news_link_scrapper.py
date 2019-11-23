from django.conf import settings
import os,sys,django,json
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd




os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsApp.config.settings')
ROOT_FOLDER = os.path.realpath(os.path.dirname(__file__))
ROOT_FOLDER = ROOT_FOLDER[:ROOT_FOLDER.rindex('/')]
ROOT_FOLDER = ROOT_FOLDER[:ROOT_FOLDER.rindex('/')]
if ROOT_FOLDER not in sys.path:
    sys.path.insert(1, ROOT_FOLDER + '/')
django.setup()

if __name__ == "__main__":
    driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")
    all_titles = []
    all_links = []
    for i in range(14):
        driver.get('https://www.hindustantimes.com/it-s-viral/?pageno={}'.format(i+1))
        content = driver.page_source
        soup = BeautifulSoup(content)
        ul_tag = soup.find('ul',attrs={'class':'latest-news-bx more-latest-news more-separate'})
        curr_page_news = ul_tag.findAll('div',attrs={'class':'media-heading headingfour'})
        print('No of items to be loaded {} and pos {}'.format(len(curr_page_news),i+1))
        for news in curr_page_news:
            news_anchor_tag = news.find('a',href=True)
            link = news_anchor_tag.attrs.get('href','')
            title = news_anchor_tag.text
            all_titles.append(title)
            all_links.append(link)

    df = pd.DataFrame({'Title':all_titles,'link':all_links}) 
    df.to_csv('ht_trending_links.csv', index=False, encoding='utf-8')

    
