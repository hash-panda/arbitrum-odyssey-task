import { openLink } from '.'

export const weekInfo = () => {
    return [
        {
            key: 'week1',
            label: '第 1 周',
            range: '北京时间6月22日凌晨01:00 - 北京时间6月28日凌晨00:59',
            endTime: '2022-06-28 00:59',
            description:
                '使用跨链桥将 ETH 跨链到 Arbitrum。将ETH资产（注意：仅支持ETH且不要求跨链金额）接入Arbitrum，您即可获得1枚NFT。此外，如果您使用的跨链桥是在跨链周内累计跨入Arbitrum网络的ETH交易量最多的桥，您还会额外获得1枚NFT。',
            galaxyLink: 'https://galaxy.eco/arbitrum/campaign/GCCNzUtQiW',
            status: 'current',
            appInfo: [
                { title: 'Bungee', description: '跨链聚合器', url: 'https://bungee.exchange/' },
                { title: 'Hashflow', description: '跨链桥', url: 'https://app.hashflow.com/' },
                { title: 'Hop', description: '跨链桥', url: 'https://app.hop.exchange/' },
                { title: 'Connext', description: '跨链桥', url: 'https://bridge.connext.network/' },
                { title: 'BoringDAO', description: '跨链桥', url: 'https://oportal.boringdao.com/twoway' },
                { title: 'Celer', description: '跨链桥', url: 'https://cbridge.celer.network/' },
                { title: 'Composable', description: '跨链桥', url: 'https://mosaic.composable.finance/' },
                { title: 'LI.FI', description: '跨链桥', url: 'https://transferto.xyz/' },
                { title: 'Degate', description: '跨链桥', url: 'https://bridge.degate.com/' },
                { title: 'Multichain', description: '跨链桥', url: 'https://bridge.multichain.org/#/router' },
                { title: 'Across', description: '跨链桥', url: 'https://across.to/' },
                { title: 'Rubic', description: '跨链桥', url: 'https://app.rubic.exchange/' },
                { title: 'Rango', description: '跨链桥', url: 'https://app.rango.exchange/swap/' },
                { title: 'Router Protocol', description: '跨链桥', url: 'https://app.routerprotocol.com/swap' },
                { title: 'deBridge', description: '跨链桥', url: 'https://app.debridge.finance/deswap' },
                { title: 'Varen', description: '跨链桥', url: 'https://varenx.com/swap/' },
            ],
            articles: [
                {
                    date: '2022年6月24日',
                    title: "imToken Iliad：加入Arbitrum's Odyssey，双倍奖励，双倍乐趣（操作教程）",
                    abstract:
                        '你如果用imtoken钱包里面完成了同样的奥德赛任务，你将再获得imtoken所带来的另一份奖励，并不耽误奥德赛的任务奖励，这样说来是你如果在imtoken完成了奥德赛任务，既得到了奥德赛的NFT奖励，又得到了imtoken的NFT奖励，所以可以在imtoken上面做奥德赛可以获得双重的NFT奖励',
                    author: '社会主义接班人',
                    type: 'article',
                    url: 'https://mirror.xyz/0x5B8c65ffa85fF42695B2f96A3B6eB6E45BBB4AdD/kg1LUyNEY8D-FaVHMVAZgGeh66JJK7u-8XJp_Ab11VE',
                    authorUrl: 'https://twitter.com/VIP8888883',
                },
                {
                    date: '2022年6月24日',
                    title: '第一周跨链桥：十几个跨链桥怎么选？怎么做最节省成本？',
                    abstract: 'Arbitrum奥德赛超详细教程。0:00 简介，0:51 活动规则介绍，1:35 跨链桥的选择，3:21 实操演示（Bungee&Hop）~~',
                    author: '鉴叔',
                    type: 'video',
                    url: 'https://www.youtube.com/watch?v=-0US1GGFS04',
                    authorUrl: 'https://twitter.com/jianshubiji',
                },
                {
                    date: '2022年6月22日',
                    title: 'Arbitrum Odyssey奥德赛活动攻略',
                    abstract:
                        'Arbitrum Odyssey 为期共8周，每周都可以通过完成特定任务获取奖励 NFT。其中第1周为跨链桥周，在官方列出的19条第三方跨链桥中任意一条桥中完成ETH资产跨链操作，即可获取1枚任务奖励 NFT，此外如果跨链使用的是接入ETH成交量最大的桥的用户将获取额外的一枚NFT。第2周开始每周需要与从 Arbitrum 生态56个项目中由社区投票选出的2个项目完成交互，每周可以获取2枚任务对应的奖励 NFT。任务奖励 NFT 共16枚，获得其中13个就可以获得 Odyssey 最终奖励 NFT。所有的 NFT 都需要参与者达成任务目标后通过Web3 数字凭证服务商 Project Galaxy（Arbitrum链）手动铸造。',
                    author: '共识部落',
                    type: 'article',
                    url: 'https://mirror.xyz/0x8cd6515471A9bcea4521C0e343A1673D802eC79F/1ETN-dpobbyZqhbXnSaAFTA2Hmc1dvQ5zkTbgKpeB8U',
                    authorUrl: 'https://mirror.xyz/0x8cd6515471A9bcea4521C0e343A1673D802eC79F',
                },
                {
                    date: '2022年6月22日',
                    title: 'Arbitrum奥德赛第1周 跨链桥交互攻略',
                    abstract:
                        '在Arbitrum奥德赛第1周里，通过官方最新列出的19条第三方跨链桥，将ETH资产（注意：仅支持ETH且不要求跨链金额）接入Arbitrum，您即可获得1枚NFT。此外，如果您使用的跨链桥是在跨链周内累计跨入Arbitrum网络的ETH交易量最多的桥，您还会额外获得1枚NFT。',
                    author: '共识部落',
                    type: 'article',
                    url: 'https://mirror.xyz/0x8cd6515471A9bcea4521C0e343A1673D802eC79F/G3F8Cp0T_IGNzAMUEtiDPGQKenX8GX4L1nlsx59t74A',
                    authorUrl: 'https://mirror.xyz/0x8cd6515471A9bcea4521C0e343A1673D802eC79F',
                },
                {
                    date: '2022年6月22日',
                    title: 'Arbitrum奥德赛第一周：跨链桥',
                    abstract: '手把手喂饭教程，无脑看视频操作即可~~',
                    author: '十一地主',
                    type: 'video',
                    url: 'https://www.youtube.com/watch?v=L1K2SU-ux8k',
                    authorUrl: 'https://weibo.com/u/1735433913',
                },
                {
                    date: '2022年6月20日',
                    title: 'Arbitrum 奥德赛 跨链桥周 Footprint 数据看板',
                    abstract: '奥德赛跨链周数据看板~~~',
                    author: '1chioku',
                    type: 'article',
                    url: 'https://www.footprint.network/@1chioku/Arbitrum-Odyssey',
                    authorUrl: 'https://www.footprint.network/@1chioku',
                },
            ],
            kolSay: [
                {
                    author: '十一地主',
                    url: 'https://twitter.com/11dizhu/status/1539443646742728704',
                    avatar: 'https://pbs.twimg.com/profile_images/1483732750423461898/_gL85WzO_400x400.jpg',
                    content:
                        '撸arb 奥德赛的跨链桥1：用新地址，尤其不要用已经被hop、op定位女巫的地址；2：先去币安等把ETH提到op，再跨到arb；每个地址都这么做，不要互转；3：用尚未发币的桥+数据面领先的桥，稳妥一些的话，都用一遍。layer2 到 layer 2 花不了很多钱。',
                },
                {
                    author: 'superalloy.eth',
                    url: 'https://twitter.com/chrislee0033/status/1539606275142852608',
                    avatar: 'https://pbs.twimg.com/profile_images/1519650580104646656/2gfCl5si_400x400.jpg',
                    content:
                        'Arbtrum 奥德赛跨链周小总结。 1、参与任务的项目方，只有Hop、Connext使用子图凭证，也就意味着目前只有这两者能实时更新，只要跨链交互就可以看到任务完成。2、bungee官方回复，如果选用hop通路，可以同时完成两者的跨链任务，只是hop是马上快照，bungee是一周后快照，跨链金额是算在bungee上。',
                },
            ],
        },
        {
            key: 'week2',
            label: '第 2 周',
            range: '北京时间6月29日凌晨01:00 - 北京时间7月5日凌晨00:59',
            endTime: '2022-07-05 00:59',
            status: '',
            description:
                'Yield Protocol（借贷协议）<br /><br /> GMX（去中心化永续交易所）：<br />① 在 <span class="text-violet-600">https://gmx.io/trade</span> 开立一个杠杆交易；<br />② 在 <span class="text-violet-600">https://gmx.io/trade</span> 做一个swap；<br />③ 在 <span class="text-violet-600">https://gmx.io/buy</span> 铸造GLP。',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'Yield Protocol', description: '借贷协议', url: 'https://yieldprotocol.com/' },
                { title: 'gmx', description: '去中心化永续交易所', url: 'https://gmx.io' },
                { title: 'gmx-trade', description: 'GMX swap', url: 'https://gmx.io/trade' },
                { title: 'gmx-buy', description: 'GMX 铸造 GLP', url: 'https://gmx.io/buy' },
            ],
            articles: [
                {
                    date: '2022年6月27日',
                    title: 'medium: GMX Arbitrum Odyssey(奥德赛 GMX 第二周任务说明)',
                    abstract:
                        'GMX将在本周的Arbitrum Odyssey活动中亮相。为了获得独家的Arbi-verse NFT，参与者需要在GMX平台上完成以下所有三个任务。1. 在 https://gmx.io/trade 开立一个杠杆交易；2. 在https://gmx.io/trade 做一个swap；3. 在 https://gmx.io/buy 铸造GLP',
                    author: 'GMX官方',
                    type: 'article',
                    url: 'https://medium.com/@gmx.io/gmx-arbitrum-odyssey-fc12cba2d10d',
                    authorUrl: 'https://twitter.com/GMX_IO/status/1541408600760807424',
                },
            ],
            kolSay: [],
        },
        {
            key: 'week3',
            label: '第 3 周',
            range: '北京时间7月5日凌晨01:00 - 北京时间7月12日凌晨00:59',
            endTime: '2022-07-12 00:59',
            status: '',
            description: 'Aboard Exchange（永续衍生品合约协议）和 TofuNFT（多链 NFT 平台）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'Aboard Exchange', description: '永续衍生品合约协议', url: 'https://aboard.exchange' },
                { title: 'TofuNFT', description: '多链 NFT 平台', url: 'https://tofunft.com' },
            ],
            articles: [],
            kolSay: [],
        },
        {
            key: 'week4',
            label: '第 4 周',
            range: '北京时间7月12日凌晨01:00 - 北京时间7月19日凌晨00:59',
            endTime: '2022-07-19 00:59',
            status: '',
            description: 'ApeX Protocol（永续合约协议）和 Uniswap（DEX 平台）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'ApeX Protocol', description: '永续合约协议', url: 'https://tofunft.com' },
                { title: 'Uniswap', description: 'DEX 平台', url: 'https://app.uniswap.org' },
            ],
            articles: [],
            kolSay: [],
        },
        {
            key: 'week5',
            label: '第 5 周',
            range: '北京时间7月19日凌晨01:00 - 北京时间7月26日凌晨00:59',
            endTime: '2022-07-26 00:59',
            status: '',
            description: 'IZUMI Finance & YIN Finance（流动性优化协议）和 1inch（DEX 平台）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'IZUMI Finance', description: '流动性优化协议', url: 'https://izumi.finance' },
                { title: 'YIN Finance', description: '流动性优化协议', url: 'https://yin.finance' },
                { title: '1inch', description: 'DEX 平台', url: 'https://app.1inch.io/' },
            ],
            articles: [],
            kolSay: [],
        },
        {
            key: 'week6',
            label: '第 6 周',
            range: '北京时间7月26日凌晨01:00 - 北京时间8月2日凌晨00:59',
            endTime: '2022-08-02 00:59',
            status: '',
            description: 'Swapr（自动做市商）和 DODO（主动做市商）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'Swapr', description: '自动做市商', url: 'https://swapr.eth.limo/' },
                { title: 'DODO', description: '主动做市商', url: 'https://dodoex.io' },
            ],
            articles: [],
            kolSay: [],
        },
        {
            key: 'week7',
            label: '第 7 周',
            range: '北京时间8月2日凌晨01:00 - 北京时间8月9日凌晨00:59',
            endTime: '2022-08-09 00:59',
            status: '',
            description: 'TreasureDAO（去中心化 NFT 系统）和 BattleFly（区块链游戏）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'TreasureDAO', description: '去中心化 NFT 系统', url: 'https://www.treasure.lol' },
                { title: 'BattleFly', description: '区块链游戏', url: 'https://www.battlefly.game' },
            ],
            articles: [],
            kolSay: [],
        },
        {
            key: 'week8',
            label: '第 8 周',
            range: '北京时间8月9日凌晨01:00 - 北京时间8月16日凌晨00:59',
            endTime: '2022-08-16 00:59',
            status: '',
            description: 'Idea Market（去中心化创意信息市场）和 SushiSwap（DEX 平台）',
            galaxyLink: 'https://galaxy.eco/arbitrum',
            appInfo: [
                { title: 'Idea Market', description: '去中心化创意信息市场', url: 'https://ideamarket.io' },
                { title: 'SushiSwap', description: 'DEX 平台', url: 'https://www.sushi.com' },
            ],
            articles: [],
            kolSay: [],
        },
    ]
}
