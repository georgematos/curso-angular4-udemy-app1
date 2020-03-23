import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  public jogoEmAndamento: boolean = true
  public mensagem: string;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    if (tipo === 'vitoria') {
      this.mensagem = "Parabéns, você venceu!"
    } else {
      this.mensagem = "Sinto muito, você perdeu..."
    }
  }
}
