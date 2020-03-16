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

  constructor() {

  }

  ngOnInit(): void {

  }

  public atualizaResposta(): void {

    console.log("Teste")

  }

}
