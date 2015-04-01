/**
 * Created by Johnny on 1/15/2015.
 */

function fillForms()
{
   // var clipRaw =;
    //slplit clipboard
    //get setting from mem
    //fill in info
}

function editMap()
{

}

function getIDs()
{
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {funcName: "getIDs"}, function (response) {
            storeIDs(response);
        });
    });
}
function storeIDs(IDList)
{
    IDList.split(",").join(',;');

    chrome.stroage.sync.set({"temp" : IDList}, function (){ });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendresponce){
    switch(request.func)
    {
        case "getIDs" :     getIDs();
                            break;

        case "fillForm" :   fillForms();
                            break;
    }

});
