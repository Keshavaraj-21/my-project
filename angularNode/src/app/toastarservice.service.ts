import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ToastarserviceService {
  constructor(
    private notifyservice: ToastrService,
    private client: HttpClientModule
  ) {}

  showSuccess(message: string | undefined, title: string | undefined) {
    this.notifyservice.success(message, title);
  }
}
