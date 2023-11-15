# Essential Web Vulnerabilities

[< Back to Getting Started](../../README.md#getting-started)

All the vulnerabilities listed below are essential to know when it comes to web security. These vulnerabilities are the most common and are the most likely to be exploited. It is important to know how to prevent these vulnerabilities from being exploited and how to fix them if they are exploited.

⚠️ **Warning:** The exploration and handling of web vulnerabilities must comply with legal and ethical standards. Always ensure you have the necessary permissions and understand the implications of probing and testing vulnerabilities in any system or network. Unauthorized testing or exploitation of vulnerabilities can lead to legal consequences and ethical breaches. ⚠️

- [XSS (Cross-Site Scripting)](xss.md)
  *Injecting malicious scripts into web pages viewed by other users.*
- [RAFI (Remote File Inclusion)](rafi.md)
  *Exploiting scripts to include files located on remote servers.*
- [Remote File Insertion](remote-file-insertion.md)
  *Inserting malicious files into web applications.*
- [CSRF (Cross-Site Request Forgery)](csrf.md)
  *Unauthorized commands are transmitted from a user the website trusts.*
- [SQL Injection](sql-injection.md)
  *Inserting or "injecting" an SQL query via the input data from the client to the application.*
- [Session Hijacking](session-hijacking.md)
  *Illegally gaining access to another user's web session.*

## Bonus Vulnerabilities

- [HTTP](http.md)
  *Utilize Wireshark for sniffing passwords, usernames, and other sensitive data.*
- [Lack of Rate Limiting (DDoS)](ddos.md)
  *Potentially looping through the site with multiple computers or renting servers to crash the site.*
- [No Logging](no-logging.md)
  *Absence of event logging, making malicious activities difficult to trace.*
- [Execution of Malicious Files](execution-of-malicious-files.md)
  *Running harmful files, potentially affecting the system or network.*
- [Metadata Not Removed](metadata-not-removed.md)
  *For example, not removing geolocation data from profile pictures.*