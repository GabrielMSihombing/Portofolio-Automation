import { driver } from "@wdio/globals";

export default async function scroll(fromY, toY) {
    await driver
        .action('pointer')
        .move({ x:300, y: fromY})
        .down()
        .pause(200)
        .move({ x:300, y: toY, duration:500})
        .up()
        .perform()

}