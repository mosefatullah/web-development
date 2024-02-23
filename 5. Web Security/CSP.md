## Content Security Policy (CSP)

The web's security model is rooted in the same-origin policy. Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft, to site defacement, to malware distribution.

- To enable CSP, you need to set the `Content-Security-Policy` HTTP header in your web server.
- Alternatively, you can use the `<meta>` tag in your HTML file.

  ```html
  <meta
   http-equiv="Content-Security-Policy"
   content="default-src 'self'; img-src https://*; child-src 'none';"
  />
  ```

### Common Usage

- A website administrator wants all content to come from the site's own origin (this excludes subdomains.)

  ```http
  Content-Security-Policy: default-src 'self'
  ```

- A website administrator wants to allow content from a trusted domain and all its subdomains (it doesn't have to be the same domain that the CSP is set on.)

  ```http
  Content-Security-Policy: default-src 'self' example.com *.example.com
  ```

- A website administrator wants to allow users of a web application to include images from any origin in their own content, but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.

  ```http
  Content-Security-Policy: default-src 'self'; img-src *; media-src example.org
  example.net; script-src userscripts.example.com
  ```

- A website administrator for an online banking site wants to ensure that all its content is loaded using TLS, in order to prevent attackers from eavesdropping on requests.

  ```http
  Content-Security-Policy: default-src https://onlinebanking.example.com
  ```

- A website administrator of a web mail site wants to allow HTML in email, as well as images loaded from anywhere, but not JavaScript or other potentially dangerous content.

  ```http
  Content-Security-Policy: default-src 'self' *.example.com; img-src *
  ```

- A website administrator wants to disallow scripts from other origins, but allow from a specific trusted domain.

  ```http
  Content-Security-Policy: script-src 'self' https://apis.google.com
  ```

### Directives

- `base-uri` restricts the URLs that can appear in a page's $base$ element.
- `child-src` lists the URLs for workers and embedded frame contents. For example: child-src https://youtube.com would enable embedding videos from YouTube but not from other origins.
- `connect-src` limits the origins that you can connect to (via XHR, WebSockets, and EventSource).
- `font-src` specifies the origins that can serve web fonts. Google's web fonts could be enabled via font-src https://themes.googleusercontent.com.
- `form-action` lists valid endpoints for submission from form tags.
- `frame-ancestors` specifies the sources that can embed the current page. This directive applies to $frame$, $iframe$, $embed$, and $applet$ tags. This directive can't be used in meta tags and applies only to non-HTML resources.
- `frame-src` was deprecated in level 2, but is restored in level 3. If not present it still falls back to child-src as before.
- `img-src` defines the origins from which images can be loaded.
- `media-src` restricts the origins allowed to deliver video and audio.
- `object-src` allows control over Flash and other plugins.
- `plugin-types` limits the kinds of plugins a page may invoke.
- `report-uri` specifies a URL where a browser will send reports when a content security policy is violated. This directive can't be used in $meta$ tags.
- `style-src` is script-src's counterpart for stylesheets.
- `upgrade-insecure-requests` instructs user agents to rewrite URL schemes, changing HTTP to HTTPS. This directive is for websites with large numbers of old URL's that need to be rewritten.
- `worker-src` is a CSP Level 3 directive that restricts the URLs that may be loaded as a worker, shared worker, or service worker. As of July 2017, this directive has limited implementations.

### Implementation

- `none`, as you might expect, matches nothing.
- `'self'` matches the current origin, but not its subdomains.
- `'unsafe-inline'` allows inline JavaScript and CSS.
- `'unsafe-eval'` allows text-to-JavaScript mechanisms like eval.
- '$url$', matches a specific URL.

Example:

```http
Content-Security-Policy: default-src https://cdn.example.net; child-src 'none'; object-src 'none'
```

```html
<meta
 http-equiv="Content-Security-Policy"
 content="default-src https://cdn.example.net; child-src 'none'; object-src 'none'"
/>
```

### Real World Usage

- `Facebook's Like button` has a number of implementation options. We recommend sticking with the $iframe$ version as it's safely sandboxed from the rest of your site. It requires a child-src https://facebook.com directive to function properly. Note that, by default, the $iframe$ code that Facebook provides loads a relative URL, //facebook.com. Change that to explicitly specify HTTPS: https://facebook.com. There's no reason to use HTTP if you don't have to.
- `Twitter's Tweet button` relies on access to a script and a frame, both hosted at https://platform.twitter.com. (Twitter likewise provides a relative URL by default; edit the code to specify HTTPS when copy/pasting it locally.) You'll be all set with script-src https://platform.twitter.com; child-src https://platform.twitter.com, as long as you move the JavaScript snippet that Twitter provides out into an external JavaScript file.
- `Other platforms` have similar requirements, and can be addressed similarly. We suggest just setting a default-src of 'none', and watching your console to determine which resources you'll need to enable to make the widgets work.
- `Banking and financial institutions` loads all images, style, and script from a CDN at https://cdn.mybank.net, and connects via XHR to https://api.mybank.com/ to pull various bits of data down. Frames are used, but only for pages local to the site (no third-party origins). There's no Flash on the site, no fonts, no extras. The most restrictive CSP header that we could send is this:

  ```http
  Content-Security-Policy:
    default-src 'none';
    script-src   https://cdn.mybank.net;
    style-src https://cdn.mybank.net;
    img-src https://cdn.mybank.net;
    connect-src https://api.  mybank.com;
    child-src 'self'
  ```

- A discussion forum admin wants to ensure that all resources are only loaded via secure channels, but doesn't really write much code; rewriting large chunks of the third-party forum software that's filled to the brim with inline script and style is beyond his abilities. The following policy would be effective:

  ```http
  Content-Security-Policy:
     default-src https:;
     script-src https: 'unsafe-inline';
     style-src https: 'unsafe-inline'
  ```
