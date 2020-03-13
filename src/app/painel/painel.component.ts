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
  titulo: String = 'Traduza a frase:'

  indice: number;
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
    let indice = Math.floor(Math.random() * FRASES.length);
    this.indice = indice;
    this.fraseEng = this.frases[indice].fraseEng;
    this.frasePtBr = this.frases[indice].frasePtBr;
  }

}
