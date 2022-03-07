import { throwError, catchError } from 'rxjs';
import { ToastService } from '../core/services/toast.service';

export const catchErrorAndSendAlert = (toastService: ToastService) =>
  catchError((errorData) => {
    toastService.showError({ detail: errorData.error.message, summary: 'Fail'});
    return throwError(errorData);
  });
