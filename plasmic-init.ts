import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k3jNog3oPqeRw27zjnwxfw",
      token: "lOqias0tiG78buRL8npy5kWNcy5s54oY2Q8sjY2zHIiilpGvDs0xILiVVP50rk4xEWrOJI32tdZ8duqAA3JIpQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);



import CustomMarquee from "./components/Marquee";

PLASMIC.registerComponent(CustomMarquee, {
  name: "Marquee",
  props: {
    className: "string",
    style: "object",
    autoFill: "boolean",
    play: "boolean",
    pauseOnHover: "boolean",
    pauseOnClick: "boolean",
    direction: {
      type: "choice",
      options: ["left", "right", "up", "down"]
    },
    speed: "number",
    delay: "number",
    loop: "number",
    gradient: "boolean",
    gradientColor: "string",
    gradientWidth: {
      type: "number",
      displayName: "Gradient Width",
      description: "Width of the gradient on either side"
    },
    onFinish: {
      type: "eventHandler",
      argTypes: []
    },
    onCycleComplete: {
      type: "eventHandler",
      argTypes: []
    },
    onMount: {
      type: "eventHandler",
      argTypes: []
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "I can be a React component, multiple React components, or just some text."
        }
      ]
    }
  },
});



import { ScrollProvider } from "./components/ScrollContext";

PLASMIC.registerGlobalContext(ScrollProvider, {
  name: "ScrollProvider",
  providesData: true,
  props: {},
});


import GoogleReviewsWidget from "./components/GoogleReviewsWidget";

PLASMIC.registerComponent(GoogleReviewsWidget, {
  name: "Google Reviews Widget",
  props: {
className: "string",
widgetId: "string",
  },
});


