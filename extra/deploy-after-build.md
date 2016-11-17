# JSファイルをローカルでビルドしてからAzure Functionsにデプロイする。

```
$ git branch deploy-azure
```

`deploy-azure`ブランチを先に作っておく。

---

```
$ git checkout deploy-azure
$ git rebase master
$ npm run build:azure
$ git add -A
$ git commit -m "build:azure"
$ git push origin deploy-azure
$ git checkout master
```

- `deploy-azure`ブランチに`HEAD`を切り替える。
- `master`ブランチの内容を`deploy-azure`ブランチに統合する。
- JSファイルをビルドする。
- 生成された全てのファイルをcommitする。
- リモートの`deploy-azure`ブランチにpushする。
- `master`ブランチに`HEAD`を切り替える。
