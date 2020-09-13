### 常用命令

- `nginx -t` 检查配置是否正确
- `sudo nginx -s reload` 热重载

### 配置结构

```
main {
  events {}
  http {
    upstream xxx {}
    server {},
    server {},
  }

}
```

### nginx 目录

`/etc/nginx` 配置目录

`/etc/nginx/nginx.conf` 配置主文件，其中
`include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件`

`/etc/nginx/conf.d/` 自定义配置目录，可用项目名称区分 xxx.conf

### server

- 正向代理

```
server {
  listen 80;
  server_name xx.xxxx.com;

  location / {
    root  /xxx/;
    index index.html;
  }
}
```

- 反向代理

```
server {
  listen 80;
  server_name xx.xxxx.com;

  location /api {
    proxy_pass: api.xxx.com;  # proxy_pass: 122.xxx.xxx.xx:8080;
  }
}
```

- https

```
server {
  listen 443 ssl http2 default_server;   # SSL 访问端口号为 443
  server_name xx.xxxx.com;         # 填写绑定证书的域名

  ssl_certificate /etc/nginx/xx.crt;   # 证书文件地址
  ssl_certificate_key /etc/nginx/xx.key;      # 私钥文件地址
  ssl_session_timeout 10m;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;      #请按照以下协议配置
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
  ssl_prefer_server_ciphers on;

  add_header X-Frame-Options DENY;           # 减少点击劫持
  add_header X-Content-Type-Options nosniff; # 禁止服务器自动解析资源类型
  add_header X-Xss-Protection 1;             # 防XSS攻击

  location / {
    root         /xxx/;
    index        index.html;
  }
}
```

例子
```
location / {
  alias        /root/app/blog/;
  index       index.html;
  try_files   $uri $uri/ /index.html;
  add_header Cache-Control no-cache;
}
location ~* /blog/static/(js|css|media)/(.*) {
  alias   /root/app/blog/static/$1/$2;
  autoindex on;
  add_header Cache-Control max-age=3153600;
}
```

root vs alias

### location

- 匹配规则
  - = 开头表示精确匹配
  - ^~ 开头表示 uri 以某个常规字符串开头，这个不是正则表达式
  - ~ 开头表示区分大小写的正则匹配;
  - ~* 开头表示不区分大小写的正则匹配
  - / 通用匹配, 如果没有其它匹配,任何请求都会匹配到

### rerwite

#### docker
