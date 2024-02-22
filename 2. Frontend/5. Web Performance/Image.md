## Image Optimization

#### Image Formats

- JPEG: For photographs
- PNG: For images with transparency
- GIF: For simple animations
- SVG: For logos and icons

### Web.dev Article

### Choose the correct level of compression

- **The difference between CSS pixels and device pixels**

  <img src="images/three-images-showing-dif-674a2b17f1ab7_1440.png"  alt="CSS pixels and device pixels" width="500"/>

  <br/>

- **Do you need animation? Use `<video>` elements.**

  - GIF limits the color palette to at most 256 colors, and creates significantly larger file sizes than `<video>` elements.

  - There are a number of ways to convert GIFs to video, [FFmpeg](https://www.ffmpeg.org/) is the tool used in this guide. ([Web.dev - Replace Animated GIFs with Video](https://web.dev/articles/replace-gifs-with-videos))

    ```html
    <video autoplay loop muted playsinline>
     <source src="my-animation.webm" type="video/webm" />
     <source src="my-animation.mp4" type="video/mp4" />
    </video>
    ```

- **Do you need to preserve fine detail with highest resolution? Use PNG or lossless WebP.**

  - WebP has a lossless encoding mode that may be more efficient than PNG.

  - If the image asset contains imagery composed of geometric shapes, consider converting it to a vector (SVG) format!

- **Are you optimizing a photo, screenshot, or a similar image asset? Use JPEG, lossy WebP, or lossy AVIF.**

  - JPEG uses a combination of lossy and lossless optimization to reduce filesize of the image asset.

  - Lossy WebP or lossy AVIF may be acceptable JPEG alternatives, but be aware that WebP's lossy mode in particular discards some chroma information to achieve smaller images.

### Choose the correct level of compression

- **Use compression tools**
  - [Imagemin](https://www.npmjs.com/package/imagemin) to compress images. Read more at [Use Imagemin to compress images](https://web.dev/articles/use-imagemin-to-compress-images)

### Serve responsive images

- **Resize images**

  - Two of the most popular image resizing tools are the [sharp npm package](https://www.npmjs.com/package/sharp) and the [ImageMagick](https://imagemagick.org/index.php) command-line tool.

- **Serve multiple image versions**
  ```html
  <img
   src="flower-large.jpg"
   srcset="flower-small.jpg 480w, flower-large.jpg 1080w"
   sizes="50vw"
  />
  ```
- **Verify**
  - Use [Lighthouse](https://developers.google.com/web/tools/lighthouse). Run the Lighthouse Performance Audit (`Lighthouse > Options > Performance`) and look for the results of the **Properly size images** audit.

### Serve images with correct dimensions

- **Identify incorrectly sized images**
  - Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to identify incorrectly sized images. Run the Performance Audit (`Lighthouse > Options > Performance`) and look for the results of the Properly size images audit.
- **Determine the correct image size**

  - Use the [Network panel](https://developers.google.com/web/tools/chrome-devtools/network) in Chrome DevTools to determine the correct image size.

    ```html
    <!-- Use the specified width and height -->
    <img
     src="flower.jpg"
     width="640"
     height="480"
     alt="A picture of rose flower."
    />
    ```

    ```css
    /* Or, alternatively use aspect-ratio */
    img {
     aspect-ratio: 16 / 9;
     width: 100%;
     object-fit: cover;
    }
    ```
