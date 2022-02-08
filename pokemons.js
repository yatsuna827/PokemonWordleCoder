const pokemonNames = ["フシギダネ",
"フシギソウ",
"フシギバナ",
"ヒトカゲ",
"リザード",
"リザードン",
"ゼニガメ",
"カメール",
"カメックス",
"キャタピー",
"トランセル",
"バタフリー",
"ビードル",
"コクーン",
"スピアー",
"ポッポ",
"ピジョン",
"ピジョット",
"コラッタ",
"ラッタ",
"オニスズメ",
"オニドリル",
"アーボ",
"アーボック",
"ピカチュウ",
"ライチュウ",
"サンド",
"サンドパン",
"ニドリーナ",
"ニドクイン",
"ニドリーノ",
"ニドキング",
"ピッピ",
"ピクシー",
"ロコン",
"キュウコン",
"プリン",
"プクリン",
"ズバット",
"ゴルバット",
"ナゾノクサ",
"クサイハナ",
"ラフレシア",
"パラス",
"パラセクト",
"コンパン",
"モルフォン",
"ディグダ",
"ダグトリオ",
"ニャース",
"ペルシアン",
"コダック",
"ゴルダック",
"マンキー",
"オコリザル",
"ガーディ",
"ウインディ",
"ニョロモ",
"ニョロゾ",
"ニョロボン",
"ケーシィ",
"ユンゲラー",
"フーディン",
"ワンリキー",
"ゴーリキー",
"カイリキー",
"マダツボミ",
"ウツドン",
"ウツボット",
"メノクラゲ",
"ドククラゲ",
"イシツブテ",
"ゴローン",
"ゴローニャ",
"ポニータ",
"ギャロップ",
"ヤドン",
"ヤドラン",
"コイル",
"レアコイル",
"カモネギ",
"ドードー",
"ドードリオ",
"パウワウ",
"ジュゴン",
"ベトベター",
"ベトベトン",
"シェルダー",
"パルシェン",
"ゴース",
"ゴースト",
"ゲンガー",
"イワーク",
"スリープ",
"スリーパー",
"クラブ",
"キングラー",
"ビリリダマ",
"マルマイン",
"タマタマ",
"ナッシー",
"カラカラ",
"ガラガラ",
"サワムラー",
"エビワラー",
"ベロリンガ",
"ドガース",
"マタドガス",
"サイホーン",
"サイドン",
"ラッキー",
"モンジャラ",
"ガルーラ",
"タッツー",
"シードラ",
"トサキント",
"アズマオウ",
"ヒトデマン",
"スターミー",
"バリヤード",
"ストライク",
"ルージュラ",
"エレブー",
"ブーバー",
"カイロス",
"ケンタロス",
"コイキング",
"ギャラドス",
"ラプラス",
"メタモン",
"イーブイ",
"シャワーズ",
"サンダース",
"ブースター",
"ポリゴン",
"オムナイト",
"オムスター",
"カブト",
"カブトプス",
"プテラ",
"カビゴン",
"フリーザー",
"サンダー",
"ファイヤー",
"ミニリュウ",
"ハクリュー",
"カイリュー",
"ミュウツー",
"ミュウ",
"チコリータ",
"ベイリーフ",
"メガニウム",
"ヒノアラシ",
"マグマラシ",
"バクフーン",
"ワニノコ",
"アリゲイツ",
"オーダイル",
"オタチ",
"オオタチ",
"ホーホー",
"ヨルノズク",
"レディバ",
"レディアン",
"イトマル",
"アリアドス",
"クロバット",
"チョンチー",
"ランターン",
"ピチュー",
"ピィ",
"ププリン",
"トゲピー",
"トゲチック",
"ネイティ",
"ネイティオ",
"メリープ",
"モココ",
"デンリュウ",
"キレイハナ",
"マリル",
"マリルリ",
"ウソッキー",
"ニョロトノ",
"ハネッコ",
"ポポッコ",
"ワタッコ",
"エイパム",
"ヒマナッツ",
"キマワリ",
"ヤンヤンマ",
"ウパー",
"ヌオー",
"エーフィ",
"ブラッキー",
"ヤミカラス",
"ヤドキング",
"ムウマ",
"アンノーン",
"ソーナンス",
"キリンリキ",
"クヌギダマ",
"フォレトス",
"ノコッチ",
"グライガー",
"ハガネール",
"ブルー",
"グランブル",
"ハリーセン",
"ハッサム",
"ツボツボ",
"ヘラクロス",
"ニューラ",
"ヒメグマ",
"リングマ",
"マグマッグ",
"マグカルゴ",
"ウリムー",
"イノムー",
"サニーゴ",
"テッポウオ",
"オクタン",
"デリバード",
"マンタイン",
"エアームド",
"デルビル",
"ヘルガー",
"キングドラ",
"ゴマゾウ",
"ドンファン",
"オドシシ",
"ドーブル",
"バルキー",
"カポエラー",
"ムチュール",
"エレキッド",
"ブビィ",
"ミルタンク",
"ハピナス",
"ライコウ",
"エンテイ",
"スイクン",
"ヨーギラス",
"サナギラス",
"バンギラス",
"ルギア",
"ホウオウ",
"セレビィ",
"キモリ",
"ジュプトル",
"ジュカイン",
"アチャモ",
"ワカシャモ",
"バシャーモ",
"ミズゴロウ",
"ヌマクロー",
"ラグラージ",
"ポチエナ",
"グラエナ",
"ジグザグマ",
"マッスグマ",
"ケムッソ",
"カラサリス",
"アゲハント",
"マユルド",
"ドクケイル",
"ハスボー",
"ハスブレロ",
"ルンパッパ",
"タネボー",
"コノハナ",
"ダーテング",
"スバメ",
"オオスバメ",
"キャモメ",
"ペリッパー",
"ラルトス",
"キルリア",
"サーナイト",
"アメタマ",
"アメモース",
"キノココ",
"キノガッサ",
"ナマケロ",
"ヤルキモノ",
"ケッキング",
"ツチニン",
"テッカニン",
"ヌケニン",
"ゴニョニョ",
"ドゴーム",
"バクオング",
"マクノシタ",
"ハリテヤマ",
"ルリリ",
"ノズパス",
"エネコ",
"エネコロロ",
"ヤミラミ",
"クチート",
"ココドラ",
"コドラ",
"ボスゴドラ",
"アサナン",
"チャーレム",
"ラクライ",
"ライボルト",
"プラスル",
"マイナン",
"バルビート",
"イルミーゼ",
"ロゼリア",
"ゴクリン",
"マルノーム",
"キバニア",
"サメハダー",
"ホエルコ",
"ホエルオー",
"ドンメル",
"バクーダ",
"コータス",
"バネブー",
"ブーピッグ",
"パッチール",
"ナックラー",
"ビブラーバ",
"フライゴン",
"サボネア",
"ノクタス",
"チルット",
"チルタリス",
"ザングース",
"ハブネーク",
"ルナトーン",
"ソルロック",
"ドジョッチ",
"ナマズン",
"ヘイガニ",
"シザリガー",
"ヤジロン",
"ネンドール",
"リリーラ",
"ユレイドル",
"アノプス",
"アーマルド",
"ヒンバス",
"ミロカロス",
"ポワルン",
"カクレオン",
"カゲボウズ",
"ジュペッタ",
"ヨマワル",
"サマヨール",
"トロピウス",
"チリーン",
"アブソル",
"ソーナノ",
"ユキワラシ",
"オニゴーリ",
"タマザラシ",
"トドグラー",
"トドゼルガ",
"パールル",
"ハンテール",
"サクラビス",
"ジーランス",
"ラブカス",
"タツベイ",
"コモルー",
"ボーマンダ",
"ダンバル",
"メタング",
"メタグロス",
"レジロック",
"レジアイス",
"レジスチル",
"ラティアス",
"ラティオス",
"カイオーガ",
"グラードン",
"レックウザ",
"ジラーチ",
"デオキシス",
"ナエトル",
"ハヤシガメ",
"ドダイトス",
"ヒコザル",
"モウカザル",
"ゴウカザル",
"ポッチャマ",
"ポッタイシ",
"エンペルト",
"ムックル",
"ムクバード",
"ムクホーク",
"ビッパ",
"ビーダル",
"コロボーシ",
"コロトック",
"コリンク",
"ルクシオ",
"レントラー",
"スボミー",
"ロズレイド",
"ズガイドス",
"ラムパルド",
"タテトプス",
"トリデプス",
"ミノムッチ",
"ミノマダム",
"ガーメイル",
"ミツハニー",
"ビークイン",
"パチリス",
"ブイゼル",
"フローゼル",
"チェリンボ",
"チェリム",
"カラナクシ",
"トリトドン",
"エテボース",
"フワンテ",
"フワライド",
"ミミロル",
"ミミロップ",
"ムウマージ",
"ドンカラス",
"ニャルマー",
"ブニャット",
"リーシャン",
"スカンプー",
"スカタンク",
"ドーミラー",
"ドータクン",
"ウソハチ",
"マネネ",
"ピンプク",
"ペラップ",
"ミカルゲ",
"フカマル",
"ガバイト",
"ガブリアス",
"ゴンベ",
"リオル",
"ルカリオ",
"ヒポポタス",
"カバルドン",
"スコルピ",
"ドラピオン",
"グレッグル",
"ドクロッグ",
"マスキッパ",
"ケイコウオ",
"ネオラント",
"タマンタ",
"ユキカブリ",
"ユキノオー",
"マニューラ",
"ジバコイル",
"ベロベルト",
"ドサイドン",
"モジャンボ",
"エレキブル",
"ブーバーン",
"トゲキッス",
"メガヤンマ",
"リーフィア",
"グレイシア",
"グライオン",
"マンムー",
"エルレイド",
"ダイノーズ",
"ヨノワール",
"ユキメノコ",
"ロトム",
"ユクシー",
"エムリット",
"アグノム",
"ディアルガ",
"パルキア",
"ヒードラン",
"レジギガス",
"ギラティナ",
"クレセリア",
"フィオネ",
"マナフィ",
"ダークライ",
"シェイミ",
"アルセウス",
"ビクティニ",
"ツタージャ",
"ジャノビー",
"ジャローダ",
"ポカブ",
"チャオブー",
"エンブオー",
"ミジュマル",
"フタチマル",
"ダイケンキ",
"ミネズミ",
"ミルホッグ",
"ヨーテリー",
"ハーデリア",
"ムーランド",
"チョロネコ",
"レパルダス",
"ヤナップ",
"ヤナッキー",
"バオップ",
"バオッキー",
"ヒヤップ",
"ヒヤッキー",
"ムンナ",
"ムシャーナ",
"マメパト",
"ハトーボー",
"ケンホロウ",
"シママ",
"ゼブライカ",
"ダンゴロ",
"ガントル",
"ギガイアス",
"コロモリ",
"ココロモリ",
"モグリュー",
"ドリュウズ",
"タブンネ",
"ドッコラー",
"ドテッコツ",
"ローブシン",
"オタマロ",
"ガマガル",
"ガマゲロゲ",
"ナゲキ",
"ダゲキ",
"クルミル",
"クルマユ",
"ハハコモリ",
"フシデ",
"ホイーガ",
"ペンドラー",
"モンメン",
"エルフーン",
"チュリネ",
"ドレディア",
"バスラオ",
"メグロコ",
"ワルビル",
"ワルビアル",
"ダルマッカ",
"ヒヒダルマ",
"マラカッチ",
"イシズマイ",
"イワパレス",
"ズルッグ",
"ズルズキン",
"シンボラー",
"デスマス",
"デスカーン",
"プロトーガ",
"アバゴーラ",
"アーケン",
"アーケオス",
"ヤブクロン",
"ダストダス",
"ゾロア",
"ゾロアーク",
"チラーミィ",
"チラチーノ",
"ゴチム",
"ゴチミル",
"ゴチルゼル",
"ユニラン",
"ダブラン",
"ランクルス",
"コアルヒー",
"スワンナ",
"バニプッチ",
"バニリッチ",
"バイバニラ",
"シキジカ",
"メブキジカ",
"エモンガ",
"カブルモ",
"シュバルゴ",
"タマゲタケ",
"モロバレル",
"プルリル",
"ブルンゲル",
"ママンボウ",
"バチュル",
"デンチュラ",
"テッシード",
"ナットレイ",
"ギアル",
"ギギアル",
"ギギギアル",
"シビシラス",
"シビビール",
"シビルドン",
"リグレー",
"オーベム",
"ヒトモシ",
"ランプラー",
"シャンデラ",
"キバゴ",
"オノンド",
"オノノクス",
"クマシュン",
"ツンベアー",
"フリージオ",
"チョボマキ",
"アギルダー",
"マッギョ",
"コジョフー",
"コジョンド",
"クリムガン",
"ゴビット",
"ゴルーグ",
"コマタナ",
"キリキザン",
"バッフロン",
"ワシボン",
"ウォーグル",
"バルチャイ",
"バルジーナ",
"クイタラン",
"アイアント",
"モノズ",
"ジヘッド",
"サザンドラ",
"メラルバ",
"ウルガモス",
"コバルオン",
"テラキオン",
"ビリジオン",
"トルネロス",
"ボルトロス",
"レシラム",
"ゼクロム",
"ランドロス",
"キュレム",
"ケルディオ",
"メロエッタ",
"ゲノセクト",
"ハリマロン",
"ハリボーグ",
"ブリガロン",
"フォッコ",
"テールナー",
"ケロマツ",
"ゲコガシラ",
"ゲッコウガ",
"ホルビー",
"ホルード",
"ヤヤコマ",
"ヒノヤコマ",
"コフキムシ",
"コフーライ",
"ビビヨン",
"シシコ",
"カエンジシ",
"フラベベ",
"フラエッテ",
"メェークル",
"ゴーゴート",
"ヤンチャム",
"ゴロンダ",
"トリミアン",
"ニャスパー",
"ヒトツキ",
"ニダンギル",
"ギルガルド",
"シュシュプ",
"フレフワン",
"ペロッパフ",
"ペロリーム",
"マーイーカ",
"カラマネロ",
"カメテテ",
"ガメノデス",
"クズモー",
"ドラミドロ",
"ウデッポウ",
"ブロスター",
"エリキテル",
"エレザード",
"チゴラス",
"ガチゴラス",
"アマルス",
"アマルルガ",
"ニンフィア",
"ルチャブル",
"デデンネ",
"メレシー",
"ヌメラ",
"ヌメイル",
"ヌメルゴン",
"クレッフィ",
"ボクレー",
"オーロット",
"バケッチャ",
"パンプジン",
"カチコール",
"クレベース",
"オンバット",
"オンバーン",
"ゼルネアス",
"イベルタル",
"ジガルデ",
"フーパ",
"モクロー",
"フクスロー",
"ニャビー",
"ニャヒート",
"ガオガエン",
"アシマリ",
"オシャマリ",
"アシレーヌ",
"ツツケラ",
"ケララッパ",
"ドデカバシ",
"ヤングース",
"デカグース",
"アゴジムシ",
"デンヂムシ",
"クワガノン",
"マケンカニ",
"ケケンカニ",
"オドリドリ",
"アブリー",
"アブリボン",
"イワンコ",
"ルガルガン",
"ヨワシ",
"ヒドイデ",
"ドヒドイデ",
"ドロバンコ",
"バンバドロ",
"シズクモ",
"カリキリ",
"ラランテス",
"ネマシュ",
"マシェード",
"ヤトウモリ",
"ヌイコグマ",
"キテルグマ",
"アマカジ",
"アママイコ",
"アマージョ",
"キュワワー",
"コソクムシ",
"スナバァ",
"シロデスナ",
"ナマコブシ",
"メテノ",
"ネッコアラ",
"バクガメス",
"トゲデマル",
"ミミッキュ",
"ハギギシリ",
"ジジーロン",
"ダダリン",
"ジャラコ",
"ジャランゴ",
"コスモッグ",
"コスモウム",
"ソルガレオ",
"ルナアーラ",
"ウツロイド",
"テッカグヤ",
"カミツルギ",
"ネクロズマ",
"マギアナ",
"ベベノム",
"アーゴヨン",
"ズガドーン",
"ゼラオラ",
"メルタン",
"メルメタル",
"サルノリ",
"バチンキー",
"ヒバニー",
"ラビフット",
"メッソン",
"ジメレオン",
"ホシガリス",
"ヨクバリス",
"ココガラ",
"アオガラス",
"サッチムシ",
"レドームシ",
"イオルブ",
"クスネ",
"ヒメンカ",
"ワタシラガ",
"ウールー",
"カムカメ",
"カジリガメ",
"ワンパチ",
"パルスワン",
"タンドン",
"トロッゴン",
"カジッチュ",
"タルップル",
"スナヘビ",
"サダイジャ",
"ウッウ",
"サシカマス",
"エレズン",
"ヤクデ",
"マルヤクデ",
"タタッコ",
"オトスパス",
"ヤバチャ",
"ポットデス",
"ミブリム",
"テブリム",
"ブリムオン",
"ベロバー",
"ギモー",
"オーロンゲ",
"サニゴーン",
"バリコオル",
"デスバーン",
"マホミル",
"マホイップ",
"タイレーツ",
"バチンウニ",
"ユキハミ",
"モスノウ",
"コオリッポ",
"イエッサン",
"モルペコ",
"ゾウドウ",
"ドラメシヤ",
"ドロンチ",
"ドラパルト",
"ザシアン",
"ザマゼンタ",
"ダクマ",
"ウーラオス",
"ザルード",
"レジエレキ",
"レジドラゴ",
"ブリザポス",
"レイスポス"]
const five = pokemonNames.filter(_=>_.length === 5)