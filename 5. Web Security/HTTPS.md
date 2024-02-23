# HTTPS

Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider.

Modern browsers today limit functionalities for sites that are not secure. For example: geolocation, push notifications and service workers don’t work if your instance is not using HTTPS.

## Why HTTPS?

For three reasons :

- **Privacy** (It means that no one can eavesdrop on the data being transferred)
- **Integrity** (It means that the data is not manipulated on the way to its destination)
- **Identification** (It means that the server is who it claims to be)

## HTTPS Keys

HTTPS needs a way to provide privacy, integrity, and identification on the web. And that mechanism is called 'encryption'. Let's talk about the two types of encryption algorithms.

Server sends a public key to the client, and the client uses that public key to encrypt the data. The server then uses a private key to decrypt the data. This is called `asymmetric encryption`.

You can think of the encryption process like putting the message in a box and locking the box with a key.

## HTTPS Handshake

The negotiation between a browser and a server, is called 'the handshake'. It happens very fast. So, let's see how it works.

1. **Client Hello**: The browser sends a list of supported SSL/TLS versions and cipher suites to the server.
2. **Server Hello**: The server picks the best option from the client’s list and sends its certificate back.
3. **Client Key Exchange**: The browser verifies the server’s certificate and sends a pre-master key encrypted with the server’s public key.
4. **Server Key Exchange**: The server decrypts the pre-master key and generates a shared secret. Both sides start using the shared secret to encrypt communication.
5. **Finished**: Both sides send a message to confirm that the handshake is complete. The encrypted communication begins.

## SSL vs TLS

- SSL stands for `Secure Sockets Layer`. It was the original protocol used to secure communication between a web browser and a web server, but it has now been deprecated. It was created by Netscape in the mid-1990s.
- TLS stands for `Transport Layer Security`. It is the current protocol used to secure communication between a web browser and a web server. It was created by the IETF (Internet Engineering Task Force) in 1999.
- `TLS` is considered to be more secure than `SSL`.

## Certificate Authority (CA)

CAs are trusted entities that issue digital certificates. These certificates are used to verify the identity of websites and servers, ensuring that you're connecting to the intended entity and not an imposter.

**How do CAs work?**

When you visit a website that uses HTTPS, your browser checks the website's certificate to make sure it is valid and issued by a trusted CA. This creates a chain of trust, starting with root CAs pre-installed on your device and extending down to intermediate CAs and finally the website's certificate.

**Types of CAs**

There are three main types of CAs:

- **Root CAs**: The most trusted CAs, pre-installed on most devices.
- **Intermediate CAs**: Issued by root CAs, they can issue certificates to other entities.
- **Organization Validation (OV) CAs**: Verify the identity of the organization that owns the website.

**Self-signed certificates**

Self-signed certificates are not issued by a trusted CA and therefore not trusted by browsers. They should not be used for public websites.

<br/>

## Free TLS Certificates

TLS (previously known as SSL) is a protocol that encrypts the data between the client and the server. It is used to secure the data transfer between the client and the server.

And today is much more easy to setup a project with an SSL certificate than it was before (and for free, thanks to Let’s Encrypt).

Learn more at https://web.dev/articles/enable-https

### Let's Encrypt

`|` https://letsencrypt.org

Let's Encrypt is a free, automated, and nonprofit open certificate authority (CA), run for the public’s benefit.

- [Certbot](https://certbot.eff.org/): Certbot is a free, open source software tool for automatically using Let’s Encrypt certificates on manually-administrated websites to enable HTTPS.

### Cloudflare

`|` https://www.cloudflare.com

Cloudflare is a service that provides a CDN, DDoS protection, and security. It also provides a free SSL certificate for your website.
