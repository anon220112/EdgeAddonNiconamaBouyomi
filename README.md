## ニコ生のコメント欄を棒読みちゃんで読み上げるだけのEdge用アドオン

2024年8月にニコ生が復活した後、既存のコメビュが動作しなくなったことで、棒読みちゃんが使えなくなりました。<br>
本アドオンは、ブラウザ（Edge）で開いているニコ生のコメント欄の内容を、棒読みちゃんに送信するだけのアドオンです。<br>
コメビュが対応するまでのつなぎとして、とりあえず棒読みだけでも早く使いたい、という方はお使いください。<br>

> [!TIP]
> 使用の際は以下の点に留意してください。<br>
> - コメント欄をさかのぼってスクロールしている間は、読み上げが止まることがあります。<br>
>   一番下の最新コメントに戻れば、読み上げが復活します。
> - ブラウザ（Edge）を最小化したり、別のタブやアプリを前面に表示していると、読み上げが止まることがあります。<br>
>   ニコ生のタブをアクティブにすれば、読み上げが復活します。<br>
> 
> つまり、「コメント欄にコメントが流れている様子」が画面上で常に見えているようにしてください。<br>

### インストール方法
1. [EdgeAddonNiconamaBouyomi.zip](https://github.com/anon220112/EdgeAddonNiconamaBouyomi/releases/download/Release20240812/EdgeAddonNiconamaBouyomi.zip)をダウンロードする。<br>

2. Edgeの「拡張機能の管理」を開く。<br>
![image01](https://github.com/user-attachments/assets/1ac1952e-49a4-47da-bf46-9363ff8a45a8)
 
5. 「開発者モード」をONにする。（画像はONになっている状態）<br>
![image02](https://github.com/user-attachments/assets/45103d25-9ac4-4e2c-8cb6-0d31c759ed41)
 
7. 同じウィンドウに、EdgeAddonNiconamaBouyomi.zipをドラッグアンドドロップする。<br>
インストール済みの拡張機能の一覧の「他のソースから」に「ニコ生棒読みちゃん連携」が表示されていればインストール完了。<br>
![image03](https://github.com/user-attachments/assets/ab11cde3-de37-4483-9a5f-e7a1426244e8)

### つかいかた
1. 棒読みちゃんを起動する。<br>
棒読みちゃんの設定画面を開き、画面左側のツリーで「アプリケーション連携」を選択し、画面右側で「ローカルHTTPサーバ機能を使う」をTrueに、ポート番号を50080にする。（デフォルトはそうなっているはず）<br>
![image05](https://github.com/user-attachments/assets/756342d0-2fef-45bd-85e5-007d22f148f8)

3. ニコ生の放送ページを開き、映像右下の「棒読み連携開始」ボタンを押す。<br>
![image04](https://github.com/user-attachments/assets/94b1e054-31c3-4c05-a651-5a9785d55f34)

