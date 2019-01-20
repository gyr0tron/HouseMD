from flask import Flask, json, Response, request, render_template
from selenium import webdriver

app = Flask(__name__)

#   Route for Hompage
@app.route('/', methods=['POST'])
def page_home():
  browser = webdriver.Chrome('/usr/local/bin/chromedriver')
  browser.get("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html")
  time.sleep(5)
  driver.findElement(By.xpath("//button[text()='Confirm']")).click();
  return ("pass")
# Run the app
app.run()