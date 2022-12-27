import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notificiation/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.formData = this.fb.group({
      name: ['', [Validators.minLength(4), Validators.required]],
      subject: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required],
    });
  }

  sendMessage = (msg: string) => {
    this.notificationService.notified(msg);
    this.formData.reset();
  };
}
