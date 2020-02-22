(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{427:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p",[t._v("Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/language/scala-basis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scala 编程语言 "),a("OutboundLink")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#如何定义一个类"}},[t._v("如何定义一个类")])]),a("li",[a("a",{attrs:{href:"#如何定义主构造函数"}},[t._v("如何定义主构造函数")])]),a("li",[a("a",{attrs:{href:"#如何定义辅助构造函数（多构造函数）"}},[t._v("如何定义辅助构造函数（多构造函数）")])]),a("li",[a("a",{attrs:{href:"#私有成员和-getter-setter-语法"}},[t._v("私有成员和 getter/setter 语法")])]),a("li",[a("a",{attrs:{href:"#如何定义单例对象"}},[t._v("如何定义单例对象")])]),a("li",[a("a",{attrs:{href:"#伴生对象"}},[t._v("伴生对象")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"如何定义一个类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何定义一个类"}},[t._v("#")]),t._v(" 如何定义一个类")]),t._v(" "),a("p",[t._v("使用关键字 "),a("code",[t._v("class + 标识符")]),t._v(" 来定义一个最简单的类，类名首字母应大写。")]),t._v(" "),a("ul",[a("li",[t._v("使用关键字 new 来创建类的实例。")]),t._v(" "),a("li",[t._v("类可以在抽象类中定义,也可以定义在特质中，但是不推荐这样定义，因为实例化该类需要有外层的实例对象才可以。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不包含构造函数和类体")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" User\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" user1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" User\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含构造函数和类体")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dx\n      y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dy\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" toString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"($x, $y)"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (2, 3)")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象类中定义类")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Soldier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Catch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nothing to do here.  Just observe that it compiles")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// squadron 为 Pilot 中自己的成员变量，不是继承父类的成员变量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Pilot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" squadron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Soldier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" pilot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Pilot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yossarian"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" catchNo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" pilot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Catch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何定义主构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何定义主构造函数"}},[t._v("#")]),t._v(" 如何定义主构造函数")]),t._v(" "),a("p",[a("code",[t._v("类名 + ()")]),t._v(" ,即为类的主构造函数。")]),t._v(" "),a("ul",[a("li",[t._v("主构造函数参数不加 "),a("code",[t._v("val")]),t._v(" 或 "),a("code",[t._v("var")]),t._v(" 默认是 "),a("code",[t._v("private val")]),t._v(" 修饰的。")]),t._v(" "),a("li",[t._v("主构造函数的参数可以提供默认值，可以选择参数进行赋值初始化。")]),t._v(" "),a("li",[t._v("主构造函数是从左往右读取参数，如果传递的参数违背了主构造函数定义的参数顺序，则应该带名传参。")]),t._v(" "),a("li",[t._v("主构造函数会执行类中定义的所有语句。")]),t._v(" "),a("li",[t._v("可以在 "),a("code",[t._v("()")]),t._v(" 前加上 "),a("code",[t._v("private")]),t._v(" 关键字，将主构造函数变为私有。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用默认值创建")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x and y are both set to 0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从左往右读取参数，覆盖 x 参数的默认值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prints 1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单独传入 y 的值，由于 y 位于第二个参数，因此需要带名传参")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prints 2")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何定义辅助构造函数（多构造函数）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何定义辅助构造函数（多构造函数）"}},[t._v("#")]),t._v(" 如何定义辅助构造函数（多构造函数）")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("this()")]),t._v(" 来定义辅助构造函数。")]),t._v(" "),a("ul",[a("li",[t._v("辅助构造函数可以定义多个。")]),t._v(" "),a("li",[t._v("定义辅助构造函数的第一步，必须要先调用上一个主构造函数或者辅助构造函数。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 辅助构造函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先要调用主构造函数方法")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" z\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用辅助构造函数初始化实例")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"私有成员和-getter-setter-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有成员和-getter-setter-语法"}},[t._v("#")]),t._v(" 私有成员和 getter/setter 语法")]),t._v(" "),a("p",[t._v("类的成员默认是公有 (public) 的。使用 private 修饰符可以将成员变为私有属性。"),a("br"),t._v("\nscala 私有成员变量 getter 和 setter 方法的特殊定义形式：value 和 value_= 详情见示例。")]),t._v(" "),a("ul",[a("li",[t._v("主构造方法中带有 val 和 var 的参数是公有的。")]),t._v(" "),a("li",[t._v("val 是不可变的,类创建后不可以重新赋值。")]),t._v(" "),a("li",[t._v("不带 val 或 var 的参数是私有的，仅在类中可见。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阈值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" bound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getter 方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _x\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setter 的特殊定义语法，getter 方法后面跟上_=(参数)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" x_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" bound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" printWarning\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" printWarning "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WARNING: Out of bounds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point\n  point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 setter 方法赋值")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 99 ")]),t._v("\n  point1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prints the warning")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// val 定义成员变量，类创建后，不可以重新为成员变量赋值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- does not compile")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数中不加 val 或 var 的成员变量默认私有，外部不可以访问，只在类中可见")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- does not compile")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何定义单例对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何定义单例对象"}},[t._v("#")]),t._v(" 如何定义单例对象")]),t._v(" "),a("p",[t._v("使用关键字 object 定义。")]),t._v(" "),a("ul",[a("li",[t._v("单例对象中的成员都是静态的，相当于 Java 中定义的 "),a("code",[t._v("static")]),t._v(" 属性。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Logger "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INFO: $message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"静态方法，直接调用"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"伴生对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伴生对象"}},[t._v("#")]),t._v(" 伴生对象")]),t._v(" "),a("p",[t._v("当一个单例对象和某个类使用相同的名称时，这个单例对象被称为该类的伴生对象，这个类被称为是这个单例对象的伴生类。")]),t._v(" "),a("ul",[a("li",[t._v("类和它的伴生对象可以互相访问其私有成员。")]),t._v(" "),a("li",[t._v("使用伴生对象来定义那些在伴生类中不依赖于实例化对象而存在的成员变量或者方法。")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问伴生对象中的私有方法 calculateArea")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" area"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" calculateArea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Circle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("scala"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" calculateArea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Pi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以访问伴生类 Circle 中的私有成员变量 radius")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" circle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);