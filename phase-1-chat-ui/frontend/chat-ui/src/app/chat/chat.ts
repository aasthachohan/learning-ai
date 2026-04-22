import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private http: HttpClient) {}

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
          this.messages.push({ role: 'bot', content: res.reply });
        },
        error: () => {
          this.messages.push({ role: 'bot', content: 'Error getting response' });
        },
      });
  }
}
