import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../_services/auth.service';
import { NgForm } from '@angular/forms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fileUploader',
  templateUrl: './fileUploader.component.html',
  styleUrls: ['./fileUploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  baseUrl = environment.apiUrl;
  model: any;
  globalFileIndex = -1;
  faUpload = faUpload;
  faCheckCircle = faCheckCircle;
  faBan = faBan;
  faTimesCircle = faTimesCircle;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'audio/' + this.authService.decodedToken.nameid,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['audio'],
      removeAfterUpload: false,
      autoUpload: false,
      maxFileSize: 30 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

      // this.uploader.onCompleteItem = (fileItem: any) => {
      //   console.log('completed');
      // };

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      this.globalFileIndex++;
      const i = this.uploader.queue.indexOf(fileItem);
      console.log('index: ' + i);
      const curTrackName = document.getElementById('trackName-' + i) as HTMLInputElement;
      const curPerformerName = document.getElementById('trackPerformer-' + i) as HTMLInputElement;
      form.append('TrackName', curTrackName.value);
      form.append('PerformerName', curPerformerName.value);
      // console.log('queue length: ' + this.uploader.queue.length);
      // console.log('trackName: ' + curTrackName.value);
      // console.log('fileItem.index: ' + fileItem.index);
    };
  }
}
