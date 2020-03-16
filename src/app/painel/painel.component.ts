import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public titulo: string = 'Traduza a frase:';
  public resposta: string;

  constructor() {

  }

  ngOnInit(): void {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    console.log(this.resposta);
  }

  public veriricarResposta(): void {
    if(this.resposta === this.frases[0].frasePtBr) {
      alert("acertou");
    } else {
      alert("errou");
    }
  }

}
