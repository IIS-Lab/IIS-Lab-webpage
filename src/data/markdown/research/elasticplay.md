---
slug: elasticplay
titleEn: "ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets"
titleJa: ""
thumb: /images/research/thumbs/elasticplay.png
---

![](/images/research/content/elasticplay/elasticplay-1024x392.png)
<!-- width: 604 height: 231 -->

Video consumption is being shifted from sit-and-watch to selective skimming. Existing video player interfaces, however, only provide indirect manipulation to support this emerging behavior. Video summarization alleviates this issue to some extent, shortening a video based on the desired length of a summary as an input variable. But an optimal length of a summarized video is often not available in advance. Moreover, the user cannot edit the summary once it is produced, limiting its practical applications. We argue that video summarization should be an interactive, mixed-initiative process in which users have control over the summarization procedure while algorithms help users achieve their goal via video understanding. In this paper, we introduce ElasticPlay, a mixed-initiative approach that combines an advanced video summarization technique with direct interface manipulation to help users control the video summarization process. Users can specify a time budget for the remaining content while watching a video; our system then immediately updates the playback plan using our proposed cut-and-forward algorithm, determining which parts to skip or to fast-forward. This interactive process allows users to fine-tune the summarization result with immediate feedback. We show that our system outperforms existing video summarization techniques on the TVSum50 dataset. We also report two lab studies (22 participants) and a Mechanical Turk deployment study (60 participants), and show that the participants responded favorably to ElasticPlay.

スマートデバイスや動画配信サービスの普及により，動画視聴の際は視聴したいシーンまでスキップしたり，視聴速度を変えたりするなど人々の動画視聴の方法が変わってきている．既存研究では，動画要約技術によって動画内の重要なシーンを自動選別したり，重要でないシーンを速く再生し，結合することでこの問題にある程度対応してきた．しかしながら，ユーザは自動要約開始時に出力されるダイジェスト動画の時間を前もって決める必要があったり，終了後には要約された動画を編集できないなどの問題点があった．動画要約の理想形とは，ユーザが動画要約全体の主導権を持ちつつアルゴリズムがそれを補助するような，インタラクティブな作業であると我々は考える．本研究ではそのような，ユーザとアルゴリズムが協調して動画要約を行うアプリケーションとしてElasticPlayを提案する．ユーザが動画を視聴しながら残りの再生時間を調整すると，我々のアルゴリズムは即座に残りの動画の中でどの場所をスキップすべきか，あるいは再生時間を速めるべきかを推定する．これによって，ユーザはアルゴリズムからのフィードバックを受けながら，動画要約をインタラクティブに行うことが可能になる．TVSum50データセットを用いた評価の結果，我々のシステムは既存の動画要約技術を遥かに上回る性能を誇ることがわかった．また，研究室内実験と(実験参加者22人)とクラウドソーシングを利用して行なった実験(実験参加者60人)の結果，ユーザはElasticPlayを好んで使いたいということが分かった．

Haojian Jin, Yale Song, and Koji Yatani. ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets. In Proceedings of Multimedia 2017, 1164 – 1172 (oral presentation). [(paper)](https://arxiv.org/pdf/1708.06858)
