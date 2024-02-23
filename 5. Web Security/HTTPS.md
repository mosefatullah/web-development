# HTTPS

Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider.

Modern browsers today limit functionalities for sites that are not secure. For example: geolocation, push notifications and service workers don’t work if your instance is not using HTTPS.

## Why HTTPS?

For three reasons :

- **Privacy** (It means that no one can eavesdrop on the data being transferred)
- **Integrity** (It means that the data is not manipulated on the way to its destination)
- **Identification** (It means that the server is who it claims to be)

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
