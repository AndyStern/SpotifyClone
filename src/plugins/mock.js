// src/plugins/mock.js
import Mock from 'mockjs';

// 定义一个数据模板
const artists = [
  { name: 'Gareth Emery', albums: 235, mvs: 26, avatar: 'http://p1.music.126.net/9_vLehfxGoOmw8Tyed4DQQ==/109951170124282199.jpg' },
  { name: 'Vylet Pony', albums: 93, mvs: 1, avatar: 'http://p1.music.126.net/1cPZYfouNUg7DLawgCsb4A==/109951166606684712.jpg' },
  { name: 'David Guetta 大卫·库塔', albums: 524, mvs: 231, avatar: 'http://p1.music.126.net/Oou3lGcwi3iNuEdtXMthvg==/109951165434738280.jpg' },
  { name: 'Twillights Dusk', albums: 3, mvs: 0, avatar: 'http://p1.music.126.net/QCyQ9TNP7ywO4jyAMEOXxQ==/109951169742596855.jpg' },
  { name: 'ODESZA', albums: 68, mvs: 19, avatar: 'http://p1.music.126.net/3zIp8oegeIYcpnbPlVn7Yw==/109951169761061933.jpg' },
  { name: 'Peder B. Helland', albums: 122, mvs: 13, avatar: 'http://p1.music.126.net/n87FkZ2N5hPiV5kBU2JPiA==/109951166312331020.jpg' },
  { name: 'Laura Brehm', albums: 75, mvs: 5, avatar: 'http://p1.music.126.net/p0Pt2B0a6-qEk61Zo_VqoA==/18716986439721602.jpg' },
  { name: 'TheFatRat 克里斯蒂安·弗里德里希·约翰内斯·布特纳', albums: 73, mvs: 10, avatar: 'http://p1.music.126.net/Zzh2LO1b20GA1MMcGX840g==/109951169854899378.jpg' },
  { name: 'Kelly Andrew', albums: 39, mvs: 0, avatar: 'http://p1.music.126.net/qex6nDBQ1QqDnUHBOvaeuw==/109951163559513699.jpg' },
  { name: 'Toby Fox 托比·福克斯', albums: 12, mvs: 1, avatar: 'http://p1.music.126.net/1v0s2Vra64EGvHEPfcdj4w==/109951167080689608.jpg' },
  { name: 'S3RL', albums: 344, mvs: 2, avatar: 'http://p1.music.126.net/vp9e4jQLUj-5OzOaB2XKpA==/109951166554755727.jpg' },
  { name: 'Beyond 超越', albums: 139, mvs: 204, avatar: 'http://p1.music.126.net/9aCJYVD0JZ0NckqAn3a_3w==/109951165566993818.jpg' },
  { name: 'yonewaka', albums: 70, mvs: 2, avatar: 'http://p1.music.126.net/guK1WdoDoXZR9ivvT1UQ6Q==/109951167566661804.jpg' },
  { name: 'Rick Astley 理查德 · 艾斯利', albums: 77, mvs: 17, avatar: 'http://p1.music.126.net/MaI4CEQpH-s0NX3LODnA6Q==/109951165683714741.jpg' },
  { name: 'HIBE', albums: 7, mvs: 1, avatar: 'http://p1.music.126.net/IGIjsjrcAGv87x-h4MiS0Q==/109951164612082650.jpg' },
  { name: 'DJ Soviet', albums: 64, mvs: 1, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
  { name: 'Addliss', albums: 15, mvs: 0, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
  { name: 'Ben Prunty Music', albums: 2, mvs: 0, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
  { name: '塞壬唱片-MSR', albums: 213, mvs: 18, avatar: 'http://p1.music.126.net/J8mrQPu9oKSva8ziYrGmJQ==/109951164481886292.jpg' },
  { name: 'Ahrix', albums: 43, mvs: 0, avatar: 'http://p1.music.126.net/cqw3vzXSdGTix9Ot9Q7w-A==/109951169743487748.jpg' },
  { name: 'O-Zone', albums: 21, mvs: 4, avatar: 'http://p1.music.126.net/xUzAsZ0_fKuFhn1meMLXvg==/212205744178253.jpg' },
  { name: 'LukHash', albums: 51, mvs: 1, avatar: 'http://p1.music.126.net/R_uZnbqRZPGTHj2ImE-CLg==/630020162727356.jpg' },
  { name: 'Kyle Xian', albums: 323, mvs: 1, avatar: 'http://p1.music.126.net/twBw99ZnWtrDGo44nl1CJA==/109951163730254269.jpg' },
  { name: 'Various Artists 欧美群星', albums: 1008976, mvs: 931, avatar: 'http://p1.music.126.net/MseTGtzDA9r230WAMWwNGA==/1401877333278177.jpg' },
  { name: 'Cris Velasco', albums: 25, mvs: 1, avatar: 'http://p1.music.126.net/FcJoBZkePz3D9QkVJ5Cedg==/6633353650627402.jpg' },
  { name: 'Darin', albums: 77, mvs: 43, avatar: 'http://p1.music.126.net/r880GkvYhxlI7-XmaCMLBw==/109951166779657304.jpg' },
  { name: 'Skyro', albums: 0, mvs: 8, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
  { name: 'welphen', albums: 12, mvs: 0, avatar: 'http://p1.music.126.net/Yx0JCVK7NXCVBEFwKxAvJg==/18801648836932571.jpg' },
  { name: 'Vicetone', albums: 139, mvs: 59, avatar: 'http://p1.music.126.net/Ucmd6K_1MdDajm0UJfwXEw==/109951168707700747.jpg' },
  { name: 'Vanguard Sound', albums: 79, mvs: 1, avatar: 'http://p1.music.126.net/KirSrXEN__a9YER9Ou99dw==/3240260768084625.jpg' },
];

// 配置Mock路由
Mock.mock('/api/artists', 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: {
      list: artists,
      total: artists.length,
      page: 1,
      limit: artists.length,
    },
  };
});

Mock.mock('/api/artists/search', 'get', (options) => {
  const query = options.query.q.toLowerCase();
  const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(query));
  return {
    code: 200,
    message: 'success',
    data: {
      list: filteredArtists,
      total: filteredArtists.length,
      page: 1,
      limit: filteredArtists.length,
    },
  };
});

Mock.mock('/api/music', {
  'songs|5': [
    {
      'id|+1': 1,
      'title': function() {
        const titles = [
          'Reception (Soty & Seven24 R.I.',
          'The World Has A Heartbeat',
          'Missing You',
          'U',
          'Elise'
        ];
        return titles[this.id - 1];
      },
      'url': function() {
        const mp3Urls = [
          'http://music.163.com/song/media/outer/url?id=25791611.mp3',
          'http://music.163.com/song/media/outer/url?id=2046581934.mp3',
          'http://music.163.com/song/media/outer/url?id=2018438690.mp3',
          'http://music.163.com/song/media/outer/url?id=28381278.mp3',
          'http://music.163.com/song/media/outer/url?id=1432449833.mp3'
        ];
        return mp3Urls[this.id - 1];
      },
      'cover': function() {
        const coverUrls = [
          'http://p2.music.126.net/ol5I7So8kHncjiFWLLYb8Q==/2262794929978909.jpg',
          'http://p1.music.126.net/UbVH1s9sPV0BWpn3GnCS2w==/109951168605439586.jpg',
          'http://p1.music.126.net/KWoN3IjJ-ly0FVpwAvAPvQ==/109951168271980087.jpg',
          'http://p2.music.126.net/QCEvpxsB8mqLcAoGAmA0lw==/109951163190458116.jpg',
          'http://p1.music.126.net/66R8h-SIEa-iOKooet3Cqw==/109951164820798927.jpg'
        ];
        return coverUrls[this.id - 1];
      }
    }
  ]
});