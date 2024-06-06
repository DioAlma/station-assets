module.exports = {
  chainID: 'columbus-5',
  //lcd: 'https://lcd.terra-classic.hexxagon.io', // Let hexxagon know is we use their infra
  lcd: 'https://lcd-terraclassic.tfl.foundation',
  gasAdjustment: 5,
  gasPrices: {
    uluna: 28.325,
    usdr: 0.52469,
    uusd: 0.75,
    ukrw: 850.0,
    umnt: 2142.855,
    ueur: 0.625,
    ucny: 4.9,
    ujpy: 81.85,
    ugbp: 0.55,
    uinr: 54.4,
    ucad: 0.95,
    uchf: 0.7,
    uaud: 0.95,
    usgd: 1.0,
    uthb: 23.1,
    usek: 6.25,
    unok: 6.25,
    udkk: 4.5,
    uidr: 10900.0,
    uphp: 38.0,
    uhkd: 5.85,
    umyr: 3.0,
    utwd: 20.0,
  },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Classic',
  icon: process.env.CF_PAGES_URL + '/img/chains/TerraClassic.svg',
  isClassic: true,
  explorer: {
    address: 'https://finder.station.money/classic/address/{}',
    tx: 'https://finder.station.money/classic/tx/{}',
    validator: 'https://finder.station.money/classic/validator/{}',
    block: 'https://finder.station.money/classic/block/{}',
  },
  channels: {
    'juno-1': 'channel-20',
    'crescent-1': 'channel-49',
    'axelar-dojo-1': 'channel-19',
  },
  tokens: [
    {
      token: 'uaud',
      symbol: 'AUTC',
      name: 'TerraAUD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraAUDClassic.svg',
      decimals: 6,
    },
    {
      token: 'ucad',
      symbol: 'CATC',
      name: 'TerraCAD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCADClassic.svg',
      decimals: 6,
    },
    {
      token: 'uchf',
      symbol: 'CHTC',
      name: 'TerraCHF Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCHFClassic.svg',
      decimals: 6,
    },
    {
      token: 'ucny',
      symbol: 'CNTC',
      name: 'TerraCNY Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraCNYClassic.svg',
      decimals: 6,
    },
    {
      token: 'udkk',
      symbol: 'DKTC',
      name: 'TerraDKK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraDKKClassic.svg',
      decimals: 6,
    },
    {
      token: 'ueur',
      symbol: 'EUTC',
      name: 'TerraEUR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraEURClassic.svg',
      decimals: 6,
    },
    {
      token: 'ugbp',
      symbol: 'GPTC',
      name: 'TerraGBP Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraGBPClassic.svg',
      decimals: 6,
    },
    {
      token: 'uhkd',
      symbol: 'HKTC',
      name: 'TerraHKD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraHKDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uidr',
      symbol: 'IDTC',
      name: 'TerraIDR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraIDRClassic.svg',
      decimals: 6,
    },
    {
      token: 'uinr',
      symbol: 'INTC',
      name: 'TerraINR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraINRClassic.svg',
      decimals: 6,
    },
    {
      token: 'ujpy',
      symbol: 'JPTC',
      name: 'TerraJPY Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraJPYClassic.svg',
      decimals: 6,
    },
    {
      token: 'ukrw',
      symbol: 'KRTC',
      name: 'TerraKRW Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraKRWClassic.svg',
      decimals: 6,
    },
    {
      token: 'uluna',
      symbol: 'LUNC',
      name: 'Luna Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/LunaClassic.svg',
      decimals: 6,
    },
    {
      token: 'umnt',
      symbol: 'UMNTC',
      name: 'TerraMNT Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraMNTClassic.svg',
      decimals: 6,
    },
    {
      token: 'umyr',
      symbol: 'MYTC',
      name: 'TerraMYR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraMYRClassic.svg',
      decimals: 6,
    },
    {
      token: 'unok',
      symbol: 'NOTC',
      name: 'TerraNOK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraNOKClassic.svg',
      decimals: 6,
    },
    {
      token: 'uphp',
      symbol: 'PHTC',
      name: 'TerraPHP Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraPHPClassic.svg',
      decimals: 6,
    },
    {
      token: 'usdr',
      symbol: 'SDRC',
      name: 'TerraSDR Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSDRClassic.svg',
      decimals: 6,
    },
    {
      token: 'usek',
      symbol: 'SETC',
      name: 'TerraSEK Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSEKClassic.svg',
      decimals: 6,
    },
    {
      token: 'usgd',
      symbol: 'SGTC',
      name: 'TerraSGD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraSGDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uthb',
      symbol: 'THTC',
      name: 'TerraTHB Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraTHBClassic.svg',
      decimals: 6,
    },
    {
      token: 'utwd',
      symbol: 'TWTC',
      name: 'TerraTWD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraTWDClassic.svg',
      decimals: 6,
    },
    {
      token: 'uusd',
      symbol: 'USTC',
      name: 'TerraUSD Classic',
      icon: process.env.CF_PAGES_URL + '/img/coins/TerraUSDClassic.svg',
      decimals: 6,
    },
    {
      token:
        'ibc/7F8A299575858D452509369851605DCD9D4595EB967E805388347FD54852AA62',
      symbol: 'LCG',
      name: 'Lunc Goblins Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/lcg.png',
      decimals: 6,
    },
    {
      token: 'terra17q57jnwrqd6fgvt267lpgnw5muuua2awgq0k6zhkuwryregr827sxljafx',
      symbol: 'TESSLA',
      name: 'Tessla Token',
      icon: 'https://i.ibb.co/LQQ36tq/Tessla.png',
      decimals: 6,
    },
    {
      token: 'terra13d6xlk4d6cfa6c5c7n2ffua5d5fk5ggfq8vsxr34xnxr07nmke0qajzu8y',
      symbol: 'ELON',
      name: 'Elon Token',
      icon: 'https://i.ibb.co/bgtD1rS/Elon.png',
      decimals: 6,
    },
    {
      token: 'terra14mqjm7n23ky3479hmaarzqnwrlmapje08runh5m7a29rz6sunhpsn9pq27',
      symbol: 'SPACEX',
      name: 'SpaceX Token',
      icon: 'https://i.ibb.co/cTPkh0Q/SpaceX.png',
      decimals: 6,
    },
    {
      token: 'terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
      symbol: 'Rakoff',
      name: 'RakoffToken',
      icon: 'https://raw.githubusercontent.com/RakoffToken/assets/main/rakoff.png',
      decimals: 6,
    },
    {
      token: 'terra193q9yuywvzwmwt4nc7dnxh87vupkpe90ezaj44fcgytvd8dek2nqphp97h',
      symbol: 'BNGO',
      name: 'LUNC Bingo',
      icon: 'https://luncbingo.com/icon.png',
      decimals: 6,
    },
    {
      token: "terra12nj5wddk9rr7nzrq5zxgr5wnas2alfrneau6svvcnpak4xa0n3qs2pjq7c",
      symbol: "PILOT",
      name: "Pilot Meme Token",
      icon: "https://i.ibb.co/k8ZQgBP/pilot.png",
      decimals: 6,
    },
    {
      token: "terra1cdgta6yjmqxfq0wu784g449qvf3xfesryl38h47geklfyhr4wt0qfcz47j",
      symbol: "FORCE",
      name: "Force Token",
      icon: "https://i.ibb.co/6BCq2Gy/force.png",
      decimals: 6,
    },
    {
      token: "terra15gjgmln8xj72rf69tx2zlrtcjzzvkcrdvrvfnmxja6kacz07pg0ssflecz",
      symbol: "FOOD",
      name: "Food Token",
      icon: "https://raw.githubusercontent.com/TerraFarming/cw20-assets/main/food_logo.png",
      decimals: 6,
    },
    {
      token: "terra1uc87rulm4j32jk7575c8rhwqfr838jx4a22azvknmfhwzzealkzsg4yw6t",
      symbol: "LWM",
      name: "Lunc Warriors Meme Token",
      icon: "https://raw.githubusercontent.com/LUNC-Warriors-NFT/cw20-token-assets/main/lwm_small.png",
      decimals: 6,
    },
    {
      token: "terra10sfn80av99qkcx3rdpm4rt9hsguadyra5ewyxr",
      symbol: "SON",
      name: "Sonic(k) Token",
      icon: "https://swap.sonikchain.com/sonic32.png",
      decimals: 6,
    },
    {
      token: "terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9",
      symbol: "FROG",
      name: "Frogztrik NFT Token",
      icon: "https://github.com/Fidel2001/station-assets/blob/main/img/coins/FROG.png",
      decimals: 6,
    },
    {
      name: "TeslaX Automobile",
      symbol: "TeslaX",
      token: "terra1t9gw5njcx009ud2ke7txq92hx5v75arsctzch9nyxv0096987c4q9fwvzy",
      icon : "https://i.ibb.co.com/r3dfHWK/IMG-0217.png",
      decimal: 6,
    },
    {
      token:"terra12j3xuxx52cg045qk37ee4k4u4fsgvyuf8d89dh7c9mr706jvxdascahqej",
      symbol: "ROTTI",
      name: "Rottweiler",
      icon: "https://i.ibb.co.com/jRP4s0q/ROTTI.jpg",
      decimals: 6,
    },
    {
      token:"terra12j3xuxx52cg045qk37ee4k4u4fsgvyuf8d89dh7c9mr706jvxdascahqej",
      symbol: "PIZZAB",
      name: "Pizzaboy",
      icon: "https://i.ibb.co.com/YTtCpL9/Pizzaboy.jpg",
      decimals: 6,
    },
  ],
}
