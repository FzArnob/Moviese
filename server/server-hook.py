import urllib.request
from webbrowser import get
import re

url_list = []
file_list = []
#get the result code
def getData(url):
    # open a connection to a URL using urllib
    webUrl  = urllib.request.urlopen(url)
    if webUrl.getcode() == 200:
        data = webUrl.read()
        result = re.search('<tbody>(.*)</tbody>', str(data))
        print(result.group(1))

getData('https://www.mojaloss.stream/directlink/')