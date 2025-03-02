import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: any={};
  newTitle: string='';
  private apiUrl='https://jsonplaceholder.typicode.com/albums';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    console.log("Album ID:", id);
    
    this.album={ id, title: `Album ${id}` };
    this.newTitle=this.album.title;
  }

  updateAlbum(): void {
    console.log("Updating album title to:", this.newTitle);
    this.album.title = this.newTitle;
  }

}
