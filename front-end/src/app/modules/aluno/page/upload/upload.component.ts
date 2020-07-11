import { Component, OnInit, ViewChild } from '@angular/core';
// import { ApiService } from "./services/api.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {
  
  @ViewChild('userPhoto', { static: true }) public userPhoto: any;

  public imagePath;
  imgURL: any;
  public message: string;
  percentage: Observable<number>;

  title = "cloudsSorage";
  imageUrlStoraged;
  downloadURL: Observable<string>;

  constructor(
    private storage: AngularFireStorage
  ){}

  uploadImage() {
    var n = Date.now();
    const file = this.userPhoto.nativeElement.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);

    this.percentage = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.imageUrlStoraged = url;
            }
            // console.log("finalize", this.imageUrlStoraged);
            this.percentage = null;
          });
        })
      )
      .subscribe(url => {
        // if (url) {
        //   console.log("subscribe", url);
        // }
      });
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  ngOnInit(): void {
  }

  round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}
