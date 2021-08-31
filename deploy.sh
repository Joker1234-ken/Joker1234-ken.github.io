#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Joker1234-ken/blog.git master:gh-pages

cd ..

rm -rf public