import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const templateParams = {
      name: this.contactModel.name,
      email: this.contactModel.email,
      message: this.contactModel.message
    };

    emailjs.send('service_pu2isyb', 'template_83ecemv', templateParams, 'xVvxwUCIXS1gFp90O')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  }
}
