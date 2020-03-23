import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public titulo: string = 'Traduza a frase:';
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter;

  constructor() {
    this.atualizarRodada();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log("componente painel foi destruido")
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public veriricarResposta(): void {
    if (this.resposta === this.rodadaFrase.frasePtBr && this.rodada <= this.frases.length) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      this.atualizarRodada();
    } else {
      if (this.tentativas > 1) {
        this.tentativas--;
        alert("Errou, tente novamente.");
      } else {
        this.tentativas--;
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizarRodada(): void {
    if (this.rodada < 4) {
      this.rodadaFrase = this.frases[this.rodada];
      this.resposta = "";
    } else {
      this.encerrarJogo.emit('vitoria')
    }
  }

}
