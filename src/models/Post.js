
class Post {
    constructor(postData) {
        this.id = postData.id
        this.isPublic = postData.isPublic
        this.photo = postData.imageUrl
        this.title = postData.title
        this.subTitle = postData.subtitle
        this.text = postData.text
        this.userId = postData.userId
        this.fav = false
    }
  
}

export default Post