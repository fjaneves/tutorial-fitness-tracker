import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit(): void {
    this.loadingSubs = this.uiService.loadingStateChanges.subscribe(result => {
      this.isLoading = result;
    })
  }

  onSubmit(form){
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    })
  }

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }
}
