---
slug: auth-n-scan
titleEn: "Auth 'n' Scan: Opportunistic Photoplethysmography in Mobile Fingerprint Authentication"
titleJa: ""
thumb: /images/research/thumbs/auth-n-scan.png
---

![](/images/research/content/auth-n-scan/auth_n_scan-1024x897.png)
<!-- width: 604 height: 529 -->

Recent commodity smartphones have biometric sensing capabilities, allowing their daily use for authentication and identification. This increasing use of biometric systems motivates us to design an opportunistic way to sense user’s additional physiological or behavioral data. We define this concurrent physiological or behavioral data sensing during biometric authentication or identification as dual-purpose biometrics. As an instance of dual-purpose biometrics, we develop photoplethysmography (PPG) sensing during mobile fingerprint authentication, called Auth ‘n’ Scan. Our system opportunistically extracts cardiovascular information, such as a heart rate and its variability, while users perform phone unlock of a smartphone. To achieve this sensing, our Auth ‘n’ Scan system attaches four PPG units around a fingerprint sensor. The system also performs noise removal and signal selection to accurately estimate cardiovascular information. This paper presents the hardware implementation and signal processing algorithm of our Auth ‘n’ Scan prototype. We also report our system evaluations with 10 participants, showing that, despite a little low precision (a standard deviation of 3–7), estimation of heart rates with high accuracy (under a mean error of 1) is possible from PPG data of five seconds and longer if their baseline information is given. We discuss the feasibility of opportunistic PPG sensing in mobile fingerprint authentication.

スマートデバイスの普及により生体認証は日常的に使用できる技術となっている．生体認証においては認証に必要な情報だけではなく，ユーザの健康に関する情報も同時に取得できる可能性がある．これを実現することにより，例えばユーザは携帯電話をアンロックする際に自身の健康情報を同時に記録することが可能となり，ライフログなどのアプリケーションに活用できる．我々は，このようなシステムをDual-purpose biometrics と呼んでいる．本論文では，Dual-purpose biometrics の一例として，指紋認証と同時に指尖容積脈波を取得するシステムを提案し，その試作と評価を行った．予備実験の結果，指の中心部だけでなく周辺部において，脈拍と呼吸数を指紋認証時に取得できることがわかった．この実験結果から，指尖容積脈波を同時に取得する指紋認証システム実現可能性と有用性の高いアプリケーションを議論する．

Takahiro Hashizume, Takuya Arizono, and Koji Yatani. 2018. Auth ‘n’ Scan: Opportunistic Photoplethysmography in Mobile Fingerprint Authentication. _Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (PACM IMWUT)_ 1, 4, Article 137 (January 2018), 27 pages. (paper) [(video)](https://youtu.be/Nj8lek9KP4M)

橋爪崇弘，矢谷浩司．「指尖容積脈波を同時に取得する指紋認証システムの試作と評価」第53回報処理学会UBI研究会，2017年3月．[(paper)](/paper/IPSJUBI-201703_hashizume.pdf) **優秀論文賞受賞．**
