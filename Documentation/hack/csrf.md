# CSRF (Cross-Site Request Forgery)

## Definition

Cross-Site Request Forgery (CSRF) is a security vulnerability that exploits the trust between an authenticated user and a website. This attack occurs when an attacker tricks a user into performing unintended actions on a website without the user's awareness.

## How It Works

Imagine a user is authenticated on Site A and maintains an active session. Simultaneously, the user visits a malicious Site B. This Site B contains malicious code that sends HTTP requests to specific locations on Site A, thus exploiting the user's active session.

If the user is already authenticated on Site A, and the requests sent from Site B are designed to perform actions (such as changing a password, making financial transactions, deleting items, etc.) without the user's consent, these requests will be executed because Site A interprets them as legitimate.

![image](https://github.com/GuillaumeDorschner/HackMe/assets/44686652/09f32e44-de01-49c0-9c07-4171f8c2990d)


## Prevention

To prevent CSRF attacks, several security measures can be implemented:

1. **CSRF Token:** A unique CSRF token is generated and associated with each action or form on the site. This token is included in requests and verified by the server to confirm that the request comes from an authentic source.

    Example of CSRF token generation (with Django):

    ```python
    from django.middleware.csrf import get_token
    
    def my_view(request):
        token = get_token(request)
        return render(request, 'my_template.html', {'csrf_token': token})
    ```
    
2. **Referer Header Verification:** The server can check the "Referer" header of the HTTP request to ensure that the request comes from the same domain or site.

    Example PHP code:

    ```php
    $referer = $_SERVER['HTTP_REFERER'];
    if ($referer && parse_url($referer, PHP_URL_HOST) === 'www.mysite.com') {
        // The request comes from the same site
        // Execute the action
    } else {
        // Reject the request
    }
    ```
    
3. **Secure Cookies:** Using secure cookies with attributes such as "SameSite" can help limit vulnerability to CSRF attacks.

4. **Confirmation of Sensitive Actions:** Asking for additional confirmation for sensitive actions (password changes, financial transactions, etc.) can reduce the risks of CSRF attacks.

## References

[Source: Vaadata](https://www.vaadata.com/blog/fr/attaques-csrf-principes-impacts-exploitations-bonnes-pratiques-securite/#:~:text=Qu'est-ce%20qu'%27,web%20et%20d'%20un%20serveur).

## How to do it ?

...
