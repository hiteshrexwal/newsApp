from django.conf import settings
import os,sys,django,json
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd




os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.config.settings')
ROOT_FOLDER = os.path.realpath(os.path.dirname(__file__))
ROOT_FOLDER = ROOT_FOLDER[:ROOT_FOLDER.rindex('/')]
ROOT_FOLDER = ROOT_FOLDER[:ROOT_FOLDER.rindex('/')]
if ROOT_FOLDER not in sys.path:
    sys.path.insert(1, ROOT_FOLDER + '/')
django.setup()

if __name__ == "__main__":
    data = pd.read_csv('ht_trending_links.csv')
    driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")
    links = data['link'].values
    heading = []
    sub_heading = []
    image_links = []
    image_captions = []
    descriptions = []
    pos = 1
    import ipdb; ipdb.set_trace()
    for link in links:
        try:
            id = link.split('/')[-1].split('-')[-1].split('.')[0]
        except Exception as e:
            print('Exception')
            continue
        
        print(pos)
        driver.get(link)
        content = driver.page_source
        soup = BeautifulSoup(content,features="html.parser")
        story_div = soup.find('div',attrs={'id':'{}_story'.format(id)})
        h1 = story_div.find('h1').text
        h2 = story_div.find('h2').text
        figure_div = story_div.find('figure')
        image = figure_div.find('img').attrs.get('src','')
        image_caption = figure_div.find('figcaption').text
        description = []
        p_tags = story_div.findAll('p')

        for p_tag in p_tags:
            p_content = p_tag.text
            if p_content:
                description.append(p_content)
        
        heading.append(h1)
        sub_heading.append(h2)
        image_links.append(image)
        image_captions.append(image_caption)
        descriptions.append(description)
        pos+=1

    df = pd.DataFrame({'Title':heading,'sub heading':sub_heading,'image links':image_links,\
                        'image captions':image_captions,'description':descriptions}) 
    df.to_csv('ht_trending_news_data.csv', index=False, encoding='utf-8')

    
