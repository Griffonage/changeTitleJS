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
			function changeFocusWeb(
				leaveWebTitle,
				leaveWebIconURL,
				returnWebTitle,
				returnWebIconURL,
				defaultWebIconURL,
				isScrollText,
				scrollTextAfterTime,
				backToOriginTime
			) {
				let iconOrigin = document.querySelector('link[rel="icon"]');
				let icon;
				let title;
				let OriginFavicon = iconOrigin == null ? defaultWebIconURL : iconOrigin.href;
				let OriginTitile = document.title;
				let titleTime;

				let text;
				let timerIdAug;
				let intervelArray = new Array();

				document.addEventListener('visibilitychange', function() {
					if (document.hidden) {

						title = leaveWebTitle;
						icon = leaveWebIconURL;

						document.title = title;
						changeFavicon(icon);

						clearTimeout(titleTime);
					} else {

						title = returnWebTitle;
						icon = returnWebIconURL;

						document.title = title;
						changeFavicon(icon);

						titleTime = setTimeout(function() {
							clearAllIntervel();
							document.title = OriginTitile;
							chanageFavicon(OriginFavicon);
						}, backToOriginTime);
					}
					if (isScrollText) {
						text = document.title;
						setTimeout(function() {

							newtext();

						}, scrollTextAfterTime);
					}
				});
				const changeFavicon = link => {
					let $favicon = document.querySelector('link[rel="icon"]');
					// If a <link rel="icon"> element already exists,
					// change its href to the given link.
					if ($favicon !== null) {
						$favicon.href = link;
						// Otherwise, create a new element and append it to <head>.
					} else {
						$favicon = document.createElement("link");
						$favicon.rel = "icon";
						$favicon.href = link;
						document.head.appendChild($favicon);
					}
				};
				function newtext() {
					if (timerIdAug != undefined) {
						clearTimeout(timerIdAug)
					}
					document.title = text.substring(1, text.length) + text.substring(0, 1)
					text = document.title.substring(0, text.length)
					timerIdAug = setTimeout(newtext, 1000);
					intervelArray.push(timerIdAug);
				}
				function clearAllIntervel() {

					for (let i = 0; i < intervelArray.length; i++) {

						clearTimeout(intervelArray[i]);

					}

				}
			}