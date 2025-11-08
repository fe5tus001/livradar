'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7c5ec488f239c0671dfeab9f44f17e98",
".git/config": "e5d147dd8b032b3d2c8fa4170fcbd9b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d523941a22d1dfaa6b64dd6f21a36e80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4984beae82d82341abcff04748668f50",
".git/logs/refs/heads/main": "8351de599a5ae55639080de7efec6863",
".git/logs/refs/remotes/origin/main": "60ca705e4824860514731e3e40c60d97",
".git/objects/01/7b0a297490f163ace1b7177ba61b15d13582e5": "f814b50b4781164cc5070086e906a8c0",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/1b9353f09491a797f55cf553379de28f82b234": "8e905cec405c489f50865ef182dd9d42",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/12/adaec15dea8c226ddb24137fe1e0f97dac27cf": "17fff0774119b978682080f6576f83b0",
".git/objects/18/854ef5200316f1fa7306b60ea71a082bc5f909": "8e118b37543237dfced37cc60515b80a",
".git/objects/21/c23fe857546c17803e3ca72c0cc53ce5ac8495": "1542d45c5cd7c33b9bcf059a675344b5",
".git/objects/21/e4965f2a905f9786009747e10efc0cd531362f": "b4f2ed3ad7ab2eb2ac7388020cac7197",
".git/objects/2d/ece0f4833348235841d632234f74aacf823d7e": "5ac160a4c5af63a76767fe26b9e04662",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/5777ebb73100672e49bb980d0651266aff4b05": "db21daad300f1ff057fe08108acf6fd7",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/11ef19db54aabaa8074e8537676a6aded5fb8f": "1f4e514265800bad5d13b10f2268c773",
".git/objects/39/cfed37df933f87302b477bc44208aeb8439118": "38270fb635a2b9d1138f647b687dd60f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/977f6ef0b54dad5d525343e7e6b1d0282b9f82": "e6d30fa6ff2dc33928331a941b6a7e11",
".git/objects/4e/53552d33a016546f7ba6cefb8feb8e2251ddf6": "c43d058adcb33011d9095026928512b2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/54/419ea3fb49bcd69aa9a8fb5efeb636a413da98": "5afaf0228a501f0e08983c8ab57b1d57",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/756bfcb28b0aa0b203c8ac07465a61023cf70d": "87465b83c1933302299ff44a97bcc527",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/79/18d399ec6068b898fee898cad9af3a3efc1cd0": "73f613fe96d27e63a1cb6b4cba075f02",
".git/objects/80/d99b7b1b459168ecdcb3938d9d9f7e7b7b3a6c": "fedf4e3a3a1ecb00d6419afc1098e583",
".git/objects/83/1acfc956213996ff03e3e0b53322877755587b": "40f22949c87b6ca637b28402eaf9d6dc",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/428630cdb65f848ad2fed731c96c0d26094b4b": "1bd94c9f4ec01893ee64cdfd89ac9563",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/91/1840c2b93e1dae0e5ba54568c1a18b02a189f0": "39cd6732c7244f5ba79ef66390afbc1a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9e/313aceca96d4df90fa21bd8243a8c4d3281a77": "fed483debde3621c9aa248f485fe7df9",
".git/objects/9e/60ba94159f713f6be1585f92a9a7766ceb38fe": "36e16e0377ddb6374175e1487ad3e21c",
".git/objects/9e/b33e0e05f73fc3ecc41ce488a421efe28fc375": "6dc4a0199ddac0ba3d1bc05bbfa7d086",
".git/objects/a1/91fcc9242631c6bb8ef4b510a383f55f4736f1": "f10dc2c3a1ae380290d658b60f01c8ab",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/3b322504f0eaaa8d66cd7acddee2e587c0f7f8": "2956083bbcd5bc6371dd36ef5be6e5f2",
".git/objects/ba/538df912e2d5e9991ff767185607bf2ec9eeb9": "f8cc6480a19a1ce2ab1d9b8e77e3e7b4",
".git/objects/bc/0bf398d9f0977a46e80687dd1e38c182021db6": "4d6baaccd466a06b7ce2f0882b6e1dde",
".git/objects/c9/34d692b0c186b62fc19059003853154f7b06ce": "7ce50fb8a06a87877fa042f075aa0141",
".git/objects/c9/b5d9b7bdd6898ebc448267829cc321760a5d58": "210b680db8c9715f89224ce7a533f89c",
".git/objects/ca/543f443eb0c564b4c192d60c24817c5441481f": "8aa218bec3e2e2840fc5bf405bd45d13",
".git/objects/cd/1b1d23610dae653dda52c99f0e77084ac1f1c4": "a9a7c6b96035072134c0ff0829774d1d",
".git/objects/cf/b89fdda5945df42794a537844a968538145417": "929e95edcf422cef2a3ab8c94c66f155",
".git/objects/d0/a6015c304e582ed018e14a7a6a889a8f7f9d5e": "46bb9dac37102511580961e11f8d8442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/82844a28663392a0db5b8062e801b215be259a": "beb5708328f0c1c3f59d0bc73529f1c5",
".git/objects/d8/40040be0a55f3d112ff55c7267d7c6ea69beb8": "c7c42457ba34e5231042503c48ee5c85",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e4/6e697add3b2150f9333c707f3122cc39db6cac": "33db4dbc2125e633a9fc15c638ac5017",
".git/objects/e6/0afb0a4a312def2c863b41b14937a002f429f9": "d875742e7f7310b50c6d54760b77b2dd",
".git/objects/ed/d32f1e028ae80a456ac0d9c2002a3dab657730": "41685c110785dad61c3e8fe377e8cc44",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/refs/heads/main": "41decdc43da1c1bba290be83ec5b4792",
".git/refs/remotes/origin/main": "41decdc43da1c1bba290be83ec5b4792",
"assets/AssetManifest.bin": "93d4df14e72fc7e6974baf925b9389a6",
"assets/AssetManifest.bin.json": "f336d09bf6642fc88d2ac9ef4c7b743d",
"assets/AssetManifest.json": "7b21a2225593d9abac0dbf6f30382d30",
"assets/assets/app/radar_logo.png": "f86e513e8e4eb540203626b84eb32891",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "febd22fcff1e54ce239c073b35d23543",
"assets/NOTICES": "5ebe63f62cdc490824bdee70ab5e577b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "70e1b8d6a80741e1ea1c1912aaa8e78e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5dbdc5636d3ee04822aca052964be364",
"icons/Icon-192.png": "344be7d5809ca1d96552fca734436834",
"icons/Icon-512.png": "0209979ba9ba2c58166ddb511d34b2dc",
"icons/Icon-maskable-192.png": "344be7d5809ca1d96552fca734436834",
"icons/Icon-maskable-512.png": "0209979ba9ba2c58166ddb511d34b2dc",
"index.html": "7072a05c862748b1889f78cfef1f188e",
"/": "7072a05c862748b1889f78cfef1f188e",
"main.dart.js": "1976dddc6271615e9c710241a6a2f601",
"manifest.json": "1911bb08e74d7cdb9bb151e4e4112e73",
"version.json": "5531bca6ded0182eadbf556cdd2ef311"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
