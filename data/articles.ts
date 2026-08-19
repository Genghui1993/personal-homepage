export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  coverImage?: string;
  tag?: string;
}

export const wechatConfig = {
  accountName: "AI 知识手记",
  accountBio:
    "这里没有难懂的技术黑话。持续分享 AI 工具、Agent 搭建、实用 Prompt，让每一位普通人看得明白，学完就能动手实践。",
  /**
   * 必须是公网可访问的 RSS 地址（Vercel 访问不到你电脑上的 127.0.0.1）
   * 在 Vercel 项目 Settings → Environment Variables 里配置 WECHAT_RSS_URL
   */
  rssFeedUrl: process.env.WECHAT_RSS_URL ?? "",
};

/**
 * 本地 / 线上保底文章列表
 * 运行 `npm run sync:articles` 会从 WeWe RSS 覆盖写入
 */
export const manualArticles: Article[] = [
  {
    "id": "https://mp.weixin.qq.com/s/734tZrVGSs7A4yd7_sVxFA",
    "title": "AI开始自己上班了：为什么未来最危险的，不是不会用AI的人，而是不会管理AI的人？",
    "excerpt": "AI开始自己上班了：为什么未来最危险的，不是不会用AI的人，而是不会管理AI的人？",
    "date": "2026-08-19",
    "url": "https://mp.weixin.qq.com/s/734tZrVGSs7A4yd7_sVxFA",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze4ZPVDKr85gOhpSt3OJ98z7hANRG33hsVoiaibvkJWVPDBSoTLjD5Sy1KklTCNs7XGyWiblnakYdgkFEa8ibvGAnwibia4lOHEvuyzOA/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/n5vDmXAMaOEY7unvJrycKQ",
    "title": "想学AI的人越来越多，但真正学会的人为什么这么少？",
    "excerpt": "想学AI的人越来越多，但真正学会的人为什么这么少？",
    "date": "2026-08-18",
    "url": "https://mp.weixin.qq.com/s/n5vDmXAMaOEY7unvJrycKQ",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze4ZPVDKr85gOhpSt3OJ98z7hANRG33hsVoiaibvkJWVPDBSoTLjD5Sy1KklTCNs7XGyWiblnakYdgkFEa8ibvGAnwibia4lOHEvuyzOA/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/jUoFG49_M-wTsPU7vpdC6g",
    "title": "AI已经开始“干活”了：而我们还在研究怎么问它问题",
    "excerpt": "AI已经开始“干活”了：而我们还在研究怎么问它问题",
    "date": "2026-08-17",
    "url": "https://mp.weixin.qq.com/s/jUoFG49_M-wTsPU7vpdC6g",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze4ZPVDKr85gOhpSt3OJ98z7hANRG33hsVoiaibvkJWVPDBSoTLjD5Sy1KklTCNs7XGyWiblnakYdgkFEa8ibvGAnwibia4lOHEvuyzOA/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/XHqaBz5iTB7FbwGERn6ebQ",
    "title": "DeepSeek这次不只是升级模型：一个“国产版 Claude Code”来了，普通人也该重新认识 AI Agent",
    "excerpt": "DeepSeek这次不只是升级模型：一个“国产版 Claude Code”来了，普通人也该重新认识 AI Agent",
    "date": "2026-08-14",
    "url": "https://mp.weixin.qq.com/s/XHqaBz5iTB7FbwGERn6ebQ",
    "coverImage": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/zPFaQNDYze6rJ7icEnSicVKO5l4kzxmC2uleibla7bE4lbAjajI4cApkRBM4mzTZ8aWY7wFqNiaU4VO41ylSYeFfDVlWic1a8ulH6x7Yg7r40c5k/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/OMWHF51ATpQIHBZS480nqg",
    "title": "一个人干掉一个团队？AI员工正在悄悄进入普通人的工作",
    "excerpt": "一个人干掉一个团队？AI员工正在悄悄进入普通人的工作",
    "date": "2026-08-13",
    "url": "https://mp.weixin.qq.com/s/OMWHF51ATpQIHBZS480nqg",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze7z2j0LaEJlIGicku6DhNKLMHO5ueHt6e4GJTKZAmibqpKDlTtgW8rkX0U4nkCt6GhpEHvMk3XKjcrNVjQyZ8iaIvGCvaC805qH6E/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/-uwnH55rl0X1ZYkvlXHyKQ",
    "title": "你还在收藏AI工具？Skill才是重点！！！",
    "excerpt": "你还在收藏AI工具？Skill才是重点！！！",
    "date": "2026-08-12",
    "url": "https://mp.weixin.qq.com/s/-uwnH55rl0X1ZYkvlXHyKQ",
    "coverImage": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/zPFaQNDYze6iamxN99ia6X5hjkZaxEDWNFr1fEMVWVCgWXwNzwgbGAaLMia2qZ5krwy1bIBzDZJfvPorxsmic97ribvYjF9sYjbiaxpicnVLkFRKics/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/-4NvqTaHF3-JltVmqmIRUQ",
    "title": "一个简单的倒计时网站，凭什么让全球用户上瘾？背后的赚钱逻辑值得所有创业者学习",
    "excerpt": "一个简单的倒计时网站，凭什么让全球用户上瘾？背后的赚钱逻辑值得所有创业者学习",
    "date": "2026-08-11",
    "url": "https://mp.weixin.qq.com/s/-4NvqTaHF3-JltVmqmIRUQ",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze6ZtnfSxjDcciaYhtkxlVd24tjeBhQV8qzibiazrpCaHicqCzfD7H2noCyjiatkntHLs8Ecc2m2wpoS598ZKCdkGTAs4ic9EWYHEnibq4/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/WFp5O0udc6f-CU1VZNrPAA",
    "title": "别再花冤枉钱！手把手教你0元注册个人微信小程序（2026超详细避坑版）",
    "excerpt": "别再花冤枉钱！手把手教你0元注册个人微信小程序（2026超详细避坑版）",
    "date": "2026-08-10",
    "url": "https://mp.weixin.qq.com/s/WFp5O0udc6f-CU1VZNrPAA",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze4MYM3YHeVBByjwkichichO9vF6DpMylQx0iblQcRCSpjUtpvdjF2by9NFOOh7DuNpRucGFUiaMFwvobgpSSy3YCvpaZI1qtVZM3n0/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/IeOS-qV2880CxuGkNPBbag",
    "title": "《很多人还在问AI问题，而另一批人已经用AI做产品赚钱了》",
    "excerpt": "《很多人还在问AI问题，而另一批人已经用AI做产品赚钱了》",
    "date": "2026-08-07",
    "url": "https://mp.weixin.qq.com/s/IeOS-qV2880CxuGkNPBbag",
    "coverImage": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/zPFaQNDYze69D3WNcYNA5agJFYAD0Cm1pQDLaga9cuYOy7VwUZLziakkLGwmH2yqXcbnXn9LZWeYwoC689J5LhibMuMSIqyxP3QUR43CrGRP4/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/m8asYfwUdnJLQfXVchVWkg",
    "title": "WorkBuddy 自动化踩坑实录：这8个问题不解决，搭一天也跑不通（附解决方法）",
    "excerpt": "WorkBuddy 自动化踩坑实录：这8个问题不解决，搭一天也跑不通（附解决方法）",
    "date": "2026-08-06",
    "url": "https://mp.weixin.qq.com/s/m8asYfwUdnJLQfXVchVWkg",
    "coverImage": "https://mmbiz.qpic.cn/mmbiz_jpg/zPFaQNDYze4FKdNy9S212dZoGXmicYSREj9IBic7oNkXUnEFhtiaGJAwLFmxndudGGibLeaWsvjZ3ejGL65UR9DUGytE5lJJ1FH9zIqoEFC6bh0/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/IYzbswZ-j8amDfo9X2BT2A",
    "title": "《别急着担心AI抢饭碗，真正的变化是：一个普通人开始拥有“小团队能力”》",
    "excerpt": "《别急着担心AI抢饭碗，真正的变化是：一个普通人开始拥有“小团队能力”》",
    "date": "2026-08-05",
    "url": "https://mp.weixin.qq.com/s/IYzbswZ-j8amDfo9X2BT2A",
    "coverImage": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/zPFaQNDYze4AmJqr91p0kh0ZXKegsaXfgPptESkqAIMrMJ66aWZEicbRDMnUlDFQtiasXKqM2bYiat7p4JkAibawNy3AQrs18aQUoMUiaA4icBZ0s/0?wx_fmt=jpeg"
  },
  {
    "id": "https://mp.weixin.qq.com/s/pvqGMTpsRpLIzd6WdpOI0Q",
    "title": "AI不会淘汰你，但会用AI的人会：普通人上手AI的5个真相",
    "excerpt": "AI不会淘汰你，但会用AI的人会：普通人上手AI的5个真相",
    "date": "2026-08-04",
    "url": "https://mp.weixin.qq.com/s/pvqGMTpsRpLIzd6WdpOI0Q",
    "coverImage": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/zPFaQNDYze6cCBbnDL0WZSboXH4iaxlEuUiaFu44wVicpnZjwdvNEfCCYnAJEK6fmjKGZzeBh9yyTBRC3teicuXdic0PWVDUB4OSj16D0tAqPPqU/0?wx_fmt=jpeg"
  }
];

export function isPublicRssUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname !== "localhost" &&
      parsed.hostname !== "127.0.0.1"
    );
  } catch {
    return false;
  }
}
