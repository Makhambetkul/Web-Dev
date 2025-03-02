import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: any[]=[];
  private apiUrl='https://jsonplaceholder.typicode.com/albums';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void{
    const albumId=Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>(`${this.apiUrl}/${albumId}/photos`).subscribe(data => {
      this.photos=data;
    });
  }

}
