import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-read-blog',
  templateUrl: './read-blog.component.html',
  styleUrls: ['./read-blog.component.scss']
})
export class ReadBlogComponent implements OnInit {
  private routeSub: Subscription = new Subscription;
  postAction: any;
  id: any;
  UserType: any;
  isLoggedin: any;
  constructor(private route: ActivatedRoute, private blog: BlogService, private router: Router) {
    this.isLoggedin = localStorage.getItem('isUserLoggedin')
  }
  public postData: any = {};
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      const postid = params['id'];
      this.blog.get_blog_details(postid).subscribe((data: any) => {
        console.log(data);
        this.postData = JSON.parse(data.body)[0];
        console.log(this.postData);
      })
      console.log(this.postData);
      this.id = localStorage.getItem("userId");
      this.UserType = localStorage.getItem("UserType");
    });


  }
  back() {
    this.router.navigate(["dashboard"]).then(() => {
      window.location.reload();
    });
  }
  dislikePost(postID: any) {
    console.log("dislike");
    this.postAction = {
      "postId": postID,
      "userId": this.id,
      "actionType": "dislike",
    }
    this.blog.dislikePost(this.postAction).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    })
  }
  likePost(postID: any) {
    this.postAction = {
      "postId": postID,
      "userId": this.id,
      "actionType": "like",
    }
    this.blog.likePost(this.postAction).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    })
    console.log("like");
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
