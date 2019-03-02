## NuxtJs Demo

### What we are building

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


### Steps

#### The First Step

1. Added a layout for building listing. Links for design "inspirations".
    - [Menu Design from here](https://tailwindcss.com/docs/examples/navigation/#responsive-header)
1. Added a layout for login. Layout and page design from here
    - [Page Design from here](https://tailwindcss.com/docs/examples/forms/#login-form)
1. Added a page to list buildings
    - [Card Design from here](https://tailwindcss.com/docs/examples/cards/#horizontal)

#### The Second Step

1. Added [Nuxt Axios](https://axios.nuxtjs.org/) to the project.
1. Added endpoint `api/buildings` that return a list of buildings.
    *Since Nuxtjs basically is a nodeJs server. We can add routes and consume them*
1. Consumed the created endpoint to make the list of buildings dynamic.


