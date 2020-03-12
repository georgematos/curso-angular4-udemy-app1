import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;

  item: Frase;
  fraseEng: string;
  frasePtBr: string;
  resposta: string;

  constructor() {
    this.atualizarFrases();
  }

  ngOnInit(): void {

  }

  enviar() {

    if (this.frasePtBr === this.resposta) {
      alert("Parabéns, você acertou.");
    } else {
      alert("Uma pena, você errou.");
    }

    this.resposta = "";
    this.atualizarFrases();

  }

  atualizarFrases() {
    this.item = this.frases[Math.floor(Math.random() * FRASES.length)];
    this.fraseEng = this.item.fraseEng;
    this.frasePtBr = this.item.frasePtBr;
  }

}
