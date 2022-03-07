import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private messageService: MessageService) {}
  defaultMessageOptions: Message = {
    severity: 'info',
  };

  showSuccess(message: Omit<Message, 'severity'>): void {
    this.messageService.add({ severity: 'success', ...message });
  }

  showInfo(message: Omit<Message, 'severity'>): void {
    this.messageService.add({ severity: 'info', ...message });
  }

  showWarn(message: Omit<Message, 'severity'>): void {
    this.messageService.add({ severity: 'warn', ...message });
  }

  showError(message: Omit<Message, 'severity'>): void {
    console.log('showing error');
    setTimeout(() => this.messageService.add({ severity: 'error', ...message }));
  }

  showCustom(message: Omit<Message, 'severity'>): void {
    this.messageService.add({ severity: 'custom', ...message });
  }

  showTopLeft(message: Omit<Message, 'key'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      key: 'tl',
      ...message,
    });
  }

  showTopCenter(message: Omit<Message, 'key'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      key: 'tc',
      ...message,
    });
  }

  showBottomCenter(message: Omit<Message, 'key'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      key: 'bc',
      ...message,
    });
  }

  showBottomLeft(message: Omit<Message, 'key'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      key: 'bl',
      ...message,
    });
  }

  showBottomRight(message: Omit<Message, 'key'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      key: 'br',
      ...message,
    });
  }

  showMultiple(messages: Message[]): void {
    this.messageService.addAll(messages);
  }

  showSticky(message: Omit<Message, 'sticky'>): void {
    this.messageService.add({
      ...this.defaultMessageOptions,
      sticky: true,
      ...message,
    });
  }

  onConfirm(): void {
    this.clearToast();
  }

  onReject(message: Omit<Message, 'severity'>): void {
    this.clearToast();
  }

  clearToast(): void {
    this.messageService.clear();
  }
}
