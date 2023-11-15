# HTTP (Hypertext Transfer Protocol)

## Definition

HTTP stands for Hypertext Transfer Protocol and is the foundation of data communication on the World Wide Web. It is a protocol used for transmitting hypermedia documents, such as HTML. It follows a classical client-server model where the client requests resources and the server provides them.

## How It Works

When a user enters a URL in this browser or clicks a hyperlink, an HTTP command is sent to the Web server directing it to fetch and transmit the requested Web page. The server then sends the content back to the IP address specified by the client in the HTTP request.

## Security Concerns

HTTP is not secure on its own because it sends data in plaintext. This means that any data transferred over HTTP is susceptible to eavesdropping and interception. This can include sensitive data like login credentials, personal information, and other confidential data.

## Detection

Wireshark can be used to detect HTTP traffic on a network. By capturing and analyzing packets, Wireshark can reveal the details of the HTTP communication, including the request and response headers and the body of the message.

## Prevention

The primary method of preventing security issues with HTTP is to use HTTPS (HTTP Secure), which encrypts the data transmitted between the client and server. Implementing security measures like SSL/TLS can ensure that even if traffic is intercepted, it cannot be easily deciphered.

## Example Scenarios

An example of the risks of HTTP is when a user logs into a website without HTTPS. If the login credentials are sent over HTTP, they could potentially be captured by an attacker monitoring the network traffic.

## References

- [HTTP on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP vs. HTTPS on Cloudflare](https://www.cloudflare.com/learning/ssl/why-use-https/)

## How to Use Wireshark for Network Monitoring

1. **Install Wireshark**: Download and install it from the official [Wireshark website](https://www.wireshark.org/).
2. **Capture Traffic**: Open Wireshark, select your network interface, and start capturing traffic.
3. **Filter HTTP Traffic**: Use the filter `http` to display only HTTP packets.
4. **Analyze Packets**: Look through the details of each packet to see the unencrypted information being sent and received.

Please note that monitoring network traffic may be subject to legal and ethical guidelines. Always ensure you have permission to capture and analyze network traffic, especially when it involves potentially sensitive data.
