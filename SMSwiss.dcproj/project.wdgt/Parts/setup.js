/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "accountList": { "creationFunction": "CreateList", "dataArray": ["Item 1", "Item 2", "Item 3"], "dataSourceName": "accountDataSource", "labelElementId": "label", "listStyle": "List.EDGE_TO_EDGE", "sampleRows": 5, "useDataSource": true },
    "accountNameLabel": { "creationFunction": "CreateText", "text": "Acc. Name:" },
    "clearLabel": { "creationFunction": "CreateText", "text": "Clear:" },
    "counter": { "creationFunction": "CreateText" },
    "done": { "creationFunction": "CreateGlassButton", "onclick": "showFront", "text": "Done" },
    "info": { "backgroundStyle": "black", "creationFunction": "CreateInfoButton", "foregroundStyle": "white", "frontID": "front", "onclick": "showBack" },
    "label": { "creationFunction": "CreateText", "text": "Item" },
    "newButton": { "creationFunction": "CreateButton", "leftImageWidth": 10, "onclick": "clearSMS", "rightImageWidth": 10, "text": "New" },
    "passwordLabel": { "creationFunction": "CreateText", "text": "Password:" },
    "phoneBookLabel": { "creationFunction": "CreateText", "text": "This option allows to filter the result of the phone book search. Only phone numbers of the specified type are shown." },
    "popup": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "onchange": "showSettingPage", "options": ["Accounts", "Settings", ["Phone Book", "PhoneBook"], "About"], "rightImageWidth": 16 },
    "providerLabel": { "creationFunction": "CreateText", "text": "Provider:" },
    "providerList": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "onchange": "globalSetXtraAccountSettings", "options": [["Sunrise", "0"], ["Calecom", "1"], ["Yallo", "2"], ["ETHZ", "3"]], "rightImageWidth": 16 },
    "proxyLabel": { "creationFunction": "CreateText", "text": "Proxy address:" },
    "proxyPortLabel": { "creationFunction": "CreateText", "text": "Proxy port:" },
    "selectedAccount": { "creationFunction": "CreatePopupButton", "leftImageWidth": 10, "onchange": "globalSetRunningAccount", "options": [["", "account0"], ["", "account1"], ["", "account2"], ["", "account3"], ["", "account4"]], "rightImageWidth": 16 },
    "sendButton": { "creationFunction": "CreateButton", "leftImageWidth": 10, "onclick": "sendNewSMS", "rightImageWidth": 10, "text": "Send" },
    "statusDesc": { "creationFunction": "CreateText" },
    "text": { "creationFunction": "CreateText", "text": "Advanced:" },
    "text1": { "creationFunction": "CreateText", "text": "Enable phone book filtering:" },
    "text2": { "creationFunction": "CreateText", "text": "Phone number type to display:" },
    "text3": { "creationFunction": "CreateText", "text": "Vibration:" },
    "text4": { "creationFunction": "CreateText", "text": "SMSwiss is an open source widget created and supported by: Elia Palme, Beat Birkhofer, David and Vladimir Knobel" },
    "text5": { "creationFunction": "CreateText", "text": "If you like SMSwiss please make a donation and support us to improve the widget and make it even better!" },
    "userNameLabel": { "creationFunction": "CreateText", "text": "User name:" },
    "xtraAcountSettingLabel": { "creationFunction": "CreateText", "text": "x" }
};
