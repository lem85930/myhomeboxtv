var rule = {
            title:'小鴨影音',
            host:'https://777tv.ai',
            url: '/vod/show/id/fyfilter',
            searchUrl: '/vod/search/page/fypage/wd/**.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}/page/fypage{{fl.year}}',
            filter: {"1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"劇情片","v":"11"},{"n":"戰爭片","v":"12"},{"n":"動畫電影","v":"24"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"美國","v":"/area/美國"},{"n":"歐美","v":"/area/歐美"},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"新加坡","v":"/area/新加坡"},{"n":"英國","v":"/area/英國"},{"n":"泰國","v":"/area/泰國"},{"n":"德國","v":"/area/德國"},{"n":"法國","v":"/area/法國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"俄羅斯","v":"/area/俄羅斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"週人氣","v":"by/hits_week"},{"n":"月人氣","v":"by/hits_month"}]}],"2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"台劇","v":"14"},{"n":"日劇","v":"15"},{"n":"美劇","v":"16"},{"n":"韓劇","v":"20"},{"n":"港劇","v":"21"},{"n":"海外劇","v":"31"},{"n":"紀錄片","v":"22"},{"n":"微短劇","v":"34"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"美國","v":"/area/美國"},{"n":"歐美","v":"/area/歐美"},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"新加坡","v":"/area/新加坡"},{"n":"英國","v":"/area/英國"},{"n":"泰國","v":"/area/泰國"},{"n":"德國","v":"/area/德國"},{"n":"法國","v":"/area/法國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"俄羅斯","v":"/area/俄羅斯"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"週人氣","v":"by/hits_week"},{"n":"月人氣","v":"by/hits_month"}]}],"29":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"美國","v":"/area/美國"},{"n":"歐美","v":"/area/歐美"},{"n":"大陸","v":"/area/大陸"},{"n":"中國大陸","v":"/area/中國大陸"},{"n":"臺灣","v":"/area/臺灣"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"新加坡","v":"/area/新加坡"},{"n":"英國","v":"/area/英國"},{"n":"泰國","v":"/area/泰國"},{"n":"德國","v":"/area/德國"},{"n":"法國","v":"/area/法國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"俄羅斯","v":"/area/俄羅斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"週人氣","v":"by/hits_week"},{"n":"月人氣","v":"by/hits_month"}]}],"30":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"美國","v":"/area/美國"},{"n":"歐美","v":"/area/歐美"},{"n":"大陸","v":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"韓國","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"英國","v":"/area/英國"},{"n":"德國","v":"/area/德國"},{"n":"法國","v":"/area/法國"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"俄羅斯","v":"/area/俄羅斯"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"週人氣","v":"by/hits_week"},{"n":"月人氣","v":"by/hits_month"}]}]},
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'okhttp/4.1.0',
                // "Cookie": "searchneed=ok"
            },
            	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
	        29:{cateId:'29'},
	        30:{cateId:'30'}
	},
            class_name:'電影&電視劇&綜藝&動漫', 
	    class_url:'1&2&29&30',
            lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else if (/\\/share/.test(url)) {
			url = getHome(url) + request(url).match(/main.*?"(.*?)"/)[1];
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
            limit: 6,
            推荐: 'li.stui-vodlist__item;li;*;*;*;*',
            double: true, // 推荐内容是否双层定位
            一级:'li.stui-vodlist__item .stui-vodlist__thumb;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
            二级: {
                "title":"h1&&Text;p.data--span:eq(0)&&a&&Text",
                "img":".lazyload&&data-original",
                "desc":"p.data:eq(2)&&Text;;;p.data:eq(1)--span&&Text;",
                "content":".stui-content__desc&&Text",
                "tabs":"body&&.stui-pannel.clearfix .stui-pannel__head.clearfix:not(:contains(劇情介紹))",
                "lists":".stui-content__playlist:eq(#id)&&li"
            },
            detailUrl:'/vod/detail/id/fyid.html', 
            搜索: 'ul.stui-vodlist.clearfix li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
}
