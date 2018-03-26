使用 webpack、pixi.js 来开发微信小游戏。

## 项目初始化
```
npm i
```

## 开发和调试

> 注意：调试需要占用本机的8080端口，请注意端口冲突。

### 在浏览器中调试
```
npm run dev
```
访问 localhost:8080 即可

### 在微信开发者工具中调试
```
npm run dev:wx
```
打开微信开发者工具，新建项目，项目目录设为 `dist`。
启动调试即可。

## 构建

> 将构建至dist目录，并先清空上一次的构建

### HTML5版本
```
npm run build
```

### 微信小游戏版本
```
npm run build:wxgame
```