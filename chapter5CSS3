- Flex
```
.box {
  display: flex;
  flex-direction: row; /* row-reverse | column | column-reverse*/
  flex-wrap: nowrap; /*如果一条轴线排不下，如何换行wrap | wrap-reverse*/
  flex-flow: row nowrap; /*flex-direction属性和flex-wrap属性的简写*/
  justify-content: flex-start; /*对齐方式 | flex-end | center | space-between | space-around;*/
  align-items: flex-start; /*交叉轴上对齐方式flex-end | center | baseline | stretch*/
  align-content: flex-start; /*多根轴线的对齐方式(XY)flex-end | center | space-between | space-around | stretch*/
}
.son {
  order: 0; /*数值越小，排列越靠前，默认为0*/
  flex-grow: 0; /*项目的放大比例，默认为0*/
  flex-shrink: 1; /*缩小比例，默认为1*/
  flex-basis: auto; /*在分配多余空间之前，项目占据的主轴空间*/
  /*flex: 0 1 auto;*/  /*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。*/
  align-self: auto; /*允许单个项目有与其他项目不一样的对齐方式*/
}
```
- CSS3选择器
```
>直接子代
+下一个兄弟
~下所有兄弟
[]属性选择器
p:first-child...儿子选择器(p是某个元素的第一个儿子)
伪类:hover :focus :not :only-child :empty :checked :disabled
伪元素::before ::after ::selection ::first-letter ::first-line
```
- 边框圆角/阴影
border-radius 边框圆角
         内阴影 右偏、下偏、模糊半径、延展宽度、颜色
box-shadow: inset 2px 2px 2px 2px black;
        右偏、下偏、模糊半径、颜色
text-shadow: 1px 1px 1px red;
- background系列
```
线性渐变:background-image: linear-gradient(top,red,blue);
背景裁切:background-clip:content-box;padding区域没有背景
backgrond-origin:padding区域没有背景
background-size:cover contain 背景图片
```
- 过渡 
```
属性参与过渡 时间 不匀速 不延迟
transition:all 1s ease 0s;
```
- CSS3
```
一:兼容性策略 平稳退化/渐进渐强
二:2D变形
transform变形 transition过渡 animation动画
/*rotate(angle)	定义 2D 旋转，在参数中规定角度。*/
/*scale(2)*/
/*skew(45deg, 45deg)*/
三、3D变形
transform:rotateX(45deg)正仰 负磕
transform:rorateY(45deg)从顶看，逆时针
四、空间移动
transform:translateX(300px);这个元素的左手
transform:translateY(300px);这个元素的下边
transform:translateZ(300px);这个元素的朝向
```

