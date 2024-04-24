const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/regalos', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo', changefreq: 'daily', priority: 0.3 },
    { url: '/cart', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=XBOX', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=PLAY+STATION', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=STEAM', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=EPIC+GAMES', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=NINTENDO', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=BATTLE+NET', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=Mobile', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=Origin', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=Riot+Games', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?platform=Otra', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?types=game', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?types=giftCard', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?types=item', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?types=moneda', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?types=pack', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Aventura', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Pelea', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Carrera', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Deporte', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Estrategia', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Otro', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?category=Terror', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Rocket+League', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Fortnite', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Warzone', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=CS+GO', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Valorant', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Free+Fire', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=League+of+Legends', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=FIFA+22', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=New+World', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Roblox', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=FIFA+23', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Call+of+Duty+Mobile', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Call+of+Duty+Modern+Warfare+2', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Mobile+Legends', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=FIFA+21', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Pokemon+GO', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Genshin+Impact', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Minecraft', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Wild+Rift', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Pixel+Worlds', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Clash+of+Clans', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Clash+Royale', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Lords+Mobile', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=PUBG', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=PUBG+Mobile', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Albion+Online', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Dota+2', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Elden+Ring', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Lego+Saga', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Fallout+76', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Lost+Ark', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=World+of+Warcraft', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=WOW+Classic+ERA', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=WOW+WotLK+Classic', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=ARK%3A+Survival+Evolved', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=GTA+5', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Rust', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Sea+of+Thieves', changefreq: 'daily', priority: 0.3 },
    { url: '/catalogo?game=Valheim', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/balance', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/inventory', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/inventory/add', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/order', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/qas', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/sale', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/question', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/store', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/profile', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/support', changefreq: 'daily', priority: 0.3 },
    { url: '/checkout', changefreq: 'daily', priority: 0.3 },
    { url: '/purchase', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/0', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/1', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/2', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/3', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/4', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/15', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/buy/5', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/6', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/7', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/9', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/10', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/11', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/12', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/13', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/sell/14', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/regalos/201', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/101', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/102', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/103', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/104', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/105', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/106', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/107', changefreq: 'daily', priority: 0.3 },
    { url: '/help-center/frequent/108', changefreq: 'daily', priority: 0.3 },
    { url: '/term-condition/101', changefreq: 'daily', priority: 0.3 },
    { url: '/term-condition/102', changefreq: 'daily', priority: 0.3 },
    { url: '/term-condition/103', changefreq: 'daily', priority: 0.3 },
    { url: '/term-condition/104', changefreq: 'daily', priority: 0.3 },
    { url: '/term-condition/105', changefreq: 'daily', priority: 0.3 },
    { url: '/security-privacy/101', changefreq: 'daily', priority: 0.3 },
    { url: '/security-privacy/102', changefreq: 'daily', priority: 0.3 },
    { url: '/security-privacy/103', changefreq: 'daily', priority: 0.3 },
    { url: '/security-privacy/104', changefreq: 'daily', priority: 0.3 },
    { url: '/security-privacy/105', changefreq: 'daily', priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  res.end(xmlString);
};