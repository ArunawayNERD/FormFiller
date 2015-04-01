/**
 * Created by Johnny on 1/15/2015.
 */
function getIDs()
{
    var inputs, idlist;

    inputs = document.getElementsByTagName("input");
    idlist = window.location.hostname + ":";

    for(var i = 0; i < inputs.length; i++)
    {
        idList = idlist + "," + inputs[i].id;
    }

    return idlist;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var responce = "";

    switch(request.funcName)
    {
        case "getIDs" :   responce = getIDs();
                        break;
    }

    sendResponse(responce);
});