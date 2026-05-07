export const languages = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'zh-TW' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

/**
 * UI strings, keyed by locale.
 * Copy aligned with v2 (Editorial Cinematic) design.
 */
export const ui = {
  'zh-TW': {
    // ---- Site meta ----
    'site.title': 'Muztrix — 遊戲橘子原創中心 AI 小組',
    'site.description':
      '來自橘子集團原創中心。用 AI 重新想像漫畫、虛擬人、遊戲的可能。',

    // ---- Header / Nav ----
    'nav.solutions': '核心方案',
    'nav.about': '關於我們',
    'nav.virtualHuman': '虛擬人',
    'nav.comic': 'AI 漫畫',
    'nav.game': 'AI 遊戲',
    'nav.contact': '聯絡我們',
    'nav.connect': '聯絡我們',

    // ---- Hero (kept; legacy keys still in use) ----
    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': '定義你的',
    'hero.title.line2': '泛娛樂新視界',
    'hero.desc': '用 AI 重新想像漫畫、虛擬人、遊戲的可能。',
    'hero.cta.primary': '探索方案',
    'hero.cta.secondary': '觀看 Demo',

    // ---- Solutions (§ 01) ----
    'solutions.section': '§ 01 — Solutions',
    'solutions.title.line1': '一站式',
    'solutions.title.line2': 'AI 創作生產線',
    'solutions.subtitle':
      '從劇本、美術、製作到上線──全流程加速。我們不取代創作者，而是在每一個工序裡，把不必要的摩擦消除。',

    'solutions.01.title': '寫故事',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      'AI 編劇對話、版本追溯，快速展開完整劇本與世界觀。從一句靈感到完整章節大綱，創作者保有主導權。',
    'solutions.01.t1': '劇本',
    'solutions.01.t2': '世界觀',
    'solutions.01.t3': '版本控制',

    'solutions.02.title': '畫角色',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      '一致性鎖定的角色設計與分鏡，跨章節維持外觀、表情與服飾細節。產出可商用素材庫。',
    'solutions.02.t1': '一致性',
    'solutions.02.t2': '分鏡',
    'solutions.02.t3': '資產庫',

    'solutions.03.title': '做遊戲',
    'solutions.03.tag': 'Game Pipeline',
    'solutions.03.desc':
      'NPC 行為模擬、自適應難度、自動化測試──AI 進入遊戲製程，從原型到上線縮短一個量級。',
    'solutions.03.t1': 'NPC AI',
    'solutions.03.t2': '難度',
    'solutions.03.t3': 'QA',

    'solutions.04.title': '多模態世界',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      '將零散的創意碎片織結為具備生命的數位時空──故事、角色、玩法在同一個世界裡共生演化。',
    'solutions.04.t1': '世界觀',
    'solutions.04.t2': '跨媒介',
    'solutions.04.t3': '生態演化',

    // ---- About (§ 05) ----
    'about.section': '§ 05 — About',
    'about.title.l1': '在',
    'about.title.l1b': 'AI',
    'about.title.l1c': '與',
    'about.title.l2': '內容的',
    'about.title.l3': '邊界',
    'about.title.l3b': '探索',
    'about.body1':
      '我們持續追蹤前沿 AI 技術，並把它真正帶進產品裡──從劇本、漫畫、配樂，到虛擬人互動。每一步都讓創作者更快，讓使用者體驗到不曾有過的互動樂趣。',
    'about.body2': '不只是加速「構想到成品」的速度，更要用 AI 打開全新的娛樂可能性。',
    'about.pillar1.k': '人本核心',
    'about.pillar1.v': 'AI 由倫理框架與人本價值驅動。',
    'about.pillar2.k': '創作優先',
    'about.pillar2.v': '工具服務創作者，而非取代之。',
    'about.pillar3.k': '長期主義',
    'about.pillar3.v': '我們相信內容值得耐心。',
    'about.cjk': '原 · 創 · 中 · 心',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': '年',
    'about.stat.body':
      '橘子集團數位娛樂深耕。我們把這份對玩家的理解，帶進 AI 的下一個世代。',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    // ---- Virtual Human (§ 02) ----
    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title.l1': '看得到、聽得懂、',
    'virtual.title.l2': '記得住',
    'virtual.title.l3': '的 AI',
    'virtual.body1':
      '我們的 AI 虛擬人建立在自研感知引擎上：即時辨識性別、年齡、表情、衣著與停留時間，分析語音關鍵字與情緒，模擬出有溫度的對話節奏。',
    'virtual.body2': '長期記憶持續學習回訪偏好，每一次對話都更貼近你的人格。',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': '視覺 · 聽覺 · 情緒',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': '長期記憶 · 偏好',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': '即時 · 多輪 · 情境',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': '人格鎖定 · 角色化',
    'virtual.demo.welcome1': '你好，我是 Miyaki。',
    'virtual.demo.welcome2': '你看得到我嗎？',
    'virtual.demo.welcome3': '看到了。微笑著，戴眼鏡，穿深色上衣──氣氛很放鬆。',
    'virtual.demo.placeholder': '輸入訊息……',
    'virtual.demo.send': '送出',
    'virtual.demo.perception': '● PERCEPTION FEED',

    // ---- Comic Studio (§ 04) ----
    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title.l1': '從一句靈感到完整漫畫，',
    'comic.title.l2': '四步串成一條產線',
    'comic.subtitle': '創作者主導，AI 加速。每一步都可回頭微調，產出可商用、可二創的內容資產。',

    'comic.01.label': '故事規劃',
    'comic.01.en': 'Story Planning',
    'comic.01.title': '與 AI 編劇共構世界',
    'comic.01.desc':
      '從一句靈感開始，AI 編劇陪你展開角色設定、場景氛圍與分鏡節奏。每一次對話都會沉澱進可編輯的故事大綱。',
    'comic.01.m1': '彈性討論深度',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': '繁中 · 日漫風格',

    'comic.02.label': '角色設計',
    'comic.02.en': 'Character Design',
    'comic.02.title': '三視圖確保一致性',
    'comic.02.desc':
      '正面、側面、背面同步出稿。性格設定附著於圖像，跨分鏡、跨章節，角色都是同一個人。',
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '三視圖 turnaround',
    'comic.02.m3': '性格 + 視覺綁定',

    'comic.03.label': '分鏡製作',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕、格、節奏一次到位',
    'comic.03.desc':
      '依故事大綱自動生成分幕分鏡，比例、構圖、對話框可逐格微調。角色與場景資產自動套用。',
    'comic.03.m1': '幕 / 格 階層',
    'comic.03.m2': '3:2 · 16:9 雙比例',
    'comic.03.m3': '逐格重生',

    'comic.04.label': '畫布編輯',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': '排版、匯出、發布',
    'comic.04.desc':
      '頁漫排版預覽、JSON 備份、匯出圖片或發布到社區。從草稿到上稿，作品始終在你手裡。',
    'comic.04.m1': 'JSON 雙向匯入',
    'comic.04.m2': '匯出 PNG / 頁漫',
    'comic.04.m3': '社區發布',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': '產出可商用素材庫，跨章節維持角色一致性',
    'comic.cta': '開始試用',

    // ---- Game (§ 03) ----
    'game.section': '§ 03 — AI Game',
    'game.title.l1': '讓',
    'game.title.l2': 'NPC',
    'game.title.l2b': '真正',
    'game.title.l3': '活著',
    'game.body':
      '每個 NPC 都有自己的記憶、目標與情緒。玩家的選擇會留下痕跡──下一次見面，他們記得你做過什麼。',
    'game.p1': '行為樹 + LLM 混合決策',
    'game.p2': '自適應難度，依玩家風格調整',
    'game.p3': '自動化測試覆蓋 95% 對話分支',

    'game.npc1.name': 'Vendor — 李大娘',
    'game.npc1.state': '巡邏 · 警戒度 0.3',
    'game.npc1.mood': '鎮定',
    'game.npc2.name': 'Mage — 元 ─ 七',
    'game.npc2.state': '對話 · 玩家 #4F3A',
    'game.npc2.mood': '友善',
    'game.npc3.name': 'Boss — 黯 影',
    'game.npc3.state': '戰鬥準備 · 階段 2',
    'game.npc3.mood': '挑釁',
    'game.memory1': '玩家在第三章節向我承諾要回來。',
    'game.memory2': '玩家上次選擇了「正義」結局。',
    'game.memory3': '玩家偏好戰鬥前先談判。',

    // ---- CTA / Footer (§ 06) ----
    'cta.section': '§ 06 — Contact',
    'cta.title.l1': '把 AI 變成',
    'cta.title.l2': '下一個',
    'cta.title.l3': '創意夥伴。',
    'cta.body':
      '技術合作、產品授權，或想了解我們能為您的場域帶來什麼樣的 AI 體驗──歡迎來信。',
    'cta.button': '聯絡我們',

    'footer.tagline': '來自橘子集團原創中心。用 AI 重新想像漫畫、虛擬人、遊戲的可能。',
    'footer.col1.h': '產品',
    'footer.col1.i1': 'AI 漫畫',
    'footer.col1.i2': '虛擬人',
    'footer.col1.i3': 'AI 遊戲',
    'footer.col1.i4': '感知引擎',
    'footer.col2.h': '公司',
    'footer.col2.i1': '關於我們',
    'footer.col2.i2': 'AI 倫理',
    'footer.col2.i3': '新聞',
    'footer.col2.i4': '徵才',
    'footer.col3.h': '法律',
    'footer.col3.i1': '隱私政策',
    'footer.col3.i2': '服務條款',
    'footer.col3.i3': '版權聲明',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    // legacy / optional kept
    'lang.switcher.label': '語系',
  },

  en: {
    'site.title': 'Muztrix — Gamania Original Content Center AI',
    'site.description':
      "From Gamania Original Content Center. Reimagining comics, virtual humans, and games with AI.",

    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.virtualHuman': 'Virtual Human',
    'nav.comic': 'AI Comic',
    'nav.game': 'AI Game',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AI-Powered Creativity.',
    'hero.title.line2': 'Limitless Entertainment.',
    'hero.desc':
      'Reimagining comics, virtual humans, and games with AI. Join the Muztrix ecosystem.',
    'hero.cta.primary': 'Explore Solutions',
    'hero.cta.secondary': 'Watch Demo',

    'solutions.section': '§ 01 — Solutions',
    'solutions.title.line1': 'An end-to-end',
    'solutions.title.line2': 'AI creative pipeline',
    'solutions.subtitle':
      'From script and art to production and launch — every step accelerated. We don\'t replace creators; we remove friction at every stage of their craft.',

    'solutions.01.title': 'Story',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      'AI screenwriting dialogue with version history. Build worlds and chapter outlines fast — creators stay in control.',
    'solutions.01.t1': 'Script',
    'solutions.01.t2': 'Worldbuilding',
    'solutions.01.t3': 'Versioning',

    'solutions.02.title': 'Character',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      'Identity-locked design and storyboards — appearance, expression, costume detail held across chapters. Production-ready asset library.',
    'solutions.02.t1': 'Consistency',
    'solutions.02.t2': 'Storyboards',
    'solutions.02.t3': 'Asset Library',

    'solutions.03.title': 'Game',
    'solutions.03.tag': 'Game Pipeline',
    'solutions.03.desc':
      'NPC behavior, adaptive difficulty, automated testing — AI inside the production pipeline. Cut prototype-to-launch by an order of magnitude.',
    'solutions.03.t1': 'NPC AI',
    'solutions.03.t2': 'Difficulty',
    'solutions.03.t3': 'QA',

    'solutions.04.title': 'Multimodal World',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      'Weave scattered creative fragments into a living digital world — where story, characters, and gameplay co-evolve.',
    'solutions.04.t1': 'Worldbuilding',
    'solutions.04.t2': 'Cross-media',
    'solutions.04.t3': 'Ecology',

    'about.section': '§ 05 — About',
    'about.title.l1': 'At the',
    'about.title.l1b': 'edge',
    'about.title.l1c': 'of',
    'about.title.l2': 'AI ×',
    'about.title.l3': 'content',
    'about.title.l3b': 'exploration',
    'about.body1':
      'We track frontier AI research and bring it into shipping products — from scripts, comics, and scoring to virtual human interactions. Every step gives creators speed and gives audiences something they have never felt before.',
    'about.body2': 'Not just shortening idea-to-deliverable — opening entirely new entertainment possibilities with AI.',
    'about.pillar1.k': 'Human Core',
    'about.pillar1.v': 'AI driven by moral frameworks and human values.',
    'about.pillar2.k': 'Creator First',
    'about.pillar2.v': 'Tools serve creators, not replace them.',
    'about.pillar3.k': 'Long-term',
    'about.pillar3.v': 'We believe content deserves patience.',
    'about.cjk': 'Original · Content · Center',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': 'yrs',
    'about.stat.body':
      "Three decades of digital entertainment under Gamania. We're bringing that understanding of players into AI's next generation.",
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title.l1': 'AI that sees you,',
    'virtual.title.l2': 'remembers you',
    'virtual.title.l3': '',
    'virtual.body1':
      'Our virtual humans run on a proprietary perception engine: gender, age, expression, attire, dwell time, voice keywords, emotion — synthesized into warm conversational rhythm.',
    'virtual.body2':
      'Long-term memory adapts to each visitor. Every conversation gets closer to your personality.',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': 'Vision · Audio · Emotion',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': 'Long memory · Preferences',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': 'Real-time · Multi-turn',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': 'Persona-locked · Roleplay',
    'virtual.demo.welcome1': 'Hello, I\'m Miyaki.',
    'virtual.demo.welcome2': 'Can you see me?',
    'virtual.demo.welcome3': 'I can. Smiling, glasses, dark top — the mood is relaxed.',
    'virtual.demo.placeholder': 'Type a message…',
    'virtual.demo.send': 'SEND',
    'virtual.demo.perception': '● PERCEPTION FEED',

    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title.l1': 'From spark to finished comic,',
    'comic.title.l2': 'a four-step pipeline',
    'comic.subtitle':
      "Creator-led, AI-accelerated. Every step is editable; every output is commercially usable.",

    'comic.01.label': 'Story Planning',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'Co-author with AI',
    'comic.01.desc':
      "Start from a single spark. The AI editor walks character, scene, and pacing with you. Every conversation distills into an editable story outline.",
    'comic.01.m1': 'Flexible depth',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': 'zh-TW · manga style',

    'comic.02.label': 'Character Design',
    'comic.02.en': 'Character Design',
    'comic.02.title': 'Three-view turnaround',
    'comic.02.desc':
      "Front, side, and back rendered together. Personality binds to image so the same character holds across panels and chapters.",
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '3-view turnaround',
    'comic.02.m3': 'Personality binding',

    'comic.03.label': 'Storyboard',
    'comic.03.en': 'Storyboard',
    'comic.03.title': 'Acts, panels, and pacing',
    'comic.03.desc':
      "Auto-generate panels from the outline. Ratio, composition, and dialogue boxes are tunable per panel; characters and scenes auto-apply.",
    'comic.03.m1': 'Acts / Panels',
    'comic.03.m2': '3:2 · 16:9',
    'comic.03.m3': 'Per-panel regen',

    'comic.04.label': 'Canvas & Export',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': 'Layout, export, publish',
    'comic.04.desc':
      "Page layout preview, JSON backup, image export, or publish to the community. Your work stays in your hands.",
    'comic.04.m1': 'JSON I/O',
    'comic.04.m2': 'PNG export',
    'comic.04.m3': 'Community publish',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': 'Commercial-ready library, character consistency across chapters',
    'comic.cta': 'Try It',

    'game.section': '§ 03 — AI Game',
    'game.title.l1': 'NPCs that',
    'game.title.l2': 'truly',
    'game.title.l2b': '',
    'game.title.l3': 'live',
    'game.body':
      "Every NPC has memory, goals, and emotion. Player choices leave traces — next time you meet, they remember what you did.",
    'game.p1': 'Behavior tree + LLM hybrid decisions',
    'game.p2': 'Adaptive difficulty by play style',
    'game.p3': 'Automated test coverage on 95% of dialogue branches',

    'game.npc1.name': 'Vendor — Madame Li',
    'game.npc1.state': 'PATROL · alert 0.3',
    'game.npc1.mood': 'Calm',
    'game.npc2.name': 'Mage — Yuan Seven',
    'game.npc2.state': 'DIALOGUE · player #4F3A',
    'game.npc2.mood': 'Friendly',
    'game.npc3.name': 'Boss — The Umbra',
    'game.npc3.state': 'COMBAT_PREP · phase 2',
    'game.npc3.mood': 'Provocative',
    'game.memory1': 'In chapter three, the player promised to return.',
    'game.memory2': 'Last time, they chose the "Just" ending.',
    'game.memory3': 'The player prefers to negotiate before combat.',

    'cta.section': '§ 06 — Contact',
    'cta.title.l1': 'Make AI your',
    'cta.title.l2': 'next',
    'cta.title.l3': 'creative partner.',
    'cta.body':
      "Technology partnerships, product licensing, or learning what AI can do for your space — let's talk.",
    'cta.button': 'Get in Touch',

    'footer.tagline': "From Gamania Original Content Center. Reimagining comics, virtual humans, and games with AI.",
    'footer.col1.h': 'PRODUCT',
    'footer.col1.i1': 'AI Comic',
    'footer.col1.i2': 'Virtual Human',
    'footer.col1.i3': 'AI Game',
    'footer.col1.i4': 'Perception Engine',
    'footer.col2.h': 'COMPANY',
    'footer.col2.i1': 'About',
    'footer.col2.i2': 'AI Ethics',
    'footer.col2.i3': 'News',
    'footer.col2.i4': 'Careers',
    'footer.col3.h': 'LEGAL',
    'footer.col3.i1': 'Privacy',
    'footer.col3.i2': 'Terms',
    'footer.col3.i3': 'Copyright',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    'lang.switcher.label': 'Language',
  },

  ja: {
    'site.title': 'Muztrix — ガマニア・オリジナルコンテンツセンターAI',
    'site.description':
      'ガマニア・オリジナルコンテンツセンター発。AIで漫画・バーチャルヒューマン・ゲームを再定義。',

    'nav.solutions': 'ソリューション',
    'nav.about': '会社概要',
    'nav.virtualHuman': 'バーチャルヒューマン',
    'nav.comic': 'AIコミック',
    'nav.game': 'AIゲーム',
    'nav.contact': 'お問い合わせ',
    'nav.connect': 'お問い合わせ',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AIで創る、',
    'hero.title.line2': '新しいエンタメ体験。',
    'hero.desc': 'AIで漫画・バーチャルヒューマン・ゲームの可能性を再定義。',
    'hero.cta.primary': 'ソリューションを見る',
    'hero.cta.secondary': 'デモを見る',

    'solutions.section': '§ 01 — ソリューション',
    'solutions.title.line1': 'AIクリエイティブ',
    'solutions.title.line2': 'パイプライン',
    'solutions.subtitle':
      '脚本・美術・制作・公開まで、すべての工程を加速。クリエイターを置き換えるのではなく、各工程の摩擦を取り除きます。',

    'solutions.01.title': 'ストーリー',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      'AI脚本対話とバージョン履歴。世界観と章立てを素早く構築──主導権は常にクリエイターに。',
    'solutions.01.t1': '脚本',
    'solutions.01.t2': '世界観',
    'solutions.01.t3': 'バージョン管理',

    'solutions.02.title': 'キャラクター',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      'アイデンティティを保ったキャラ設計と絵コンテ。章を跨いでも同じキャラ。商用利用可能な素材ライブラリ。',
    'solutions.02.t1': '一貫性',
    'solutions.02.t2': '絵コンテ',
    'solutions.02.t3': '素材ライブラリ',

    'solutions.03.title': 'ゲーム',
    'solutions.03.tag': 'Game Pipeline',
    'solutions.03.desc':
      'NPC行動、適応的難易度、自動テスト──制作工程にAIを組み込む。プロトタイプから公開までを一桁短縮。',
    'solutions.03.t1': 'NPC AI',
    'solutions.03.t2': '難易度',
    'solutions.03.t3': 'QA',

    'solutions.04.title': 'マルチモーダル世界',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      '散らばった創作の断片を、生命を持つデジタル時空へ──物語・キャラクター・ゲームプレイが共生・進化する世界。',
    'solutions.04.t1': '世界観',
    'solutions.04.t2': 'クロスメディア',
    'solutions.04.t3': '生態進化',

    'about.section': '§ 05 — About',
    'about.title.l1': '',
    'about.title.l1b': 'AI',
    'about.title.l1c': 'と',
    'about.title.l2': 'コンテンツの',
    'about.title.l3': '境界',
    'about.title.l3b': 'を探る',
    'about.body1':
      '最先端のAI研究を追い、製品に実装します──脚本・漫画・音楽からバーチャルヒューマンの対話まで。クリエイターには速度を、観客には未体験の感動を。',
    'about.body2': '「アイデアから成果物まで」を短縮するだけでなく、AIで新しいエンタメの可能性を開きます。',
    'about.pillar1.k': '人間中心',
    'about.pillar1.v': '倫理的枠組みと人間の価値観に基づくAI。',
    'about.pillar2.k': 'クリエイター優先',
    'about.pillar2.v': 'ツールはクリエイターのために。',
    'about.pillar3.k': '長期主義',
    'about.pillar3.v': 'コンテンツには忍耐が必要だと信じます。',
    'about.cjk': '原 · 創 · 中 · 心',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': '年',
    'about.stat.body':
      'ガマニアによる30年のデジタルエンタメ。プレイヤーへの理解を、AIの次世代へ。',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title.l1': '見て、聴いて、',
    'virtual.title.l2': '覚える',
    'virtual.title.l3': 'AI',
    'virtual.body1':
      '自社製の知覚エンジンを基盤に、性別・年齢・表情・服装・滞在時間、音声キーワードと感情までリアルタイムで解析。温度のある対話のリズムを合成します。',
    'virtual.body2': '長期記憶が来訪者ごとに学習し、対話のたびにあなたの人格へ近づきます。',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': '視覚 · 聴覚 · 感情',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': '長期記憶 · 嗜好',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': 'リアルタイム · 多ターン',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': '人格固定 · ロールプレイ',
    'virtual.demo.welcome1': 'こんにちは、Miyakiです。',
    'virtual.demo.welcome2': '見えていますか？',
    'virtual.demo.welcome3': '見えています。微笑、眼鏡、暗い色の上着──雰囲気はリラックス。',
    'virtual.demo.placeholder': 'メッセージを入力……',
    'virtual.demo.send': '送信',
    'virtual.demo.perception': '● PERCEPTION FEED',

    'comic.section': '§ 04 — AIコミックスタジオ',
    'comic.title.l1': 'ひらめきから完成まで、',
    'comic.title.l2': '4ステップのパイプライン',
    'comic.subtitle': 'クリエイター主導、AI加速。各ステップが編集可能。商用利用可能な素材を出力します。',

    'comic.01.label': 'ストーリー設計',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'AI編集者と世界を共創',
    'comic.01.desc':
      'ひらめきから始まり、AI編集者がキャラ・場面・テンポを一緒に組み立てます。対話は編集可能なプロットへ蓄積。',
    'comic.01.m1': '柔軟な深度',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': '繁中 · マンガスタイル',

    'comic.02.label': 'キャラクター',
    'comic.02.en': 'Character Design',
    'comic.02.title': '三面図で一貫性を担保',
    'comic.02.desc':
      '正面・側面・背面を同時生成。性格設定が画像に紐づき、コマ・章を跨いでも同一人物。',
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '三面図ターンアラウンド',
    'comic.02.m3': '性格バインディング',

    'comic.03.label': '絵コンテ',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕・コマ・テンポを一気通貫',
    'comic.03.desc':
      'プロットからコマを自動生成。比率・構図・吹き出しはコマ単位で調整可能。キャラと場面を自動適用。',
    'comic.03.m1': '幕 / コマ',
    'comic.03.m2': '3:2 · 16:9',
    'comic.03.m3': 'コマ単位再生成',

    'comic.04.label': 'キャンバス',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': 'レイアウト、書き出し、公開',
    'comic.04.desc':
      'ページレイアウトプレビュー、JSONバックアップ、画像書き出し、コミュニティ公開。作品はあなたの手に。',
    'comic.04.m1': 'JSON 双方向',
    'comic.04.m2': 'PNG 書き出し',
    'comic.04.m3': 'コミュニティ公開',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': '商用利用可能、章を跨いだキャラ一貫性',
    'comic.cta': '試してみる',

    'game.section': '§ 03 — AIゲーム',
    'game.title.l1': '本当に',
    'game.title.l2': '生きている',
    'game.title.l2b': '',
    'game.title.l3': 'NPC',
    'game.body':
      '各NPCは記憶・目標・感情を持ちます。プレイヤーの選択は痕跡を残し──次に会うとき、彼らはあなたを覚えています。',
    'game.p1': 'ビヘイビアツリー + LLM ハイブリッド意思決定',
    'game.p2': 'プレイヤーのスタイルに合わせた適応的難易度',
    'game.p3': '対話分岐の95%を自動テスト',

    'game.npc1.name': 'Vendor — 李さん',
    'game.npc1.state': 'PATROL · 警戒度 0.3',
    'game.npc1.mood': '冷静',
    'game.npc2.name': 'Mage — 元 · 七',
    'game.npc2.state': 'DIALOGUE · プレイヤー #4F3A',
    'game.npc2.mood': '友好的',
    'game.npc3.name': 'Boss — 黯影',
    'game.npc3.state': 'COMBAT_PREP · フェーズ 2',
    'game.npc3.mood': '挑発的',
    'game.memory1': '第三章でプレイヤーは戻ると約束した。',
    'game.memory2': '前回プレイヤーは「正義」エンディングを選んだ。',
    'game.memory3': 'プレイヤーは戦闘前に交渉を好む。',

    'cta.section': '§ 06 — Contact',
    'cta.title.l1': 'AIをあなたの',
    'cta.title.l2': '次の',
    'cta.title.l3': 'クリエイティブパートナーに。',
    'cta.body':
      '技術提携、ライセンス、貴社の現場でAIが何をできるか──お気軽にご相談ください。',
    'cta.button': 'お問い合わせ',

    'footer.tagline': 'ガマニア・オリジナルコンテンツセンター発。AIで漫画・バーチャルヒューマン・ゲームを再定義。',
    'footer.col1.h': '製品',
    'footer.col1.i1': 'AIコミック',
    'footer.col1.i2': 'バーチャルヒューマン',
    'footer.col1.i3': 'AIゲーム',
    'footer.col1.i4': '知覚エンジン',
    'footer.col2.h': '会社',
    'footer.col2.i1': '会社概要',
    'footer.col2.i2': 'AI倫理',
    'footer.col2.i3': 'ニュース',
    'footer.col2.i4': '採用',
    'footer.col3.h': '法的事項',
    'footer.col3.i1': 'プライバシー',
    'footer.col3.i2': '利用規約',
    'footer.col3.i3': '著作権',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    'lang.switcher.label': '言語',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
