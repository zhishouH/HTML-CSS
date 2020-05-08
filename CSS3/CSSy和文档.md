## CSS和文档
>1.1 web样式简介
- [CSS简介](https://www.w3school.com.cn/css/css_jianjie.asp)

>1.2 元素
- 元素(element)是文档结构的根基，HTML中常用的元素有p , table , span , a , div等等。

>>1.2.1 置换元素和非置换元素

>>>置换元素
- 指用来置换元素内容的部分不由文档内容直接表示。例如：img
>>>非置换元素
- 指元素的内容由用户代理(浏览器)在元素自身生成的框中显示。例如：
< span >hi three</ span > 是非置换元素，浏览器会显示“hi three”。p , h1~h6 , table , ul等等都是非置换元素。

>>1.2.2 元素的的显示方式
- 块级元素--生成一个填满父级元素内容区域的框，旁边不能有其他元素。例如：p,div
- 行内元素--在一行文本内生成的=元素框，不打断所在的行。例如：a,strong,em
- html中，块级元素不能出现在行内元素中。但是css并不限制它们的显示方式，相互之间可以嵌套。 display:inline; display:block;
>1.3 把CSS应用到HTML上

>>1.3.1 link标签
```
    <link rel="stylesheet" type="text/css" href="sheet1.css" media="all" >
    1.rel是"relation"(关系),这里指定的关系是stylesheet
    2.type属性的值始终是text/css，说明通过link标签加载的数据类型
    3.href属性的值是样式表的URL，前例使用的是相对URL，也可以使用绝对URL,
    例如:http://meyerweb.com/sheet1.css
    4.media属性的值是一个或多个媒体描述符，指明媒体的类型和具有的功能
```
>>1.3.2 style元素
- style元素也是一种引进样式表的方式，直接写在文档中
```
<style type="text/css">... ... </style>
```
>>1.3.3 @import指令
- 可以出现在style标签中的内容
```
链接的外部样式表中的@import指令：
    @import url(sheet2.css)
浏览器遇到@import指令时会加载外部样式表渲染到文档中，@import指令在style元素内部，必须放在其他css规则前面，例如：
    <style type="text/css">
    @import url(styles.css);   /*@import放在开头*/
    h1{color:gray;}
    </style>
```
>>1.3.4 HTTP链接
- 为文档关联css还可以使用http首部
>>1.3.5 行内样式
- 除了head和title，所有html标签都能设定style属性。如果只想为单个元素提供少量样式，可以用html元素的style属性设置行内样式
```
<p style="color:gray;">lalallalalala</p>
```
>1.4 样式表中的内容

>>1.4.1 标记
- 样式表中不能有标记。不过style元素中可以有html注释
```
<style type="text/css">
<!--
h1{color:yellow;}
p{background:gray;}
-->
</style>
```
>>1.4.2 规则结构
- 一个规则由选择符和声明块构成
```
    h1 {color:yellow;background:gray;}
    h1是选择符,color:yellow;是声明块background:gray;是声明块
```
>>1.4.3 厂商前缀
- CSS中有些内容的前面有个标注，例如：-o-border-image. 目的是浏览器厂商为了测试新特性，这样做能保证兼容性
>>1.4.4 处理空白
- CSS对规则之间的空白基本没有严格要求，而且对规则内部的空白大多也没有严格要求
```
虚构的raindow：
    rainbow： infrared red yellow;
```
>>1.4.5 CSS注释
- CSS支持注释
```
/* 这是一个注释 */

/* 这是一个注释，可以分成
多行，完全没有问题*/
```
>1.5 媒体查询
- 通过媒体查询定义浏览器在何种媒体环境中使用指定样式表
>>1.5.1 用法
- 媒体查询可以在下述几个地方使用：
- link元素的media属性
- style元素的media属性
- @import声明的媒体描述符部分
- @media声明的媒体描述符部分
>>1.5.2 简单的媒体查询
```
    h1 {color:maroon;}
    @media projection {
        body {background:yellow;}
    }
在所有的媒体中，h1元素的颜色都是红褐色，但是，在投影媒体中body元素会有一个黄色背景
```
>>1.5.3 媒体类型
```
all     用于所有展示媒体、
print   为有视力的用户打印文档时使用，也在预览打印效果时使用
screen  在屏幕媒体(显示器)上展示文档时使用
多个媒体类型使用用逗号分隔罗列
```
>>1.5.4 媒体描述符

>>1.5.5 媒体特性描述符和值的类型、

>1.6 特性查询
- 根据用户代理是否支持特定的CSS属性及其值来应用一段样式。
```
@supports (color:black) {
    body {color:black;}
    h1 {color:purple;}
    h2 {color:navy;}
}
上述代码的意思是，"如果您能识别并处理color：black这样的属性和值组合，那就应该应用这段样式；否则，跳过这段样式。"如果用户代理不支持@supports，整段样式都会跳过。
```