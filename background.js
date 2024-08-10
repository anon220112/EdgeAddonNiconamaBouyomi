chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.startsWith("https://live.nicovideo.jp/watch/")) {
        chrome.tabs.executeScript(details.tabId, { file: "content.js" });
    }
}, { url: [{ urlMatches: 'https://live.nicovideo.jp/watch/*' }] });
