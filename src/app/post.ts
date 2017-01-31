export class Post {
    constructor(
        public title: string, 
        public body: string) {
        
    }

    public static fromJsonList = (firebaseList: any[]) => {
        return firebaseList.map((obj) => {
            let post = new Post("", "");
            let postKeys = Object.keys(post);
            Object.keys(obj).map(key => {
                postKeys.forEach(postKey => {
                    console.log(obj["$key"] + " === " + postKey);
                    if (obj["$key"] === postKey) {
                        post[key] = obj[key];
                    }
                });
            });
            return post;
        });
    }
}