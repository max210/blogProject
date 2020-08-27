

- 盒模型：content、padding、border、margin，标准：content 表示元素宽高，ie：content、padding、border 表示元素宽高
- 选择优先级：!important > 行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符
- BFC：**块级格式化上下文**，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。触发条件：根元素；position：absolute/fixed；float；overflow !== visible
- 脱离文档流：float、absolute、fixed
- [nth-of-type VS nth-child](https://www.zhangxinxu.com/wordpress/2011/06/css3选择器nth-child和nth-of-type之间的差异/)

- dom 信息获取
  - 只读属性
    - clientWidth/height: 只读属性，元素的可视部分宽度和高度，即 padding+content，如果没有滚动条，即为元素设定的高度和宽度，如果出现滚动条，滚动条会遮盖元素的宽高，那么该属性就是其本来宽高减去滚动条的宽高
    - offsetWIdth/height: 只读属性，指的是元素的 border+padding+content 的宽度和高度，该属性和其内部的内容是否超出元素大小无关，与滚动条无关，只和本来设定的 border 以及 width 和 height 有关
    - clientTop/left：只读属性，读取元素的border的宽度和高度的
    - offsetLeft/top: 只读属性，说到这对属性就需要说下 offsetParent ，所谓 offsetParent 指的是当前元素的离自己最近的具有定位的（position:absolute或者position：relative）父级元素（不仅仅指的是直接父级元素，只要是它的父元素都可以），该父级元素就是当前元素的 offsetParent，如果从该元素向上寻找，找不到这样一个父级元素，那么当前元素的 offsetParent 就是 body 元素。而 offsetLeft 和 offsetTop 指的是当前元素，相对于其 offsetParent 左边距离和上边距离，即当前元素的 border 到包含它的 offsetParent 的 border 的距离如下
    - scrollHeight/width: 只读属性，是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
  - 可读可写属性
    - scrollTop/left: 当元素其中的内容超出其宽高的时候，元素被卷起的高度和宽度
  - Event对象
    - clientX/Y，这对属性是当事件发生时，鼠标点击位置相对于浏览器（可视区）的坐标，即浏览器左上角坐标的（0,0），该属性以浏览器左上角坐标为原点，计算鼠标点击位置距离其左上角的位置，不管浏览器窗口大小如何变化，都不会影响点击位置的坐标。
    - screenX/Y是事件发生时鼠标相对于屏幕的坐标，以设备屏幕的左上角为原点，事件发生时鼠标点击的地方即为该点的 screenX 和 screenY 值
    - offsetX/Y：指当事件发生时，鼠标点击位置相对于该事件源的位置，即点击该 div，以该 div 左上角为原点来计算鼠标点击位置的坐标
    - pageX/Y: 该属性是事件发生时鼠标点击位置相对于页面的位置，通常浏览器窗口没有出现滚动条时，该属性和 event.clientX 及 event.clientY 是等价的，但是当浏览器出现滚动条的时候，pageX通常会大于clientX，因为页面还存在被卷起来的部分的宽度和高度
  - window
    - window.innerWidth/innerHeight:浏览器可使用的窗口尺寸。
    - document.documentElement.offsetWidth/Height是html的尺寸，dodument.documentElement代表根元素html
    - window.pageXOffset/pageYOffset:页面的位移相当于document.body.scrollLeft/scrollTop
  - 其他
    - getBoundingClientRect：返回元素的大小及其相对于视口的位置

