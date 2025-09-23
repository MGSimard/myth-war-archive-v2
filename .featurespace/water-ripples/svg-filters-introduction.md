# SVG Filters

SVG filters are used to add special effects to SVG graphics.

All SVG filters are defined within a `<defs>` element. The `<defs>` element is short for "definitions", and contains definition of special elements (such as filters).

The `<filter>` element is used to define an SVG filter. The `<filter>` element has a required id attribute which identifies the filter. The graphic/image then points to the filter to use.

Then, inside the `<filter>` element, we put one or more filter effects to use on the graphic (see table below for list of filter effects elements).

Here we use the `<feGaussianBlur>` filter to blur an SVG graphic:

```html
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" fill="red" filter="url(#f1)" />
</svg>
```

## SVG Filter Effects Elements

The available filters in SVG are:

`<feBlend>` Combines two graphics together by a certain blending mode
`<feColorMatrix>` Changes colors based on a transformation matrix
`<feComponentTransfer>` Performs component-wise remapping of data for each pixel. Can adjust brightness, contrast, color balance, etc
`<feComposite>` Performs combination of two input images pixel-wise in image space using a compositing operation
`<feConvolveMatrix>` Applies a matrix convolution filter effect (this includes blurring, edge detection, sharpening, embossing and beveling)
`<feDiffuseLighting>` Lights a graphic by using the alpha channel as a bump map
`<feDisplacementMap>` Uses pixels values from the graphic from in2 attribute to displace the image from the in attribute
`<feDistantLight>` Specifies a distant light source to be used inside a lighting filter primitive: `<feDiffuseLighting>` or `<feSpecularLighting>`
`<feDropShadow>` Creates a drop shadow of the graphic
`<feFlood>` Fills the filter subregion with the color and opacity defined by flood-color and flood-opacity attributes
`<feGaussianBlur>` Blurs the graphic
`<feImage>` Gets graphic data from an external source and provides the pixel data as output
`<feMerge>` Blends input graphic layers (applies filter effects concurrently instead of sequentially)
`<feMergeNode>` Takes the result of another filter to be processed by its parent `<feMerge>`
`<feMorphology>` Erodes or dilates the graphic (for fattening or thinning effects)
`<feOffset>` Offsets the input graphic
`<fePointLight>` Specifies a light source that allows creating a point light effect
`<feSpecularLighting>` Lights a source graphic by using the alpha channel as a bump map
`<feSpotLight>` Specifies a light source that allows creating a spotlight effect
`<feTile>` Fills a target rectangle with a repeated pattern of an input graphic
`<feTurbulence>` Creates a graphic with the Perlin turbulence function
