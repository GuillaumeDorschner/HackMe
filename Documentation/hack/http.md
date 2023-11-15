# HTTP (Hypertext Transfer Protocol)

## Definition

HTTP, which stands for Hypertext Transfer Protocol, is the foundation of data communication for the World Wide Web. It is a protocol used to transmit hypermedia documents, such as HTML, and follows a classic client-server model where the client requests resources, and the server responds with the requested information.

## How It Works

A user either enters a URL in their browser or clicks a hyperlink, which initiates an HTTP command to the web server, instructing it to fetch and transmit the requested web page. The server then sends the content back to the client's IP address.

## Security Concerns

HTTP is inherently insecure because it transmits data in plaintext, making any transferred data susceptible to eavesdropping and interception. This can include sensitive information like login credentials, personal details, and confidential data.

## Detection

When a site doesn't have HTTPS, browsers typically show a warning with a crossed-out lock icon or display "Not Secure" in red near the address bar.
![Browser Warning Image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/fd278ab8-4330-4d8f-a0d9-e360bc357a97)

## Prevention

The most effective method to address HTTP security issues is to use HTTPS (HTTP Secure), which encrypts the data in transit between client and server. Implementing security measures like SSL/TLS ensures that intercepted traffic is not easily readable.

Services like Let's Encrypt provide free SSL/TLS certificates, facilitating a more secure web. Using tools such as Certbot can automate certificate issuance and installation, removing much of the complexity involved in manually setting up HTTPS.

While self-signed certificates can also encrypt data, they do not provide verification of the server's identity and can lead to trust issues with clients. For internal testing or private networks, a self-signed certificate can be sufficient, but for public websites, a Certificate Authority (CA)-issued certificate is recommended. If using a self-signed certificate, the corresponding CA must be installed on the client's device to avoid security warnings.

## Example Scenarios

A common HTTP risk scenario is when a user logs into a site without HTTPS. If the credentials are sent over HTTP, they could be intercepted by an attacker monitoring the network traffic.

## References

- [HTTP on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [HTTP vs. HTTPS on Cloudflare](https://www.cloudflare.com/learning/ssl/why-use-https/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot](https://certbot.eff.org/)

## How to Use Wireshark for Network Monitoring

1. **Install Wireshark**: Obtain the application from the official [Wireshark website](https://www.wireshark.org/).
2. **Capture Traffic**: Launch Wireshark, select your network interface, and begin capturing packets.
3. **Filter for HTTP Traffic**: Apply the filter `http` to isolate HTTP packets.
4. **Analyze the Packets**: Inspect the details within each packet to view the unencrypted information being sent and received.

Remember, network traffic analysis, particularly involving sensitive data, must comply with legal and ethical standards. Always ensure you have the necessary permissions to capture and review network traffic.
