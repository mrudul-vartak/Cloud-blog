import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  createNewBlog(blogData: any) {
    console.log(blogData, 'inside service');
    return this.http.post(environment.CREATE_POST, blogData);
  }
  get_blog_details(id: string) {
    console.log(id)

    return this.http.post(environment.GET_SINGLE_POST, { action: 'Get_Post', post_id: id })

  }
  getBlogPosts(request: any) {
    return this.http.post(environment.GET_ALL_POST, request);
  }
  dislikePost(action: any) {
    return this.http.post(environment.POST_ACTION, { action: 'Like_Post', actionType: 'dislike', post_id: action.postId });
  }
  likePost(action: any) {
    console.log(action);
    return this.http.post(environment.POST_ACTION, { action: 'Like_Post', actionType: 'like', post_id: action.postId });
  }
  deletePost(postAction: any) {
    return this.http.post(environment.DELETE_POST, postAction);
  }
}
