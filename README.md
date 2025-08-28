# Gains Network 文档

[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646CFF?style=flat-square&logo=vite)](https://vitepress.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> Gains Network 官方文档站点 - 去中心化杠杆交易平台的完整指南

## 📖 项目简介

这是 Gains Network 的官方文档网站，使用 VitePress 构建。提供中英文双语支持，涵盖了 Gains Network 生态系统的完整文档，包括：

- 🚀 快速开始指南
- 🏗️ Gains Network 平台介绍
- 📊 gTrade 杠杆交易教程
- 🎁 忠诚度计划详解
- 👥 社区参与指南
- 💎 奖励池机制
- 🌉 跨链桥接指南
- ❓ 常见问题解答

## 🌐 在线访问

- **中文版本**: [https://docs.gainsnetwork.io](https://docs.gainsnetwork.io)
- **英文版本**: [https://docs.gainsnetwork.io/en/](https://docs.gainsnetwork.io/en/)

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn 包管理器

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/GainsNetwork/docs.git
cd docs

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 开发服务器

启动后访问：
- 本地访问：`http://localhost:5173`
- 局域网访问：`http://[your-ip]:5173`

## 📁 项目结构

```
x-doc/
├── zh/                          # 中文内容目录
│   ├── index.md                 # 中文首页
│   ├── getting-started.md       # 快速开始
│   ├── what-is-gains-network.md # 什么是 Gains Network
│   ├── basic-concepts.md        # 基础概念
│   ├── gains-network/           # Gains Network 相关
│   │   ├── overview.md          # 网络概述
│   │   ├── tokenomics.md        # 代币经济学
│   │   ├── governance.md        # 治理机制
│   │   └── roadmap.md           # 发展路线图
│   ├── gtrade/                  # gTrade 交易相关
│   │   ├── overview.md          # 交易概述
│   │   ├── getting-started.md   # 交易入门
│   │   ├── trading-strategies.md # 交易策略
│   │   ├── risk-management.md   # 风险管理
│   │   └── fees.md              # 手续费说明
│   ├── loyalty-programs/        # 忠诚度计划
│   ├── community/               # 社区相关
│   ├── reward-pools/            # 奖励池
│   ├── help/                    # 帮助中心
│   └── bridges/                 # 跨链桥
├── en/                          # 英文内容目录
│   ├── index.md                 # 英文首页
│   └── ...                      # 对应的英文页面
├── .vitepress/                  # VitePress 配置
│   ├── config.mjs               # 主配置文件
│   └── theme/
│       └── style.css            # 自定义样式
├── public/                      # 静态资源
│   └── logo.svg                 # 网站Logo
├── package.json                 # 项目配置
├── .gitignore                   # Git 忽略文件
└── README.md                    # 项目说明
```

## ⚙️ 配置特性

### 多语言支持

- **中文为默认语言**：访问根路径 `/` 直接显示中文内容
- **英文版本**：通过 `/en/` 路径访问
- **路径重写**：中文内容实际存储在 `zh/` 目录，但用户访问时无需 `/zh/` 前缀

### 搜索功能

- 内置本地搜索功能
- 支持中英文搜索
- 实时搜索结果展示

### 响应式设计

- 移动端友好的响应式布局
- 自适应搜索框宽度
- 优化的移动端导航体验

### 自定义样式

- 调整了搜索框宽度以适应不同屏幕尺寸
- 中文界面文本本地化
- 图标化的侧边栏导航

## 🛠️ 开发指南

### 添加新页面

1. 在对应语言目录下创建 `.md` 文件
2. 在 `.vitepress/config.mjs` 中添加侧边栏配置
3. 确保设置正确的 frontmatter（标题、描述、导航链接等）

### 修改配置

主要配置文件：`.vitepress/config.mjs`

- `rewrites`: 路径重写规则
- `locales`: 多语言配置
- `themeConfig`: 主题配置（侧边栏、导航、搜索等）

### 自定义样式

在 `.vitepress/theme/style.css` 中添加自定义 CSS。

## 📜 可用脚本

```bash
# 开发模式（支持局域网访问）
npm run dev

# 构建生产版本
npm run build  

# 预览构建结果（支持局域网访问）
npm run preview
```

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 内容贡献

- 确保中英文内容保持同步
- 遵循现有的文档结构和风格
- 添加适当的 frontmatter 信息
- 检查链接的有效性

## 📄 许可证

本项目采用 MIT 许可证 - 查看项目根目录下的 LICENSE 文件了解详情。

## 🔗 相关链接

- [Gains Network 官网](https://gainsnetwork.io)
- [gTrade 交易平台](https://gtrade.io)
- [GitHub 仓库](https://github.com/GainsNetwork)
- [Discord 社区](https://discord.gg/GainsNetwork)
- [Twitter](https://twitter.com/GainsNetwork_io)

## ❓ 支持

如果您在使用过程中遇到问题：

- 查看 [常见问题](/help/faq)
- 访问 [故障排除指南](/help/troubleshooting)
- 在 GitHub 上创建 Issue
- 加入我们的 Discord 社区寻求帮助

---

<div align="center">

**[开始使用](getting-started.md)** | **[了解 Gains Network](what-is-gains-network.md)** | **[社区指南](community/guidelines.md)**

Made with ❤️ by the Gains Network team

</div>
