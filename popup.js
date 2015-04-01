/**
 * Created by Johnny on 1/15/2015.
 */
(function () {

    "use strict";

    document.addEventListener('DOMContentLoaded', function () {

        document.getElementById('fillForm').addEventListener('click', function () {
            chrome.runtime.sendMessage({ func: "fillForm" });
          window.close();
        });
        document.getElementById('getIDs').addEventListener('click', function () {
            chrome.runtime.sendMessage({ func : "getIDs" });
            window.close();
        });
        document.getElementById('edit').addEventListener('click', function () {
            chrome.tabs.create({
                url: chrome.extension.getURL("edit.html")
            });
            window.close();
        });
    });
}());

//function fillForm()
//{
//    getIDs();
//    document.write("test");
//}
//
//function getIDs()
//{
//    chrome.contextMenus.onClicked.addListener(function(info, tab) {
//        if (tab)
//            chrome.tabs.sendMessage(tab.id, {funcName:"getIDs"}, function(response) {
//                splitIDs(response);
//            });
//    });
//}
//
//function splitIDs(IDList)
//{
//
//}
