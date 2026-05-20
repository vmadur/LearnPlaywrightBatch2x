let browser = "Edge";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
    case "Safari":
        console.log("Apple Browser - uses javaScript engine");
        break;
    default:
        console.log("Unknown browser - manual testing needed");

}