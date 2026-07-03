@echo off
cd /d C:\Users\fanst\myblog

echo === 添加文件 ===
git add -A

echo === 提交更新 ===
git commit -m "更新博客 %date% %time%"

echo === 推送部署 ===
git push

echo ✅ 博客已更新！等待 Cloudflare 部署...
pause
