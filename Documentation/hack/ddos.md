# DDoS (Distributed Denial of Service)

## Definition

A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt normal traffic to a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.

## How It Works

DDoS attacks work by utilizing multiple compromised computer systems as sources of attack traffic. Exploited machines can include computers and other networked resources such as IoT devices. From a high level, a DDoS attack is like a traffic jam clogging up with highway, preventing regular traffic from arriving at its desired destination.

![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/d4e46ba3-89c6-49dc-b696-ffbaf3e64239)

## Detection

Detection of DDoS attacks can be achieved through:
- Network traffic monitoring and anomaly detection tools that identify sudden spikes in traffic.
- Intrusion Detection Systems [(IDS)](https://en.wikipedia.org/wiki/Intrusion_detection_system) and Intrusion Prevention Systems (IPS) that can analyze traffic patterns.
- Monitoring network performance and setting alerts for unusual activity.

## Prevention

To prevent DDoS attacks:
- Employ a DDoS protection service [(CloudFalre)](https://www.cloudflare.com/ddos/) that can absorb traffic spikes and scrub malicious traffic.
- Design network architecture for resilience, employing methods such as redundant network resources, [load balancing](https://www.nginx.com/), and failover systems.
- Increase the security of network infrastructure by implementing robust firewall and anti-DDoS solutions.

## Example Scenarios

A typical DDoS scenario involves an attacker controlling a botnet to send more requests to a web server than it can handle. This results in legitimate requests being delayed or ignored, causing service slowdown or total unavailability.

## References

- [Cloudflare - DDoS Guide](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
- [CISA - DDoS QUICK GUIDE](https://www.cisa.gov/sites/default/files/publications/DDoS%20Quick%20Guide.pdf)

## How to do it ?

- [MHDDoS](https://github.com/MatrixTM/MHDDoS)
- [JMeter](https://jmeter.apache.org/)