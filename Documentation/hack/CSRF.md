# CSRF

La faille CSRF (Cross-Site Request Forgery) est une vulnérabilité de sécurité qui exploite la confiance entre un utilisateur authentifié et un site web. Cette attaque se produit lorsqu'un attaquant force un utilisateur à effectuer des actions indésirables sur un site web sans que l'utilisateur en soit conscient.

Voici comment cela fonctionne : supposons qu'un utilisateur soit authentifié sur un site A et qu'il ait ouvert une session active. Pendant ce temps, l'utilisateur visite un site malveillant B. Ce site B contient un code malveillant qui envoie des requêtes HTTP à des endroits spécifiques sur le site A, exploitant la session active de l'utilisateur sur ce site.

Si l'utilisateur est déjà authentifié sur le site A et que les requêtes envoyées depuis le site B sont conçues pour effectuer des actions (comme changer un mot de passe, effectuer des transactions financières, supprimer des éléments, etc.) sur le site A sans le consentement de l'utilisateur, ces requêtes seront exécutées. Cela se produit parce que le site A traite ces demandes comme légitimes, car elles semblent venir de l'utilisateur authentifié.

Pour prévenir les attaques CSRF, plusieurs mesures de sécurité peuvent être mises en place :

1. **Token CSRF :** Un jeton CSRF unique peut être généré et associé à chaque action ou formulaire sur le site. Ce jeton est inclus dans les requêtes et vérifié par le serveur pour s'assurer que la demande provient d'une source légitime.
    
    Exemple de génération de jeton CSRF (en utilisant Django) :
    
    ```python
    from django.middleware.csrf import get_token
    
    # Dans la vue qui génère le formulaire
    def my_view(request):
        token = get_token(request)
        # Incorporer le jeton dans le formulaire
        return render(request, 'my_template.html', {'csrf_token': token})
    ```
    
2. **Vérification de l'en-tête Referer :** Le serveur peut vérifier l'en-tête "Referer" dans la requête HTTP pour s'assurer que la demande provient du même domaine ou du même site.
    
    exemple de code PHP
    
    ```jsx
    $referer = $_SERVER['HTTP_REFERER'];
    if ($referer && parse_url($referer, PHP_URL_HOST) === 'www.monsite.com') {
        // La demande provient du même site
        // Exécuter l'action
    } else {
        // Rejeter la demande
    }
    ```
    
3. **Cookies sécurisés :** L'utilisation de cookies sécurisés avec des attributs comme "SameSite" peut aider à limiter la vulnérabilité aux attaques CSRF.
4. **Confirmer les actions sensibles :** Lorsqu'un utilisateur effectue une action sensible (comme changer un mot de passe ou effectuer une transaction financière), demander une confirmation supplémentaire peut aider à réduire les risques d'attaques CSRF.

En mettant en place ces mesures de sécurité, les développeurs peuvent réduire considérablement les risques liés aux attaques CSRF et renforcer la sécurité des applications web.

[https://www.vaadata.com/blog/fr/attaques-csrf-principes-impacts-exploitations-bonnes-pratiques-securite/#:~:text=Qu'est-ce qu',web et d'un serveur](https://www.vaadata.com/blog/fr/attaques-csrf-principes-impacts-exploitations-bonnes-pratiques-securite/#:~:text=Qu%27est-ce%20qu%27,web%20et%20d%27un%20serveur).
