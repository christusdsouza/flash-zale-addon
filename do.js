let flag = 1;  //,intervalID;
browser.browserAction.onClicked.addListener((tab) => {
    activeTab = tab.id;
    if (flag == undefined || flag == 1) {
        browser.notifications.create({
            "type": "basic",
            "title": "FlashZale",
            "message": "clicked; Refresh starts in 10s"
        });
        browser.browserAction.setIcon({
            "path": "icons/stop.svg",
            "tabId": tab.id
        });
        flag = 0;
        //intervalID = 
        window.setInterval(() => {
            browser.tabs.reload()
                .catch(err => { console.log(err); });
        },10000);
    } else {
        browser.notifications.create({
            "type": "basic",
            "title": "FlashZale",
            "message": "unclicked, Page Refresh stopped"
        });
        browser.browserAction.setIcon({
            "path": "icons/play.svg",
            "tabId": tab.id
        });
        flag = 1;
        //No clearinterval() as this auto clears the interval LOL
    }
})