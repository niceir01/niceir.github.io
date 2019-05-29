```
git clone ...
cd ...
git remote set-url origin https://<username>:<password>@github.com/niceir01/niceir01.github.io.git
yarn install
git push origin mainsource01
yarn deploy
改cname 或 setting domain
```

> main branch 為部屬時自動更新，改mainsource branch 即可
> 部署完要手動再加一次custom domain