/**
 * Created by Johnny on 1/15/2015.
 */
function getIDs()
{
    var inputs
    var idList;

    inputs = document.getElementsByTagName("input[type=text]");
    idList = window.location.hostname + ":";

    for(var i = 0; i < inputs.length; i++)
    {
        idList = idList + "," + inputs[i].id;
    }

    console.log("test " +idList);
    return idList;
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