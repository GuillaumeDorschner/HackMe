# Session Hijacking

## Definition

Session Hijacking is a cyber attack where an attacker takes over a user's session to gain unauthorized access to information or services on a computer system. This type of attack exploits the session control mechanism that is commonly used in web applications.

## How It Works

An attacker hijacks a valid session ID and uses it to impersonate the legitimate user. This can be done by:
- Predicting or obtaining the session token through various methods (like sniffing network traffic).
- Exploiting weaknesses in the session management system of the application.

## Detection

Detecting session hijacking involves monitoring for unusual activities such as:
- Unexpected changes in session patterns (like locations or IP addresses).
- Multiple concurrent sessions from different locations using the same credentials.
- Anomalous spikes in user activity.

## Prevention

To prevent session hijacking:
- Implement HTTPS to encrypt data in transit.
- Use secure, randomly generated session tokens.
- Implement session timeouts and re-authentication for sensitive operations.
- Regularly renew session tokens and ensure they are securely stored.
- Employ IP address binding to sessions when feasible.

## Example Scenarios

A common example is when an attacker intercepts a user's session cookie through an unsecured Wi-Fi network and then uses it to access the user's account on a web application.

## References

- [OWASP Session Hijacking Attack](https://owasp.org/www-community/attacks/Session_hijacking_attack)
- [Mitigating Session Hijacking](https://www.sans.org/white-papers/1565/)

## How to do it ?

DO ...