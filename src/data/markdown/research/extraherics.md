---
slug: extraherics
titleEn: 促考するAI
titleJa: AI as Extraherics
thumb: /images/research/thumbs/extraherics.png
---

As artificial intelligence (AI) technologies, including generative AI, continue to evolve, concerns have arisen about over-reliance on AI, which may lead to human deskilling and diminished cognitive engagement. Over-reliance on AI can also lead users to accept information given by AI without performing critical examinations, causing negative consequences, such as misleading users with hallucinated contents. This paper introduces extraheric AI, a human-AI interaction conceptual framework that fosters users' higher-order thinking skills, such as creativity, critical thinking, and problem-solving, during task completion. Unlike existing human-AI interaction designs, which replace or augment human cognition, extraheric AI fosters cognitive engagement by posing questions or providing alternative perspectives to users, rather than direct answers. We discuss interaction strategies, evaluation methods aligned with cognitive load theory and Bloom's taxonomy, and future research directions to ensure that human cognitive skills remain a crucial element in AI-integrated environments, promoting a balanced partnership between humans and AI.

生成AIをはじめとするAI技術が進化し続ける中，AIへの過度な依存に対する懸念が高まっている．AIへの過剰な依存は人間のスキルの低下や認知的な関与の減少を招く恐れがありほか，AIの提供する情報を批判的に検討せずに受け入れてしまうことにつながり、ハルシネーションなどによって誤った情報が拡散されるといった負の側面も持つ．本論文では，タスク遂行の過程において，ユーザの高次思考スキル（創造性、批判的思考、問題解決能力など）を促進するための人間・AI協調インタラクションとして，**Extraheric AI（促考するAI）**というフレームワークを提案する．人間の認知を代替したり拡張したりする既存の設計とは異なり，促考するAIは直接的な答えを出すのではなく，ユーザに問いかけを行ったり代替的な視点を提示したりすることで，認知的な関与を促す．本論文では促考するAIが取りうるインタラクション戦略，促考するAIを用いたシステムの評価手法，促考するAIの今後の研究の方向性を議論する．促考するAIのフレームワークによりAIが統合された環境下においても，人間の認知スキルが不可欠な要素であり続けることを保ち，人間とAIのバランスの取れたパートナーシップを促進することを目指す．

Koji Yatani, Zefan Sramek, Chi-Lan Yang.

AI as Extraherics: Fostering Higher-order Thinking Skills in Human-AI Interaction.

[https://arxiv.org/abs/2409.09218](https://arxiv.org/abs/2409.09218)

ご自身が使っているChatGPTやGeminiで促考するAIを簡単に試すこともできます！以下のリンクから試してみてください．うまくいったこと，改良すべきことなど，コメントがありましたら，矢谷（koji [at-mark] iis-lab.org）までお寄せください．

You can try extraheric AI with your ChatGPT and Gemini! Please feel free to try out the following links. If you have any usage that you found useful or where we need improvements, please share with Koji (koji [at-mark] iis-lab.org).

GPT based on this extraheric AI concept / 促考するAIの考えに基づいたGPT

[https://chatgpt.com/g/g-6a1fd8a4e4b081918af0f313ad4c3a51-extraheric-ai-cu-kao-suruai](https://chatgpt.com/g/g-6a1fd8a4e4b081918af0f313ad4c3a51-extraheric-ai-cu-kao-suruai)

Gem based on this extraheric AI concept / 促考するAIの考えに基づいたGPT

[https://gemini.google.com/gem/1J-OyVIclq1pS3NnTaWwYFm8CXaAbJNLg?usp=sharing](https://gemini.google.com/gem/1J-OyVIclq1pS3NnTaWwYFm8CXaAbJNLg?usp=sharing)

***

## Extraheric AI strategies / 促考するAIが取りうるインタラクション戦略

Through our literature survey on full-paper publications at ACM CHI 2023 and 2024, we have identified 7 interaction strategies. We note that our original manuscript has 8 interaction strategies, but we decided to omit the nudging strategy after re-review. The following explains each interaction strategy along with illustrations of its example use.

ACM CHI 2023および2024で発表された査読付き論文の文献調査を通じて，私たちは7つのインタラクション戦略を特定しました．なお，当初の原稿では8つの戦略を掲げてありましたが．再検討の結果「ナッジング（nudging）」の戦略は除外することとした．以下では各戦略の例を示すイラストレーションとともに，その詳細を説明する．

### Suggesting / 提案

![](/images/research/content/extraherics/Suggesting-1024x733.png)
<!-- width: 790 height: 565 -->

Suggesting (and recommending) is an extraheric AI interaction strategy that involves proposing ideas, viewpoints, solutions, or actions to the user, without necessarily detailing the rationales behind them. With this strategy, users’ cognitive engagement comes in the form of evaluating and deciding whether or not to incorporate the AI’s suggestions or recommendations into their thinking or tasks. For example, in the context of news article reading, extraheric AI may recommend related articles with similar or different perspectives to encourage the user to explore multiple viewpoints. In the context of technical tasks like software development, extraheric AI may suggest multiple implementations of a particular method and allow the user to choose the one they determine to be most appropriate. In all such cases, it is critical that the AI makes multiple suggestions to allow the user to evaluate and choose among them.

Suggesting（提案）は背後にある根拠を必ずしも詳細に説明することなく，アイデア，視点，解決策，または行動をユーザに提示する戦略である．この戦略におけるユーザの認知的関与は、AIの提案や推奨を自身の思考やタスクにどのように取り入れるべきかどうかを評価し，判断するという形で現れる，例えばニュース記事を閲覧する場面では，ユーザーが多角的な視点を探求することを促すために促考するAIが同様の視点や異なる視点からの関連記事を提案する．ソフトウェア開発のような技術的タスクにおいては，特定の実装方針に対して複数の実装方法を提案し，ユーザが最も適切であると判断したものを選択できるようにする．これらすべての場合において，ユーザがそれらを評価・選択できるように．AIが複数の提案を行うことが極めて重要である．

### Explaining / 説明

![](/images/research/content/extraherics/Explaining-1024x947.png)
<!-- width: 790 height: 731 -->

Explaining is a strategy in which extraheric AI offers explanations of information related to the task which the user currently engages in. Unlike suggestions or recommendations, this strategy emphasizes providing details on the ‘why’ and ‘how’ of a particular piece of information. In the context of news article reading for opinion formation, extraheric AI with this strategy may visualize additional background or contextual explanations about a particular component of the article the user is currently reading. In this manner, extraheric AI allows the user to confirm their understanding and situate the article correctly. In the context of software development, extraheric AI may provide explanations of methods or API calls to allow the user to better understand the code’s function. It is important that extraheric AI offers explanations that allow the user to deepen their understanding of the task at hand. It thus should aim to provide additional context or information rather than step-by-step instructions that the user may blindly follow.

Explaining（説明）は，ユーザが現在取り組んでいるタスクに関連する情報の解説を提示する戦略である．Suggestingと異なり，特定の情報に関する「なぜ」や「どのように」といった詳細を提供することに重点を置く．例えばニュース記事閲覧の場面では，ユーザが現在読んでいる記事の特定の部分について，追加の背景や文脈的な説明を可視化する．これにより促考するAIはユーザが自身の理解を確認し，記事を正しく位置付けることを支援する．ソフトウェア開発では，ユーザがコードの機能をより良く理解できるように，メソッドやAPI呼び出しの説明を提供する．促考するAIはユーザがタスクに対する理解を深められるような説明を提示することが重要であり，ユーザが盲目的に従ってしまうような手順の指示ではなく，追加の文脈や情報を提供することを目指すべきである．

### Discussing / 議論

![](/images/research/content/extraherics/Debating-1024x502.png)
<!-- width: 790 height: 387 -->

In this mode, users debate or discuss a given topic and exchange their thoughts and opinions with AI agents. In the context of news article reading, extraheric AI using this strategy could offer an online discussion thread where the user may discuss their thoughts with AI agents holding various different opinions. In the context of software development, the user may engage in paired programming with an AI peer, and discuss the use of different libraries, code structures, or algorithms. When using this strategy, it is important that debates and discussions focus on presenting different perspectives and ideas rather than simply disagreeing with or asking the user to justify their opinion.

この戦略では，ユーザが特定のトピックについてAIエージェントと議論やディスカッションを行い，思考や意見を交換する．例えばニュース記事を閲覧する場面においては，ユーザが多様な意見を持つAIエージェントと自身の考えを議論できるオンライン掲示板を提供する．ソフトウェア開発の場面では，ユーザーがAIのピア（仲間）とペアプログラミングを行い，異なるライブラリの使用やコード構造，あるいはアルゴリズムについて議論する．この戦略を用いる際，議論やディスカッションは，単にユーザの意見に反対したり正当化を求めたりするのではなく，異なる視点やアイデアを提示することに焦点を当てることが重要である．

### Questioning / 発問

![](/images/research/content/extraherics/Questioning-1024x607.png)
<!-- width: 790 height: 468 -->

In this mode, extraheric AI asks questions about particular parts of what the user currently engages in. Such questioning is not supposed to validate the correctness of opinions and perspectives, but rather stimulate users’ cognitive activities to expand their thoughts or consider different perspectives. In the context of news article reading, extraheric AI using this strategy may ask questions about a particular portion of the content, such as “How do you think people in other countries perceive this news? What consequence could occur in their countries?”. In the context of software development, extraheric AI may ask the user to explain how a particular code block functions, or why they chose to implement an algorithm in the way they did. Through users’ active engagement with questions from AI agents, this process effectively stimulates users’ higher-order thinking.

この戦略では，ユーザが現在取り組んでいる内容の特定の箇所について問いかけを行う．このような問いかけは，意見や視点の正当性を確認するためのものではなく，ユーザの思考を広げたり，異なる視点を検討したりするための認知活動を刺激することを目的としている．例えばニュース記事を閲覧する場面においては，コンテンツの特定の部分について，「他国の人々はこのニュースをどのように捉えると思いますか？その国々ではどのような結果が生じる可能性がありますか？」といった質問を投げかける．ソフトウェア開発の場面では，特定のコードブロックがどのように機能するか，あるいはなぜそのアルゴリズムをそのような方法で実装することを選択したのかを説明するようにユーザに求める．AIエージェントからの問いかけに対するユーザの能動的な関与を通じて，ユーザの高次思考を効果的に刺激する．

### Scaffolding / 足場かけ

![](/images/research/content/extraherics/Scaffolding-1024x656.png)
<!-- width: 790 height: 506 -->

Scaffolding is a learning approach where teachers offer temporary customized support to help students learn new concepts and skills, and gradually remove this help as students become more capable on their own. Extraheric AI can serve as a scaffold for users by taking on part of a task and allowing them to focus only on particular portions at a time. In the context of software development, extraheric AI using this strategy may help the user focus on program structure by allowing them to write pseudo-code or use visual programming methods before later translating these into functional code. It is critical that extraheric AI using this strategy focuses on developing the user’s fundamental understanding of a task rather than simply allowing them to offload task decomposition.

Scaffolding（足場かけ）は，教師が一時的にカスタマイズされた支援を提供することで学生の新しい概念やスキルの習得を助け，学生が自立して能力を発揮できるようになるにつれてその支援を徐々に取り除いていく学習アプローチである．促考するAIでは，タスクの一部を引き受け，ユーザが一度に特定の箇所だけに集中できるようにすることで，ユーザにとっての足場として機能することができる．例えばソフトウェア開発の場面では，ユーザがまず擬似コードを書いたり視覚的なプログラミング手法を用いたりすることを可能にし，後にこれらを実行可能なコードへと変換することで，プログラムの構造に集中できるよう支援する．この戦略を用いる促考するAIにおいては，単にタスクの分解を肩代わりさせるのではなく，タスクに対するユーザの根本的な理解を深めることに焦点を当てることが極めて重要である．

### Simulating / 模擬

![](/images/research/content/extraherics/Simulation-1024x751.png)
<!-- width: 790 height: 579 -->

In this mode, extraheric AI simulates a circumstance where the user experiences a situation from a standpoint other than their own or develops skills that would be difficult to otherwise practice. For example, AI agents could simulate audience members of different opinions and perspectives, allowing users to practice public speaking and responding to audience questions. Extraheric AI could be tuned to different levels of aggressiveness to develop resilience and abilities for handling different types of audiences. Simulations can also allow users to experience situations from a different standpoint. For example, the user could take the role of an interviewer tasked with interviewing an AI agent playing the role of a job candidate. By asking a variety of questions and observing the agent’s responses, the user can think about how they may answer such questions as interviewees in actual job interviews. The user will also have the opportunity to empathize with their interviewers, potentially giving them valuable insight into how to best communicate their ideas. As with other strategies, it is important that such simulations be designed to present a variety of viewpoints to encourage users to consider different perspectives and think critically about their own positionality. This strategy could be particularly valuable for helping users understand their own and others’ implicit biases.

この戦略では，ユーザが自分自身とは異なる立場から状況を経験したり，他の方法では練習が困難なスキルを習得したりする状況をシミュレートする．例えば，AIエージェントが異なる意見や視点を持つ聴衆の役割を担うことで，ユーザはパブリックスピーチや聴衆からの質問への回答を練習することができる．促考するAIは，異なる種類の聴衆に対応するためのレジリエンスや能力を養うために，積極性のレベルを様々に調整することが可能である．また，シミュレーションによってユーザは異なる立場から状況を経験することもできる．例えば，ユーザが面接官の役割を担い，採用候補者の役割を演じるAIエージェントにインタビューを行うタスクに取り組むことができる．多様な質問を投げかけ，エージェントの反応を観察することで，ユーザは実際の採用面接において面接を受ける側としてどのように回答すべきかを考えることができる．またユーザは面接官に共感する機会も得られ，自分の考えを最も効果的に伝える方法について貴重な洞察を得られる可能性がある．他の戦略と同様に，ユーザが異なる視点を検討し，自身の立ち位置について批判的に考えられるよう，多様な観点を提示するようにシミュレーションを設計することが重要である．この戦略は，ユーザが自分自身や他者の潜在的なバイアスの理解支援において特に価値があると考えられる．

### Demonstrating / 実演

![](/images/research/content/extraherics/Demonstrating-1024x525.png)
<!-- width: 790 height: 405 -->

Demonstrating is a strategy where users simply observe the behavior or interaction of AI agents and learn implicitly through these observations. In this case, there is no direct information flow from extraheric AI to users. Users thus would have the largest freedom in how they interpret the behavior or interaction of AI agents and internalize take-aways through vicarious learning. In the context of news article reading for opinion formation, extraheric AI using this strategy may take the role of a peer, demonstrating their reading process and sharing opinions. The user can review these demonstrations and construct their own opinions by integrating what they have observed with their own reading. Extraheric AI using this strategy may include multiple AI agents to offer the demonstrations of diverse perspective or approaches to a task or topic.

Demonstrating（実演）は，ユーザがAIエージェントの振る舞いやインタラクションを単に観察し，それらの観察を通じて暗黙的に学習する戦略である．この場合，促考するAIからユーザーへの直接的な情報の流れは存在しない．ユーザがAIエージェントの振る舞いやインタラクションをどのように解釈し，代理学習を通じて教訓を内面化するかはユーザに大きく任せられることになる．例えばニュース記事閲覧の文脈では，AIが仲間の役割を担い，自身の読解プロセスを実演したり意見を共有したりする場合がある．ユーザはこれらの実演を検討し，観察した内容を自身の読解と統合することで，自分自身の意見を構築することができる．この戦略においては，タスクやトピックに対する多様な視点やアプローチの実演を提供するために，複数のAIエージェントを含む場合がある．

## Extraheric AI work at IIS Lab / IIS Labにおける促考するAI研究成果

- Xinrui Fang, Anran Xu, Chi-Lan Yang, Ya-Fang Lin, Sylvain Malacria, and Koji Yatani. LLM-based In-situ Thought Exchanges for Critical Paper Reading. To appear in Proceedings of IUI 2026.
- 山中駿, 中野博貴, 矢谷浩司．AIセルフクローンを用いた面接時の回答改善支援手法の検討．情報処理学会HCI研究会，2025年11月．
- Shixian Geng, Remi Inayoshi, Chi-Lan Yang, Zefan Sramek, Yuya Umeda, Chiaki Kasahara, Arissa J. Sato, Simo Hosio, and Koji Yatani. 2025. Beyond the Dialogue: Multi-chatbot Group Motivational Interviewing for Premenstrual Syndrome (PMS) Management. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025), Article 640, 1–18.
- 風澤宥吾, 矢谷浩司．薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム．情報処理学会UBI研究会，2025年5月．
- 香取浩紀，矢谷浩司，楊期蘭．2025．授業後の要約ノート作成支援アシスタントの設計と評価．情報処理学会全国大会，2025年3月．
- 耿世嫻，稲吉玲美，楊期蘭，シュラーメク ゼファン，梅田悠哉，笠原千秋，佐藤安理紗ジエンジエラ，ホシオ シモ，矢谷浩司．複数のチャットボットを組み合わせた動機付け面接によるPMSへの対処支援．情報処理学会HCI研究会，2025年1月．
- 梅田悠哉, 楊期蘭, 平野真理, 矢谷浩司. 2024. 大規模言語モデルを活用した認知再構成法支援チャットボットシステム. DICOMO 2024, 2024年7月.
