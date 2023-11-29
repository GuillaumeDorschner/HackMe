# No Logging

## Definition

"No logging" is more a gap in security than a specific technical flaw. It refers to the absence or inadequacy of recording (logging) activities, events, or errors in a system, an application, or a network.

## How It Works

Logs are crucial for the security of computer systems. They record activities and events, allowing administrators and security teams to monitor, analyze, and understand what is happening on the network or in applications. They can help detect suspicious activities, troubleshoot problems, and respond to security incidents.

The "no logging" flaw occurs when:

1. **Absence of logs:** No recording of activities or events is carried out. In the event of a security incident, it then becomes difficult or even impossible to trace back the actions that led to this incident.
2. **Insufficient logs:** Systems record data but insufficiently. For example, they might not record the necessary details for a complete analysis of incidents, such as unauthorized access attempts, security errors, changes made in the system, etc.

## Detection

The consequences of this flaw can be severe: difficulty in detecting and responding quickly to security incidents, absence of evidence or traces to investigate suspicious activities, and inability to comply with regulations or security standards that require activity log keeping.

## Prevention

To remedy this flaw, it is essential to implement a comprehensive logging strategy:

1. **Define logging needs:** Identify which events need to be recorded based on security needs and regulatory requirements.
2. **Implement adequate logging:** Configure systems to record relevant events completely and securely.
3. **Monitor and analyze logs:** Set up tools and processes to regularly monitor logs, analyze suspicious activities, and respond quickly to incidents.
4. **Secure backup and storage:** Ensure regular and secure backup of logs to prevent data loss in the event of an incident and for long-term analysis needs.

## Example Scenarios

### Implementing the Flaw

The goal of implementing this flaw on our site is to generate as few logs as possible, especially regarding security. For example, not generating logs when there are more than 10 login attempts and then conducting a brute force test to demonstrate that nothing is generated.

## References

- [Snyk Learning - Logging Vulnerabilities](https://learn.snyk.io/lesson/logging-vulnerabilities/)