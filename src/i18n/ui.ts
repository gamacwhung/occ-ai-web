export const languages = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'zh-TW' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

/**
 * UI strings, keyed by locale.
 * zh-TW copy ported from the previous occ-ai-web site (ai.gamaniaocc.org).
 */
export const ui = {
  'zh-TW': {
    // ---- Site meta ----
    'site.title': 'Muztrix — 遊戲橘子原創中心 AI 小組',
    'site.description':
      '來自橘子集團原創中心。用 AI 重新想像漫畫、虛擬人、遊戲的可能。',

    // ---- Header / Nav ----
    'nav.about': '關於我們',
    'nav.virtualHuman': 'AI 虛擬人',
    'nav.comic': 'AI 漫畫',
    'nav.game': 'AI 遊戲',
    'nav.contact': '聯絡我們',
    'nav.connect': '聯絡我們',

    // ---- Hero ----
    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': '定義你的',
    'hero.title.line2': '泛娛樂新視界',
    'hero.desc': '用 AI 重新想像漫畫、虛擬人、遊戲的可能。',
    'hero.cta.primary': '探索方案',
    'hero.cta.secondary': '觀看 Demo',

    // ---- Features Grid ----
    'features.title': '一站式 AI 創作生產線',
    'features.subtitle': '從劇本、美術、製作到上線——全流程加速',
    'features.story.title': '寫故事',
    'features.story.desc': 'AI 編劇對話、版本追溯，快速展開完整劇本與世界觀',
    'features.character.title': '畫角色',
    'features.character.desc': '一致性鎖定的角色設計與分鏡，自動產出視覺資產',
    'features.game.title': '做遊戲',
    'features.game.desc': 'NPC 行為、自適應難度、自動測試——AI 進入遊戲製程',
    'features.virtual.title': '虛擬人',
    'features.virtual.desc': '感知、記憶、即時對話的互動式數位真人',
    'features.platform.title': '多平台',
    'features.platform.desc': '繁中／英文／日文，跨漫畫、虛擬人、遊戲的一致體驗',

    // ---- Bento Grid (Tech) ----
    'bento.eyebrow': '核心架構',
    'bento.title.line1': '看得到、聽得懂、',
    'bento.title.line2': '記得住的 AI',
    'bento.neural.title': '神經合成',
    'bento.neural.desc':
      '我們的 AI 虛擬人建立在自研感知引擎上：即時辨識性別、年齡、表情、衣著與停留時間，分析語音關鍵字與情緒，模擬出有溫度的對話節奏。',
    'bento.neural.cta': '查看技術細節',
    'bento.cognitive.title': '認知流',
    'bento.cognitive.desc': '長期記憶持續學習回訪偏好，每次對話都更貼近你的人格。',

    // ---- Vision ----
    'vision.eyebrow': 'ABOUT US',
    'vision.title.line1': '來自橘子集團原創中心，',
    'vision.title.line2': '探索 AI × 內容的邊界。',
    'vision.body1':
      '我們持續追蹤前沿 AI 技術，並把它真正帶進產品裡——從劇本、漫畫、配樂到虛擬人互動，每一步都讓創作者更快、讓使用者體驗到不曾有過的互動樂趣。',
    'vision.body2':
      '不只是加速「構想到成品」的速度，更要用 AI 打開全新的娛樂可能性。',
    'vision.point.title': '人本核心',
    'vision.point.desc': 'AI 由倫理框架與人本價值驅動。',

    // ---- CTA ----
    'cta.title.line1': '把 AI 變成',
    'cta.title.line2': '下一個創意夥伴。',
    'cta.desc':
      '技術合作、產品授權，或想了解我們能為您的場域帶來什麼樣的 AI 體驗——歡迎來信。',
    'cta.button': '聯絡我們',

    // ---- Footer ----
    'footer.tagline': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',
    'footer.privacy': '隱私政策',
    'footer.terms': '服務條款',
    'footer.ethics': 'AI 倫理',
    'footer.contact': '聯絡',

    // ---- Lang switcher label ----
    'lang.switcher.label': '語系',
  },

  en: {
    'site.title': 'Muztrix — Gamania Original Content Center AI',
    'site.description':
      'From Gamania Original Content Center. Reimagining comics, virtual humans, and games with AI.',

    'nav.about': 'About Us',
    'nav.virtualHuman': 'Virtual Human',
    'nav.comic': 'AI Comic',
    'nav.game': 'AI Game',
    'nav.contact': 'Contact Us',
    'nav.connect': 'Connect',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AI-Powered Creativity.',
    'hero.title.line2': 'Limitless Entertainment.',
    'hero.desc':
      'Reimagining comics, virtual humans, and games with AI. Join the Muztrix ecosystem.',
    'hero.cta.primary': 'Explore Solutions',
    'hero.cta.secondary': 'Watch Demo',

    'features.title': 'All-in-One AI Pipeline',
    'features.subtitle':
      'From script and art to production and launch — accelerate every step',
    'features.story.title': 'Story & Script',
    'features.story.desc':
      'AI screenwriting dialogue with version history. Build worlds and plots fast.',
    'features.character.title': 'Character & Art',
    'features.character.desc':
      'Identity-locked character design and storyboards. Generate visuals at scale.',
    'features.game.title': 'Game Creation',
    'features.game.desc':
      'NPC behavior, adaptive difficulty, automated testing — AI inside the game pipeline.',
    'features.virtual.title': 'Virtual Humans',
    'features.virtual.desc':
      'Perceptive, remembering digital humans for real-time interaction.',
    'features.platform.title': 'Multi-platform',
    'features.platform.desc':
      'zh-TW / English / Japanese, consistent across comics, virtual humans, and games.',

    'bento.eyebrow': 'Core Architecture',
    'bento.title.line1': 'AI that sees you,',
    'bento.title.line2': 'hears you, remembers you',
    'bento.neural.title': 'Neural Synthesis',
    'bento.neural.desc':
      'Our virtual humans run on a proprietary perception engine: gender, age, expression, attire, dwell time, voice keywords, and emotion — synthesized into warm conversational rhythm.',
    'bento.neural.cta': 'Explore Technical Docs',
    'bento.cognitive.title': 'Cognitive Flow',
    'bento.cognitive.desc':
      'Long-term memory adapts to each visitor — every conversation gets closer to your personality.',

    'vision.eyebrow': 'ABOUT US',
    'vision.title.line1': 'From the Gamania Original Content Center,',
    'vision.title.line2': 'exploring the edge of AI × content.',
    'vision.body1':
      'We track frontier AI research and bring it into shipping products — from scripts, comics, and scoring to virtual human interactions. Every step gives creators speed and gives audiences something they have never felt before.',
    'vision.body2':
      'Not just shortening the path from idea to deliverable — opening entirely new entertainment possibilities with AI.',
    'vision.point.title': 'Ethical Core',
    'vision.point.desc': 'AI driven by moral frameworks and human values.',

    'cta.title.line1': 'Make AI your',
    'cta.title.line2': 'next creative partner.',
    'cta.desc':
      "Technology partnerships, product licensing, or learning what AI can do for your space — let's talk.",
    'cta.button': 'Get in Touch',

    'footer.tagline': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.ethics': 'AI Ethics',
    'footer.contact': 'Contact',

    'lang.switcher.label': 'Language',
  },

  ja: {
    'site.title': 'Muztrix — ガマニア・オリジナルコンテンツセンターAI',
    'site.description':
      'ガマニア・オリジナルコンテンツセンター発。AIで漫画・バーチャルヒューマン・ゲームを再定義。',

    'nav.about': '私たちについて',
    'nav.virtualHuman': 'バーチャルヒューマン',
    'nav.comic': 'AIコミック',
    'nav.game': 'AIゲーム',
    'nav.contact': 'お問い合わせ',
    'nav.connect': 'お問い合わせ',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AIで創る、',
    'hero.title.line2': '新しいエンタメ体験。',
    'hero.desc':
      'AIで漫画・バーチャルヒューマン・ゲームの可能性を再定義。Muztrixエコシステムへ。',
    'hero.cta.primary': 'ソリューションを見る',
    'hero.cta.secondary': 'デモを見る',

    'features.title': 'オールインワンAIパイプライン',
    'features.subtitle': '脚本・美術・制作・公開まで、すべての工程を加速',
    'features.story.title': 'ストーリー',
    'features.story.desc':
      'AI脚本対話とバージョン履歴。世界観とプロットを素早く構築。',
    'features.character.title': 'キャラクター',
    'features.character.desc':
      'アイデンティティを保ったキャラ設計と絵コンテ。ビジュアル資産を大量生成。',
    'features.game.title': 'ゲーム制作',
    'features.game.desc':
      'NPCの行動、適応的難易度、自動テスト——制作工程にAIを組み込む。',
    'features.virtual.title': 'バーチャルヒューマン',
    'features.virtual.desc':
      '知覚し、記憶し、リアルタイムで対話するデジタルヒューマン。',
    'features.platform.title': 'マルチプラットフォーム',
    'features.platform.desc':
      '繁中／英語／日本語、漫画・バーチャル・ゲーム横断で一貫した体験。',

    'bento.eyebrow': 'コアアーキテクチャ',
    'bento.title.line1': '見て、聴いて、',
    'bento.title.line2': '覚えるAI',
    'bento.neural.title': 'ニューラル・シンセシス',
    'bento.neural.desc':
      '自社製の知覚エンジンを基盤に、性別・年齢・表情・服装・滞在時間、音声キーワードと感情までリアルタイムで解析。温度のある対話のリズムを合成します。',
    'bento.neural.cta': '技術ドキュメントを見る',
    'bento.cognitive.title': '認知フロー',
    'bento.cognitive.desc':
      '長期記憶が来訪者ごとに学習し、対話のたびにあなたの人格へ近づきます。',

    'vision.eyebrow': 'ABOUT US',
    'vision.title.line1': 'ガマニア・オリジナルコンテンツセンターから、',
    'vision.title.line2': 'AI × コンテンツの境界を探る。',
    'vision.body1':
      '最先端のAI研究を追い、製品に実装します——脚本・漫画・音楽からバーチャルヒューマンの対話まで。クリエイターには速度を、観客には未体験の感動を。',
    'vision.body2':
      '「アイデアから成果物まで」を短縮するだけでなく、AIで新しいエンタメの可能性を開きます。',
    'vision.point.title': '倫理的コア',
    'vision.point.desc': '倫理的枠組みと人間の価値観に基づいて駆動するAI。',

    'cta.title.line1': 'AIをあなたの',
    'cta.title.line2': '次のクリエイティブパートナーに。',
    'cta.desc':
      '技術提携、ライセンス、貴社の現場でAIが何をできるか——お気軽にご相談ください。',
    'cta.button': 'お問い合わせ',

    'footer.tagline': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
    'footer.ethics': 'AI倫理',
    'footer.contact': 'お問い合わせ',

    'lang.switcher.label': '言語',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
