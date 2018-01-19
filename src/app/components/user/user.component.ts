import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) { }

  //this is a life cycle method that runs when the component is initialized
  ngOnInit() {
    this.name = "Usman Baba";
    this.age = 30;
    this.email = "usman.ibrahim@yahoo.com"
    this.address = {
      street: "lateef sanni",
      city: "surulere",
      state: "lagos"
    }
    this.hobbies = ["write code", "watch movies", "straff"];
    this.dataService.getPosts().subscribe((posts)=> {
      this.posts = posts;
    })
  }

  onClick() {
    this.name = "monkey";
    this.hobbies.push("Shouting");
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return false
  }

  deleteHobby(hobby, i) {
    this.hobbies = this.hobbies.filter((hoby) => hoby != hobby);
    return false;
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: string,
}