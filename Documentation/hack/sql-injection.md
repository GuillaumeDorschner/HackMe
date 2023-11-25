# 💉 SQL Injection

## 📖 Definition

SQL Injection involves inserting or "injecting" an SQL query via the input data from the client to the application. This can lead to unauthorized access to database information, data manipulation, and other malicious activities. A SQL injection vulnerability occurs when a web application uses user input data without properly filtering or validating it, allowing an attacker to inject malicious SQL code into the application's SQL queries.

## 🔄 How It Works

1. **💻 User Input**: The attacker inputs malicious SQL code into an application's input fields.
2. **🔗 Exploiting Vulnerabilities**: The application, if vulnerable, processes this input as part of an SQL query.
3. **📊 Database Manipulation**: This allows the attacker to manipulate the database, often retrieving, modifying, or deleting data.

## 🔍 Detection

1. **🔎 Log Analysis**: Regularly review logs for unusual query patterns.
2. **🛡️ Intrusion Detection Systems**: Use systems that can identify SQL injection patterns.
3. **📡 Network Monitoring**: Monitor network traffic for unusual database requests.

## 🛡️ Prevention

1. **🔐 Use Prepared Statements**: With parameterized queries to prevent injection.
2. **🧱 Employ Web Application Firewalls**: To filter out malicious data.
3. **👩‍💻 Regular Code Reviews**: To identify and fix vulnerabilities.
4. **📚 Educate Developers**: About secure coding practices.

## 🎭 Example Scenarios

1. **💳 Data Theft**: An attacker retrieves sensitive customer data.
2. **🔓 Unauthorized Access**: Gaining admin access by manipulating login queries.
3. **💥 Data Corruption**: Deleting or altering records through malicious queries.

## 📚 References

1. [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
2. [CISA SQL Injection Tips](https://www.cisa.gov/uscert/ncas/tips/ST04-014)
3. [SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

## 🛠️ How to do it?

1. **📝 Learn SQL Injection Techniques**:
   - Study different types of SQL injection attacks, such as tautologies, illegal/logically incorrect queries, union queries, and piggybacked queries.
   - Understand the basics of SQL queries and how they can be manipulated.

2. **🧪 Craft and Test Malicious SQL Queries**:
   - Develop SQL queries that exploit known vulnerabilities in SQL databases, like input fields that don’t sanitize user input.
   - Test these queries against your test database to observe how SQL injection can manipulate or retrieve data.

## Types of SQL Injection

### 1. Error-Based

This type is the simplest to exploit and patch. It is detectable when special characters, such as apostrophes (`'`) or quotation marks (`"`), inserted into a field cause an error in the SQL query.

### 2. Boolean-Based

In this type, the attacker injects a condition that is always true, like `OR 1=1`, into a vulnerable SQL query, allowing unauthorized access or data retrieval.

### 3. Time-Based

Time-based SQL injection uses functions like `SLEEP()` or `WAITFOR DELAY` to introduce delays in the query execution, enabling the attacker to infer information about the database's structure and data.

In summary, a SQL injection flaw occurs when a web application fails to properly validate or escape user input data, allowing an attacker to inject malicious SQL code and compromise database security.
