
JavaScriptのサイズによってデプロイ時間が増大する件の調査。
[サイズを増やしすぎるとデプロイエラーになる問題](https://github.com/mino0123/lwc-error-2)　があるため、デプロイ可能な程度までサイズを抑えての調査。


### Generate

- $ `node make-lwc`

### Deploy

- $ `time sfdx force:source:push`

```
=== Pushed Source
STATE    FULL NAME                       TYPE                      PROJECT PATH
───────  ──────────────────────────────  ────────────────────────  ─────────────────────────────────────────────────────────
Changed  lwcSlowDeploy/lwcSlowDeploy.js  LightningComponentBundle  force-app/main/default/lwc/lwcSlowDeploy/lwcSlowDeploy.js
      375.61 real         3.07 user         0.51 sys
```
