'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6781ab9d3c2cc98ab83badfa3b2dd8b1",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed",
"index.html": "6da60b08a5c1ffd9e82389045bdfa6e3",
"/": "6da60b08a5c1ffd9e82389045bdfa6e3",
"main.dart.js": "a5d6723f77298fefd4b8f6589fbb009e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "72cad981e0d097a949dd9cf47669cdca",
".git/objects/0d/0857888ccbe4e03f94dbb383b111e32a70e84c": "2d71034ca21766ae66b7723b0f006045",
".git/objects/0c/50da82e0ba7a87a01d2864dd52684b9a6b58d1": "16765661cd1bc6f15e9e9c2a11b88698",
".git/objects/68/fb6eba892921255eaafe01ae14728696b099cf": "62a026fc4eea3be0f22c9de08e0d3bb3",
".git/objects/68/5f550fab8d9e0751fd96fa3229249713e884b1": "3c35263a032479958e71c5773a86b094",
".git/objects/9e/6d666e9aede2c93aa28785b3d390280254131e": "de126ec3cfb8ba925bbea61dab3b7f60",
".git/objects/9e/e26b422788ba8d7935218d3e4b81cb9a885146": "327b78b7c92f78e41ea317ac535f64c5",
".git/objects/04/489adb6f5a87fbe53dd5b9e67a4109fd7c967b": "4e97fed83786453417374206223a10f3",
".git/objects/51/de637e7776bfc85744df76d1c18d2537fdc0c5": "5d5cf4601f32f67ac46cc3336f02bd29",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/c9f536450a760d6a6c785d8effb4aa18f72278": "9b441d228141e941f86caffc18496d3f",
".git/objects/0b/f09fd844ff05a21b84baab1a995b340d415461": "582240a54203486ea644f6a6ef5ad616",
".git/objects/93/71439ba478eb82264f2a40ff64ba99ea51bc7b": "12d6b4d66d7cd52c89670c05bcca944b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/b056b7cc3cdee98c649da8e4e22ecbc1676099": "3d38e6f9ce768f8e06fdfbe0863c13bc",
".git/objects/9d/1be462140e7b19a1f51f51363545ded9289ec6": "b695a46be9cf5224c29a3f33886cb23e",
".git/objects/02/f664b765394fa021c5b27a79f2dfdcdac13ee2": "e0e059aabfd5ad0769afdbfe12199014",
".git/objects/b5/2b84b2044290abb34272242adb471c259502db": "d596c320b2a2b31d74f83d6fb1cdc6e7",
".git/objects/ac/8a31a4fc8f3d47ee65ecbdf2605d45c737a009": "883eb07e52fc596f8744a44619c0fe58",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "cd16b25b5a14ef3b3a935dc0757990b4",
".git/objects/be/f5ad74e61e78b18535e3f17d9e68053e5ecc04": "4f31bc174fdf8ffa830467ea27777f33",
".git/objects/b3/8cbb35206040145715f85604b132f0019b9c8a": "29b197d4884eb65ead019161de706490",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/e08f2a6f0b6ad1bd566005d2f8e3a25d671b37": "c71607817640c0ae1bf3de4c3e5e2bfb",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/cabb69c7856ebb38c503b00a9b1fc70d1edc51": "b2c34d98a1ad9eb24d86adda64038868",
".git/objects/f4/8fa9d1ed64ad5b421492adc79becb634332add": "f162e49f0e0dc1de912c5b83e315ff8b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e1af1001fad7966287434337f991e4829fae28": "ee7938960994b203cbc0dc40866bd801",
".git/objects/c0/8595fe0d88c5f0c5de178c30b5a9937cb894f5": "abf05ab8aeee4e2c8210c90c847c4449",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/fd1eb5e5a5d5e8655dcf04054f768aebf002a9": "4eb9808194b5355f8696c7d136708b12",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cd5af4fe9726c32591a4eb7c0b228e32e91d55": "1d88debc2fb03d246dea65ccecf13bb2",
".git/objects/f2/a0dbfbc33efa196215c0f2bbcc57d6b5010897": "0f5b0bd0acecfa9b7e1053d663ea5e09",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/b5959a496b261f9f17e670b310d5f1150066cb": "b304f1780173f5f4e0ba1f72a27573e2",
".git/objects/29/46f266b6bbd46fedda5a13341e841269f2ef05": "273264496bb36b2cf195cd26f5351e63",
".git/objects/16/78cb3810b81b3d117a4001e2935455097972b5": "11fce0291cfcf09833d8bf4ae593bac3",
".git/objects/45/6f4020a0ccba1bdf065071741d4edfea91c766": "f58fb0c867598185c68a345acc78b208",
".git/objects/80/38e91815af252f66e086e969d6f03d0a76b7a4": "5e5b8ccb3c7d8108a8c942936528ffe4",
".git/objects/74/6afd064fd6d9781afe31f2b0298eb1898e3dfb": "2415a56d596660393fafa75b7a10aaa4",
".git/objects/74/4e31d15b8ef39590102ea9d484a2ecbd84ede6": "71611d445a6c17cfdc34d777df2dcbd7",
".git/objects/1a/cf0c010c52ba6b2fe6be4d3fbd600c062f1eed": "853269acbf101c668b68ce872c0be5ca",
".git/objects/1a/da5a831950cac685e98e76c624cfb2441525a0": "5d98fc7c3ef0ecddb56412b21b983a4d",
".git/objects/1a/22864ba2cdb19097902883facafd45ec63e7aa": "b0302b5f8a7e1a05d71b03e6870989f1",
".git/objects/17/957a412a5bd184439f5e18c8940bde28d6ce48": "ee8b011fef910d3580010b41cd4bc655",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/e35f0fe8da8ac1a918fc28f879ec23142ce39c": "90b2761e4b6331afa8af3f8617376b84",
".git/objects/4c/d1ad7c9d26b6aa9e24e715807b7193d93408d3": "97d735b80a7c62ed8c7c91f865dff767",
".git/objects/81/b02f9e02ca3a6baf5986ecb304593ca581e9d3": "12de1740189b01b8330082ddd94ee5c6",
".git/objects/72/4ffec2424176250ca6016f23461ee6e32bd026": "59192fb57378933d2a58764d8b1ba9bc",
".git/objects/2a/81f963238992c4693013a08b34906836b68665": "9e4d5fcd538f6495882fc25aba1ab32f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/dd1c5a066edca51448a96b2407547dba9c2597": "86a15b40a201d3b8c6d08cf0b3051d64",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/5c/e739982ca9e692b3f0a659922551573dd32fa9": "57342f54e8de3c7000fb4bb7135bb719",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/4010c060d918057a935cc76d0317bc073a9a29": "f0f88ed6ac9e4ee109adf0156236a688",
".git/objects/31/442f7d085bf29c6526d727b53c06d65d4db40b": "ce1d0124b2c23f692fde10fe5184fc1b",
".git/objects/31/0b6e0dae134bb8a406ba031380bb6f7d2e56c4": "4e5a08e69226c8d60013ac4015ea188d",
".git/objects/96/4e6c732a6da3c71efce043d32f7feab88a679b": "33881171534edf3bb227be2a126eb04e",
".git/objects/54/4a0338983804e04146bee8870b8e4da14d7944": "2671a3e0067fd4ddf8681e8b0e2c2c32",
".git/objects/98/c578412a794ec403e53aa1ff0f0358e34a0933": "2a7b60196e04f0b29e676a17a2ed0354",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/37/de1b7986924b80217cc7a2c12700881d295eaf": "6d1d4ffa40ab74c4086266b4f077775e",
".git/objects/39/701ecb9a1ecc62ef327d28f193a47cf3a89d99": "47ca2b5d03709e5103f02d63c92cedc9",
".git/objects/55/567fe9f583d021130a4d20f561ade5442896ba": "9c140dcf5ecdb2dc58ea99fc1ffbb9a5",
".git/objects/0f/8377f44eebd86bdb2f4a95934d25db2642d8b4": "db4614abf15196df90959705c0b7409b",
".git/objects/64/dea7d64b14ee89dfe1ee40b1b2381793ab5963": "56650880708c0004e49a19dc9fdc4193",
".git/objects/bf/fc86e67530c0f0678115c9c042565ffa6da159": "63d7664b8fe942840083f29038e5195b",
".git/objects/d3/25e756e9e82f4aa1ebfeb19710ac60e2ab98af": "8ac09dfec3ccd09e99c2ae64cd4fe235",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/86d9e92570eee4644aa7d86693a88b1baeb13d": "fe6953475a6775fecfc394a799430865",
".git/objects/b8/64679ead86003c0a2cafb959c705768551b651": "c4cf3e3ab3eddb401cc19ba300f747fa",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e68d68d62f85d816c54861f898890e61f1ab3b": "18bbbeae521a184d85c2a683d0adad90",
".git/objects/de/2968ac1d3fc73d63be5545d624e1054778d8d7": "42661097b376d4a8341ab2966fb5a09b",
".git/objects/a6/2b9038ea9950f2c19a60ffe6bd6a8109f86044": "d66ba8cfbd3fb131d85c20e59ea22b8d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fcbc7b7795b56cdf0c5cd8be30d76775d2dd7d": "85c8d52a32275171f34eaefa53b7c1af",
".git/objects/ef/87e27f250ffa8a732586c3d1bbae3aa75e8ba7": "86ef7ad580f8ff1e46d1b7bcacfe525f",
".git/objects/c4/bb81b6424bfc386529269d3b984401160a42f1": "d52387288dd6813ecf20a2bf0374a5b5",
".git/objects/cd/dd291332fe51c301c0706467a265955f1b7243": "f87e198f743fb1266485d3ae0f237079",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f9/396f220cb7c3bfe297c6468d0df1c8b6cfe056": "95b4e1afdb50661688af3581ab2b942c",
".git/objects/f9/211c42f68983862602a7dc7e31692a69b1dcdf": "f47b1de79c8b03af3fe8a6c6ba662919",
".git/objects/f1/537df9961f92555b6271626ceb2d3f6426dedb": "17ea853aeb150e07c244f4211565334a",
".git/objects/e7/786752929a5a307319dfb8748d2577e318985d": "51e41c6d3696cb4931d3f382d7a188db",
".git/objects/cb/50dbe04164e3b7cb7d7ba689df126c4b9b8b55": "28519c9699e026d29d5b7efeaa33a84f",
".git/objects/cb/7027151ac49086acdb432cf378317e0d67926c": "7ebe6dadf61bd1f3aeda6fd5a095320c",
".git/objects/f8/5495b1c0d758a745aa66f8eec7e5fadc88f471": "429629fa52e66a013808b91a40b3348e",
".git/objects/e0/f0562f67c82a2980610040e6111afb21e905e6": "c479ba013f8dde33c40f40d799d3c1bf",
".git/objects/e0/694f796f9af9d720bffb65b848c97def750cf6": "1481c14566923be2fed9bf7177dd74bf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/1292ef1db8ac2da8fb739a2e90f67c676f39ed": "3c5a2fad9580d047c0279ce7b09e4f74",
".git/objects/2d/3b3e4ee2a973ccc5ce71d24dd6f2504adc68cc": "e46558d4aaf8016e16b4aee791bf379d",
".git/objects/2d/87e9c2ed3bd3ef499c4936b931379d1a6d06f2": "d7c3d3a5c8eefa51e959e8aa6cbe5a7a",
".git/objects/41/ec93d403628f694d37f4747d06885a186d5fc7": "3d4205d670ea5d5909f7d8aea58ceff3",
".git/objects/41/e1c05de458bf030f83a5bdccb45fcb42d6ff55": "ccc9f6069e598ec45b22dc1463f6239f",
".git/objects/84/4cffd1c00fbba69c00db7cc9565cce8cb8e8a5": "ae646f7a103a3bf96cf0c6ff6ff8985c",
".git/objects/4a/78e4d48791334890f716e7c2b2c44f2bbc1c20": "44b7ce8a9c177238c0a2fa66b4826253",
".git/objects/4a/6f0c6563b3da09c0b58abb4e9802db92df8048": "42b735a8255974705d87264298609988",
".git/objects/15/72c4d73528b2d7e8551f51007e9b96f87e652f": "8ee3f2e56d3bc6af4cd17672605449ab",
".git/objects/85/3f02486ced11267e427dc83f506af2fc857988": "84f28b5dff54aab1554b0e8f3c6c9a6d",
".git/objects/1d/24673cd0d59dfff7a2c1bf9ddb4e96f2304571": "f8cab62002a9890a694cef2ecdd214ab",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/3fefd9c14145f16a3e8121a8256796c0af88a4": "44e80e5fb48d4f6dae585252f40b418a",
".git/objects/2b/4174fb22bec76e28e96099ed120fe0dfde2f13": "f624fa80d82616cf03de416b308e3ca0",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/13/f6fdc8872903350bb27b9bdff62dc062af45e5": "77fbbf14c81ee2778b0f19a78f7ab1a9",
".git/objects/7a/432c0cde899d8771369586e812d28db991f944": "1e25aa1c3c9521fcfbb9174c22f0a587",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cd84f4c74cbf8c9b4de776e94a76527",
".git/logs/refs/heads/main": "6cd84f4c74cbf8c9b4de776e94a76527",
".git/logs/refs/remotes/origin/main": "c809f2a930ec1c113173f735615007ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "15df215931040f9790f14fa6face1262",
".git/refs/remotes/origin/main": "15df215931040f9790f14fa6face1262",
".git/index": "182b18735818c2ce95db5bbd5ed02cb2",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "e57621f8f1a8b59ba4b000109d9db3e0",
"assets/AssetManifest.json": "b2675446dd9001ddf5b512e9bc291c8e",
"assets/NOTICES": "4b6b7ed59add1c173f87ea11085c8bcc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ae58dc69ad8677a44ccb63fd32c8d0f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc8ab354ba712392618772e62f8198f5",
"assets/fonts/MaterialIcons-Regular.otf": "9e623aee84bfc924faf686363927beb8",
"assets/assets/images/iphone-frame.png": "e42357a8c3921ba7cb87b7e8ab99dd03",
"assets/assets/images/iphone-frame-2.png": "784090dfc7adfa653df74349b640ce60",
"assets/assets/images/iphone-frame-3.png": "2591f9a139127dfa711527e2c0a5c343",
"assets/assets/videos/outway-720.mp4": "209ee4325f37d56fb17e74501bedc322",
"assets/assets/videos/cat-feeder-720.mp4": "0e38b9529cc521135ed5f1a9446697c0",
"assets/assets/videos/vejo-web-720.mp4": "a8cf1f1a0ea09d0937439632d58bb30a",
"assets/assets/videos/vejo-app-1.mp4": "fa77299f1ae3980561bcdb2b0765e854",
"assets/assets/videos/vejo-app-2.mp4": "7e8de429d70decfed98d179164196184",
"assets/assets/videos/medtronic-basal-720.mp4": "50fa16f93e81bb4c91a5f82801ae0aa5",
"assets/assets/videos/pro-dash-720.mp4": "a30505e9b43a046391bf0842e054daf2",
"assets/assets/videos/user-dash-720.mp4": "1e24c581a94961d1a9b1a48742cc44df",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
