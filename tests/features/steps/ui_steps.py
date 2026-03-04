from behave import given, when, then
from selenium.webdriver.common.by import By


@given("que eu estou na tela de login")
def step_open_login(context):
    context.driver.get(context.base_url)
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-page"]')


@when('eu informo o e-mail "{email}" e a senha "{senha}"')
def step_fill_credentials(context, email, senha):
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-email"]').clear()
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-email"]').send_keys(email)

    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-senha"]').clear()
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-senha"]').send_keys(senha)


@when('eu clico em "Entrar"')
def step_click_enter(context):
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-submit"]').click()


@then("devo ver a tela principal do sistema")
def step_assert_home(context):
    header = context.driver.find_element(By.CSS_SELECTOR, '.app-header h1')
    assert header.text.strip() == 'Controle de Suprimentos do Idoso'


@then('devo ver a mensagem de erro de login "{msg}"')
def step_assert_login_error(context, msg):
    el = context.driver.find_element(By.CSS_SELECTOR, '[data-testid="login-error"]')
    assert el.text.strip() == msg


@given("que eu estou autenticado no sistema")
def step_logged_in(context):
    context.execute_steps(
        'Dado que eu estou na tela de login\n'
        'Quando eu informo o e-mail "admin@familia.com" e a senha "123456"\n'
        'E eu clico em "Entrar"\n'
        'Então devo ver a tela principal do sistema'
    )


@when("eu tento salvar um item sem preencher o nome")
def step_save_without_name(context):
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="button-add"]').click()


@then('devo ver a mensagem "{msg}"')
def step_assert_item_error(context, msg):
    el = context.driver.find_element(By.CSS_SELECTOR, '[data-testid="error-message"]')
    assert el.text.strip() == msg


@when('eu cadastro um item com nome "{nome}"')
def step_add_item(context, nome):
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="input-new-item"]').clear()
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="input-new-item"]').send_keys(nome)
    context.driver.find_element(By.CSS_SELECTOR, '[data-testid="button-add"]').click()


@then('devo ver o item "{nome}" na lista de itens pendentes')
def step_assert_item_in_list(context, nome):
    lista = context.driver.find_element(By.CSS_SELECTOR, '[data-testid="lista-pendentes"]')
    assert nome in lista.text
