(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{552:function(e,t,r){"use strict";r.r(t);var a=r(40),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rest-api-authorization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-api-authorization"}},[e._v("#")]),e._v(" REST API Authorization")]),e._v(" "),r("p",[e._v("Let's take a look at how users can login to accounts in our REST API.")]),e._v(" "),r("iframe",{attrs:{width:"560",height:"314",src:"https://www.youtube.com/embed/0Ech5jpP1Dc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),r("h2",{attrs:{id:"lecture-material"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-material"}},[e._v("#")]),e._v(" Lecture material")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"rest-api-authorization.pdf"}},[e._v("rest-api-authorization.pdf")])]),e._v(" "),r("li",[r("a",{attrs:{href:"rest-api-authorization.pptx"}},[e._v("rest-api-authorization.pptx")])])]),e._v(" "),r("h2",{attrs:{id:"recommended-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_OAuth_providers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia's List of OAuth providers"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Notice that you find many of the big guys in the list.")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://oauth.net/2/"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("When you need to learn the details, the specification "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 Framework - RFC 6749"),r("OutboundLink")],1),e._v(" is the best source.")]),e._v(" "),r("li",[e._v("If you want to read something more pedagogical, the website provides many other resources you can read.")])])]),e._v(" "),r("li",[e._v('If you are going to implement the "Resource Owner Password Credentials" way for an application (as you should do in your project work), especially read the following chapters in the specification:\n'),r("ul",[r("li",[e._v("1.3.3. Resource Owner Password Credentials")]),e._v(" "),r("li",[e._v("4.3. Resource Owner Password Credentials Grant")]),e._v(" "),r("li",[r("ol",{attrs:{start:"5"}},[r("li",[e._v("Issuing an Access Token")])])])])])]),e._v(" "),r("h1",{attrs:{id:"oauth-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0"}},[e._v("#")]),e._v(" OAuth 2.0")]),e._v(" "),r("p",[e._v("The recorded lecture is about OAut 2.0, which is an authorization framework describing how you can give other applications access to the data (resources) stored in your own application. Usually, big companies like Google are the one who implements the framework, and we instead create our own third-party applications in which we can access our users' Google resources through the framework. The main idea is that our own third-party applications obtain Access Tokens that authorizes our third-party application to access our user's respective Google resources (i.e. one Access Token for each user).")]),e._v(" "),r("h2",{attrs:{id:"roles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[e._v("#")]),e._v(" Roles")]),e._v(" "),r("p",[e._v("To describe how it works, OAuth 2.0 first defines 4 different roles.")]),e._v(" "),r("h3",{attrs:{id:"resource-owner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-owner"}},[e._v("#")]),e._v(" Resource Owner")]),e._v(" "),r("p",[e._v("This is someone who owns resources stored on the server that implements OAuth 2.0. Usually, there exists different owners that have access to different resources stored on the server, i.e. each user have there own user account and owns the resources belonging to that account.")]),e._v(" "),r("h3",{attrs:{id:"resource-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-server"}},[e._v("#")]),e._v(" Resource Server")]),e._v(" "),r("p",[e._v("This server stores all the resources. Whenever we want to retrieve, create, update or delete a resource from our third-party application we should send requests to this server together with an Access Token granting us permission.")]),e._v(" "),r("h3",{attrs:{id:"authorization-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authorization-server"}},[e._v("#")]),e._v(" Authorization Server")]),e._v(" "),r("p",[e._v("This server generates Access Tokens giving our third-party application permission to work with some of the resources on the Resource Server. You can see this as the same server as the Resource Server, but they don't have to be the same.")]),e._v(" "),r("h3",{attrs:{id:"client"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),r("p",[e._v("This is our third-party application our users are using and in which we want to be able to access our users' resources on the Resource Server. The Client usually needs to register itself at the Authorization Server before it can request Access Tokens from it. When the Client register itself it will receive a "),r("code",[e._v("client_id")]),e._v(" and "),r("code",[e._v("client_secret")]),e._v(" it can use to authenticate itself to the Authorization Server. "),r("code",[e._v("client_secret")]),e._v(" should of course be kept secret.")]),e._v(" "),r("h2",{attrs:{id:"obtaining-access-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-access-token"}},[e._v("#")]),e._v(" Obtaining Access Token")]),e._v(" "),r("p",[e._v("OAuth 2.0 describes 4 different flows clients can use to obtain an Access Token.")]),e._v(" "),r("h3",{attrs:{id:"resource-owner-password-credentials-grant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-owner-password-credentials-grant"}},[e._v("#")]),e._v(" Resource Owner Password Credentials Grant")]),e._v(" "),r("p",[e._v("This flow can be used when you are the owner of the both the server that implements OAuth 2.0 and the client, i.e. when the client is a first-party application, and not a third-party application. For example, the YouTube app for smartphones can use this to flow to let users login with their Google accounts, since Google owns and develop the YouTube app.")]),e._v(" "),r("p",[e._v("This flow does not require the Client to first register at the Authorization Server since no "),r("code",[e._v("client_id")]),e._v(" or "),r("code",[e._v("client_secret")]),e._v(" are used.")]),e._v(" "),r("Figure",{attrs:{caption:"The flow of the Resource Owner Password Credentials Grant."}},[r("mermaid",[e._v("\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: Here is my Google username and password.\n    activate c\n    c ->> as: Here is a user's Google username and password.\n    deactivate c\n    activate as\n    as ->> c: Correct, here is an Access Token to that user's resources.\n    deactivate as\n    activate c\n    c ->> rs: Here is Access Token, now give me the resources.\n    deactivate c\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    activate c\n    c ->> ro: Resources successfully fetched.\n    deactivate c\n")])],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("This flow has been deprecated")]),e._v(" "),r("p",[e._v("This flow has been deprecated. The reason is that this flow reveals the user's username and password to the Client, which the whole idea with this authorization framework is to prevent. The recommended way now to achieve something similar is to instead use a the Authorization Code flow with Proof Key for Code Exchange, which is more secure, but more complicated to implement. For smaller REST APIs you want to secure with Access Tokens, continuing to use the Resource Owner Password Credentials flow is probably fine, but Google and other big providers should definitely not use it.")])]),e._v(" "),r("h3",{attrs:{id:"implicit-grant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implicit-grant"}},[e._v("#")]),e._v(" Implicit Grant")]),e._v(" "),r("p",[e._v("This flow can be used when the Client is not from the same company as the Server implementing OAuth 2.0 (i.e. when the Client is a third-party application) and the source code for the Client is available to the user, such as for smartphone applications, desktop applications, single-page applications, etc., so the Client can't contain the "),r("code",[e._v("client_secret")]),e._v(".")]),e._v(" "),r("Figure",{attrs:{caption:"The flow of the Resource Owner Password Credentials Grant."}},[r("mermaid",[e._v("\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I want to give you access to my Google resources.\n    activate c\n    c ->> ro: I redirect you to Google's OAuth 2.0 Authorization Server with my client_id.\n    deactivate c\n    activate ro\n    ro ->> as: Give me the grant permission page for the Client with the provided client_id.\n    deactivate ro\n    activate as\n    as ->> ro: OK, here is the page.\n    deactivate as\n    activate ro\n    ro ->> as: I grant the Client these permissions.\n    deactivate ro\n    activate as\n    as ->> ro: OK, I redirect you back to the Client with an Access Token.\n    deactivate as\n    activate ro\n    ro ->> c: Here is the Access Token.\n    deactivate ro\n    activate c\n    c ->> rs: Here is an Access Token, give me some resources.\n    deactivate c\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    activate c\n    c ->> ro: I got the resources, everything is fine.\n    deactivate c\n")])],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("This flow has been deprecated")]),e._v(" "),r("p",[e._v("This flow has been deprecated. The reasons are the the security vulnerabilities explained in "),r("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 Security Best Current Practice"),r("OutboundLink")],1),e._v(" for this flow.")])]),e._v(" "),r("h3",{attrs:{id:"authorization-code-grant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authorization-code-grant"}},[e._v("#")]),e._v(" Authorization Code Grant")]),e._v(" "),r("p",[e._v("This flow can be used when the Client is not from the same company as the Server implementing OAuth 2.0 (i.e. when the Client is a third-party application) and the source code of the Client is not available to the user, such as for web applications. This way, the source code can contain the "),r("code",[e._v("client_secret")]),e._v(", and the flow can make use of it.")]),e._v(" "),r("p",[e._v("This flow is a bit more complicated (more steps), but the benefit is that the Access Token is never exposed to the Resource Owner (or more accurately: never exposed to the Resource Owner's web browser), so if the Resource Owners computer/web browser contains a vulnerability of some kind, that vulnerability can't be used to steal the Access Token.")]),e._v(" "),r("Figure",{attrs:{caption:"The flow of the Implicit Grant."}},[r("mermaid",[e._v("\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I want to give you access to my Google resources.\n    activate c\n    c ->> ro: I redirect you to Google's OAuth 2.0 Authorization Server with my client_id.\n    deactivate c\n    activate ro\n    ro ->> as: Give me the grant permission page for the Client with the provided client_id.\n    deactivate ro\n    activate as\n    as ->> ro: OK, here is the page.\n    deactivate as\n    activate ro\n    ro ->> as: I grant the Client these permissions.\n    deactivate ro\n    activate as\n    as ->> ro: OK, I redirect you back to the Client with an Authorization Code.\n    deactivate as\n    activate ro\n    ro ->> c: Here is the Authorization Code.\n    deactivate ro\n    activate c\n    c ->> as: Here is the Authorization Code and my client_id and client_secret, give me an Access Token for it.\n    deactivate c\n    activate as\n    as ->> c: Authorization Code is valid, here is your Access Token.\n    deactivate as\n    activate c\n    c ->> rs: Here is an Access Token, give me some resources.\n    deactivate c\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    activate c\n    c ->> ro: I got the resources, everything is fine.\n    deactivate c\n")])],1),e._v(" "),r("h3",{attrs:{id:"client-credentials-grant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-credentials-grant"}},[e._v("#")]),e._v(" Client Credentials Grant")]),e._v(" "),r("p",[e._v("This flow can be used when the Client wants to obtain an Access Token it can use to access its own resources on the Resource Server (if you ever have a use-case like that). Since it uses "),r("code",[e._v("client_id")]),e._v(" and "),r("code",[e._v("client_secret")]),e._v(" you should only use this when the Client runs on a server, so your users won't have access to the source code and can read the "),r("code",[e._v("client_secret")]),e._v(".")]),e._v(" "),r("Figure",{attrs:{caption:"The flow of the Client Credentials Grant."}},[r("mermaid",[e._v("\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    c ->> as: Here is my client_id and client_secret.\n    activate as\n    as ->> c: Here is your Access Token.\n    deactivate as\n    activate c\n    c ->> rs: Here is my Access Token, give me my resources.\n    deactivate c\n    activate rs\n    rs ->> c: Access Token token is valid, here are your resources.\n    deactivate rs\n")])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);