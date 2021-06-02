#!/usr/bin/env bash
# 错误提示
fail="未输入提交描述"
# 成功提示
success="更新成功"
if [ $# = 1 ]  ; then  
   git add ./
   git commit -m   $1
   git pull 
   git push 
echo $success;
else 
echo $fail; 
#调用windows弹窗提示
./toast.cmd  "git commit-m 未提交描述错误" $fail
fi