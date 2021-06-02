<html>
  <head>
    <title>details</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <style rel="stylesheet">
    .details {
      font-size: 18px;
    }
  </style>
  <body>
    <div class="news-view details">
      <h3>{{ item.title }}</h3>
      <h6>这是当前页面的id：{{ item.id }}</h6>
    </div>
    <a href="{{ item.url }}">{{ item.url }}</a>

    <div>
    <ul>
     {{userInfo.name}}
     {{userInfo.age}}
     {{userInfo.register_date}}     
      </ul>
    </div>
  </body>
</html>
