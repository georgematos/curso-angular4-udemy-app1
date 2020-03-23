import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input('tentativas')
  public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
  }

  // Sempre que o atributo vindo do componente pai mudar, esse método é executado
  ngOnChanges(changes: SimpleChanges): void {
    if (this.tentativas < this.coracoes.length)
      this.coracoes[this.tentativas].cheio = false;
  }

  ngOnInit(): void {
  }

}
