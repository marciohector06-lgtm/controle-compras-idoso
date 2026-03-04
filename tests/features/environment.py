import os

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service


def before_feature(context, feature):
    context.config.base_dir = os.path.dirname(__file__)


def before_all(context):
    base_url = os.getenv("BASE_URL", "http://localhost:5173/")
    context.base_url = base_url if base_url.endswith("/") else base_url + "/"

    headless = os.getenv("HEADLESS", "false").strip().lower() in {"1", "true", "yes"}
    print(f"[ENV] HEADLESS={headless}")

    options = Options()
    if headless:
        options.add_argument("--disable-gpu")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-extensions")
        options.add_argument("--disable-infobars")
    options.add_argument("--window-size=1440,900")

    context.driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options,
    )
    context.driver.implicitly_wait(5)


def after_all(context):
    if getattr(context, "driver", None):
        context.driver.quit()
