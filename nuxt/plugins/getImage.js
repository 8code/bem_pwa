export default (context, inject) => {
    const getImage = (img) => {
      return process.env.storageUrl + img.replace("https://api.maba.my.id/storage/","")
    }
    // Inject $hello(msg) in Vue, context and store.
    inject('getImage', getImage)
    // For Nuxt <= 2.12, also add 👇
    context.$getImage = getImage
  }