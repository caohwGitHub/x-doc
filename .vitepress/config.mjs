import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gains Network 文档",
  base: "/docs/",
  description: "Gains Network 官方文档 - 去中心化杠杆交易平台",
  head: [
    // 添加 Tawk.to 脚本
    [
      'script',
      { type: 'text/javascript' },
      `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); 
      (function(){ 
        var s1=document.createElement("script"), s0=document.getElementsByTagName("script")[0]; 
        s1.async=true; 
        s1.src='https://embed.tawk.to/68b2bd085b034c23e1c00e50/1j3t34qm4'; 
        s1.charset='UTF-8'; 
        s1.setAttribute('crossorigin','*'); 
        s0.parentNode.insertBefore(s1,s0); 
      })();`
    ]
  ],
  // 重写路径规则：将 zh/ 下的文件映射到根路径
  rewrites: {
    'zh/index.md': 'index.md',
    'zh/:path*': ':path*'
  },

  // 全局主题配置
  themeConfig: {
    logo: "/logo.svg",

    // 搜索功能配置
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Clear search query",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/GainsNetwork" },
      { icon: "twitter", link: "https://twitter.com/GainsNetwork_io" },
      { icon: "discord", link: "https://discord.gg/GainsNetwork" },
    ],
  },

  // 多语言配置
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "Gains Network 文档",
      description: "Gains Network 官方文档 - 去中心化杠杆交易平台",
      themeConfig: {
        // 中文界面文本
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        outlineTitle: '本页目录',
        link: "/",
        nav: [
        ],
        sidebar: [
          {
            text: "🚀 开始使用",
            items: [
              { text: "📖 什么是 Gains Network", link: "/what-is-gains-network" },
              { text: "⚡ 快速开始", link: "/getting-started" },
              { text: "🧠 基础概念", link: "/basic-concepts" },
            ],
          },
          {
            text: "🏗️ Gains Network",
            items: [
              { text: "🌐 网络概述", link: "/gains-network/overview" },
              { text: "💰 代币经济学", link: "/gains-network/tokenomics" },
              { text: "🏛️ 治理", link: "/gains-network/governance" },
              { text: "🗺️ 路线图", link: "/gains-network/roadmap" },
            ],
          },
          {
            text: "📊 gTrade (杠杆交易)",
            items: [
              { text: "📈 交易概述", link: "/gtrade/overview" },
              { text: "🎯 如何开始交易", link: "/gtrade/getting-started" },
              { text: "💡 交易策略", link: "/gtrade/trading-strategies" },
              { text: "🛡️ 风险管理", link: "/gtrade/risk-management" },
              { text: "💳 手续费", link: "/gtrade/fees" },
            ],
          },
          {
            text: "🎁 忠诚度计划",
            items: [
              { text: "🎖️ 计划概述", link: "/loyalty-programs/overview" },
              { text: "🤝 如何参与", link: "/loyalty-programs/how-to-participate" },
              { text: "🏆 奖励机制", link: "/loyalty-programs/rewards" },
            ],
          },
          {
            text: "👥 社区",
            items: [
              { text: "📋 社区指南", link: "/community/guidelines" },
              { text: "🤲 贡献指南", link: "/community/contributing" },
              { text: "📱 社交媒体", link: "/community/social-media" },
            ],
          },
          {
            text: "💎 奖励池",
            items: [
              { text: "🏊 池概述", link: "/reward-pools/overview" },
              { text: "⛏️ 流动性挖矿", link: "/reward-pools/liquidity-mining" },
              { text: "🔒 质押奖励", link: "/reward-pools/staking-rewards" },
            ],
          },
          {
            text: "❓ 帮助",
            items: [
              { text: "🙋 常见问题", link: "/help/faq" },
              { text: "🔧 故障排除", link: "/help/troubleshooting" },
              { text: "📞 联系支持", link: "/help/contact-support" },
            ],
          },
          {
            text: "🌉 跨链桥",
            items: [
              { text: "🔗 桥接概述", link: "/bridges/overview" },
              { text: "🚀 如何使用桥接", link: "/bridges/how-to-bridge" },
              { text: "🌐 支持的网络", link: "/bridges/supported-networks" },
            ],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "Gains Network Docs",
      description: "Official Gains Network Documentation - Decentralized Leveraged Trading Platform",
      themeConfig: {
        // 英文界面文本
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change language',
        outlineTitle: 'On this page',

        nav: [
        ],
        sidebar: [
          {
            text: "🚀 Getting Started",
            items: [
              { text: "📖 What is Gains Network", link: "/en/what-is-gains-network" },
              { text: "⚡ Quick Start", link: "/en/getting-started" },
              { text: "🧠 Basic Concepts", link: "/en/basic-concepts" },
            ],
          },
          {
            text: "🏗️ Gains Network",
            items: [
              { text: "🌐 Network Overview", link: "/en/gains-network/overview" },
              { text: "💰 Tokenomics", link: "/en/gains-network/tokenomics" },
              { text: "🏛️ Governance", link: "/en/gains-network/governance" },
              { text: "🗺️ Roadmap", link: "/en/gains-network/roadmap" },
            ],
          },
          {
            text: "📊 gTrade (Leveraged Trading)",
            items: [
              { text: "📈 Trading Overview", link: "/en/gtrade/overview" },
              { text: "🎯 Getting Started with Trading", link: "/en/gtrade/getting-started" },
              { text: "💡 Trading Strategies", link: "/en/gtrade/trading-strategies" },
              { text: "🛡️ Risk Management", link: "/en/gtrade/risk-management" },
              { text: "💳 Fees", link: "/en/gtrade/fees" },
            ],
          },
          {
            text: "🎁 Loyalty Programs",
            items: [
              { text: "🎖️ Program Overview", link: "/en/loyalty-programs/overview" },
              { text: "🤝 How to Participate", link: "/en/loyalty-programs/how-to-participate" },
              { text: "🏆 Rewards", link: "/en/loyalty-programs/rewards" },
            ],
          },
          {
            text: "👥 Community",
            items: [
              { text: "📋 Community Guidelines", link: "/en/community/guidelines" },
              { text: "🤲 Contributing", link: "/en/community/contributing" },
              { text: "📱 Social Media", link: "/en/community/social-media" },
            ],
          },
          {
            text: "❓ Help",
            items: [
              { text: "🙋 FAQ", link: "/en/help/faq" },
              { text: "🔧 Troubleshooting", link: "/en/help/troubleshooting" },
              { text: "📞 Contact Support", link: "/en/help/contact-support" },
            ],
          },
        ],
      },
    },
  },
});