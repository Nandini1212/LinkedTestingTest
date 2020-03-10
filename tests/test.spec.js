describe('LinkedIn job search', () => {
  beforeAll(async () => {
   try{ 
    await page.goto('https://www.linkedin.com');
  } catch(error) {
    console.error({error }, 'Something happend.');
    browser.close();
  }
    
  });

  it('Should load LinkedIn page', async () => {
    await expect(page).toMatch('LinkedIn');

  });
  it('Navigate to sign page', async () => {
    try{
      await page.click('body > nav > a.nav__button-secondary');
      await page.$eval('#username', el => el.value = 'auto-eng@test.linkedin.com');
      await page.$eval('#password', el => el.value = 'Passw0rd!');
      await page.click('#app__container > main > div > form > div.login__form_action_container > button');
      await page.waitFor(5000);
    } catch(e) {
      console.log('Invalid Credentials');
    }
    
  });
  

  it('search for Automation Engineer Jobs', async () =>{
   try{ 
    await page.click('input[placeholder=Search]');
    await page.keyboard.type('Automation engineer');
    await page.waitFor(2000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitFor(2000);
  } catch(e) {
    console.log('Invalid selectors to be given');
  }
  });
 
  
  
});
