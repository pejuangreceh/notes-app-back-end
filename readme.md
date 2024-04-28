<!-- urutan project -->

1. npm init --y
2. npm install nodemon --save-dev lalu tambahkan "start": "nodemon server.js" pada package.json
3. npm install eslint --save-dev
4. 


<!-- THIS IS TO CONNECT TO EC2 Instance AWS -->

1. run this on .pem directory
$path = ".\notes-api-webserver.pem"
# Reset to remove explicit permissions
icacls.exe $path /reset
# Give current user explicit read-permission
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
# Disable inheritance and remove inherited permissions
icacls.exe $path /inheritance:r

2. also run this
ssh -i "notes-api-webserver.pem" ubuntu@ec2-54-179-170-237.ap-southeast-1.compute.amazonaws.com

3. clone the repository to EC2 Instance

4. install node in EC2 Instance (Ubuntu)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash



