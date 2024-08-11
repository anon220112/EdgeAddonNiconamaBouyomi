chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.startsWith("https://live.nicovideo.jp/watch/")) {
        chrome.tabs.executeScript(details.tabId, { file: "content.js" });
    }
}, { url: [{ urlMatches: 'https://live.nicovideo.jp/watch/*' }] });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'bouyomi') {
        fetch('http://localhost:50080/Talk?text=' + encodeURIComponent(request.data))
            .then(response => response.json())
            .then(data => {
                sendResponse({ data: data });
            })
            .catch(error => {
                console.error('bouyomi http error:', error);
                sendResponse({ error: error });
            });

        return true;
    }
});