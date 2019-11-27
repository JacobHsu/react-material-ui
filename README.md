# react-material-ui

[Material-UI](https://material-ui.com/zh/): A popular React UI framework  
`yarn add @material-ui/core`  
[Material Icons](https://material-ui.com/zh/components/material-icons/)  
`yarn add @material-ui/icons`

[App Bar（应用栏）](https://material-ui.com/zh/components/app-bar/)
[Lists（列表）](https://material-ui.com/zh/components/lists/) 列表是对文本或图像的连续、垂直的索引。  
[Dialogs（对话框组件）](https://material-ui.com/zh/components/dialogs/) 对话框将一个任务告知给用户，它包含了一些关键信息，需要用户进行确认。

## react

```js
npx create-react-app material-ui-app
cd material-ui-app
npm start
```

[片段(fragments)](http://react.html.cn/docs/fragments.html)  

## deploy 

package.json

```js
"homepage": "http://yuribenjamin.github.io/my-app"
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

To publish it at https://jacobhsu.github.io/react-material-ui/ 