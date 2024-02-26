## OWASP Security Risks

- Injection
- Broken Authentication
- Sensitive Data Exposure
- XML External Entities (XXE)
- Broken Access Control
- Security Misconfiguration
- Cross-Site Scripting (XSS)
- Insecure Deserialization
- Using Components with Known Vulnerabilities
- Insufficient Logging and Monitoring

<br/>
<br/>

### Injection

To get rid of SQL injection,

- Separate data and commands,
- Use safe APIs/ORMs.
- Validate inputs, escape characters (excluding structure),
- Use LIMIT to limit data exposure.

#### Example:

```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'password'
```

If the user enters the following as the password: `' OR 1=1; --`, the query will become:

```sql
SELECT * FROM users WHERE username = 'admin' AND password = '' OR 1=1; --'
```

This will return all the users in the database.

<br/>
<br/>

### Broken Authentication

A broken authentication vulnerability can allow an attacker to use manual and/or automatic methods to try to gain control over any account they want in a system – or even worse – to gain complete control over the system.

To minimize broken authentication risks avoid leaving the login page for admins publicly accessible to all visitors of the website:

- `/administrator` on Joomla!
- `/wp-admin/` on WordPress
- `/index.php/admin` on Magento
- `/user/login` on Drupal

Also, brute force protection is a must-have for any website. Basically, if it appears someone is repeatedly and unsuccessfully trying to log in to an account, it’s likely an attempted brute force attack.

Signs can include:

- The same IP address unsuccessfully trying to log in multiple times.
- Many different IP addresses unsuccessfully trying to log in to a single account.
- Multiple unsuccessful login attempts from various IP addresses in a short time period.

#### Reasons:

- Permits automated attacks such as credential stuffing, where the attacker has a list of valid usernames and passwords.
- Permits brute force or other automated attacks.
- Permits default, weak, or well-known passwords, such as”Password1″ or “admin/admin.″
- Uses weak or ineffective credential recovery and forgot-password processes, such as “knowledge-based answers,” which cannot be made safe.
- Uses plain text, encrypted, or weakly hashed passwords.
- Has missing or ineffective multi-factor authentication.
- Exposes session IDs in the URL (e.g., URL rewriting).
- Does not rotate session IDs after successful login.
- Does not properly invalidate session IDs. User sessions or authentication tokens (particularly single sign-on (SSO) tokens) aren’t properly invalidated during logout or a period of inactivity.

<br/>
<br/>

### Sensitive Data Exposure

Some sensitive data that requires protection is:

- Credentials
- Credit card numbers
- Social Security Numbers
- Medical information
- Personally identifiable information (PII)
- Other personal information

#### Solutions:

Some of the ways to prevent data exposure, according to OWASP, are:

- Classify data processed, stored, or transmitted by an application.
- Identify which data is sensitive according to privacy laws, regulatory requirements, or business needs.
- Apply controls as per the classification.
- Don’t store sensitive data unnecessarily.
- Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.
- Make sure to encrypt all sensitive data at rest.
- Ensure up-to-date and strong standard algorithms, protocols, and keys are in place; use proper key management.
- Encrypt all data in transit with secure protocols such as TLS with perfect forward secrecy (PFS) ciphers, cipher prioritization by the server, and secure parameters.
- Enforce encryption using directives like HTTP Strict Transport Security (HSTS).
- Disable caching for responses that contain sensitive data.
- Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt, or PBKDF2.
- Verify independently the effectiveness of configuration and settings.

### XML External Entities (XXE)

#### Solutions:

- Whenever possible, use less complex data formats ,such as JSON, and avoid serialization of sensitive data.
- Patch or upgrade all XML processors and libraries in use by the application or on the underlying operating system.
- Use dependency checkers (update SOAP to SOAP 1.2 or higher).
- Disable XML external entity and DTD processing in all XML parsers in the application, as per the OWASP Cheat Sheet ‘XXE Prevention.’
- Implement positive (“allowlisting”) server-side input validation, filtering, or sanitization to prevent hostile data within XML documents, headers, or nodes.
- Verify that XML or XSL file upload functionality validates incoming XML using XSD validation or similar.
- SAST tools can help detect XXE in source code – although manual code review is the best alternative in large, complex applications with many integrations.

#### Example:

If the XML parser is not configured to disallow DTDs, an attacker can use the following XML input to retrieve the contents of `/etc/passwd`:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
<foo>&xxe;</foo>
```

<br/>
<br/>

### Broken Access Control

In website security, access control means putting a limit on what sections or pages visitors can reach, depending on their needs.

#### Solutions:

- With the exception of public resources, deny by default.
- Implement access control mechanisms once and reuse them throughout the application, including minimizing CORS usage.
- Model access controls should enforce record ownership, rather than accepting that the user can create, read, update, or delete any record. Note: For example, if a user logs in as “John,” he could only create, read, update or delete records associated with the ID of “John,” never the data from other users.
- Unique application business limit requirements should be enforced by domain models.
- Disable web server directory listing and ensure file metadata (e.g. .git) and backup files are not present within web roots.
- Log access control failures, alert admins when appropriate (e.g. repeated failures). Note: We recommend our free plugin for WordPress websites, that you can download directly from the official WordPress repository.
- Rate limit API and controller access to minimize the harm from automated attack tooling.
- JWT tokens should be invalidated on the server after logout.
- Developers and QA staff should include functional access control units and integration tests.

#### Examples:

- Access to a hosting control / administrative panel
- Access to a server via FTP / SFTP / SSH
- Access to a website’s administrative panel
- Access to other applications on your server
- Access to a database

<br/>
<br/>

### Security Misconfiguration

Misconfiguration can happen at any level of an application stack, including:

- Network services
- Platform
- Web server
- Application server
- Database
- Frameworks
- Custom code
- Pre-installed virtual machines
- Containers
- Storage

#### Solutions:

In order to prevent security misconfigurations:

- A repeatable hardening process that makes it fast and easy to deploy another environment that is properly locked down. Development, QA, and production environments should all be configured identically, with different credentials used in each environment. Automate this process in order to minimize the effort required to set up a new secure environment.
- A minimal platform without any unnecessary features, components, documentation, and samples. Remove or do not install unused features and frameworks.
- A task to review and update the configurations appropriate to all security notes, updates, and patches as part of the patch management process. In particular, review cloud storage permissions.
- A segmented application architecture that provides effective and secure separation between components or tenants, with segmentation, containerization, or cloud security groups.
- Sending security directives to clients, e.g. Security Headers.
- An automated process to verify the effectiveness of the configurations and settings in all environments.
- Disallowing the detailed error messages that are often present in the development environment.

<br/>
<br/>

### Cross-Site Scripting (XSS)

Cross Site Scripting (XSS) is a widespread vulnerability that affects many web applications. XSS attacks consist of injecting malicious client-side scripts into a website and using the website as a propagation method.

XSS is present in about two-thirds of all applications.

#### Solutions:

- Using frameworks that automatically escape XSS by design, such as the latest Ruby on Rails, React JS. Learn the limitations of each framework’s XSS protection and appropriately handle the use cases which are not covered.
- Escaping untrusted HTTP request data based on the context in the HTML output (body, attribute, JavaScript, CSS, or URL) will resolve Reflected and Stored XSS vulnerabilities. The OWASP Cheat Sheet for XSS Prevention has details on the required data escaping techniques.
- Applying context-sensitive encoding when modifying the browser document on the client side acts against DOM XSS. When this cannot be avoided, similar context-sensitive escaping techniques can be applied to browser APIs as described in the OWASP Cheat Sheet for DOM based XSS Prevention.
- Enabling a content security policy (CSP) is a defense-in-depth mitigating control against XSS. It is effective if no other vulnerabilities exist that would allow placing malicious code via local file includes (e.g. path traversal overwrites or vulnerable libraries from permitted content delivery networks).

#### Example:

Imagine you are on your WordPress wp-admin panel adding a new post. If you are using a plugin with a stored XSS vulnerability that is exploited by a hacker, it can force your browser to create a new admin user while you’re in the wp-admin panel or it can edit a post and perform other similar actions.

```html
<script>
 // Create a new admin user
 var xhr = new XMLHttpRequest();
 xhr.open("POST", "/wp-admin/user-new.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 xhr.send(
  `action=createuser
  &_wpnonce_create-user=1d3e4f5e6a
  &user_login=hacker
  &email=hacker%40gmail.com
  &pass1=HackerPass123
  &pass1-text=HackerPass123
  &pass2=HackerPass123
  &role=administrator
  &createuser=Add+New+User`
 );
</script>
```

<br/>
<br/>

### Insecure Deserialization

Every web developer needs to make peace with the fact that attackers/security researchers are going to try to play with everything that interacts with their application–from the URLs to serialized objects.

#### Solutions:

The best way to protect your web application from this type of risk is not to accept serialized objects from untrusted sources.

If you can’t do this, OWASP security provides more technical recommendations that you (or your developers) can try to implement:

- Implementing integrity checks such as digital signatures on any serialized objects to prevent hostile object creation or data tampering.
- Enforcing strict type constraints during deserialization before object creation as the code typically expects a definable set of classes. Bypasses to this technique have been demonstrated, so reliance solely on this is not advisable.
- Isolating and running code that deserializes in low privilege environments when possible.
- Logging deserialization exceptions and failures, such as where the incoming type is not the expected type, or the deserialization throws exceptions.
- Restricting or monitoring incoming and outgoing network connectivity from containers or servers that deserialize.
- Monitoring deserialization, alerting if a user deserializes constantly.
- Using serialization formats that only permit primitive data types.

#### Example:

One of the attack vectors presented by OWASP regarding this security risk was a super cookie containing serialized information about the logged-in user. The role of the user was specified in this cookie.

```json
// Super cookie
{
 "user": "admin",
 "role": "administrator"
}
```

<br/>
<br/>

### Using Components with Known Vulnerabilities

When you use components with known vulnerabilities, it’s like leaving your front door open for hackers to walk in and take whatever they want.

- You do not know the versions of all components you use (both client-side and server-side). This includes components you directly use as well as nested dependencies.
- The software is vulnerable, unsupported, or out of date. This includes the OS, web/application server, database management system (DBMS), applications, APIs and all components, runtime environments, and libraries.
- You do not know the versions of all components you use (both client-side and server-side). This includes components you directly use as well as nested dependencies.
- You do not fix or upgrade the underlying platform, frameworks, and dependencies in a risk-based, timely fashion. This commonly happens in environments when patching is a monthly or quarterly task under change control, which leaves organizations open to many days or months of unnecessary exposure to fixed vulnerabilities.
- The software developers do not test the compatibility of updated, upgraded, or patched libraries.
- You do not secure the components’ configurations.

#### Solutions:

Some of the ways to prevent the use of vulnerable components are:

- Remove all unnecessary dependencies.
- Have an inventory of all your components on the client-side and server-side.
- Monitor sources like Common Vulnerabilities and Disclosures (CVE) and National Vulnerability Database (NVD) for vulnerabilities in the components.
- Obtain components only from official sources.
- Get rid of components not actively maintained.
- Use virtual patching with the help of a Website Application Firewall.

<br/>
<br/>

### Insufficient Logging and Monitoring

The importance of securing a website cannot be understated. While 100% security is not a realistic goal, there are ways to keep your website monitored on a regular basis so you can take immediate action when something happens.

#### Solutions:

- Remote monitoring
- Website blocklist monitoring
- Server-side monitoring
- DNS monitoring
- Uptime monitoring

#### Example:

```javascript
// Remote monitoring
const http = require("http");
const url = "http://www.example.com";
http
 .get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
   data += chunk;
  });
  res.on("end", () => {
   console.log(data);
  });
 })
 .on("error", (err) => {
  console.log("Error: " + err.message);
 });
```
