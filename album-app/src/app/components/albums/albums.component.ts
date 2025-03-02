import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[]=[];
  private apiUrl='https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.loadAlbums();
  }

  loadAlbums(): void{
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.albums=data;
    });
  }

  deleteAlbum(id: number): void{
    console.log("Deleting album with id:", id); 
  this.albums = this.albums.filter(album => album.id !== id);
  }

}
