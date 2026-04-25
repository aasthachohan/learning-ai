import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  userInput = '';
  messages: any[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  sendMessage() {
    if (!this.userInput.trim()) return;
    const message = this.userInput;
    // push user message
    this.messages.push({ role: 'user', content: message });
    this.userInput = '';
    this.http
      .post<any>('http://localhost:3000/api/chat', {
        message: message,
      })
      .subscribe({
        next: (res: any) => {
          let newMessage = {role: 'bot', content: res.reply};
          this.messages = [...this.messages, newMessage];
          this.cdr.detectChanges();
        },
        error: () => {
          this.messages = [...this.messages, {role:'bot', content: "Sorry, I am unable to connect... will reply you soon..."}];
          this.cdr.detectChanges();
        },
      });
  }
}
