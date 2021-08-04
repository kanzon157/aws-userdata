#!/bin/bash
yum update -y
yum install httpd -y
systemctl start httpd
systemctl enable httpd
echo "<h1>Hi from $(hostname -f) </h1>">/var/www/html/index.html
yum install nano -y
yum install git -y
curl -Sl https://rpm.nodesource.com/setup_14.x | sudo -E bash
yum install nodejs -y
mkdir nodeapp
cd nodeapp
git clone https://github.com/enkirus/aws-userdata.git
cd aws-userdata
npm i
node index1.js
