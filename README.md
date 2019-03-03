# NuxtJs Demo: Start to Deployment, NuxtJs app in 6 Steps

### What we are building

The completed app is deployed [here](https://gentle-meadow-68198.herokuapp.com/)

I created this repo as part of presentation for Dubai Js Meetup 03.  
In this repo, I am demonstrating the basics of a NuxtJs App. I am creating a simple app that lists buildings but to see the details of the buildings you need to login into the app.  

This is a test repo I have created for reference for the live demo I will be doing.

#### Technologies, Plugins and Frameworks Used  

1. [NodeJs](https://nodejs.org/en/)
1. [VueJs](https://vuejs.org/)
1. [Express](https://expressjs.com/)
1. [Config](https://www.npmjs.com/package/config)
1. [Create Nuxt App](https://github.com/nuxt/create-nuxt-app)
1. [Tailwind Css](https://tailwindcss.com/docs/what-is-tailwind/)


#### Nuxt Plugins Used

1. [Nuxt Axios](https://axios.nuxtjs.org/)
1. [Nuxt Auth](https://auth.nuxtjs.org/)


## __Steps__

## I. The First Step

1. Added a layout for building listing. Links for design "inspirations".
    - [Menu Design from here](https://tailwindcss.com/docs/examples/navigation/#responsive-header)
1. Added a layout for login. Layout and page design from here
    - [Page Design from here](https://tailwindcss.com/docs/examples/forms/#login-form)
1. Added a page to list buildings
    - [Card Design from here](https://tailwindcss.com/docs/examples/cards/#horizontal)
    
Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/aafdacbe34e061f13fa73ccc54a067f4b6bd8f52)

## II. The Second Step

1. Added [Nuxt Axios](https://axios.nuxtjs.org/) to the project.
1. Added endpoint `api/buildings` that return a list of buildings.
    *Since Nuxtjs basically is a nodeJs server. We can add routes and consume them*
1. Consumed the created endpoint to make the list of buildings dynamic.

Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/78066f846fcbd064393804f425d54a81c78587e0)

## III. The Third Step

1. Added a detail page for building details
   - [Menu Design from here](https://tailwindcss.com/docs/examples/cards/#stacked)
 
Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/e6bbea9893d5a05d32510054c661a57b055f850b)
   
## IV. The Fourth Step

1. Added endpoint to accept email and password for authentication.
1. Added endpoint to get detail of the authenticated user.
1. Added login and logout functionality for frontend.
1. Added a condition so that only authenticated user can see the detail page.

Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/530c12366ead1d2db491c254e026a141da6c5278)
   
## V. The Fifth Step

1. Added seo for the homepage

Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/857cf52321e928825446199dc5156f6a87bd94da)

## VI. The Sixth Step

1. Deploy to Heroku

Changes [here](https://github.com/developernaren/nuxtjs-demo/commit/444139f5a07ea54517e12e548a0fe272200ba6d7)
