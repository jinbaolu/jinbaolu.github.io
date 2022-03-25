(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{440:function(a,t,n){"use strict";n.r(t);var s=n(29),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"前端-post-提交的三种格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端-post-提交的三种格式"}},[a._v("#")]),a._v(" 前端 post 提交的三种格式")]),a._v(" "),n("h2",{attrs:{id:"application-x-www-form-urlencoded"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded"}},[a._v("#")]),a._v(" application/x-www-form-urlencoded")]),a._v(" "),n("p",[a._v("对于浏览器原生的 form 表单，enctype 的值不指定的话，默认就是这个家伙。实际上大部分情况都使用它即可，编码方式足够简单高效，各方面支持也都很完备，如各大浏览器调试工具、各大抓包软件等。")]),a._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("POST http://www.example.com HTTP/1.1\nContent-Type: application/x-www-form-urlencoded;charset=utf-8\n\nkey1=val1&amp;key2=val2\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("blockquote",[n("p",[a._v("适用场景：数据量不大、数据层级不深的情况下强烈建议这种数据提交格式。")])]),a._v(" "),n("h2",{attrs:{id:"multipart-form-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data"}},[a._v("#")]),a._v(" multipart/form-data")]),a._v(" "),n("p",[a._v("当你需要提交文件、非 ASCII 码的数据或者是二进制流数据，则使用这种提交方式。类似下面这个请求示例：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST http://www.example.com HTTP/1.1\nContent-Type:multipart/form-data; boundary=----WebKitFormBoundaryPAlLG7hJKNYc4ft3\n\n------WebKitFormBoundaryrGKCBY7qhFd3TrwA\nContent-Disposition: form-data; name="text"\n\ndemo\n------WebKitFormBoundaryPAlLG7hJKNYc4ft3\nContent-Disposition: form-data; name="file"; filename="demo.png"\nContent-Type: image/png\n\n\n------WebKitFormBoundaryPAlLG7hJKNYc4ft3--\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("p",[a._v("第二行指定编码方式 Content-Type 为 multipart/form-data，紧接着生成一个分界线 boundary 即 ----WebKitFormBoundaryPAlLG7hJKNYc4ft3，又臭又长的目的是为了避免和 Body 正文内容有冲突，它的作用是用来分隔不同的字段。\nBody 体分为多个结构类似的部分，每一部分以 --boundary 开头，因为本次请求生成的 boundary 为 ----WebKitFormBoundaryPAlLG7hJKNYc4ft3，所以最终是 ------WebKitFormBoundaryPAlLG7hJKNYc4ft3。接着是描述内容的元信息，包括字段名称，如果是文件则还有文件名称和文件类型。接着留一空行，然后才是字段值。什么时候结束呢，以 --boundary-- 标志结束。\n这种方式本就是专为上传文件的场景设计的，虽然你也可以使用这种方式传递普通数据，但无疑会增加不少数据包的大小（这么多 boundary 还是有不少空间占用的）。")]),a._v(" "),n("blockquote",[n("p",[a._v("适用场景：文件上传。")])]),a._v(" "),n("h2",{attrs:{id:"application-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-json"}},[a._v("#")]),a._v(" application/json")]),a._v(" "),n("p",[a._v("axios 默认请求方式")]),a._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST http://www.example.com HTTP/1.1\nContent-Type: application/json;charset=utf-8\n\n{"name":"xfly","age": 24, "hobby":["x","xx","xxx"]}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("blockquote",[n("p",[a._v("适用场景：数据结构较复杂，层级较深的情况。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);