# changeTitleJS

## 说明

> ​	在用户离开和返回网页后,修改网页的标题和网页图标

## 使用方式

### First, include changeTitle.js in your site:

```javascript
<script src="https://turbo.github.io/js/turbo.js"></script>
```

### Second,call the following function:

```javascript
changeFocusWeb(
				"我藏好了哦~",
				"https://file.ajungle.cn/img/hashiqi.png",
				"被你发现了",
				"https://file.ajungle.cn/img/cry.png",
				"https://nv.ajungle.cn/images/favicon.png",
				true,
				1000,
				5000
			)
```

### `changeFocusWeb`方法参数说明

```javascript
		/**
		 * @param {String} leaveWebTitle 离开页面展示的标题
		 * @param {String} leaveWebIconURL 离开页面展示的图标
		 * @param {String} returnWebTitle 返回页面展示的标题
		 * @param {String} returnWebIconURL 返回网站展示的标题
		 * @param {String} defaultWebIconURL 网页初始没有图标默认展示的图标(正常状态)
		 * @param {boolean} isScrollText 文字是否滚动展示
		 * @param {long} scrollTextAfterTime 多久时间后开始滚动展示
		 * @param {long} backToOriginTime 返回页面后多久恢复正常展示状态
		 */
```

