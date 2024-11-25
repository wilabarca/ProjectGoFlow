
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: "root"
})
export class ChatsIAService {
  private generativeIA: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
    this.generativeIA = new GoogleGenerativeAI('AIzaSyCgSVg82k5iKvNx6-3DRaBHNGjnBlcqi2Y');
  }

  async generateText(prompt: string) {
    const model = this.generativeIA.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next([
      ...this.messageHistory.value,
      { from: 'user', message: prompt }
    ]);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    this.messageHistory.next([
      ...this.messageHistory.value,
      { from: 'bot', message: text }
    ]);
  }

  public getMessageHistory(): Observable<any[]> {
    return this.messageHistory.asObservable();
  }
}
