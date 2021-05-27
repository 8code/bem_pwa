export default function ({ $axios, redirect }) {
    // console.log("tess")
    $axios.onError(error => {
      if(error.response.status === 500) {
        redirect('/404')
      }
    })
  }