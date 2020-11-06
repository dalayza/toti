import { Component, OnInit } from '@angular/core';
import { AnoService } from '../services/ano.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nome_module: string = 'Produtos';
  ano: number;
  produtos: any;
  campoTexto: string = '';
  valorSalvo: string = '';
  nome: string = '';

  constructor(
    aS: AnoService,
    produtos: ProdutosService
  ) {
    this.ano = aS.getAno();
    this.produtos = produtos.getProducts();
  }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Botao clicado!!!');
  }

  onKeyUp(valor) {
    this.campoTexto = valor;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  saioDoCampo() {
    alert('Saio do campo!');
  }

  passeMouse() {
    alert('Passou mouse!');
  }

  valorSelecionado(value) {
    this.nome = value;
  }
}
