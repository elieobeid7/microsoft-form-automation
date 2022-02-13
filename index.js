require('dotenv').config();
const {chromium} = require('playwright');

const number_of_answers = process.env.NUMBER_OF_ANSWERS;
const form_url = process.env.FORM_URL;

function randomInput(max) {
    let min = 0;
    max = max - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function automate() {

    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();
    // Go to form_url
    await page.goto(form_url);


    // always Si
    await page.locator('input[role="radio"]').first().click();


    await page.locator('input[name="rcb5df87ed98d4e22a62216a7dec2d851"]').nth(randomInput(2)).click();

    // sexo 3 choices
    await page.locator('input[name="r474da291a3ce4710967d4de12e89ee42"]').nth(randomInput(3)).click();

    await page.locator('input[name="rf89d89377a0d4c829264494cb1252f1a"]').nth(randomInput(4)).click();

    await page.locator('input[name="rc2b37e54a9d54520b60ccdffb148ab03"]').nth(randomInput(6)).click();


    await page.locator('input[name="r67ab387044a1430496bc8973f5b2a11d"]').nth(randomInput(5)).click();


    // always Si
    await page.locator('input[name="r4bbf30a4d071453aad78cc791368548d"]').first().click();


    await page.locator('input[name="r2fdffdbb761f45fd8c1382ae6652d9fc"]').nth(randomInput(4)).click();


    await page.locator('input[name="r1cc5b92fbb7e4cfd90c7028c2145ae96"]').nth(randomInput(2)).click();


    await page.locator('input[name="rb98d2ac39b984d87a2108d5e63b4e89a"]').nth(randomInput(2)).click();


    await page.locator('input[name="rc365029efb224167a15002a854a86f13"]').nth(randomInput(3)).click();


    await page.locator('input[name="rce45602e016b4cf59c1657a56d939b71"]').nth(randomInput(3)).click();


    await page.locator('input[name="r39d993603bb64de7aaa69ed1f78af78d"]').nth(randomInput(4)).click();


    await page.locator('input[name="r97a406367e5a47d38170151f93b59dd0"]').nth(randomInput(3)).click();


    await page.locator('input[name="r74467c9d9c9d40e68f07b829c4ff602d"]').nth(randomInput(3)).click();


    await page.locator('input[name="rd70fed248e844a80bd6f9c174b1fa866"]').nth(randomInput(2)).click();


    await page.locator('input[name="rfafaab941c3d44b789fe55c2707c441e"]').nth(randomInput(5)).click();

    // horizotal radio start
    // 1
    await page.locator('input[name="row_r7b038c4804cf495e9283bc7f9a106506"]').nth(randomInput(5)).click();
    // 2
    await page.locator('input[name="row_r41a235a63ad4402e9f5b5cf75bbbbdf5"]').nth(randomInput(5)).click();

    // 3
    await page.locator('input[name="row_r22d85873c2aa43fea2a614fc7dd0e61b"]').nth(randomInput(5)).click();

    // 4
    await page.locator('input[name="row_r50477be47dc945649cc523166edfba15"]').nth(randomInput(5)).click();

    // 5
    await page.locator('input[name="row_rf5a01f2253b241e7b58910e956edbfab"]').nth(randomInput(5)).click();

    // 6
    await page.locator('input[name="row_reefbcf47f286473fb6100390e2deb776"]').nth(randomInput(5)).click();

    // 7
    await page.locator('input[name="row_r9ebe208aff39404c87ac1dd45caeaec6"]').nth(randomInput(5)).click();

    // horizontal radio


    await page.locator('input[name="r7e7c4d67f2c746a3a25ec762ac20feea"]').nth(randomInput(3)).click();


    await page.locator('input[name="re89a36527f7f45498f977eb5cd29ecc3"]').nth(randomInput(5)).click();

    await page.locator('input[name="r896f647352d542708f4c0bd50bdeb236"]').nth(randomInput(3)).click();


    await page.locator('input[name="r1fb10a2681f84329bf449d287eeb26fe"]').nth(randomInput(5)).click();


    await page.locator('input[name="r57ff64ba00054e1d9ef2994a99608d66"]').nth(randomInput(5)).click();


    // Click button[role="button"]:has-text("Submit")
    await page.locator('button[role="button"]:has-text("Submit")').click();
    // // ---------------------
    await context.close();
    await browser.close();
}

async function run() {
    for (let i = 0; i < number_of_answers; i++) {
        let Record = i + 1;
        console.log('adding record ' + Record + '/' + number_of_answers)
        await automate();
        console.log('Done - added record ' + Record + '/' + number_of_answers);
    }
}
run();
