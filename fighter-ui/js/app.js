// 常用的元素和变量
var $body = $(document.body);

// 画布相关
var $canvas = $('#game');
var canvas = $canvas.get(0);
var context = canvas.getContext("2d");
// 设置画布的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 获取画布相关信息
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

// 判断是否有 requestAnimationFrame 方法，如果有则模拟实现
window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
    window.setTimeout(callback, 1000 / 30);
};

/**
 * 基本事件绑定
 */
function bindEvent() {
  // 绑定事件
  var self = this;
  // 点击开始按钮
  $body.on('click', '.js-start', function() {
    $body.attr('data-status', 'start');
    // 开始游戏
    GAME.start();
  });


  // 点击说明按钮
  $body.on('click', '.js-rule', function() {
    $body.attr('data-status', 'rule');
  });

  // 点击设置按钮
  $body.on('click', '.js-setting', function() {
    $body.attr('data-status', 'setting');
  });

  // 点击确认设置按钮
  $body.on('click', '.js-confirm-setting', function() {
    $body.attr('data-status', 'index');
    // 设置游戏
    // GAME.init();
  });

  // 点击我知道了规则的按钮
  $body.on('click', '.js-confirm-rule', function() {
    $body.attr('data-status', 'index');
  });
}


/**
 * 游戏对象
 */
var GAME = {
  /**
   * 游戏初始化
   */
  init: function(opts) {
    // 设置opts
    var opts = Object.assign({}, opts, CONFIG);
    this.opts = opts;
    
    // 计算飞机初始坐标
    this.planePosX = canvasWidth / 2 - opts.planeSize.width / 2;
    this.planePosY = canvasHeight - opts.planeSize.height - 50;
    

    // console.log(this.opts);
  },
  /**
   * 游戏开始需要设置
   */
  start: function () {
    // 获取游戏初始化 level
    var self = this; // 保存函数调用对象（即Game）
    var opts = this.opts;
    var images = this.images;
    // 清空射击目标对象数组和分数设置为 0
    this.enemies = []; 
    this.score = 0;

    // 随机生成大小敌机
    this.createSmallEnemyInterval = setInterval(function () {
      self.createEnemy('normal');
    }, 500);
    this.createBigEnemyInterval = setInterval(function () {
      self.createEnemy('big');
    }, 1500);
    
    // 开始更新游戏
    this.update();
  },
  update: function () {
    var self = this;
    var opts = this.opts;
    // 更新飞机、敌人
    this.updateElement();

    // 先清理画布
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    
    // 绘制画布
    this.draw();
    
    // 不断循环 update
    requestAnimFrame(function() {
      self.update()
    });
  },
  /**
   * 更新当前所有元素的状态
   */
  updateElement: function() {
    var opts = this.opts;
    var enemySize = opts.enemySize;
    var enemies = this.enemies;
    var i = enemies.length;
  
    // 循环更新怪兽
    while (i--) {
      var enemy = enemies[i];
      enemy.down();
      if (enemy.y >= canvasHeight) {
        this.enemies.splice(i, 1);
      } else {
        // 判断飞机状态
      }
    }
  },
  /**
   * 生成怪兽
   */
  createEnemy: function(enemyType) {
    var enemies = this.enemies;
    var opts = this.opts;
    var images = this.images || {};
    var enemySize = opts.enemySmallSize;
    var enemySpeed = opts.enemySpeed;
    var enemyIcon = resourceHelper.getImage('enemySmallIcon');
    var enemyBoomIcon = resourceHelper.getImage('enemySmallBoomIcon');
  
  
    var enemyLive = 1; 
  
    // 大型敌机参数
    if (enemyType === 'big') {
      enemySize = opts.enemyBigSize;
      enemyIcon = resourceHelper.getImage('enemyBigIcon');
      enemyBoomIcon = resourceHelper.getImage('enemyBigBoomIcon');
      enemySpeed = opts.enemySpeed * 0.6;
      enemyLive = 10;
    } 
  
    // 综合元素的参数
    var initOpt = {
      x: Math.floor(Math.random() * (canvasWidth - enemySize.width)), 
      y: -enemySize.height,
      enemyType: enemyType,
      live: enemyLive,
      width: enemySize.width,
      height: enemySize.height,
      speed: enemySpeed,
      icon: enemyIcon,
      boomIcon: enemyBoomIcon
    }
  
    // 怪兽的数量不大于最大值则新增
    if (enemies.length < opts.enemyMaxNum) {
      enemies.push(new Enemy(initOpt));
    }
  
    console.log(enemies);
  },
  end: function() {
  },
  draw: function() {
    this.enemies.forEach(function(enemy) {
      enemy.draw();
    });
  }
};

/**
 * 页面主入口
 */
function init() {
  // 加载图片资源，加载完成才能交互
  resourceHelper.load(CONFIG.resources, function(resources) {
    // 加载完成
    GAME.init();
    bindEvent();
  });
  
}

init();