# SQL Injection

Une faille d'injection SQL est une vulnérabilité de sécurité qui se produit lorsqu'une application web utilise des données entrées par l'utilisateur sans les filtrer ou les valider correctement. Cette vulnérabilité permet à un attaquant d'injecter du code SQL malveillant dans les requêtes SQL de l'application, ce qui peut compromettre la sécurité et permettre à l'attaquant d'accéder, modifier ou supprimer des données de la base de données.

Les injections SQL sont des injections dites “serveur” puisqu’elles sont exécutées côté serveur (et précisément en base de données, dans le cas de cette vulnérabilité).

il y a 3 types d’injection SQL

## 1. Error-Based

Ce type d’injection est le plus simple à exploiter comme à patcher.

Les injections SQL error-based sont parmi les plus simples à repérer et exploiter. Bien qu'elles soient moins courantes dans la nature, elles sont relativement faciles à détecter car elles génèrent des erreurs directement visibles dans l'application.

La détection de cette faille est assez directe : lorsque des caractères spéciaux, tels que des apostrophes (**`'`**) ou des guillemets (**`"`**), sont insérés dans un champ destiné à être utilisé comme paramètre dans une requête SQL, cela peut provoquer une erreur dans la requête.

Si la vulnérabilité existe et que vous entrez un caractère spécial dans le champ, la requête SQL peut planter et générer un message d'erreur. Par exemple, le système peut renvoyer un message semblable à celui-ci :

"You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'test'' at line 1"

Ce type d'injection est qualifié de error-based car son exploitation repose sur la provocation délibérée d'une erreur dans la page. Cette erreur peut donner des informations précieuses à l'attaquant, parfois même des détails sur la structure de la requête SQL ou des indices sur la manière dont les données sont manipulées dans la base de données.

Malgré leur facilité de détection, les injections SQL error-based peuvent être très dommageables. Pour se prémunir contre ces vulnérabilités, les développeurs doivent adopter des pratiques de codage sécurisées, telles que l'utilisation de requêtes préparées, l'encodage des données utilisateur et la validation rigoureuse des entrées, afin de prévenir l'exécution involontaire de commandes SQL indésirables.

## 2. **Boolean based**

Imaginons une requête SQL vulnérable qui est construite de la manière suivante, où l'attaquant a injecté du code malveillant dans le champ **`username`** :

```sql
SELECT * FROM users WHERE username = 'hack' OR 1=1 --' AND password = '...'
```

Dans cette requête, le **`OR 1=1`** est une expression booléenne qui est toujours vraie (**`1=1`** est toujours vrai en logique), ce qui signifie que cette condition est satisfaite pour chaque ligne de la table **`users`**. Le double tiret **`--`** est un commentaire en SQL, qui ignore le reste de la requête.

Cela entraîne une situation où la requête renverra toutes les lignes de la table **`users`**, contournant ainsi la vérification du mot de passe. Si cette requête renvoie une réponse différente (par exemple, un accès autorisé ou une réponse spécifique du serveur), l'attaquant peut alors déduire que l'injection a réussi et que la requête est vulnérable à une attaque SQL.

En exploitant cette vulnérabilité, un attaquant peut ainsi contourner les mécanismes d'authentification et accéder à des informations sensibles de la base de données.

Cependant, il est crucial de comprendre que ce type de comportement dans une requête est extrêmement dangereux en termes de sécurité. Les applications web doivent être construites avec des protections adéquates pour éviter de telles injections SQL, en utilisant par exemple des requêtes paramétrées, des filtres et des validations appropriées pour les données utilisateur.

## 3.Time-Based

L'injection SQL time-based est une technique utilisée par les attaquants pour exploiter les failles d'injection SQL en introduisant des instructions SQL qui provoquent des délais intentionnels dans les requêtes. Cela permet à l'attaquant de déterminer si une injection SQL est possible et d'extraire des informations de la base de données.

L'idée clé ici est d'utiliser des fonctions telles que **`SLEEP()`** ou **`WAITFOR DELAY`** (selon la syntaxe du SGBD utilisé) qui sont conçues pour suspendre l'exécution d'une requête pour une durée spécifique.

Imaginons une requête SQL vulnérable qui vérifie l'existence d'un utilisateur dans une base de données :

```sql
SELECT * FROM users WHERE username = 'input_username' AND password = 'input_password'
```

Si l'attaquant parvient à injecter une instruction de **`SLEEP()`** dans le champ **`input_username`**, la requête pourrait ressembler à ceci :

```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'password' OR SLEEP(10) --'
```

Dans ce cas, si le système est vulnérable à cette injection, la requête se mettra en pause pendant 10 secondes avant de renvoyer une réponse. L'attaquant peut alors mesurer le temps de réponse de la requête. Si la requête prend plus de temps que d'habitude pour répondre, cela indique que l'injection a réussi et que le système est vulnérable.

Cette méthode d'attaque est souvent utilisée pour extraire des informations sensibles en effectuant des requêtes conditionnelles basées sur le temps. Par exemple, en testant plusieurs conditions et en observant les délais, les attaquants peuvent déduire des informations sur la structure de la base de données, les noms de tables ou encore récupérer des données spécifiques par des tests itératifs.

Pour se protéger contre les injections SQL time-based, il est essentiel de mettre en place des pratiques de sécurités comme l'utilisation de requêtes préparées, l'encodage des entrées utilisateur, la limitation des privilèges de la base de données, et la validation stricte des données avant leur utilisation dans les requêtes SQL.

En résumé, une faille d'injection SQL se produit lorsqu'une application web n'effectue pas correctement la validation ou l'échappement des données entrées par l'utilisateur, ce qui permet à un attaquant d'injecter du code SQL malveillant et compromettre la sécurité de la base de données.
