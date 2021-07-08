const assert = require("assert");

describe('My webdriverIO testing application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await (await $('#username')).setValue('tomsmith');
        await (await $('#password')).setValue('SuperSecretPassword!');
        await (await $('button[type="submit"]')).click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should login with invalid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await (await $('#username')).setValue('asdasd');
        await (await $('#password')).setValue('');
        await (await $('button[type="submit"]')).click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining('Your username is invalid!');
    });
    it('Logout testing', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await (await $('#username')).setValue('tomsmith');
        await (await $('#password')).setValue('SuperSecretPassword!');
        await (await $('button[type="submit"]')).click();

        await (await $('/html/body/div[2]/div/div/a')).click();
        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining('You logged out of the secure area!');
    });
    it('Check with checkboxes', async () => {
        await browser.url(`https://lambdatest.github.io/sample-todo-app`);

        await (await $("*[name='li1']")).click();
        await (await $("*[name='li2']")).click();

        await expect($('h2')).toHaveTextContaining('LambdaTest Sample App');
    });
    it('Add item and check if is there', async () => {
        await browser.url(`https://lambdatest.github.io/sample-todo-app`);

        await (await $("#sampletodotext")).setValue('Test');
        await (await $('input#addbutton.btn.btn-primary')).click();

        let todo = $('/html/body/div[1]/div/div/ul/li[6]/span');
        await expect(todo).toHaveTextContaining('Test');
    });
});

