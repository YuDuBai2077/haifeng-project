console.log("陶河镇网页加载完毕，轮播自动播放");

function goSearch(e) {
    e.preventDefault();

    const input = document.getElementById("searchKey");
    const key = input.value.trim().toLowerCase();

    if (!key) {
        alert("请输入要搜索的内容，例如：屿见农场、红宫、五烈士家祠");
        input.focus();
        return;
    }

    const searchList = [
        {
            title: "屿见农场",
            url: "farm/yujian.html",
            keywords: ["屿见农场", "农场", "农业", "体验", "休闲"]
        },
        {
            title: "红宫",
            url: "spot/honggon.html",
            keywords: ["红宫", "红色研学", "海陆丰革命", "红场", "景点"]
        },
        {
            title: "五烈士家祠",
            url: "spot/wulieshi.html",
            keywords: ["五烈士家祠", "红色文化", "革命遗址", "历史建筑", "景点"]
        },
        {
            title: "陶河脆藕",
            url: "farm/ou.html",
            keywords: ["陶河脆藕", "脆藕",  "农产品", "特产"]
        },
        // {
        //     title: "连樟山地灵芝",
        //     url: "farm/lingzhi.html",
        //     keywords: ["连樟山地灵芝", "灵芝", "山地灵芝", "农产品", "特产", "养生"]
        // },
        {
            title: "陶河铁皮石斛",
            url: "farm/shihu.html",
            keywords: ["陶河铁皮石斛", "石斛", "山地石斛", "农产品", "特产", "养生"]
        }
        // {
        //     title: "山林黄皮",
        //     url: "farm/huangpi.html",
        //     keywords: ["山林黄皮", "黄皮", "水果", "鲜果", "农产品", "特产"]
        // },
        // {
        //     title: "北江河鲜",
        //     url: "food/hexian.html",
        //     keywords: ["北江河鲜", "河鲜", "北江", "现捕现蒸", "美食", "小吃"]
        // },
        // {
        //     title: "笋干焖土猪肉",
        //     url: "food/sunrou.html",
        //     keywords: ["笋干焖土猪肉", "笋干焖肉", "土猪肉", "猪肉", "客家菜", "美食", "小吃"]
        // },
        // {
        //     title: "英德钵仔糕",
        //     url: "food/zugaogao.html",
        //     keywords: ["英德钵仔糕", "钵仔糕", "糕点", "甜品", "美食", "小吃"]
        // },
        // {
        //     title: "手工粉葛羹",
        //     url: "food/gegeng.html",
        //     keywords: ["手工粉葛羹", "粉葛羹", "粉葛", "甜品", "养生", "美食", "小吃"]
        // },
        // {
        //     title: "帮扶团队",
        //     url: "team/index.html",
        //     keywords: ["帮扶团队", "团队风采", "知明行笃", "广东交通职业技术学院", "三下乡", "实践队", "团队"]
        // }
    ];

    const result = searchList.find(item => {
        const title = item.title.toLowerCase();
        const keywords = item.keywords.map(word => word.toLowerCase());

        return title.includes(key)
            || key.includes(title)
            || keywords.some(word => word.includes(key) || key.includes(word));
    });

    if (result) {
        location.href = result.url;
    } else {
        alert("未找到相关内容，请尝试搜索：屿见农场、红宫、五烈士家祠、陶河脆藕、石斛等关键词。");
        input.select();
    }
}

console.log("网页加载完成");
