<!-- default file list -->
*Files to look at*:

<!-- default file list end -->
# How to get row data and event arguments in an event handler inside a template in AngularJS


<strong>Starting with version 16.1</strong>, the 'model' field of an argument object passed to an action is not available in the Angular approach. In addition, the action context does not hold the item object. See <a href="https://www.devexpress.com/Support/Center/VersionHistory?TechnologyName=DevExtreme&PlatformName=AllPlatforms&ProductName=AllProducts&VersionHistoryItemsType=BreakingChanges&StartBuildName=16.1.4&EndBuildName=16.1.4&version-mode=single-mode#BC3433">BC3433 - The action context does not hold an item data object and the 'model' field of an action arguments object is available only in the Knockout approach</a> to learn more. Now it's necessary to use the following syntax to complete this task.<br><br>Markup:<br>


```html
 <div dx-item-alias="itemData" dx-data-grid="grid">
        <div data-options="dxTemplate : { name: 'buttonTemplate' } ">
            <div dx-button="{ text: 'Get Info', onClick: buttonClick(itemData) }"></div>
        </div>
  </div>
```


<br>Controller: <br>


```js
 $scope.buttonClick = function (rowData) {
        return function (event) {
            // event  - current event arguments
            //rowData - an object that contains template data
        }
 }
```



<br/>


