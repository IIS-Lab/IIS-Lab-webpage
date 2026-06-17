export interface MemberRow {
  nameEn: string
  nameJa?: string
  url?: string
  affiliation?: string
}

export interface MemberSection {
  title: string
  rows: MemberRow[]
}

export const membersIntro = {
  ja: 'IIS Labには2026年4月現在，ポスドク1名，博士課程6名，修士課程7名，学部生4名，共同研究者・客員研究員2名が在籍しています．また現在までに，助教1名，博士9名，修士37名，学士49名，研究員・共同研究者・インターン生等18名を輩出いたしました（のべ人数）．',
  en: 'IIS Lab currently has 1 post-doctoral researcher, 6 doctoral students, 7 master students, 4 undergraduate students, and 2 visiting researcher and students as of April 2026. We also have alumni of 1 assistant professor, 9 Ph.D.s, 37 masters, 49 bachelors, and 18 intern/visiting students/visiting researchers in total so far.',
}

export const memberSections: MemberSection[] = [
  {
    title: 'Professor (Lab Director) / 教授',
    rows: [
      {
        nameEn: 'Koji Yatani',
        nameJa: '矢谷 浩司',
        url: '/member/koji-yatani',
        affiliation:
          '情報理工学系研究科電子情報学専攻学際情報学府先端表現情報学コース工学系研究科電気系工学専攻工学部電子情報工学科',
      },
    ],
  },
  {
    title: 'Post-doctoral Researcher / ポスドク研究員',
    rows: [
      {
        nameEn: 'Ya-Fang (Avon) Lin',
        affiliation: '情報理工学系研究科電子情報学専攻',
      },
    ],
  },
  {
    title: 'Doctoral students / 博士課程',
    rows: [
      { nameEn: 'Nasi Wang', nameJa: '王 納恩', affiliation: '工学系研究科電気系工学専攻' },
      {
        nameEn: 'Keitaro Shimizu',
        nameJa: '清水 啓太郎',
        url: 'https://xr-edtechlab.com/',
        affiliation: '学際情報学府先端表現情報学コース（社会人博士）',
      },
      { nameEn: 'Feiyang Zhou', nameJa: '周 飛揚', affiliation: '学際情報学府先端表現情報学コース' },
      {
        nameEn: 'Jo Takezawa',
        nameJa: '竹澤 譲',
        affiliation: '学際情報学府先端表現情報学コース（社会人博士）',
      },
      {
        nameEn: 'Xinrui Fang',
        nameJa: '方 欣瑞',
        url: 'http://xinrui.design/',
        affiliation: '学際情報学府先端表現情報学コース',
      },
      {
        nameEn: 'Shunpei Norihama',
        nameJa: '乘濵 駿平',
        affiliation:
          '学際情報学府先端表現情報学コースClass of 2024（Master，学際情報学府先端表現情報学コース）Class of 2022（Bachelor，工学部電子情報工学科）',
      },
    ],
  },
  {
    title: 'Master students / 修士課程',
    rows: [
      {
        nameEn: 'Satoshi Inoue',
        nameJa: '井上 聡士',
        affiliation:
          '学際情報学府先端表現情報学コースClass of 2025 (Bachelor，工学部電子情報工学科)',
      },
      { nameEn: 'Dingkun Gong', nameJa: '龔 定坤', affiliation: '工学系研究科電気系工学専攻' },
      {
        nameEn: 'Shuta Takahashi',
        nameJa: '高橋 脩汰',
        affiliation:
          '工学系研究科電気系工学専攻Class of 2025 (Bachelor，工学部電気電子工学科)',
      },
      {
        nameEn: 'Yugo Fusawa',
        nameJa: '風澤 宥吾',
        affiliation:
          '工学系研究科電気系工学専攻Class of 2024 (Bachelor，工学部電気電子工学科)',
      },
      {
        nameEn: 'Haruto Mori',
        nameJa: '盛 遥斗',
        affiliation:
          '工学系研究科電気系工学専攻Class of 2025 (Bachelor，工学部電子情報工学科)',
      },
      { nameEn: 'Jiayi Yang', nameJa: '楊 佳怡', affiliation: '工学系研究科電気系工学専攻' },
      { nameEn: 'Wenhao Li', nameJa: '李 文豪', affiliation: '工学系研究科電気系工学専攻' },
    ],
  },
  {
    title: 'Undergraduate students / 学部生',
    rows: [
      { nameEn: 'Ren Yin', nameJa: '尹 人', affiliation: '電子情報工学科' },
      { nameEn: 'Yuta Omori', nameJa: '大森 唯詩', affiliation: '電子情報工学科' },
      { nameEn: 'Yudai Shimada', nameJa: '島田 雄大', affiliation: '工学部電気電子工学科' },
      { nameEn: 'Haruma Tasaki', nameJa: '田崎 晴真', affiliation: '電子情報工学科' },
    ],
  },
  {
    title: 'Visiting researchers / 共同研究者・客員研究員',
    rows: [
      {
        nameEn: 'Le Fang',
        nameJa: '方 楽',
        affiliation: 'from Hong Kong Polytechnic UniversityJanuary 2026 — June 2026',
      },
      {
        nameEn: 'Simo Hosio',
        nameJa: 'ホシオ シモ',
        url: 'https://simohosio.com/',
        affiliation: 'from University of OuluApril 2022 — March 2027',
      },
    ],
  },
  {
    title: 'Alumni / 卒業生',
    rows: [
      {
        nameEn: 'Chi-Lan Yang',
        nameJa: '楊 期蘭',
        url: 'https://sites.google.com/cyber.t.u-tokyo.ac.jp/chi-lan-yang/home',
        affiliation: 'April 2023 — March 2026 as an Assistant Professor in 学際情報学府',
      },
      {
        nameEn: 'Kazuhiro Shinoda',
        nameJa: '篠田 和宏',
        url: 'https://kcfnen1916.com/',
        affiliation:
          'Class of 2025 (Ph.D., 学際情報学府先端表現情報学コース)Class of 2022（Master, 学際情報学府先端表現情報学コース）Class of 2020 (Bachelor, 工学部電子情報工学科)JSPS特別研究員(DC2)',
      },
      {
        nameEn: 'Zefan Sramek',
        nameJa: 'シュラーメク ゼファン',
        url: 'http://zefansramek.net/research.php',
        affiliation:
          'Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2021 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Minghui Chen',
        nameJa: '陳 明輝',
        url: 'http://minghuihub.github.io/',
        affiliation:
          'Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2020 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Shitao Fang',
        nameJa: '方 詩涛',
        url: 'https://stfang.me/',
        affiliation:
          'Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Yuya Umeda',
        nameJa: '梅田 悠哉',
        affiliation:
          'Class of 2025 (Master, 学際情報学府先端表現情報学コース)Class of 2023（Bachelor，工学部電子情報工学科）',
      },
      {
        nameEn: 'Rei Sawano',
        nameJa: '澤野 令',
        affiliation:
          'Class of 2025 (Master, 工学系研究科電気系工学専攻)Class of 2022（Bachelor，工学部電子情報工学科）',
      },
      {
        nameEn: 'Hiroki Nakano',
        nameJa: '中野 博貴',
        affiliation:
          'Class of 2025 (Master, 工学系研究科電気系工学専攻)Class of 2023（Bachelor，工学部電子情報工学科）',
      },
      {
        nameEn: 'Haruma Hirabayashi',
        nameJa: '平林 晴馬',
        affiliation:
          'Class of 2025 (Master, 学際情報学府先端表現情報学コース)Class of 2023（Bachelor，工学部電子情報工学科）',
      },
      { nameEn: 'Shun Yamanaka', nameJa: '山中 駿', affiliation: 'Class of 2025 (Master, 工学系研究科電気系工学専攻)' },
      {
        nameEn: 'Yuange Liu',
        nameJa: '劉 遠歌',
        affiliation: 'Class of 2025 (Master, 学際情報学府先端表現情報学コース)',
      },
      {
        nameEn: 'Kohei Yasugi',
        nameJa: '八杉 航平',
        affiliation: 'Class of 2025 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'He Xinyu',
        nameJa: '何 昕昱',
        affiliation: 'October 2024 — March 2026 as 大学院外国人研究生',
      },
      {
        nameEn: 'Lukas Moers',
        nameJa: 'メールス ルーカス',
        affiliation: 'July 2025 — August 2025 as an intern',
      },
      {
        nameEn: 'Saumya Pareek',
        nameJa: 'パリーク ソウミャ',
        affiliation: 'March 2025 — April 2025 as an intern',
      },
      {
        nameEn: 'Shixian Geng',
        nameJa: '耿 世嫻',
        url: 'https://shixiangeng.github.io/',
        affiliation:
          'Class of 2025 (Ph.D.，工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Anran Xu',
        nameJa: '徐 安然',
        url: 'https://anranxu.com',
        affiliation:
          'Class of 2025 (Ph.D.，工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Hiroki Katori',
        nameJa: '香取 浩紀',
        affiliation:
          'Class of 2024（Master，工学系研究科電気系工学専攻）Class of 2022（Bachelor，工学部電子情報工学科）',
      },
      {
        nameEn: 'Kakeru Miyazaki',
        nameJa: '宮崎 翔',
        affiliation:
          'Class of 2024（Master，学際情報学府先端表現情報学コース）Class of 2022（Bachelor，工学部電子情報工学科）',
      },
      { nameEn: 'Taiyo Ito', nameJa: '伊東 大燿', affiliation: 'Class of 2024（Bachelor，工学部電子情報工学科）' },
      {
        nameEn: 'Sylvain Malacria',
        nameJa: 'マラクリア シルバン',
        url: 'http://www.malacria.com/',
        affiliation:
          'July, 2024 — May, 2025 as aJSPS invitational fellow（JSPS外国人招へい研究者）',
      },
      {
        nameEn: 'Xuhui Chang',
        nameJa: '常 旭暉',
        affiliation:
          'October 2024 — March 2025 as a USTEP graduate exchange student（大学院交換留学生）',
      },
      { nameEn: 'Daniel Szabo', nameJa: 'ダニエル スザボ', affiliation: 'October 2024 as an intern' },
      { nameEn: 'Li Junhao', nameJa: 'リー ジュンハオ', affiliation: 'October 2024 as an intern' },
      {
        nameEn: 'Zhongyi Zhou',
        nameJa: '周 中一',
        affiliation:
          'Class of 2023 (Ph.D., 工学系研究科電気系工学専攻)Class of 2020 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Ginshi Shimojima',
        nameJa: '下島 銀士',
        affiliation:
          'Class of 2023（Master, 学際情報学府先端表現情報学コース）Class of 2021 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Kosuke Yamamoto',
        nameJa: '山本 恒輔',
        affiliation: 'Class of 2023 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Ryo Yoshikawa',
        nameJa: '吉川 諒',
        affiliation:
          'Class of 2023（Master, 学際情報学府先端表現情報学コース）Class of 2021 (Bachelor, 工学部電気電子工学科)',
      },
      {
        nameEn: 'Arissa Janejera Sato',
        nameJa: '佐藤 安理紗 ジエンジエラ',
        affiliation:
          'Class of 2022 (Ph.D., 工学系研究科電気系工学専攻)Class of 2019 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Akari Doi',
        nameJa: '土居 明莉',
        affiliation: 'Class of 2022（Master, 学際情報学府先端表現情報学コース）',
      },
      {
        nameEn: 'Michihiko Ueno',
        nameJa: '上野 道彦',
        affiliation: 'January, 2020 — March, 2023, as a visiting researcher',
      },
      {
        nameEn: 'Dimas Antony Chacon Salas',
        nameJa: 'チャコン アントニー',
        affiliation: 'Class of 2022（Ph.D.，工学系研究科電気系工学専攻）',
      },
      {
        nameEn: 'Shoko Sano',
        nameJa: '佐野 翔子',
        affiliation: 'Class of 2021 (Master, 学際情報学府先端表現情報学コース)',
      },
      {
        nameEn: 'Ryo Takashima',
        nameJa: '高島 諒',
        affiliation: 'Class of 2021 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Hirotaka Hayashi',
        nameJa: '林 裕嵩',
        affiliation:
          'Class of 2021 (Master, 学際情報学府先端表現情報学コース)Class of 2019 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Yuta Hirai',
        nameJa: '平井 雄太',
        affiliation: 'Class of 2021 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Takuma Masuda',
        nameJa: '桝田 拓磨',
        affiliation: 'Class of 2021 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Takaharu Yamada',
        nameJa: '山田 崇晴',
        affiliation: 'Class of 2021 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Nami Ogawa',
        nameJa: '小川 奈美',
        affiliation: 'April, 2021 — March, 2022, as a visiting researcher',
      },
      {
        nameEn: 'Yuji Sugiyama',
        nameJa: '杉山 悠司',
        affiliation:
          'Class of 2020 (Master, 工学系研究科電気系工学専攻)Class of 2018 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Asahi Takenouchi',
        nameJa: '竹ノ内 朝陽',
        affiliation:
          'Class of 2020 (Master, 学際情報学府先端表現情報学コース)Class of 2018 (Bachelor, 工学部電子情報工学科)',
      },
      { nameEn: 'Ikutoshi Katayama', nameJa: '片山 育星', affiliation: 'Class of 2020 (Bachelor, 電気電子工学科)' },
      { nameEn: 'Ryoto Suzuki', nameJa: '鈴木 凌斗', affiliation: 'Class of 2020 (Bachelor, 電気電子工学科)' },
      { nameEn: 'Naho Tomiki', nameJa: '富木 菜穂', affiliation: 'Class of 2020 (Bachelor, 電子情報工学科)' },
      { nameEn: 'Shinichiro Yoshida', nameJa: '吉田 慎一朗', affiliation: 'Class of 2020 (Bachelor, 電気電子工学科)' },
      {
        nameEn: 'Hao Xu',
        nameJa: '胥 皓',
        affiliation: 'Class of 2020 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Carla F. Griggio',
        nameJa: 'グリッジョ カーラ',
        affiliation: 'May 2019 — May 2020, as a post-doctoral researcher supported by JSPS',
      },
      {
        nameEn: 'Tatsuhiko Sakaguchi',
        nameJa: '坂口 達彦',
        affiliation:
          'Class of 2019 (Master, 工学系研究科電気系工学専攻)Class of 2017 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Hiroaki Masaki',
        nameJa: '正木 博明',
        affiliation:
          'Class of 2019 (Master, 学際情報学府先端表現情報学コース)Class of 2017 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Hidenori Matsui',
        nameJa: '松井 秀憲',
        affiliation:
          'Class of 2019 (Master, 学際情報学府先端表現情報学コース)Class of 2017 (Bachelor, 工学部電子情報工学科)',
      },
      { nameEn: 'Ayuka Ito', nameJa: '伊藤 歩桂', affiliation: 'Class of 2019 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Siwook Choi', nameJa: 'チェ シウク', affiliation: 'Class of 2019 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Yuki Tsubouchi', nameJa: '坪内 優樹', affiliation: 'Class of 2019 (Bachelor, 工学部電気電子工学科)' },
      { nameEn: 'Kosuke Hatai', nameJa: '幡井 皓介', affiliation: 'Class of 2019 (Bachelor, 工学部電子情報工学科)' },
      {
        nameEn: 'Kiyotaka Eguchi',
        nameJa: '江口 清貴',
        affiliation: 'April 2018 — March 2020, as a visiting researcher',
      },
      {
        nameEn: 'Kengo Shibata',
        nameJa: '柴田 健吾',
        affiliation: 'April 2019 — July 2019, as an exchange student from University of Geneva',
      },
      {
        nameEn: 'Peihan Tu',
        nameJa: 'トゥ ペイハン',
        affiliation: 'April 2019 — July 2019, as a research intern',
      },
      {
        nameEn: 'Daisuke Shibato',
        nameJa: '柴藤 大介',
        affiliation:
          'Class of 2018 (Master, 工学系研究科電気系工学専攻)Class of 2016 (Bachelor, 工学部電子情報工学科)',
      },
      { nameEn: 'Benio Shimada', nameJa: '嶋田 紅緒', affiliation: 'Class of 2018 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Toby Chong', nameJa: 'チョン ロン ヒン', affiliation: 'Class of 2018 (Bachelor, 工学部電気電子工学科)' },
      { nameEn: 'Yuya Munekata', nameJa: '宗像 佑弥', affiliation: 'Class of 2018 (Bachelor, 工学部電子情報工学科)' },
      {
        nameEn: 'Namiki Shimoo',
        nameJa: '下尾 波輝',
        affiliation:
          'Class of 2017 (Master, 工学系研究科電気系工学専攻)Class of 2015 (Bachelor, 工学部電子情報工学科)',
      },
      {
        nameEn: 'Takahiro Hashizume',
        nameJa: '橋爪 崇弘',
        affiliation: 'Class of 2017 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Takuma Yoshitani',
        nameJa: '吉谷 拓真',
        affiliation:
          'Class of 2017 (Master, 工学系研究科電気系工学専攻)Class of 2015 (Bachelor, 工学部電子情報工学科)',
      },
      { nameEn: 'Takuma Suzuki', nameJa: '鈴木 拓馬', affiliation: 'Class of 2017 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Junpei Mishima', nameJa: '三島 潤平', affiliation: 'Class of 2017 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Yuji Hatada', nameJa: '畑田 裕二', affiliation: 'Class of 2017 (Bachelor, 工学部電子情報工学科)' },
      {
        nameEn: 'Rishabh Shrivastava',
        nameJa: 'スリバスタバ リシャブ',
        affiliation:
          'May 2017 — July 2017, as a research intern from Indian Institute of Technology, Kharagpur',
      },
      {
        nameEn: 'Shunya Ariga',
        nameJa: '有賀 竣哉',
        affiliation: 'Class of 2016 (Master, 工学系研究科電気系工学専攻)',
      },
      {
        nameEn: 'Tomomi Iwashita',
        nameJa: '岩下 知美',
        affiliation: 'Class of 2016 (Master, 工学系研究科電気系工学専攻)',
      },
      { nameEn: 'Yu Aoki', nameJa: '青木 優', affiliation: 'Class of 2016 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Takuya Arizono', nameJa: '有薗 拓也', affiliation: 'Class of 2016 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Hiroki Nakazawa', nameJa: '中沢 弘樹', affiliation: 'Class of 2016 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Wakana Nogami', nameJa: '野上 和加奈', affiliation: 'Class of 2016 (Bachelor, 工学部電気電子工学科)' },
      { nameEn: 'Shota MIyazaki', nameJa: '宮崎 章太', affiliation: 'Class of 2016 (Bachelor, 工学部電子情報工学科)' },
      {
        nameEn: 'Sauvik Das',
        nameJa: 'ソウヴィック ダス',
        affiliation: 'Jun. 2016 — Aug. 2016, as a research intern from CMU',
      },
      {
        nameEn: 'Stephen MacNeil',
        nameJa: 'ステファン マクネイル',
        affiliation: 'Jun. 2016 — Aug. 2016, as a research intern from UNC Charlotte',
      },
      { nameEn: 'Mitsuru Inada', nameJa: '稲田 弥鶴', affiliation: 'Class of 2015 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Atsushi Otsubo', nameJa: '大坪 篤史', affiliation: 'Class of 2015 (Bachelor, 工学部電子情報工学科)' },
      { nameEn: 'Kenta Hasegawa', nameJa: '長谷川 健太', affiliation: 'Class of 2015 (Bachelor, 工学部電子情報工学科)' },
      {
        nameEn: 'Ryo Suzuki',
        nameJa: '鈴木 遼',
        affiliation: 'Oct. 2014 — May 2015, as a student collaborator',
      },
    ],
  },
]
