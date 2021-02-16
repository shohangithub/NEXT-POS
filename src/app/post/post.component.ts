import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';
import { CustomError } from '../core/error';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  //providers:[DataService]
})
export class PostComponent implements OnInit {
   post:Post= {id:0,userId:0,title:null,body:null};
   posts:Post[]=[];

  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  save(){
    this.dataSvc.saveAsync(this.post,'posts').subscribe(
      (data:any) => {
        this.posts.push(data);
      },
      (error: CustomError)=> console.log(error)
    );
  }


  getAll(){
    this.dataSvc.getAsync('posts').subscribe(
      (data: any) => {this.posts = data
        console.log(this.posts)
      },
      (error: CustomError)=> console.log(error)
    );
    console.log('After Subscribe');
  }
}
