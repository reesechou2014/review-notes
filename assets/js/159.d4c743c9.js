(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{371:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p",[t._v("Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),s("a",{attrs:{href:"https://review-notes.top/language/java-jvm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM-虚拟机 "),s("OutboundLink")],1)]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前言"}},[t._v("前言")])]),s("li",[s("a",{attrs:{href:"#字符串压缩"}},[t._v("字符串压缩")])]),s("li",[s("a",{attrs:{href:"#分层编译"}},[t._v("分层编译")])]),s("li",[s("a",{attrs:{href:"#graal：基于-java-的-jit-编译器"}},[t._v("Graal：基于 Java 的 JIT 编译器")])]),s("li",[s("a",{attrs:{href:"#提前编译"}},[t._v("提前编译")])]),s("li",[s("a",{attrs:{href:"#压缩普通对象指针"}},[t._v("压缩普通对象指针")])]),s("li",[s("a",{attrs:{href:"#逃逸分析"}},[t._v("逃逸分析")])]),s("li",[s("a",{attrs:{href:"#方法内联"}},[t._v("方法内联")])]),s("li",[s("a",{attrs:{href:"#公共子表达式消除"}},[t._v("公共子表达式消除")])]),s("li",[s("a",{attrs:{href:"#数组边界检查消除"}},[t._v("数组边界检查消除")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])]),s("li",[s("a",{attrs:{href:"#更多相关文章推荐"}},[t._v("更多相关文章推荐")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("介绍 Oracle HotSpot 虚拟机技术的性能增强部分案例。")]),t._v(" "),s("blockquote",[s("p",[t._v("优化技术手段非常之多，可参考官方列出 "),s("a",{attrs:{href:"https://wiki.openjdk.java.net/display/HotSpot/PerformanceTacticIndex",target:"_blank",rel:"noopener noreferrer"}},[t._v("openjdk-优化技术概览 "),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"字符串压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串压缩"}},[t._v("#")]),t._v(" 字符串压缩")]),t._v(" "),s("p",[t._v("字符串压缩功能（ "),s("a",{attrs:{href:"https://openjdk.java.net/jeps/254",target:"_blank",rel:"noopener noreferrer"}},[t._v("JEP 254: Compact Strings"),s("OutboundLink")],1),t._v(" ）是为了节省内部空间。")]),t._v(" "),s("p",[t._v("字符串是 Java 堆用法的主要组成部分，并且大多数 String 对象仅包含 "),s("a",{attrs:{href:"https://baike.baidu.com/item/latin1/1183590?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Latin-1"),s("OutboundLink")],1),t._v(" 字符。此类字符仅需要存储一个字节。\n结果，String 没有使用对象内部字符数组中一半的空间。JDK 9 中引入的压缩字符串功能减少了内存占用，并减少了垃圾回收活动。如果您在应用程序中发现性能下降问题，则可以禁用此功能。")]),t._v(" "),s("p",[t._v("它将 String 类的内部表示形式从 UTF-16（两个字节）字符数组修改为带有附加字段以标识字符编码的字节数组。其他字符串相关的类，如 AbstractStringBuilder，StringBuilder 和 StringBuffer 更新使用类似的内部表示。")]),t._v(" "),s("p",[t._v("在 JDK 9 中，默认情况下启用了压缩字符串功能。因此，String 该类将每个字符的字符存储为一个字节，编码为 Latin-1。附加字符编码字段指示所使用的编码。HotSpot VM 字符串内在函数已更新和优化以支持内部表示。")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("-XX:-CompactStrings")]),t._v(" 在 java 命令行中使用该标志来禁用紧凑字符串功能。禁用此功能后，String 该类将字符存储为两个字节（编码为 UTF-16），并且将 HotSpot VM 字符串内部函数存储为使用 UTF-16 编码。")]),t._v(" "),s("h2",{attrs:{id:"分层编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层编译"}},[t._v("#")]),t._v(" 分层编译")]),t._v(" "),s("p",[t._v("由于即时编译器编译本地代码需要占用程序运行时间，通常要编译出优化程度越高的代码，所花费的时间便会越长；而且想要编译出优化程度更高的代码，解释器可能还要替编译器收集性能监控信息，这对解释执行阶段的速度也有所影响。")]),t._v(" "),s("p",[t._v("为了在程序启动响应速度与运行效率之间达到最佳平衡，HotSpot 虚拟机在编译子系统中加入了分层编译的功能：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第 0 层。程序纯解释执行，并且解释器不开启性能监控功能（Profiling）。")])]),t._v(" "),s("li",[s("p",[t._v("第 1 层。使用客户端编译器将字节码编译为本地代码来运行，进行简单可靠的稳定优化，不开启性能监控功能。")])]),t._v(" "),s("li",[s("p",[t._v("第 2 层。仍然使用客户端编译器执行，仅开启方法及回边次数统计等有限的性能监控功能。")])]),t._v(" "),s("li",[s("p",[t._v("第 3 层。仍然使用客户端编译器执行，开启全部性能监控，除了第 2 层的统计信息外，还会收集如分支跳转、虚方法调用版本等全部的统计信息。")])]),t._v(" "),s("li",[s("p",[t._v("第 4 层。使用服务端编译器将字节码编译为本地代码，相比起客户端编译器，服务端编译器会启用更多编译耗时更长的优化，还会根据性能监控信息进行一些不可靠的激进优化。")])])]),t._v(" "),s("p",[t._v("以上层次并不是固定不变的，根据不同的运行参数和版本，虚拟机可以调整分层的数量。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("-XX:-TieredCompilation")]),t._v(" 在 java 命令中使用该标志来禁用分层编译。")]),t._v(" "),s("h2",{attrs:{id:"graal：基于-java-的-jit-编译器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graal：基于-java-的-jit-编译器"}},[t._v("#")]),t._v(" Graal：基于 Java 的 JIT 编译器")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://openjdk.java.net/projects/graal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Graal"),s("OutboundLink")],1),t._v(" 是用 Java 编写的高性能优化的即时的编译器，与 Java HotSpot VM 集成在一起。是一个可自定义的动态编译器，我们可以从 Java 调用它。")]),t._v(" "),s("p",[t._v("要启用 Graal 作为 JIT 编译器，VM 参数配置：")]),t._v(" "),s("p",[s("code",[t._v("-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：Graal 是一项实验性功能，仅在 Linux-x64 上受支持。")])]),t._v(" "),s("h2",{attrs:{id:"提前编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提前编译"}},[t._v("#")]),t._v(" 提前编译")]),t._v(" "),s("p",[t._v("提前（AOT，"),s("a",{attrs:{href:"https://openjdk.java.net/jeps/295",target:"_blank",rel:"noopener noreferrer"}},[t._v("JEP 295: Ahead-of-Time Compilation"),s("OutboundLink")],1),t._v(" ）编译通过在启动虚拟机之前将 Java 类编译为本地代码来缩短大小型 Java 应用程序的启动时间。")]),t._v(" "),s("p",[t._v("尽管即时（JIT）编译器速度很快，但是编译大型 Java 程序仍需要时间。此外，当反复解释某些未编译的 Java 方法时，性能会受到影响。AOT 解决了这些问题。")]),t._v(" "),s("p",[t._v("语法如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("jaotc <options> <list of classes or jar files>\njaotc <options> <--module name>\n")])])]),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("jaotc --output libHelloWorld.so HelloWorld.class\njaotc --output libjava.base.so --module java.base\n\njava -XX:AOTLibrary=./libHelloWorld.so,./libjava.base.so HelloWorld ————执行应用程序时指定生成的 AOT 库\n")])])]),s("blockquote",[s("p",[t._v("注意：提前（AOT）编译是一项实验性功能，仅在 Linux-x64 上受支持。")])]),t._v(" "),s("h2",{attrs:{id:"压缩普通对象指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩普通对象指针"}},[t._v("#")]),t._v(" 压缩普通对象指针")]),t._v(" "),s("p",[t._v("在 HotSpot 中，oop 或普通对象指针是指向对象的托管指针。"),s("a",{attrs:{href:"https://wiki.openjdk.java.net/display/HotSpot/CompressedOops",target:"_blank",rel:"noopener noreferrer"}},[t._v("openjdk-CompressedOops"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("1. 为什么要进行指针压缩？")])]),t._v(" "),s("p",[t._v("32 位内最多可以表示 4GB，64 位地址分为堆的基地址+偏移量，当堆内存 <32GB 时候，在压缩过程中，把偏移量/8 后保存到 32 位地址。在解压再把 32 位地址放大 8 倍，所以启用 CompressedOops 的条件是堆内存要在 4GB*8=32GB 以内。")]),t._v(" "),s("p",[t._v("所以压缩指针之所以能改善性能，是因为它通过对齐（Alignment），还有偏移量（Offset）将 64 位指针压缩成 32 位。换言之，性能提高是因为使用了更小更节省空间的压缩指针而不是完整长度的 64 位指针，CPU 缓存使用率得到改善，应用程序也能执行得更快。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/2020-01-20-CompressedOops-32bit.jpg"}}),t._v(" "),s("p",[t._v(" 压缩与解压过程，指针向右移动 3 位放大 8 倍解压。因此 oops 最后 3 位始终为 0")])]),t._v(" "),s("p",[s("strong",[t._v("2. 哪些信息不会被压缩？")])]),t._v(" "),s("p",[t._v("压缩也不是万能的，针对一些特殊类型的指针，JVM 是不会优化的。 比如指向 PermGen 的 Class 对象指针，本地变量，堆栈元素，入参，返回值，NULL 指针不会被压缩。")]),t._v(" "),s("p",[s("strong",[t._v("3. 零基压缩优化")]),t._v("：")]),t._v(" "),s("p",[t._v("零基压缩是针对压解压动作的进一步优化。 它通过改变正常指针的随机地址分配特性，强制堆地址从零开始分配（需要 OS 支持），进一步提高了压解压效率。")]),t._v(" "),s("p",[t._v("要启用零基压缩，你分配给 JVM 的内存大小必须控制在 4G 以上，32G 以下。如果 GC 堆大小在 4G 以下，直接砍掉高 32 位。")]),t._v(" "),s("p",[s("strong",[t._v("4. 指针压缩配置及版本支持")]),t._v("\nJava SE 6u23 和更高版本默认情况下支持并启用压缩的 oops。")]),t._v(" "),s("p",[t._v("在 Java SE 7 中，默认情况下，-Xmx 未指定时对 64 位 JVM 进程以及-Xmx 小于 32 GB 的值启用压缩 oop 。")]),t._v(" "),s("p",[t._v("对于早于 6u23 发行版的 JDK 版本，将该 "),s("code",[t._v("-XX:+UseCompressedOops")]),t._v(" 标志与 java 命令一起使用以启用压缩的 oops。")]),t._v(" "),s("h2",{attrs:{id:"逃逸分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逃逸分析"}},[t._v("#")]),t._v(" 逃逸分析")]),t._v(" "),s("p",[t._v("逃逸分析（ "),s("a",{attrs:{href:"https://wiki.openjdk.java.net/display/HotSpot/EscapeAnalysis",target:"_blank",rel:"noopener noreferrer"}},[t._v("openjdk-EscapeAnalysis"),s("OutboundLink")],1),t._v(" ）的基本原理是：")]),t._v(" "),s("ul",[s("li",[t._v("分析对象动态作用域，当一个对象在方法里面被定义后，它可能被外部方法所引用，例如作为调用参数传递到其他方法中，这种称为方法逃逸；")]),t._v(" "),s("li",[t._v("甚至还有可能被外部线程访问到，譬如赋值给可以在其他线程中访问的实例变量，这种称为线程逃逸；")])]),t._v(" "),s("p",[t._v("根据不同的逃逸程度使用不同的优化手段：")]),t._v(" "),s("ul",[s("li",[t._v("栈上分配：直接在栈帧上进行对象分配。（不支持线程逃逸）")]),t._v(" "),s("li",[t._v("标量替换：类似 java 里面的基础类型不能进一步分解了，被称为标量，如果还能被分解称为聚量。")]),t._v(" "),s("li",[t._v("同步状态消除：如果确定一个变量仅被一个线程访问，直接取消同步状态。")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" personName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" personAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" personName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" personAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// person 可能被修改，如果进一步分析调用没有修改 person ，可以直接使用原始的对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printEmployeeDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),t._v(" emp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// person 不会被修改，我们只需要 person.name/age 两个变量即可")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Employee\'s name: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; age: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printEmployeeDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// person 不会逃逸出方法，可以直接优化为 String name = "name"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"方法内联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法内联"}},[t._v("#")]),t._v(" 方法内联")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"do something"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testInline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们可以看到 testInline 方法里面的都是无用的代码，但是单独看两个方法时他们又是有意思的。")]),t._v(" "),s("p",[t._v("有关内联的实现此处不进行叙述，感兴趣的可以参考文章末位《参考内容》")]),t._v(" "),s("h2",{attrs:{id:"公共子表达式消除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共子表达式消除"}},[t._v("#")]),t._v(" 公共子表达式消除")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 原始表达式\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 优化为\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 另一种优化（代数简化）\n")])])]),s("h2",{attrs:{id:"数组边界检查消除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组边界检查消除"}},[t._v("#")]),t._v(" 数组边界检查消除")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能优化为")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("segment_fault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uncommon_trap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("虚拟机会注册一个 Segment Fault 信号的异常处理器（伪代码中的 uncommon_trap()，务必注意这里是指进程层面的异常处理器，并非真的 Java 的 try-catch 语句的异常处理器），\n这样当 foo 不为空的时候，对 value 的访问是不会有任何额外对 foo 判空的开销的，而代价就是当 foo 真的为空时，必须转到异常处理器中恢复中断并抛出 NullPointException 异常。")]),t._v(" "),s("p",[t._v("进入异常处理器的过程涉及进程从用户态转到内核态中处理的过程，结束后会再回到用户态，速度远比一次判空检查要慢得多。当 foo 极少为空的时候，隐式异常优化是值得的，但假如 foo 经常为空，这样的优化反而会让程序更慢。\n幸好 HotSpot 虚拟机足够聪明，它会根据运行期收集到的性能监控信息自动选择最合适的方案。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/13/vm/java-hotspot-virtual-machine-performance-enhancements.html#GUID-3BB4C26F-6DE7-4299-9329-A3E02620D50A",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracl 官方虚拟机性能优化介绍-Java HotSpot Virtual Machine Performance Enhancements"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》周志明 著")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/underst_jit.html#wp1077986",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle 官方对编译器的介绍-Understanding JIT Compilation and Optimizations"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/ignorewho/article/details/80840290",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM-对象的指针压缩 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/13428282016/elasticsearch-CN/wiki/%E4%BB%80%E4%B9%88%E6%98%AFjava%E5%8E%8B%E7%BC%A9%E5%AF%B9%E8%B1%A1%E6%8C%87%E9%92%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是 java 压缩对象指针 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.baeldung.com/jvm-compressed-oops",target:"_blank",rel:"noopener noreferrer"}},[t._v("Compressed OOPs in the JVM"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"更多相关文章推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多相关文章推荐"}},[t._v("#")]),t._v(" 更多相关文章推荐")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);