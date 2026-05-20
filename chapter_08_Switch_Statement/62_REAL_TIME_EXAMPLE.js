let responseCode = 200;
// 1= mon, 2. = tue
switch (responseCode) {
    case 200:
        console.log('200 OK')
        break;
    case 404:
        console.log('404 Not found')
        break;

    default:
        console.log("No status code match");

}