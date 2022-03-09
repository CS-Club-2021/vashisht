import os
import bs4
import requests

url = "https://demo.themefisher.com/vixcon/"

# soup = bs4.BeautifulSoup(requests.get(url).text, "html.parser")

# # images 
# images = soup.find_all("img")
# # save images to images folder
# for image in images:
#     image_url = image.get("src")
#     os.system("mkdir -p " + "/".join(image_url.split("/")[:-1]))
#     print(image_url)
#     with open(image_url, "wb") as file:
#         file.write(requests.get(url + image_url).content)

images = [
"images/bg/cta-bg.jpg",
"images/about/bg-1.jpg",
"images/bg/page-header.jpg",
"images/banner/speakers-bg-black.jpg",
"images/bg/cta-bg.jpg",
"images/bg/footer-bg.jpg"
]
for image_url in images:

    os.system("mkdir -p " + "/".join(image_url.split("/")[:-1]))
    print(image_url)
    with open(image_url, "wb") as file:
        file.write(requests.get(url + image_url).content)