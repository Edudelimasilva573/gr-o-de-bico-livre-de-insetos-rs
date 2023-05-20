import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public 'titulo': string;
 public 'texto': string;

 classToDiv = {};

 constructor() {
  this.classToDiv = {
    'text-success': true
  };
 }
 ngOnInit() {
  this.titulo = 'Titulo'; 'lorem Ipsum é simplismente';
  this.texto = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos'
}
}
