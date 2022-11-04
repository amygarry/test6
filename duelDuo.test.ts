
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
    
})

test ('test to see if the draw button gets hid by checking its class', async()=>{
    const theElement = await driver.findElement(By.xpath('//button[@id="draw"]'))
    await theElement.click()
    const theClass = await theElement.getAttribute('class')
    console.log('hello there')
    console.log(theClass)
    console.log('running test')
    console.log('goodbye now')
    expect(theClass).toBe("hide")
    await driver.sleep(5000)
})

//ok I have a question here. Why does it go back to the original page? I thought it would stay on this one but it reloads it. 

test('choose 2 shows up after you click draw', async () => {
    const theElement = await driver.findElement(By.xpath('//button[@id="draw"]'))
    await theElement.click()
    const header = await driver.findElement(By.id("choose-header"))
    const displayed = await header.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})


