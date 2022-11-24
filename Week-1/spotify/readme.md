A browser is a software application used to locate, retrieve and display content on the World Wide Web, including Web pages, images, video and other files.
 As a client/server model, the browser is the client run on a computer that contacts the Web server and requests information. The Web server sends the information
 back to the Web browser which displays the results on the computer or other Internet-enabled device that supports a browser.

A]The User Interface: The user interface is the space where User interacts with the browser. It includes the address bar, back and next buttons, home button, refresh
and stop, bookmark option, etc. Every other part, except the window where requested web page is displayed, comes under it.
B]The Browser Engine: The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces,
it queries and manipulates the rendering engine.
C]The Rendering Engine: The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine 
interprets the HTML,XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or
 extensions, it can display other types data also. Different browsers user different rendering engines:
* Internet Explorer: Trident
* Firefox & other Mozilla browsers: Gecko
* Chrome & Opera 15+: Blink
* Chrome (iPhone) & Safari: Webkit
Networking: Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of 
Internet communication and security. The network component may implement a cache of retrieved documents in order to reduce network traffic.
D]JavaScript Interpreter: It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are 
sent to the rendering engine for display. If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is 
executed.
E]UI Backend: UI backend is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. 
It underneath uses operating system user interface methods.
F]Data Persistence/Storage: This is a persistence layer. Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is a 
small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.