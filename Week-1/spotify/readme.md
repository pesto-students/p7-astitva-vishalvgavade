a]Browser checks cache for DNS entry to find the corresponding IP address of website.
It looks for following cache. If not found in one, then continues checking to the next until found.
Browser Cache
Operating Systems Cache
Router Cache 
b]If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
The requests are sent using small data packets that contain information content of request and IP address it is destined for.
c]Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
d]Browser sends an HTTP request to the web server. GET or POST request.
e]Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
f]Server sends out an HTTP response along with the status of response.
g]Browser displays HTML content


The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).