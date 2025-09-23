# Water Ripple Effect on Pointer Movement

## Constraints

- Must integrate with a React app supporting SSR

- Must use performant solutions, suggestions are:
  - SVG Filters leveraging feImage, feDisplacementMap etc.
  - 2D Canvas
  - Fragment shaders & uniforms

- Must be a modular component which can be placed anywhere in any app adhering the above constraints

- In this project, it must only be used in the home page "/"

- The component should cover the entire screen, and the ripples affect all content except for overlay elements like the sidebar

## Feature

- Each ripple should only be made out of one ring

- Pointer movement should spawn water ripple rings which grow outwards but otherwise do not have momentum

- The ripples should act like a ring shader displacing and refracting the content behind them

- The ripples should not be a continuous drag effect, but singular instances of rings as if caused by water droplets causing a circular ripple around the spawn point

- Depending on the pointer movement direction, the rear of the ripple ring should be masked out in a conic shape, giving the illusion of forward momentum

- Ripple rings should grow faster at the start of their lifetime, slow down and eventually widen, smoothen, settle, fade and be removed at the end of their lifetime

- Pointer movement should spawn ripple rings at a timed interval, rather than pixel or distance-based
  - This means that ripples are spawned at the same rate regardless of the cursor movement speed or distance
