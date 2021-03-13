'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e72739082178da689065ed805cad25ac",
"index.html": "40faf95c2d0438a7467f8bd7ef3a84a5",
"/": "40faf95c2d0438a7467f8bd7ef3a84a5",
"firebase-message-sw.js": "9c7142f7b7779dc84def6a6cd314884c",
"main.dart.js": "c7653d5252d7742a320e38105d639549",
"firebase-app.js": "2aacf9b225caeab96ddaac1c892a6108",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "eea55d481cf4aeb2bc2d7c90eec64a25",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e335ab85278c31ac5a82906c5f1ced2",
"firebase-messaging.js": "0300bb79f4a836fd6b2449fa958d592b",
"assets/AssetManifest.json": "40d9a6834c3b6369ea888083ff67697d",
"assets/NOTICES": "0152d9b9315547eff0398868ea1cc530",
"assets/FontManifest.json": "160909b7efa1ff2b40771fa202070297",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/anim/done.json": "97103dd78b4dd57d5c6492efc45bba69",
"assets/assets/anim/splash.json": "3b8eee6b96c8bd9be69d62fcb9cb7a01",
"assets/assets/anim/book_load.gif": "a0ad1f1e1c550c0162744db38d8fffb9",
"assets/assets/images/svg/empty_cart.svg": "7824d9286fa2d2ef4397d20b5d5fd1c5",
"assets/assets/images/note.png": "e479826505cc9f11227b604bfeac31b5",
"assets/assets/images/loading/frame_46_delay-0.04s.png": "88b91c443214ffa82f408a05ea8536c9",
"assets/assets/images/loading/frame_83_delay-0.04s.png": "4188520eb041246334545bc06a3343d3",
"assets/assets/images/loading/frame_18_delay-0.04s.png": "af5a2e5cb52805e89fe0df27caab2619",
"assets/assets/images/loading/frame_25_delay-0.04s.png": "85e0e0e23697c93469c37eeae1e213f9",
"assets/assets/images/loading/frame_9_delay-0.04s.png": "b6369479a798c11aef5361873c1643ce",
"assets/assets/images/loading/frame_62_delay-0.04s.png": "09028bc7bf84dddae2f030fa308bf5d4",
"assets/assets/images/loading/frame_6_delay-0.04s.png": "a38904f8dd790637404defad517e4ab5",
"assets/assets/images/loading/frame_17_delay-0.04s.png": "b24ed43e425c6b67e24f91e98fe7b49c",
"assets/assets/images/loading/frame_50_delay-0.04s.png": "faa32d0b13149da105f1a268848f618a",
"assets/assets/images/loading/frame_74_delay-0.04s.png": "c30830367785ae003646eca2d42b16e6",
"assets/assets/images/loading/frame_49_delay-0.04s.png": "f9d9979df592b06ca1faee2b5b289df8",
"assets/assets/images/loading/frame_33_delay-0.04s.png": "8409afa7ffc2e21eaa26714e0dc8360c",
"assets/assets/images/loading/frame_34_delay-0.04s.png": "a5db0db8d23b889d8f0f8c87b6677b85",
"assets/assets/images/loading/frame_73_delay-0.04s.png": "89121f3a07f07cb41a6c73be3f0fd353",
"assets/assets/images/loading/frame_57_delay-0.04s.png": "23a49e25a8d0777d71cd18bb39d30e18",
"assets/assets/images/loading/frame_10_delay-0.04s.png": "a8464a348a22777b0531332ae1e27181",
"assets/assets/images/loading/frame_1_delay-0.04s.png": "c605e1e25120c8b3f3ece00c9ae5a07f",
"assets/assets/images/loading/frame_65_delay-0.04s.png": "8ab09c424f56fef3843ec1f289229389",
"assets/assets/images/loading/frame_58_delay-0.04s.png": "34b7beb669ee6c99389c4b22800807ea",
"assets/assets/images/loading/frame_22_delay-0.04s.png": "cde8bc026c5b48b27be33d98c382ed3d",
"assets/assets/images/loading/frame_84_delay-0.04s.png": "c3c54c1b0ced4618d7344dc8ac39bdf0",
"assets/assets/images/loading/frame_41_delay-0.04s.png": "ed0f022108bf1cc3943ae8ef51df2b97",
"assets/assets/images/loading/frame_72_delay-0.04s.png": "9dd30f94c5bdf8f9f93d0485ae7421f5",
"assets/assets/images/loading/frame_35_delay-0.04s.png": "f6880f5754dff963f67f9342928e06fd",
"assets/assets/images/loading/frame_11_delay-0.04s.png": "858c283d619ded176e249576c988d542",
"assets/assets/images/loading/frame_0_delay-0.04s.png": "adb7e97acdc45c4821de29712ee0fa57",
"assets/assets/images/loading/frame_56_delay-0.04s.png": "25eaeb1f2a33367bbefeb21275ee4212",
"assets/assets/images/loading/frame_23_delay-0.04s.png": "f4a2d6f6befa36faf77de35b7517e17a",
"assets/assets/images/loading/frame_85_delay-0.04s.png": "4d2c899948650938f6dc994cb8d86890",
"assets/assets/images/loading/frame_64_delay-0.04s.png": "54bacb30de76b4b5ae28504f88558fc6",
"assets/assets/images/loading/frame_59_delay-0.04s.png": "1aef6ec75cb72a7e80a5a030fbd51d61",
"assets/assets/images/loading/frame_40_delay-0.04s.png": "beb408a8d4bf00a309b017936eca2f64",
"assets/assets/images/loading/frame_47_delay-0.04s.png": "589581e717babf3af141018ee770ba0c",
"assets/assets/images/loading/frame_63_delay-0.04s.png": "24e12827c27f27d6de86d2677efd7db8",
"assets/assets/images/loading/frame_82_delay-0.04s.png": "907aa0c7199491bc828575d1de7c354f",
"assets/assets/images/loading/frame_19_delay-0.04s.png": "0e6b4bce38334ee46f9d291cc2309510",
"assets/assets/images/loading/frame_24_delay-0.04s.png": "cd2136097aa4ebb64987fe2fa1b0da11",
"assets/assets/images/loading/frame_8_delay-0.04s.png": "40a11c0b48bbbeee6aedfecf06a78a4e",
"assets/assets/images/loading/frame_51_delay-0.04s.png": "fccdb56ae81cfae33cca6367f4c6f10e",
"assets/assets/images/loading/frame_7_delay-0.04s.png": "9598f35b49810bf71cb0b8d78ac1b9ff",
"assets/assets/images/loading/frame_16_delay-0.04s.png": "7ec89786be0f34e142a6457b7c90e5cf",
"assets/assets/images/loading/frame_32_delay-0.04s.png": "3a1fbcf1e948cad93ef9a14db498f4e2",
"assets/assets/images/loading/frame_75_delay-0.04s.png": "e9f2632a0c66f5e311e5a8cfc04d8809",
"assets/assets/images/loading/frame_48_delay-0.04s.png": "1b716d18baafbf9b20a7ee50df001caa",
"assets/assets/images/loading/frame_88_delay-0.04s.png": "2b9a012d7e225b8b1dc7f0ea95434f4f",
"assets/assets/images/loading/frame_13_delay-0.04s.png": "76fcbb3454ca443d216cc948aa4e0ee3",
"assets/assets/images/loading/frame_2_delay-0.04s.png": "7e61715783ca52d0529302b60e112d18",
"assets/assets/images/loading/frame_69_delay-0.04s.png": "5aa73d1ba67bb67017b6a848d1b6961a",
"assets/assets/images/loading/frame_54_delay-0.04s.png": "ecb17d9f22ca0f75e2998b4a3857c31c",
"assets/assets/images/loading/frame_70_delay-0.04s.png": "f9c0602e928306b576566ff9f1f9bdaf",
"assets/assets/images/loading/frame_37_delay-0.04s.png": "637131b2bd12028b82ef6a32e709cd0b",
"assets/assets/images/loading/frame_91_delay-0.04s.png": "ac75dbb57555de3fe228ff21b813271b",
"assets/assets/images/loading/frame_42_delay-0.04s.png": "d8f9c1c25957da822493efe58e1d9625",
"assets/assets/images/loading/frame_38_delay-0.04s.png": "d198713d34d62f1e414b2569677a30ff",
"assets/assets/images/loading/frame_87_delay-0.04s.png": "ca31d928e0eb51cd8dbf33967002cb93",
"assets/assets/images/loading/frame_21_delay-0.04s.png": "d28d19dbc1e5be55112de94e6cc436c1",
"assets/assets/images/loading/frame_66_delay-0.04s.png": "533a632f518a580ead7c700a111f03cd",
"assets/assets/images/loading/frame_61_delay-0.04s.png": "0629fe75cf97ef8a925bbb5f8735de0e",
"assets/assets/images/loading/frame_26_delay-0.04s.png": "7a2f75c081194cc585d0cf5f5049fad7",
"assets/assets/images/loading/frame_80_delay-0.04s.png": "a43a4921360566c15995cf40f2849153",
"assets/assets/images/loading/frame_78_delay-0.04s.png": "8ba11d6577d1cf630d3109f0ec9576ef",
"assets/assets/images/loading/frame_45_delay-0.04s.png": "0d5d38ea2507cd6a9b16d56f9fbdb923",
"assets/assets/images/loading/frame_30_delay-0.04s.png": "4baea45c00de6e8422ff9900e6e75f10",
"assets/assets/images/loading/frame_77_delay-0.04s.png": "02903ca9baa0843a4b78e52528c40e05",
"assets/assets/images/loading/frame_53_delay-0.04s.png": "eb1b452db459313557ab23eec03034c0",
"assets/assets/images/loading/frame_5_delay-0.04s.png": "6280cd31a995bfc6ac359aa6747055ec",
"assets/assets/images/loading/frame_14_delay-0.04s.png": "a615236802d55d50607e0a14c2de9dc7",
"assets/assets/images/loading/frame_29_delay-0.04s.png": "312b3f6a173197d9182b3e4ea1096595",
"assets/assets/images/loading/frame_27_delay-0.04s.png": "fa1c9c03d0e491ae3be4940e5d9380ce",
"assets/assets/images/loading/frame_81_delay-0.04s.png": "f42bf41984e15fcd944619671e9725b0",
"assets/assets/images/loading/frame_60_delay-0.04s.png": "1cc59d1f2032096b80f0d2509055f409",
"assets/assets/images/loading/frame_79_delay-0.04s.png": "adf3c88683d475c972a9b7cb0e4b0c9b",
"assets/assets/images/loading/frame_44_delay-0.04s.png": "df7cb6dbb147e1cbec396ee774d2c2d8",
"assets/assets/images/loading/frame_76_delay-0.04s.png": "e162598653a6d09ba6424f5230d7c8b1",
"assets/assets/images/loading/frame_31_delay-0.04s.png": "15a8a48a5cf3148bf51e3dc191329844",
"assets/assets/images/loading/frame_4_delay-0.04s.png": "dcbedf6c9aa73ad25cc52be92bee13aa",
"assets/assets/images/loading/frame_15_delay-0.04s.png": "928f2df2e64df22d15264eb53f038f94",
"assets/assets/images/loading/frame_28_delay-0.04s.png": "8d7d24b40171f9be21478b29bb53ae07",
"assets/assets/images/loading/frame_52_delay-0.04s.png": "635eb4d64dca3b0630f5afb5348fc473",
"assets/assets/images/loading/frame_68_delay-0.04s.png": "fd8406c385790484dee41c6772f67f7f",
"assets/assets/images/loading/frame_55_delay-0.04s.png": "f342d2e8bdfdf9f9a7453a0f666c93e0",
"assets/assets/images/loading/frame_89_delay-0.04s.png": "b0404b5cb2eb0ed1107d06948f9b3368",
"assets/assets/images/loading/frame_12_delay-0.04s.png": "2dccd80dacfa177668b0393fc67b77f9",
"assets/assets/images/loading/frame_3_delay-0.04s.png": "6a60cc1b43ce42ff052093710b3ce1d3",
"assets/assets/images/loading/frame_36_delay-0.04s.png": "39a7ea378803f62fa69b6227c412b3b3",
"assets/assets/images/loading/frame_90_delay-0.04s.png": "cfb801145e9370e2c5c4f75b1617ec66",
"assets/assets/images/loading/frame_71_delay-0.04s.png": "0dc20c667e5e0477206c9cc7dfe11151",
"assets/assets/images/loading/frame_39_delay-0.04s.png": "dff3d6752d5bc32dc9d00f27416c6d3b",
"assets/assets/images/loading/frame_43_delay-0.04s.png": "5329e3b0a5cccd66b9951107fbef9bbf",
"assets/assets/images/loading/frame_67_delay-0.04s.png": "8e35a5a794a142cd6f9429f9d9b80b97",
"assets/assets/images/loading/frame_86_delay-0.04s.png": "1e650ccf95cf1ff0ce711fa85c0ccaec",
"assets/assets/images/loading/frame_20_delay-0.04s.png": "1f67b81631df0d4f50b2683be5d6055a",
"assets/assets/images/research.svg": "be35fd9eec9e0c4f3c9f323b676c3386",
"assets/assets/images/pen.png": "0ad7b57468eb42866116ebf23078aaf6",
"assets/assets/images/empty.png": "07438805e6fdbf65169cb2ace0511cb4",
"assets/assets/images/book_store.png": "d9b58c56b68b60cc44c74645ee307c66",
"assets/assets/images/call-center.png": "b6f95991b2521a031e182dbbfe6b7ba8",
"assets/assets/images/bookstore.svg": "9ce259e1c5ac423c6bed5f6df13d482f",
"assets/assets/images/moon.png": "d03b9f65277bfc3a5ef8a2762882caf1",
"assets/assets/images/users.png": "814d74d66d378f05ccf1999469cf1046",
"assets/assets/images/isbn_ex.png": "1958f7afd95fc018a4cd8179e8028061",
"assets/assets/images/bookstoreDark.svg": "5058a0070d931dc19038b94900942869",
"assets/assets/images/researchDark.svg": "4c1b394160ecc785ffc8d4120248058e",
"assets/assets/images/logo.png": "024c53b0e47731448fb7cced5cd54945",
"assets/assets/images/sib.png": "40145c069fafe4bad08e233806ac7392",
"assets/assets/images/icons/qr-code.svg": "2e99404298c5850efb087a169a196db9",
"assets/assets/images/icons/category.svg": "d2f953711e4d7d8d6197860357117356",
"assets/assets/images/icons/warning.svg": "b22bb47e089bb9f8b94f4e997cf7d167",
"assets/assets/images/icons/notification.svg": "2c22bf5ac3ed2c6347d8e786a49095c8",
"assets/assets/images/icons/edit.svg": "d906a4736487cfcc1351834abbaa8500",
"assets/assets/images/icons/done.svg": "7f4a6228a9724ea2b52411cf800c38db",
"assets/assets/images/minus.svg": "f5012839bf4e0bbd8b3f2336a8fd92e7",
"assets/assets/books/33000.json": "c881cef36952eaed9fad7f9879360624",
"assets/assets/books/51000.json": "51a4d7ee81a30033e730118e89bc8770",
"assets/assets/books/48000.json": "793202dc63dbd77ec5ea9f8f9e2d6b71",
"assets/assets/books/93000.json": "78c1494aadd74e5b4ba9ac9f3d7a2423",
"assets/assets/books/6000.json": "0e3d64121e6925ecb535f724a5feb758",
"assets/assets/books/15000.json": "5c0c5a0dad50da5631a4e0ddbe3eb2fd",
"assets/assets/books/102000.json": "cbc1a83ebc4aa547f4de6cc8fb7872a1",
"assets/assets/books/66000.json": "1351cc1a72fff0b96880a3eb49145fc4",
"assets/assets/books/39000.json": "e0195a16e6f493eea8e1baeebf66b21f",
"assets/assets/books/90000.json": "91002fd351f3e44bc21f3d93f6254af6",
"assets/assets/books/0.json": "d975410cac3c6fba0cffd3b3e3ac123f",
"assets/assets/books/42000.json": "98b1c7737e85359d25b6e4080b2c8fbb",
"assets/assets/books/30000.json": "50f5667f30083d2207ca249425ffedf2",
"assets/assets/books/99000.json": "2b53819f943803ad64688c5654c7c2a2",
"assets/assets/books/108000.json": "bb413cf101b4f87654087f66aa2e52cb",
"assets/assets/books/21000.json": "5c25648d58ac2e121119bdddee96e267",
"assets/assets/books/81000.json": "c2d1c36bba2a6075670a0f6e5afc7d74",
"assets/assets/books/111000.json": "8699b145b00f55f677e7fa9db422e118",
"assets/assets/books/75000.json": "0641e6be7eec9d794029adaf0a81b2ff",
"assets/assets/books/12000.json": "9efda30cec323ebeb91c1476700dd99a",
"assets/assets/books/60000.json": "6dfec5bfb78d97409371374753aad0be",
"assets/assets/books/84000.json": "80ddeb6b9ad52e3a38d71d7562ae81be",
"assets/assets/books/69000.json": "0669068d91c6ca000bf452058f29c8cb",
"assets/assets/books/24000.json": "921c8a40d380a8e835b662da9c03776d",
"assets/assets/books/9000.json": "f0f7365918d502c486cbca89851f8253",
"assets/assets/books/78000.json": "d4b5b22239128f0d1e402c91de50b257",
"assets/assets/books/57000.json": "60a1e42a32a728572fa6faea56dcbbf2",
"assets/assets/books/105000.json": "f3775ec62c1b4343bd5a2edcf6222d53",
"assets/assets/books/18000.json": "72230ead9cf2da7fabd54ca4e2ed2b5e",
"assets/assets/books/27000.json": "8d46857cb260cec8e53c46c22bb8b0d1",
"assets/assets/books/45000.json": "a95ef6375a8ece248fe1acd04e78a7b9",
"assets/assets/books/63000.json": "b0b23381bb253a4f63083505a22066ed",
"assets/assets/books/87000.json": "a33423c148b83e8c4863afab6d81e625",
"assets/assets/books/3000.json": "18b42382b59a4146406c088846950ec1",
"assets/assets/books/72000.json": "784e41dc6bc7e0200c6e09956fb69bd4",
"assets/assets/books/96000.json": "a1e6f28e937e5bc9c3a3ed35d5717b7e",
"assets/assets/books/36000.json": "be204cd1d4b8cebf7d80e344095e89e1",
"assets/assets/books/54000.json": "50079d581b73869b2e709f2e58d08e7a",
"assets/assets/fonts/vazir.ttf": "a13b8405f9588ffde203c9dccc993f40",
"sql-wasm.wasm": "ea7edc8cc0702b48cc93bf41e5b6cc61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
