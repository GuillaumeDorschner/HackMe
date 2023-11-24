# XSS (Cross-Site Scripting)

## Definition

Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

## How It Works

![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/a0e78870-5c49-49fb-862f-3f64f31645fc)


## Detection

XSS vulnerabilities can be detected by:
- Using tootls / frameworks that automatically escape XSS by design.
- Utilizing automated scanning tools designed to discover common web application vulnerabilities.
- Conducting thorough code reviews to identify potential injection points.

## Prevention

To prevent XSS attacks:
- Sanitize all user input to remove or encode potentially malicious content.
- Implement Content Security Policy (CSP) headers to restrict the types of content that can be executed on a webpage.


## Example Scenarios

Injection with the script does this:
```js
{
      id: 1,
      author: "John Doe",
      content: "This is my first post! <img src="x" onerror="alert('hey')">",
      timestamp: "2023-01-01T12:00:00",         
      likes: 20,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "This is my first post!",
        },
      ],
    },
```

the result is:
![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/6762aef5-8adf-4e36-a5ec-f70a4c7c3564)

In this case, the hacker executes a script on your webpage which could potentially give them access to your session ID, tokens, and personal information such as your full name.

## References

- [OWASP Guide on XSS](https://owasp.org/www-community/attacks/xss/)


Please replace the links with the correct URLs where the images are hosted. If the images are not publicly accessible, they will not be displayed correctly in the Markdown file. Also, ensure that the JavaScript object is correctly formatted within the code block if you want it to display properly.

## How to do it ?

You need to write a blog post with a comment section. The comment section must be vulnerable to XSS. like this:

![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/d95df2e4-17b8-4f07-b54b-1436b6af5df3)


then all the users will exec you script when they will read your post. Example:

![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/6762aef5-8adf-4e36-a5ec-f70a4c7c3564)