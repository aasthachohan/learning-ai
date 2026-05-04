import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  userInput: string = '';
  messagesArray: string[] = [];
  userRequest: string = '';

  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

  sendMessage() {
    if (this.userInput.trim()) {
      this.userRequest = this.userInput;
      this.messagesArray.push(this.userRequest);
      this.userInput = '';
      this.httpClient
        .post<any>('http://localhost:3000/api/chat', {
          message: this.userRequest,
        })
        .subscribe({
          next: (res) => {
            let newreply = res.reply;
            this.messagesArray = [...this.messagesArray, newreply];
            this.cdr.detectChanges();
          },
          error: (error) => {
            if (error.status === 429) {
              this.messagesArray = [...this.messagesArray, 'Your daily quota expired...'];
            } else {
              this.messagesArray = [
                ...this.messagesArray,
                'Sorry I cant answer right now. Try again later...',
              ];
            }
            this.cdr.detectChanges();
          },
        });
    } else {
      this.userInput = '';
      return;
    }
  }
}
