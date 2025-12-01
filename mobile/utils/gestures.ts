export default class Gestures {

    static async swipeLeft() {
        const { width, height } = await driver.getWindowSize();

        const startX = width * 0.8;
        const endX = width * 0.2;
        const y = height * 0.5;

        await driver.touchPerform([
            { action: "press", options: { x: startX, y: y } },
            { action: "wait", options: { ms: 300 } },
            { action: "moveTo", options: { x: endX, y: y } },
            { action: "release" }
        ]);

        await driver.pause(500);
    }

    static async swipeUp() {
        const { width, height } = await driver.getWindowSize();

        const startY = height * 0.8;
        const endY = height * 0.2;
        const x = width * 0.5;

        await driver.touchPerform([
            { action: "press", options: { x: x, y: startY } },
            { action: "wait", options: { ms: 300 } },
            { action: "moveTo", options: { x: x, y: endY } },
            { action: "release" }
        ]);

        await driver.pause(500);
    }

    static async scrollDownUntilVisible(selector: WebdriverIO.Element) {
        let visible = await selector.isDisplayed();

        while (!visible) {
            await this.swipeUp();
            visible = await selector.isDisplayed().catch(() => false);
        }
    }
}
