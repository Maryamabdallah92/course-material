(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{565:function(e,t,s){"use strict";s.r(t);var o=s(40),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"web-cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-cookies"}},[e._v("#")]),e._v(" Web Cookies")]),e._v(" "),s("p",[e._v("A cookie is something a web application can use to remember information about a user. The specification "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP State Management Mechanism"),s("OutboundLink")],1),e._v(" explains how it works in detail, but let me give you a quick introduction to cookies before you read the specification.")]),e._v(" "),s("h2",{attrs:{id:"http-is-stateless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-is-stateless"}},[e._v("#")]),e._v(" HTTP is stateless")]),e._v(" "),s("p",[e._v("So, why do we have cookies? We have cookies because HTTP is a stateless protocol. What that means in practice is that when the server receives an HTTP request from a client, that HTTP request should contain all information the server needs to carry out the request. The server should not need to have any memory of previous HTTP requests it has received and carried out. If it would need to remember that, then HTTP wouldn't be a stateless protocol. So when a server has carried out an HTTP request, it can simply forget everything about that request and the client the request came from.")]),e._v(" "),s("p",[e._v("So, why is HTTP a stateless protocol? There are some benefits with being stateless. For one, it is much easier to implement the server, because each incoming HTTP request contains all information it needs to carry out the request; no need to look at previous requests or to remember this request in the future. Another benefit is that it is also easier to scale the server if clients communicate with it using a stateless protocol, but let's not get into the details about that here.")]),e._v(" "),s("p",[e._v("So, why did we have cookies again? Imagine users can create accounts and login on our website. When a user sends a login request (username and password) to the server, then the server needs to check if these credentials are correct, and if they are, the user should be logged in to that account. When the user in the future sends a new request to the server, the server needs to remember which account that user is logged in to. Since HTTP is a stateless protocol, the server can't remember such information using HTTP. For this, and many other use-cases, we use cookies.")]),e._v(" "),s("h2",{attrs:{id:"what-is-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-cookie"}},[e._v("#")]),e._v(" What is a cookie?")]),e._v(" "),s("p",[e._v("A cookie is simply a key-value pair, where the key (a string) is a short description of the value (which also is a string). The key is sometimes also called the name of the cookie.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),s("p",[e._v("If the server needs to remember that the user is 17 years old, then it could create a cookie with the key "),s("code",[e._v("age")]),e._v(" and the value "),s("code",[e._v("17")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),s("p",[e._v("If the server needs to remember that a user lives in Jönköping, then it could create a cookie with the key "),s("code",[e._v("city")]),e._v(" and the value "),s("code",[e._v("Jönköping")]),e._v(".")])]),e._v(" "),s("p",[e._v("In addition to this, a cookie can also have some other attributes, but let us get back to those later.")]),e._v(" "),s("h2",{attrs:{id:"how-do-cookies-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-cookies-work"}},[e._v("#")]),e._v(" How do cookies work?")]),e._v(" "),s("p",[e._v("So, using cookies, a server can remember information about a client. It works something like this:")]),e._v(" "),s("ol",[s("li",[e._v("A client sends an HTTP request to the server.")]),e._v(" "),s("li",[e._v("When the server carries out the request, it realizes that it needs to remember some information about this client.")]),e._v(" "),s("li",[e._v("In the HTTP response the server sends back to the client, it tells the client to create a new cookie containing a specific key and a specific value.")]),e._v(" "),s("li",[e._v("When the client receives the HTTP response, it should create a cookie with the key and value the server instructed it to do in the response.")]),e._v(" "),s("li",[e._v("When the client sends HTTP requests to the server in the future, it should pass along the cookie (the key-value pair) to the server.")])]),e._v(" "),s("p",[e._v("This is visualized in "),s("FigureNumber"),e._v(" below.")],1),e._v(" "),s("Figure",{attrs:{caption:"Sequence Diagram visualizing how cookies work."}},[s("mermaid",[e._v("\nsequenceDiagram\n\tparticipant Client\n\tparticipant Server\n\tClient->>+Server: HTTP Request\n\tNote right of Server: Need to remember\n\tServer->>-Client: HTTP Response (create cookie)\n\tNote left of Client: Creates and stores cookie\n\tClient->>+Server: HTTP Request (with cookie)\n\tNote right of Server: Reads info from cookie\n\tServer->>-Client: HTTP Response\n")])],1),e._v(" "),s("p",[e._v("So simply put: the server can tell the client to create cookies, the cookies are stored on the client (how is up to the client to decide, but most web browsers simply store them in files), and the client sends the cookies to the server in the HTTP requests it sends to it.")]),e._v(" "),s("h3",{attrs:{id:"creating-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-cookie"}},[e._v("#")]),e._v(" Creating a cookie")]),e._v(" "),s("p",[e._v("The server can tell a client to create a new cookie by adding the "),s("code",[e._v("Set-Cookie")]),e._v(" header in the HTTP response. The value for this header is "),s("code",[e._v("key=value")]),e._v(". If the server wants the client to create multiple cookies, this header will be present multiple times in the HTTP response (one time for each cookie).")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),s("p",[e._v("If the server wants a client to create a cookie with the key "),s("code",[e._v("age")]),e._v(" and the value "),s("code",[e._v("17")]),e._v(" and a cookie with the key "),s("code",[e._v("city")]),e._v(" and the value "),s("code",[e._v("Jönköping")]),e._v(", it should send back an HTTP response like the one below (the status code does of course not have to be 200).")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("TODO:")]),e._v(" CHECK THIS\n"),s("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("200 OK")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" age=17\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" city=Jönköping\n...\n")])])])]),e._v(" "),s("h3",{attrs:{id:"sending-a-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-cookie"}},[e._v("#")]),e._v(" Sending a cookie")]),e._v(" "),s("p",[e._v("The client can send a cookie in an HTTP request by adding the "),s("code",[e._v("Cookie")]),e._v(" header to the HTTP request. The value for this header is "),s("code",[e._v("key=value")]),e._v(". If the client wants to send multiple cookies, this header will be present multiple times in the HTTP request (one time for each cookie).")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("TODO:")]),e._v(" FIX THIS\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" age=17\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Set-Cookie:")]),e._v(" city=Jönköping\n")])])])]),e._v(" "),s("h2",{attrs:{id:"configuring-cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cookies"}},[e._v("#")]),e._v(" Configuring cookies")]),e._v(" "),s("p",[e._v("When a server tells a client to create a new cookie, it can tell the client more infromation about the cookie than just the key and the value of the cookie. It can for example tell the client for how long time the cookie should be stored by the client.")]),e._v(" "),s("p",[e._v("...")]),e._v(" "),s("h2",{attrs:{id:"what-can-we-use-cookies-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-can-we-use-cookies-for"}},[e._v("#")]),e._v(" What can we use cookies for?")]),e._v(" "),s("p",[e._v("To remember infromation about the client/user. What that information is up to you to decide, but heere are some examples.")]),e._v(" "),s("p",[e._v("...")]),e._v(" "),s("h2",{attrs:{id:"anything-special-to-think-about-when-using-cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anything-special-to-think-about-when-using-cookies"}},[e._v("#")]),e._v(" Anything special to think about when using cookies?")]),e._v(" "),s("h3",{attrs:{id:"the-server-can-t-trust-cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-server-can-t-trust-cookies"}},[e._v("#")]),e._v(" The server can't trust cookies")]),e._v(" "),s("p",[e._v("Since the cookies are stored on the client, the client can easilly modify them, and therefor the server can't trust the cookies it receives. For example:")]),e._v(" "),s("ul",[s("li",[e._v("If a server tells a client to create a cookie, it can't count on to receive this cookie in future requests from the client (the client can ignore creating the cookie, or the user might simply manually delete it).")]),e._v(" "),s("li",[e._v("When a server receives a cookie with a name it has previously told the client to create, it can't trust that the value in the cookie is the same value as it told the client to put in the cookie since the client easilly can change that value.")]),e._v(" "),s("li",[e._v("Nothing prevents a client from creating its own cookies, without the server telling it, so the server might reveice cookies from a client before it has told the client to create any.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),s("p",[e._v("When the server receives a sucessfull login request, it can't remember that the client has logged by using a cookie like "),s("code",[e._v("isLoggedIn=true")]),e._v(", because any client (imagine hackers) can create a cookie like this one on their own without sending a successfull login request to the server. In this case, we should rather have used sessions instead.")])]),e._v(" "),s("h3",{attrs:{id:"the-cookie-law"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-cookie-law"}},[e._v("#")]),e._v(" The cookie law")]),e._v(" "),s("p",[e._v("Many websites make use of client-side JavaScript libraries, and these can be used by the library creator to track which website a specific user is visiting using cookies (client-side JavaScript can tell the web browser to create cookies too). European Union thought that this could risk users' privacy online, and therefor introduced a EU directive which become known as the cookie law.")]),e._v(" "),s("p",[e._v("The directive simply states that ...")]),e._v(" "),s("h3",{attrs:{id:"gdpr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdpr"}},[e._v("#")]),e._v(" GDPR")]),e._v(" "),s("p",[e._v("...")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);