import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() user: any = null;
  postArraydummy = [
    {
      id: '1',
      title: 'blog1-title',
      content: 'test',
      postType: 'test',
      img: '',
      userId: '1',
      createdAt: '2022-01-04T23:16:08.000Z',
      updatedAt: '2022-01-04T23:16:12.000Z',
      UserId: '1',
      User: {
        id: '1',
        name: 'vikas',
        email: 'vikas.k.gupta@impetus.com',
        emailVerified: true,
        userType: 'Blogger',
        currentState: 'Active',
        createdAt: '2022-01-04T23:14:41.000Z',
        updatedAt: '2022-01-04T23:14:41.000Z'
      },
      PostActions: [{ PostCount: 1 }]
    },
    {
      id: '2',
      title: 'blog2-title',
      content: 'test',
      postType: 'test',
      img: '',
      userId: '1',
      createdAt: '2022-01-04T23:16:08.000Z',
      updatedAt: '2022-01-04T23:16:12.000Z',
      UserId: '1',
      User: {
        id: '1',
        name: 'vikas',
        email: 'vikas.k.gupta@impetus.com',
        emailVerified: true,
        userType: 'Blogger',
        currentState: 'Active',
        createdAt: '2022-01-04T23:14:41.000Z',
        updatedAt: '2022-01-04T23:14:41.000Z'
      },
      PostActions: [{ PostCount: 1 }]
    }
  ];
  postArray: any = {};
  myblogs: any = [];
  constructor(private blogservice: BlogService) { }
  postAction: any = {};
  id: any;
  UserType: any
  ngOnInit(): void {

    this.blogservice.getBlogPosts({ action: 'List' }).subscribe((data: any) => {

      const parsedData = JSON.parse(data.body);
      console.log(parsedData);
      this.postArray = parsedData;
      if (this.user) {
        this.myblogs = parsedData.filter((x: any) =>
          this.user === x.author_id
        );
        console.log(this.myblogs, "myblogs");
      }
    });
    this.id = localStorage.getItem("UserId");
    this.UserType = localStorage.getItem("UserType");
  }
  deletePost(id: any) {
    this.postAction = {
      "post_id": id,
      "action": 'Delete_Post',
    }
    this.blogservice.deletePost(this.postAction).subscribe((data) => {
      this.ngOnInit();
    })
  }
}